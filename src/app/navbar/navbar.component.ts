import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	selectedNav: String;

	constructor() { }

	ngOnInit() {
	}

	onSelect(navSelected: String): void {
		this.selectedNav = navSelected;
	} 

}
