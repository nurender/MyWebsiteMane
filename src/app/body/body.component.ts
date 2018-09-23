import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
    constructor( private Services : ServicesService){

    }
    // array: any;
    id;

  @Input() public parentdata;
  // id:number = 0;
  // post = {};
  // constructor(
  //   private route: ActivatedRoute
  // ) { 
  //   this.route.params.subscribe(res => this.id = res.id)
  //   fetch("http://jsonplaceholder.typicode.com/posts/"+this.id)
  //   .then((res) => res.json())
  //   .then((data) => this.post = data)
  //   .catch((err) => console.log(err))
  // }

  ngOnInit() {
    
    console.log(this.array);
    
  }
  array = this.Services.customerTableData
  


}
