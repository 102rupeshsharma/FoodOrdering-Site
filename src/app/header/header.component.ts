import { Component } from '@angular/core';
import { DataService } from '../services/userdata/data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private dataService:DataService ) { }

  isLoggedIn(): boolean {
    // Check if there is a logged-in user in the data service
    // You might need to implement a method to check if a user is logged in
    // based on your authentication logic
    return this.dataService.isLoggedIn();
  }
}
