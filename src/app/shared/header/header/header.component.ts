import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedLang: string = 'ENG';
  selectedCurrency: string = 'USD';
  userName: string = 'Milady Dereck';
  avatar: string = 'assets/avatar3.jpg';

  constructor() {}

  ngOnInit(): void {
  }
}
