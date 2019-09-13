import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSwitchComponent } from './light-switch.component';

fdescribe('LightSwitchComponent', () => {
  it('#clicked should toggle #isOn', () => {
    const comp = new LightSwitchComponent();

    expect(comp.isOn).toBe(false);
    comp.clicked();
    expect(comp.isOn).toBe(true);
    comp.clicked();
    expect(comp.isOn).toBe(false);
  })

  it('#clicked shoud set #message to "is On"', () => {
    const comp = new LightSwitchComponent();

    expect(comp.message).toContain('is Off');
    comp.clicked();
    expect(comp.message).toContain('is On');
  })
  // let component: LightSwitchComponent;
  // let fixture: ComponentFixture<LightSwitchComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ LightSwitchComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LightSwitchComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('#should emit message containing current username when loggedOut', () => {
    let comp = new LightSwitchComponent();
    comp.goodByeMessage = `goodBye 'Hassan'`;

    comp.loggedOutEvent.subscribe((data) => {
      expect(data).toContain('Hassan');
    });
    comp.logOut();
  });
});
