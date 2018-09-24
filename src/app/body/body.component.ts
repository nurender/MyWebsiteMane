import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

    array;
    constructor( private Services : ServicesService){
      this.array = this.Services.customerTableData;
    }
    
    selectedTopic;
    this.Services.topicId.subscribe(data => {
      this.selectedTopic = data;
      console.log(this.selectedTopic);
    }); 


    // array: any;
    id;

  // @Input() public parentdata;
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
 
  


}
