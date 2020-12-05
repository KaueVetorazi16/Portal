/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MunicoesComponent } from './municoes.component';

describe('MunicoesComponent', () => {
  let component: MunicoesComponent;
  let fixture: ComponentFixture<MunicoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
