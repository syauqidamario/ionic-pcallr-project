import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerdekatPage } from './terdekat.page';

describe('TerdekatPage', () => {
  let component: TerdekatPage;
  let fixture: ComponentFixture<TerdekatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerdekatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerdekatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
