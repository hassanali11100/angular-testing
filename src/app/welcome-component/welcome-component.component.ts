import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-welcome-component',
  templateUrl: './welcome-component.component.html',
  styleUrls: ['./welcome-component.component.scss']
})
export class WelcomeComponentComponent implements OnInit {

  welcomeMessage: string;
  isLoggedIn: boolean = true;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.welcomeMessage = (this.isLoggedIn? `welcome '${this.userService.currentUser}'` : `Please login`)
  }


}
