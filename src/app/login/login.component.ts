import { Component } from '@angular/core';
import { DataService } from '../services/userdata/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  email: string = '';
  password: string = '';

  constructor(private router: Router, private dataService: DataService) { }


  onLogin() {
    if (!this.email || !this.password) {
      alert('Please fill in all fields.');
      return;
    }

    const users = this.dataService.getAllUsers();

    const user = users.find(user => user.email === this.email && user.password === this.password);
    if (user) {
      alert('Login successful!');
      this.dataService.setLoggedIn(true);
      this.dataService.setCurrentUser(user);
      this.router.navigate(['/']); // Assuming 'home' is the route for your home page
    } else {
      alert('User does not exist. Please check your email and password.')
    }
  }
}
