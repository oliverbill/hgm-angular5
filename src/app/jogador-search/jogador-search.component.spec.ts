import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorSearchComponent } from './jogador-search.component';

describe('JogadorSearchComponent', () => {
  let component: JogadorSearchComponent;
  let fixture: ComponentFixture<JogadorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogadorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogadorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
