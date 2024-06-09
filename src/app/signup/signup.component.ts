import { Component } from '@angular/core';
import { DataService } from '../services/userdata/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private dataService:DataService, private router: Router) {   }

  checkFormValidity() {
    return this.username && this.email && this.password && this.confirmPassword && (this.password === this.confirmPassword);
  }

  onSignUp() {
    if (this.checkFormValidity()) {
      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      
      this.dataService.addUser(newUser);
      alert('Registeration Successfull');
      this.router.navigate(['/login']);
    } else {
      alert('Registeration Failed.')
    }
  }
}
