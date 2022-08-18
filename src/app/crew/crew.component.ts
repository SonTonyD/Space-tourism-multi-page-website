import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  constructor(
    private service: AppService,
    private renderer : Renderer2
  ) { }

  currentCrewImage !: string;
  currentCrewRole !: string;
  currentCrewName !: string;
  currentCrewBio !: string;

  crewMember1 : any;
  crewMember2 : any;
  crewMember3 : any;
  crewMember4 : any;

  @ViewChild('crewMemberBtn1') crewMemberBtnElement1 !: ElementRef;
  @ViewChild('crewMemberBtn2') crewMemberBtnElement2 !: ElementRef;
  @ViewChild('crewMemberBtn3') crewMemberBtnElement3 !: ElementRef;
  @ViewChild('crewMemberBtn4') crewMemberBtnElement4 !: ElementRef;

  ngOnInit(): void {
    this.service.getData().subscribe(
      (res) => {
        this.crewMember1 = res.crew[0];
        this.crewMember2 = res.crew[1];
        this.crewMember3 = res.crew[2];
        this.crewMember4 = res.crew[3];

        this.applyChangeCrew(this.crewMember1);

        
      }
    )
  }

  applyChangeCrew(crewMember: any) {
    this.currentCrewImage = "/assets/" + crewMember.images.png;
    this.currentCrewRole = crewMember.role
    this.currentCrewName = crewMember.name
    this.currentCrewBio = crewMember.bio

    switch (this.currentCrewName) {
      case 'Douglas Hurley':
        this.applyOpacity(this.crewMemberBtnElement1);
        this.removeOpacity(this.crewMemberBtnElement2, this.crewMemberBtnElement3, this.crewMemberBtnElement4);
        break;
      case 'Mark Shuttleworth': this.applyOpacity(this.crewMemberBtnElement2);
        this.removeOpacity(this.crewMemberBtnElement1, this.crewMemberBtnElement3, this.crewMemberBtnElement4);
        break;
      case 'Victor Glover': this.applyOpacity(this.crewMemberBtnElement3);
        this.removeOpacity(this.crewMemberBtnElement2, this.crewMemberBtnElement1, this.crewMemberBtnElement4);
        break;
      case 'Anousheh Ansari': this.applyOpacity(this.crewMemberBtnElement4);
        this.removeOpacity(this.crewMemberBtnElement2, this.crewMemberBtnElement3, this.crewMemberBtnElement1);
        break;
      default: this.applyOpacity(this.crewMemberBtnElement1); break;
    }
  }

  applyOpacity(btnElement : ElementRef) {
    this.renderer.setStyle(btnElement.nativeElement, 'opacity', '1');
  }

  removeOpacity(btnElement1 : ElementRef, btnElement2 : ElementRef, btnElement3 : ElementRef) {
    this.renderer.setStyle(btnElement1.nativeElement, 'opacity', '0.17');
    this.renderer.setStyle(btnElement2.nativeElement, 'opacity', '0.17');
    this.renderer.setStyle(btnElement3.nativeElement, 'opacity', '0.17');
  }

}
