import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  currentPlanetImage !: string;
  currentPlanetName !: string;
  currentPlanetDescription !: string;
  currentDistance !: string;
  currentTravel !: string;

  moonData!: any;
  marsData!: any;
  europaData!: any;
  titanData!: any;

  constructor(private service : AppService) { }

  

  ngOnInit(): void {
    this.fetchDestinations();
  }

  fetchDestinations() {
    this.service.getData().subscribe(
      (res) => {
        this.moonData = res.destinations[0];
        this.marsData = res.destinations[1];
        this.europaData = res.destinations[2];
        this.titanData = res.destinations[3];

        this.applyChangeDestinations(this.moonData);
      }
    )
  }

  applyChangeDestinations(planeteData: any) {
    this.currentPlanetImage = "/assets/" + planeteData.images.png;
    this.currentPlanetName = planeteData.name
    this.currentPlanetDescription = planeteData.description
    this.currentDistance = planeteData.distance
    this.currentTravel = planeteData.travel


  }

}
