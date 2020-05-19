import { Component, OnInit } from '@angular/core';
import {HeaderService} from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartExpanded = false;

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
  }

  expandOrNot() {
    this.cartExpanded = !this.cartExpanded;
    this.headerService.setExpandCart(this.cartExpanded);
  }
}
