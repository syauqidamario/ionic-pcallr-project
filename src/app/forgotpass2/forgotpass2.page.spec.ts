import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Forgotpass2Page } from './forgotpass2.page';

describe('Forgotpass2Page', () => {
  let component: Forgotpass2Page;
  let fixture: ComponentFixture<Forgotpass2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forgotpass2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Forgotpass2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
