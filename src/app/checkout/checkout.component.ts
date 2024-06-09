import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/userdata/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  username: string = '';
  phone: string = '';
  pincode: string = '';
  locality: string = '';
  summary: string = '';
  city: string = '';
  state: string = '';
  landMark: string = '';
  alternate: string = '';

  isEditing: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadFormData();
  }

  loadFormData(): void {
    const savedData = this.dataService.getCheckoutDetails();
    if (savedData) {
      this.username = savedData.username || '';
      this.phone = savedData.phone || '';
      this.pincode = savedData.pincode || '';
      this.locality = savedData.locality || '';
      this.summary = savedData.address || '';
      this.city = savedData.city || '';
      this.state = savedData.state || '';
      this.landMark = savedData.landMark || '';
      this.alternate = savedData.alternate || '';
      if (this.formatAddress()) {
        this.isEditing = true; // Format address returns non-null and non-empty values, show form container
      }
    }
  }

  submitOrder(form: NgForm): void {
    if (form.valid) {
      const formData = {
        username: this.username,
        phone: this.phone,
        pincode: this.pincode,
        locality: this.locality,
        address: this.summary,
        city: this.city,
        state: this.state,
        landMark: this.landMark,
        alternate: this.alternate
      };
      this.dataService.associateCheckoutDetails(formData);
      console.log('Order submitted', formData);
      this.isEditing = false; // Shift to small div after submission
    }
  }

  cancel(): void {
    this.isEditing = false;
  }

  edit(): void {
    this.isEditing = true;
  }

  formatAddress(): string {
    const optionalFields = [this.landMark, this.alternate].filter(field => field).join(', ');
    return `${this.pincode}, ${this.locality}, ${this.city}, ${this.state}${optionalFields ? `, ${optionalFields}` : ''}`;
  }
}
