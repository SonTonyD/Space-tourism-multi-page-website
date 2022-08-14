import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: AppService) { }

  fetch() {
    this.service.getData().subscribe(
      (res)=> {console.log(res);}
    )
  }

  ngOnInit(): void {
    this.fetch();
  }

  
}
