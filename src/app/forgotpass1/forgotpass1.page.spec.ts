import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Forgotpass1Page } from './forgotpass1.page';

describe('Forgotpass1Page', () => {
  let component: Forgotpass1Page;
  let fixture: ComponentFixture<Forgotpass1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forgotpass1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Forgotpass1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
