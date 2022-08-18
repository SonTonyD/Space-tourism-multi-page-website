import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = "space-tourism"

  @ViewChild('screen') containerElement!: ElementRef;
  
  isMenuOpen = false;
  currentPage = "home";

  constructor(private renderer : Renderer2) { }


  ngAfterViewInit() {
  }

  onOpenMenu() {
    this.isMenuOpen = true;
  } 

  closeMenu(event: boolean) {
    this.isMenuOpen = event;
  }

  changePage(event: string) {
    this.currentPage = event;

    if (event == "destination") {
      this.renderer.setStyle(this.containerElement.nativeElement, 'height', '700px');
    }

    if (event == "crew" || event == " technology") {
      this.renderer.setStyle(this.containerElement.nativeElement, 'height', '668px');
    }

    if (event == "home") {
      this.renderer.setStyle(this.containerElement.nativeElement, 'height', '668px');
    }
    
  }

  onExplore(event : string) {
    this.currentPage = event;
  }





}
