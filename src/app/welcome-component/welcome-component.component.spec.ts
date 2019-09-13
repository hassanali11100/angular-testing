import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponentComponent } from './welcome-component.component';
import { UserServiceService } from '../user-service.service';

describe('WelcomeComponentComponent', () => {
  // let component: WelcomeComponentComponent;
  // let fixture: ComponentFixture<WelcomeComponentComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ WelcomeComponentComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(WelcomeComponentComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  let welcomeComp: WelcomeComponentComponent;
  // let userService: UserServiceService;
  let spyUserService;

  beforeEach(() => {
    class MockUserService {
      currentUser = 'zaigham';
    }
  
    const spyServiceObj = jasmine.createSpyObj('UserService', ['currentUser']);

    TestBed.configureTestingModule({
      providers: [
        WelcomeComponentComponent,
        { provide: UserServiceService, useValue: spyServiceObj}
      ]
    })

    welcomeComp = TestBed.get(WelcomeComponentComponent);
    spyUserService = TestBed.get(UserServiceService);
  })

  it('should not have welcome message after construction', () => {
    expect(welcomeComp.welcomeMessage).toBe(undefined);
  })

  it('should should show welcome Message if user is loggedIn after angular calls ngOnInit', () => {
    spyUserService.currentUser.and.returnValue('John')
    welcomeComp.isLoggedIn = true;
    welcomeComp.ngOnInit();
    expect(welcomeComp.welcomeMessage).toContain('welcome');
  })

  it('should should show "Please login" Message if user is not loggedIn after angular calls ngOnInit', () => {
    // spyUserService.currentUser.and.returnValue('John')
    welcomeComp.isLoggedIn = false;
    welcomeComp.ngOnInit();
    expect(welcomeComp.welcomeMessage).toContain('Please login');
  })
});
