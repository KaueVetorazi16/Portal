import { ArmaService } from './../_services/arma.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Arma } from '../_models/Arma';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {ToastrService} from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.css']
})
export class ArmasComponent implements OnInit {

  _filtroLista = '';
  registerForm: FormGroup;
  bodyDeletarArma ='';
  title = 'Armas';
  armasFiltradas: Arma[];
  armas: Arma[];
  arma: Arma;
  modoSalvar = 'post';
  imagemLargura: number = 100;
  imagemMargem: number = 2;
  file: File;
  fileNameToUpdate: string;

  constructor(
    private armaService: ArmaService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private toastr: ToastrService
    ) { }

  get filtroLista(): string{
    return this._filtroLista;
  }

  set filtroLista(value: string){
    this._filtroLista = value;
    this.armasFiltradas = this.filtroLista ? this.filtrarArmas(this.filtroLista) : this.armas;
  }

  editarArma(arma: Arma, template: any){
    this.modoSalvar = 'put';
    this.openModal(template);
    this.arma = Object.assign({}, arma);
    this.fileNameToUpdate = arma.imagem.toString();
    this.arma.imagem = '';
    this.registerForm.patchValue(arma);

  }

  excluirArma(arma: Arma, template: any){
      this.openModal(template);
      this.arma = arma;
      this.bodyDeletarArma = `Tem certeza que deseja excluir a arma: ${arma.modelo}, Código: ${arma.id}`;
  }

  confirmeDelete(template: any){
    this.armaService.deleteArma(this.arma.id).subscribe(
      () => {
        template.hide();
        this.getArmas();
        this.toastr.success('Deletado com sucesso!');
      }, error => {
        this.toastr.error('Erro ao deletar arma!');
        console.log(error);
      }
    );
  }

  novaArma(template: any){
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  openModal(template: any){
    this.registerForm.reset();
    template.show();
  }

  // O ngOnInit faz com o que está dentro dele seja executado antes do HTML
  ngOnInit() {
    this.validation();
    this.getArmas();
  }

  getArmas(){
    this.armaService.getAllArma().subscribe(
      (_armas: Arma[]) =>
       {
         this.armas = _armas;
         this.armasFiltradas = this.armas;
      }, error => {
        this.toastr.error(`Erro ao tentar carregar armas: ${error}`);
      });
  }

  filtrarArmas(filtrarPor: string): Arma[]  {
      filtrarPor = filtrarPor.toLocaleLowerCase();
      return this.armas.filter(
        arma => arma.marca.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      )
  }

  //O objeto dentro do formGroup corresponde a cada um dos campos do formulário que eu quero validar
  validation(){
    this.registerForm = this.fb.group({
    marca: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    paisDeFabricacao: ['', Validators.required],
    tipo: ['', Validators.required],
    modelo: ['', Validators.required],
    alma: ['', Validators.required],
    raias: ['', Validators.required],
    tipoDoCano: ['', Validators.required],
    comprimentoDoCano: ['', Validators.required],
    acao: ['', Validators.required],
    carregamento: ['', Validators.required],
    percussao: ['', Validators.required],
    sistemaDeFuncionamento: ['', Validators.required],
    capacidade: ['', Validators.required],
    acabamento: ['', Validators.required],
    mobilidade: ['', Validators.required],
    observacoes: ['', Validators.required],
    imagem: ['', Validators.required],
    calibreId: ['', Validators.required]
    });
  }

  salvarAlteracao(template: any){
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'post') {
        this.arma = Object.assign({}, this.registerForm.value);

        this.uploadImagem();

        this.armaService.postArma(this.arma).subscribe(
          (novaArma: Arma) => {
            template.hide();
            this.getArmas();
            this.toastr.success('Inserido com Sucesso!');
          }, error => {
            this.toastr.error(`Erro ao Inserir: ${error}`);
          }
        );
      } else {
        this.arma = Object.assign({ id: this.arma.id }, this.registerForm.value);

        this.uploadImagem();

        this.armaService.putArma(this.arma).subscribe(
          () => {
            template.hide();
            this.getArmas();
            this.toastr.success('Editado com Sucesso!');
          }, error => {
            this.toastr.error(`Erro ao Editar: ${error}`);
          }
        );
      }
    }
  }

  onFileChange(event){
      
      const reader = new FileReader();

      if (event.target.files && event.target.files.length){
         this.file = event.target.files;
         console.log(this.file);
      }
  }

  uploadImagem() {
    if (this.modoSalvar === 'post') {
      const nomeArquivo = this.arma.imagem.split('\\', 3);
      this.arma.imagem = nomeArquivo[2];

      this.armaService.postUpload(this.file, nomeArquivo[2])
        .subscribe(
          () => {            
            this.getArmas();
          }
        );
    } else {
      const nomeArquivo = this.arma.imagem.split('\\', 3);
      this.arma.imagem = nomeArquivo[2];
     // this.arma.imagem = this.fileNameToUpdate;
      this.armaService.postUpload(this.file, nomeArquivo[2])
        .subscribe(
          () => {
         
            this.getArmas();
          }
        );
    }
  }

}
