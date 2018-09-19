import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public childdatarec;

  @Output() public childdata = new EventEmitter();

  Nurender(event){
    console.log(event.target.text);
    this.childdata.emit(event.target.text);
  }

  posts=[]
  constructor() {
    fetch("http://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => this.posts = data)
    .catch((err) => console.log(err))
   }
   


  ngOnInit() {
  }
  
 openNav() {
  document.getElementById("mySidenav").style.width = "215px";
  document.getElementById("main").style.marginLeft = "215px";
  document.getElementById("main").style.display = "none";
}

closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("main").style.display = "block";
}
myFunction() {
var input, filter, ul, li, a, i;
input = document.getElementById("myInput");
// console.log(input);

filter = input.value.toUpperCase();
ul = document.getElementById("myUL");
li = ul.getElementsByTagName("li");
for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }
}
}

}
