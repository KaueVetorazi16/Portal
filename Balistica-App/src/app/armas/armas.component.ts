import { ArmaService } from './../_services/arma.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Arma } from '../_models/Arma';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.css']
})
export class ArmasComponent implements OnInit {

  _filtroLista = '';
  modalRef: BsModalRef;
  armasFiltradas: Arma[];
  armas: Arma[];
  imagemLargura: number = 50;
  imagemMargem: number = 2;

  constructor(private armaService: ArmaService, private modalService: BsModalService) { }

  get filtroLista(): string{
    return this._filtroLista;
  }

  set filtroLista(value: string){
    this._filtroLista = value;
    this.armasFiltradas = this.filtroLista ? this.filtrarArmas(this.filtroLista) : this.armas;
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
}

  ngOnInit() {
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

}
