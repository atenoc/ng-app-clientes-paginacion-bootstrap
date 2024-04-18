import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteMaterialComponent } from './cliente-material.component';

describe('ClienteMaterialComponent', () => {
  let component: ClienteMaterialComponent;
  let fixture: ComponentFixture<ClienteMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
