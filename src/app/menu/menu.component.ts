import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('sidebar') sidebarElement!: ElementRef;
  @ViewChild('closeButton') closeButtonElement!: ElementRef;

  @Input() isMenuOpen!: boolean;
  @Output() closeMenuSignal = new EventEmitter<boolean>();

  constructor(private renderer : Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isMenuOpen'] != undefined) {
      if (changes['isMenuOpen'].currentValue) {
        this.onOpen();
      }
      console.log("change")
    }
    
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.sidebarElement.nativeElement, 'width', '0px');
  }

  ngOnInit(): void {
    
  }

  onClose() {
    this.renderer.setStyle(this.sidebarElement.nativeElement, 'width', '0px');
    this.closeMenuSignal.emit(false);
  }

  onOpen() {
    if (this.sidebarElement != undefined) {
      this.renderer.setStyle(this.sidebarElement.nativeElement, 'width', '254px');
    }
  }

}
