import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PcrtestPage } from './pcrtest.page';

describe('PcrtestPage', () => {
  let component: PcrtestPage;
  let fixture: ComponentFixture<PcrtestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcrtestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PcrtestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
