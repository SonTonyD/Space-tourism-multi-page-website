import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(
    private service : AppService,
    private renderer : Renderer2
  ) { }

  @ViewChild('techBtn1') techBtnElement1 !: ElementRef<HTMLElement>;
  @ViewChild('techBtn2') techBtnElement2 !: ElementRef<HTMLElement>
  @ViewChild('techBtn3') techBtnElement3 !: ElementRef<HTMLElement>

  currentTechImage !: string;
  currentTechName !: string;
  currentTechDescription !: string;

  tech1: any;
  tech2: any;
  tech3: any;

  ngOnInit(): void {
    this.service.getData().subscribe(
      (res) => {
        this.tech1 = res.technology[0];
        this.tech2 = res.technology[1];
        this.tech3 = res.technology[2];

        this.applyChangeTech(this.tech1);
      }
    )
  }

  applyChangeTech(tech: any) {
    if (window.innerWidth > 1024) {
      this.currentTechImage = "/assets/" + tech.images.portrait;
    }
    else {
      this.currentTechImage = "/assets/" + tech.images.landscape;
    }
    
    this.currentTechName = tech.name;
    this.currentTechDescription = tech.description;

    switch (this.currentTechName) {
      case 'Launch vehicle':
        this.applyEffect(this.techBtnElement1);
        this.removeEffect(this.techBtnElement2, this.techBtnElement3);
        break;
      case 'Spaceport': this.applyEffect(this.techBtnElement2);
        this.removeEffect(this.techBtnElement1, this.techBtnElement3);
        break;
      case 'Space capsule': this.applyEffect(this.techBtnElement3);
        this.removeEffect(this.techBtnElement2, this.techBtnElement1);
        break;
      default: this.applyEffect(this.techBtnElement1); break;
    }
  }

  applyEffect(btnElement : ElementRef) {
    this.renderer.setStyle(btnElement.nativeElement, "background", "white");
    this.renderer.setStyle(btnElement.nativeElement, "color", "black");
  }

  removeEffect(btnElement1 : ElementRef, btnElement2 : ElementRef) {
    this.renderer.setStyle(btnElement1.nativeElement, "background", "transparent");
    this.renderer.setStyle(btnElement1.nativeElement, "color", "white");

    this.renderer.setStyle(btnElement2.nativeElement, "background", "transparent");
    this.renderer.setStyle(btnElement2.nativeElement, "color", "white");
  }

}
