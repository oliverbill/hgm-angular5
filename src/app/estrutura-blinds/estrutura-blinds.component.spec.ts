import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaBlindsComponent } from './estrutura-blinds.component';

describe('EstruturaBlindsComponent', () => {
  let component: EstruturaBlindsComponent;
  let fixture: ComponentFixture<EstruturaBlindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstruturaBlindsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturaBlindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
