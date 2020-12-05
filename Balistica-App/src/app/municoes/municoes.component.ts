import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-municoes',
  templateUrl: './municoes.component.html',
  styleUrls: ['./municoes.component.scss']
})
export class MunicoesComponent implements OnInit {
  title = 'Munições';
  constructor() { }

  ngOnInit() {
  }

}
