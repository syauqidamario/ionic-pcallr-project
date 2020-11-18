import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AwalPage } from './awal.page';

describe('AwalPage', () => {
  let component: AwalPage;
  let fixture: ComponentFixture<AwalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AwalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
