import { CalibreService } from './../_services/calibre.service';
import { Calibre } from './../_models/Calibre';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Municao } from '../_models/Municao';
import { MunicaoService } from '../_services/municao.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-municoes',
  templateUrl: './municoes.component.html',
  styleUrls: ['./municoes.component.scss']
})
export class MunicoesComponent implements OnInit {
  
  _filtroLista = '';
  _filtroListaTipoEstojo = '';
  _filtroListaTipoProjetil = '';
  _filtroListaTipoEspoleta = '';
  registerForm: FormGroup;
  bodyDeletarMunicao ='';
  title = 'Municao';
  municoesFiltradas: Municao[];
  municoes: Municao[];
  calibres: Calibre[];
  municao: Municao;
  modoSalvar = 'post';
  imagemLargura: number = 100;
  imagemMargem: number = 2;
  file: File;
  fileNameToUpdate: string;

  constructor(
    private municaoService: MunicaoService,
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
    this.municoesFiltradas = this.filtroLista ? this.filtrarMunicoes(this.filtroLista) : this.municoes;
  }

  get filtroListaTipoEstojo(): string{
    return this._filtroListaTipoEstojo;
  }

  set filtroListaTipoEstojo(value: string){
    this._filtroListaTipoEstojo = value;
    this.municoesFiltradas = this.filtroListaTipoEstojo ? this.filtrarMunicoesTipoEstojo(this.filtroListaTipoEstojo) : this.municoes;
  }

  get filtroListaTipoProjetil(): string{
    return this._filtroListaTipoProjetil;
  }

  set filtroListaTipoProjetil(value: string){
    this._filtroListaTipoProjetil = value;
    this.municoesFiltradas = this.filtroListaTipoProjetil ? this.filtrarMunicoesTipoProjetil(this.filtroListaTipoProjetil) : this.municoes;
  }

  get filtroListaTipoEspoleta(): string{
    return this._filtroListaTipoEspoleta;
  }

  set filtroListaTipoEspoleta(value: string){
    this._filtroListaTipoEspoleta = value;
    this.municoesFiltradas = this.filtroListaTipoEspoleta ? this.filtrarMunicoesTipoEspoleta(this.filtroListaTipoEspoleta) : this.municoes;
  }


  editarMunicao(municao: Municao, template: any){
    this.modoSalvar = 'put';
    this.openModal(template);
    this.municao = Object.assign({}, municao);
    this.fileNameToUpdate = municao.imagem.toString();
    this.municao.imagem = '';
    this.registerForm.patchValue(municao);

  }

  excluirMunicao(municao: Municao, template: any){
      this.openModal(template);
      this.municao = municao;
      this.bodyDeletarMunicao = `Tem certeza que deseja excluir a munição: ${municao.marca}, Código: ${municao.id}`;
  }

  confirmeDelete(template: any){
    this.municaoService.deleteMunicao(this.municao.id).subscribe(
      () => {
        template.hide();
        this.getMunicoes();
        this.toastr.success('Deletado com sucesso!');
      }, error => {
        this.toastr.error('Erro ao deletar municão!');
        console.log(error);
      }
    );
  }

  novaMunicao(template: any){
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
    this.getMunicoes();
  }

  getMunicoes(){
    this.municaoService.getAllMunicao().subscribe(
      (_municoes: Municao[]) =>
       {
         this.municoes = _municoes;
         this.municoesFiltradas = this.municoes;
      }, error => {
        this.toastr.error(`Erro ao tentar carregar municoes: ${error}`);
      });
  }

  getCalibres(){
    this.calibreService.getAllCalibre().subscribe(
      (_calibres: Calibre[]) =>
       {
         this.calibres = _calibres;
      }, error => {
        this.toastr.error(`Erro ao tentar carregar calibres: ${error}`);
      });
  }

  filtrarMunicoes(filtrarPor: string): Municao[]  {
      filtrarPor = filtrarPor.toLocaleLowerCase();
      return this.municoes.filter(
        municao => municao.marca.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      )
  }

  filtrarMunicoesTipoEstojo(filtrarPorTipoEstojo: string): Municao[]  {
    filtrarPorTipoEstojo = filtrarPorTipoEstojo.toLocaleLowerCase();
    return this.municoes.filter(
      municao => municao.tipoEstojo.toLocaleLowerCase().indexOf(filtrarPorTipoEstojo) !== -1
    )
}

filtrarMunicoesTipoProjetil(filtrarPorTipoProjetil: string): Municao[]  {
  filtrarPorTipoProjetil = filtrarPorTipoProjetil.toLocaleLowerCase();
  return this.municoes.filter(
    municao => municao.tipoProjetil.toLocaleLowerCase().indexOf(filtrarPorTipoProjetil) !== -1
  )
}

filtrarMunicoesTipoEspoleta(filtrarPorTipoEspoleta: string): Municao[]  {
  filtrarPorTipoEspoleta = filtrarPorTipoEspoleta.toLocaleLowerCase();
  return this.municoes.filter(
    municao => municao.tipoEspoleta.toLocaleLowerCase().indexOf(filtrarPorTipoEspoleta) !== -1
  )
}

  validation(){
    this.registerForm = this.fb.group({
    marca: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    tipoEstojo: ['', Validators.required],
    tipoProjetil: ['', Validators.required],
    tipoEspoleta: ['', Validators.required],
    imagem: ['', Validators.required],
    calibreId: ['', Validators.required]
    });
  }

  salvarAlteracao(template: any){
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'post') {
        this.municao = Object.assign({}, this.registerForm.value);

        this.uploadImagem();

        this.municaoService.postMunicao(this.municao).subscribe(
          (novaMunicao: Municao) => {
            template.hide();
            this.getMunicoes();
            this.toastr.success('Inserido com Sucesso!');
          }, error => {
            this.toastr.error(`Erro ao Inserir: ${error}`);
          }
        );
      } else {
        this.municao = Object.assign({ id: this.municao.id }, this.registerForm.value);

        this.uploadImagem();

        this.municaoService.putMunicao(this.municao).subscribe(
          () => {
            template.hide();
            this.getMunicoes();
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
      const nomeArquivo = this.municao.imagem.split('\\', 3);
      this.municao.imagem = nomeArquivo[2];

      this.municaoService.postUpload(this.file, nomeArquivo[2])
        .subscribe(
          () => {            
            this.getMunicoes();
          }
        );
    } else {
      const nomeArquivo = this.municao.imagem.split('\\', 3);
      this.municao.imagem = nomeArquivo[2];
     // this.municao.imagem = this.fileNameToUpdate;
      this.municaoService.postUpload(this.file, nomeArquivo[2])
        .subscribe(
          () => {
         
            this.getMunicoes();
          }
        );
    }
  }

}
