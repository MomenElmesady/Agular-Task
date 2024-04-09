import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeInWorkComponent } from './welcome-in-work.component';

describe('WelcomeInWorkComponent', () => {
  let component: WelcomeInWorkComponent;
  let fixture: ComponentFixture<WelcomeInWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeInWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeInWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
