import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  isMenuOpen = false;
  state = [true, false, false, false, false]

  ngAfterViewInit() {
  }

  onOpenMenu() {
    this.isMenuOpen = true;
    console.log(this.isMenuOpen)
  } 

  closeMenu(event: boolean) {
    this.isMenuOpen = event;
    console.log(this.isMenuOpen)
  }





}
