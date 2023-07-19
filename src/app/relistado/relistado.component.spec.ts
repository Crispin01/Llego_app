import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelistadoComponent } from './relistado.component';

describe('RelistadoComponent', () => {
  let component: RelistadoComponent;
  let fixture: ComponentFixture<RelistadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelistadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelistadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
