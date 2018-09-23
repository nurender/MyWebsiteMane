import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  // arr = [];
  id;

  // constructor() {
  //   fetch("http://jsonplaceholder.typicode.com/posts")
  //   .then((res) => res.json())
  //   .then((data) => this.arr.push(data))
  //   .catch((err) => console.log(err));
  //  }

  public data : BehaviorSubject<any> = new BehaviorSubject([]);

  dataser(){
    this.data.next(true);
  }

  customerTableData = [
    {
      "id" : 1,
      "name" : "pardeep kumar",
      "last_seen" : {
        "type" : "m",
        "value" : 1
      },
      "profile_image" : "assets/images/customer-1-image.jpg",
      "chat_ids" : [1,2,3,4,5,6]
    },
    {
      "id" : 2,
      "name" : "sonu kumars",
      "last_seen" : {
        "type" : "h",
        "value" : 4
      },
      "profile_image" : "assets/images/sonu.jpeg",
      "chat_ids" : [1,5,6]
    },
    {
      "id" : 3,
      "name" : "Dharmernder",
      "last_seen" : {
        "type" : "m",
        "value" : 5
      },
      "profile_image" : "assets/images/dharmender.jpeg",
      "chat_ids" : [2,5]
    },
    {
      "id" : 4,
      "name" : "Paras agarwal",
      "last_seen" : {
        "type" : "m",
        "value" : 21
      }
    }
  ]

}
