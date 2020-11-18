import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagebookingPage } from './managebooking.page';

describe('ManagebookingPage', () => {
  let component: ManagebookingPage;
  let fixture: ComponentFixture<ManagebookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagebookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagebookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
