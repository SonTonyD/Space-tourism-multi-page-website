import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: AppService) { }

  @Output() currentPage = new EventEmitter<string>();

  

  fetch() {
    this.service.getData().subscribe(
      (res)=> {console.log(res);}
    )
  }

  ngOnInit(): void {
    this.fetch();
  }

  onExplore () {
    console.log("click !")
    this.currentPage.emit('destination');
  }

  
}
