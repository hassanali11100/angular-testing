import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

fdescribe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain text "banner works"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    console.log('*************banner Element**************', bannerElement.textContent);
    expect(bannerElement.textContent).toContain('my name is hassan');
  });
});
