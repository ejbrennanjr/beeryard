import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer';
import { BeersService } from '../beers.service';


@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers: Beer[];
  selectedBeer: Beer;

  constructor(private beersService: BeersService) { }

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(): void {
    this.beersService.getBeers()
    	.then(returnedBeers=>this.beers = returnedBeers);
  }

}
