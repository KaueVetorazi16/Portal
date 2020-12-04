import { ArmaService } from './../_services/arma.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Arma } from '../_models/Arma';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  armasFiltradas: Arma[];
  armas: Arma[];
  arma: Arma;
  modoSalvar = 'post';
  imagemLargura: number = 50;
  imagemMargem: number = 2;

  constructor(
    private armaService: ArmaService,
    private modalService: BsModalService,
    private fb: FormBuilder
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
    this.arma = arma;
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
      }, error => {
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
        error(`Erro ao tentar Carregar eventos: ${error}`);
      });
  }

  filtrarArmas(filtrarPor: string): Arma[]  {
      filtrarPor = filtrarPor.toLocaleLowerCase();
      return this.armas.filter(
        arma => arma.marca.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      )
  }

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
    tiroUnitario: ['', Validators.required],
    repeticao: ['', Validators.required],
    capacidade: ['', Validators.required],
    acabamento: ['', Validators.required],
    observacoes: ['', Validators.required],
    imagem: ['', Validators.required],
    calibreId: ['', Validators.required]
    });
  }

  salvarAlteracao(template: any){
      if (this.registerForm.valid){
        console.log('chegou até aqui');
        if (this.modoSalvar ==='post'){
          console.log('chegou até aqui post');
          this.arma = Object.assign({}, this.registerForm.value);
          this.armaService.postArma(this.arma).subscribe(
          () => {
            template.hide();
            this.getArmas();
          }, error => {
            console.log(error);
          }
        );
        }else {
          console.log('chegou até aqui put');
          this.arma = Object.assign({id: this.arma.id}, this.registerForm.value);
         console.log(this.arma);
          this.armaService.putArma(this.arma).subscribe(
          () => {
            template.hide();
            this.getArmas();
          }, error => {
            console.log(error);
          }
        );
        }
      }
  }

}
