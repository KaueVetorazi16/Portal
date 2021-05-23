import { CalibreService } from './../_services/calibre.service';
import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Calibre } from '../_models/Calibre';

@Component({
  selector: 'app-calibres',
  templateUrl: './calibres.component.html',
  styleUrls: ['./calibres.component.scss']
})

export class CalibresComponent implements OnInit {
  
  _filtroLista = '';
  _filtroListaId = '';
  registerForm: FormGroup;
  bodyDeletarCalibre ='';
  title = 'Calibre';
  calibresFiltradas: Calibre[];
  calibres: Calibre[];
  calibre: Calibre;
  modoSalvar = 'post';
  imagemLargura: number = 100;
  imagemMargem: number = 2;
  file: File;
  fileNameToUpdate: string;


  constructor(
    private calibreService: CalibreService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private toastr: ToastrService
    ) { }

  get filtroLista(): string{
    return this._filtroLista;
  }

  
  set filtroLista(value: string){
    this._filtroLista = value;
    this.calibresFiltradas = this.filtroLista ? this.filtrarCalibres(this.filtroLista) : this.calibres;
  }

  get filtroListaId(): string{
    return this._filtroListaId;
  }

  set filtroListaId(value: string){
    this._filtroListaId = value;
    this.calibresFiltradas = this.filtroListaId ? this.filtrarCalibresPorId(this.filtroListaId) : this.calibres;
  }



  editarCalibre(calibre: Calibre, template: any){
    this.modoSalvar = 'put';
    this.openModal(template);
    this.calibre = Object.assign({}, calibre);
    //this.fileNameToUpdate = calibre.imagem.toString();
    //this.calibre.imagem = '';
    this.registerForm.patchValue(calibre);

  }

  excluirCalibre(calibre: Calibre, template: any){
      this.openModal(template);
      this.calibre = calibre;
      this.bodyDeletarCalibre = `Tem certeza que deseja excluir o calibre: ${calibre.nominal}, Código: ${calibre.id}`;
  }

  confirmeDelete(template: any){
    this.calibreService.deleteCalibre(this.calibre.id).subscribe(
      () => {
        template.hide();
        this.getCalibres();
        this.toastr.success('Deletado com sucesso!');
      }, error => {
        this.toastr.error('Erro ao deletar calibre!');
        console.log(error);
      }
    );
  }

  novoCalibre(template: any){
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  openModal(template: any){
    this.registerForm.reset();
    template.show();
  }

  ngOnInit() {
    this.validation();
    this.getCalibres();
  }

  getCalibres(){
    this.calibreService.getAllCalibre().subscribe(
      (_calibres: Calibre[]) =>
       {
         this.calibres = _calibres;
         this.calibresFiltradas = this.calibres;
      }, error => {
        this.toastr.error(`Erro ao tentar carregar calibres: ${error}`);
      });
  }

  filtrarCalibres(filtrarPor: string): Calibre[]  {
      filtrarPor = filtrarPor.toLocaleLowerCase();
      return this.calibres.filter(
        calibre => calibre.nominal.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      )
  }

  filtrarCalibresPorId(filtrarPorId: string): Calibre[]  {
    filtrarPorId = filtrarPorId.toLocaleLowerCase();
    return this.calibres.filter(
      calibre => calibre.id.toString() == filtrarPorId
    )
}

  validation(){
    this.registerForm = this.fb.group({
    nominal: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    diametroDoProjetil: ['', [Validators.required]],
    comprimentoDoEstojo: ['', [Validators.required]],
    formaDeTravamento: ['', [Validators.required]],
    sistemaDePercussao: ['', [Validators.required]]
    });
  }

  salvarAlteracao(template: any){
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'post') {
        this.calibre = Object.assign({}, this.registerForm.value);

       

        this.calibreService.postCalibre(this.calibre).subscribe(
          (novoCalibre: Calibre) => {
            template.hide();
            this.getCalibres();
            this.toastr.success('Inserido com Sucesso!');
          }, error => {
            this.toastr.error(`Erro ao Inserir: ${error}`);
          }
        );
      } else {
        this.calibre = Object.assign({ id: this.calibre.id }, this.registerForm.value);

   

        this.calibreService.putCalibre(this.calibre).subscribe(
          () => {
            template.hide();
            this.getCalibres();
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

  

}
