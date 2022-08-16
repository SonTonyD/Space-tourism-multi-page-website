import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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

  @ViewChild('moonBtn') moonBtnElement !: ElementRef;
  @ViewChild('marsBtn') marsBtnElement !: ElementRef;
  @ViewChild('europaBtn') europaBtnElement !: ElementRef;
  @ViewChild('titanBtn') titanBtnElement !: ElementRef;

  constructor(
    private service : AppService,
    private renderer : Renderer2
  ) { }

  

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

    switch (this.currentPlanetName) {
      case 'Moon':
        this.applyUnderline(this.moonBtnElement);
        this.removeUnderline(this.marsBtnElement, this.europaBtnElement, this.titanBtnElement);
        break;
      case 'Mars': this.applyUnderline(this.marsBtnElement);
        this.removeUnderline(this.moonBtnElement, this.europaBtnElement, this.titanBtnElement);
        break;
      case 'Europa': this.applyUnderline(this.europaBtnElement);
        this.removeUnderline(this.marsBtnElement, this.moonBtnElement, this.titanBtnElement);
        break;
      case 'Titan': this.applyUnderline(this.titanBtnElement);
        this.removeUnderline(this.marsBtnElement, this.europaBtnElement, this.moonBtnElement);
        break;
      default: this.applyUnderline(this.moonBtnElement); break;
    }
    
  }

  applyUnderline(btnElement : ElementRef) {
    this.renderer.setStyle(btnElement.nativeElement, 'text-decoration', 'underline');
    this.renderer.setStyle(btnElement.nativeElement, 'text-underline-offset', '0.5rem');
    this.renderer.setStyle(btnElement.nativeElement, 'text-decoration-thickness', '0.2rem');
  }

  removeUnderline(btnElement1 : ElementRef, btnElement2 : ElementRef, btnElement3 : ElementRef) {
    this.renderer.setStyle(btnElement1.nativeElement, 'text-decoration', 'none');
    this.renderer.setStyle(btnElement2.nativeElement, 'text-decoration', 'none');
    this.renderer.setStyle(btnElement3.nativeElement, 'text-decoration', 'none');
  }

}
