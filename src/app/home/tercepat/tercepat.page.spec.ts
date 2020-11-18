import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TercepatPage } from './tercepat.page';

describe('TercepatPage', () => {
  let component: TercepatPage;
  let fixture: ComponentFixture<TercepatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercepatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TercepatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
