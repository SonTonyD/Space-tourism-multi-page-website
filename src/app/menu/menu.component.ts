import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('sidebar') sidebarElement!: ElementRef;
  @ViewChild('closeButton') closeButtonElement!: ElementRef;

  @ViewChild('labelHome') labelHomeElement !: ElementRef;
  @ViewChild('labelDestination') labelDestinationElement !: ElementRef;
  @ViewChild('labelCrew') labelCrewElement !: ElementRef;
  @ViewChild('labelTechnology') labelTechnologyElement !: ElementRef;

  @Input() isMenuOpen!: boolean;
  @Output() closeMenuSignal = new EventEmitter<boolean>();
  @Output() currentPage = new EventEmitter<string>();


  constructor(private renderer : Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isMenuOpen'] != undefined) {
      if (changes['isMenuOpen'].currentValue) {
        this.onOpen();
      }
    }
    
  }

  ngAfterViewInit(): void {
    
    if (window.innerWidth > 500) {
      this.applyUnderline(this.labelHomeElement , this.labelDestinationElement, this.labelCrewElement, this.labelTechnologyElement);
    }
    if (window.innerWidth < 500) {
      this.renderer.setStyle(this.sidebarElement.nativeElement, 'width', '0px');
    }
    

    
  }

  ngOnInit(): void {
    
  }

  onClose() {
    if (window.innerWidth < 500) {
      this.renderer.setStyle(this.sidebarElement.nativeElement, 'width', '0px');
      this.closeMenuSignal.emit(false);
    }
    
  }

  onOpen() {
    if (window.innerWidth > 500) {
      if (this.sidebarElement != undefined) {
        this.renderer.setStyle(this.sidebarElement.nativeElement, 'width', '550px');
        this.renderer.setStyle(this.sidebarElement.nativeElement, 'height', '150px');
      }
      console.log('tablet screen detected')
    }

    if (window.innerWidth < 500) {
      if (this.sidebarElement != undefined) {
        this.renderer.setStyle(this.sidebarElement.nativeElement, 'width', '254px');
      }
      console.log("mobile screen detected")
    }
  }


  onHome() {
    this.currentPage.emit("home");
    this.applyUnderline(this.labelHomeElement , this.labelDestinationElement, this.labelCrewElement, this.labelTechnologyElement);
    this.onClose();
  }
  onDestination() {
    this.currentPage.emit("destination");
    this.applyUnderline(this.labelDestinationElement , this.labelHomeElement, this.labelCrewElement, this.labelTechnologyElement); 
    this.onClose();
  }
  onCrew() {
    this.currentPage.emit("crew");
    this.applyUnderline(this.labelCrewElement , this.labelDestinationElement, this.labelHomeElement, this.labelTechnologyElement); 
    this.onClose();
  }
  onTechnology(){
    this.currentPage.emit("technology");
    this.applyUnderline(this.labelTechnologyElement , this.labelDestinationElement, this.labelCrewElement, this.labelHomeElement); 
    this.onClose();
  }


  applyUnderline(btnElementUnderline : ElementRef, btnElement1 : ElementRef, btnElement2 : ElementRef, btnElement3 : ElementRef) {
    if (window.innerWidth > 500) {
      this.renderer.setStyle(btnElementUnderline.nativeElement, 'text-decoration', 'underline');
      this.renderer.setStyle(btnElementUnderline.nativeElement, 'text-underline-offset', '2.35rem');
      this.renderer.setStyle(btnElementUnderline.nativeElement, 'text-decoration-thickness', '0.2rem');

      //hide underline on btnElement1, btnElement2 and btnElement3
      this.renderer.setStyle(btnElement1.nativeElement, 'text-decoration', 'none');
      this.renderer.setStyle(btnElement2.nativeElement, 'text-decoration', 'none');
      this.renderer.setStyle(btnElement3.nativeElement, 'text-decoration', 'none');
    }
    
  }
}
