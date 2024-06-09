import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  @Input() visible:boolean = false;
  @Input() notFoundMessage:string = " No Data Found Here!";
  @Input() resetLinkTest:string = 'Reset';
  @Input() resetLinkRoute:string = 'Go to home';
  constructor() { }

  ngOnInit() { }
}
