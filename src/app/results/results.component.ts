import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Driver } from '../driver';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  drivers: Driver[];
  circuitName: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRes().subscribe( data=>
     {this.drivers = (data.MRData.RaceTable.Races[0].Results.map(res => ( { position: res.position,
                nombre : res.Driver.givenName,
                apellido : res.Driver.familyName,
                status: res.status
                })));
     this.circuitName = data.MRData.RaceTable.Races[0].raceName;
    console.log(data.MRData.RaceTable.Races[0].Results);});
  }
}