import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { UploadComponent } from "../upload/upload.component";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @ViewChild(UploadComponent) uploadComponent;

  show: boolean = false;

  data:any = [];
 
  notifyHandler($event){
    this.show = $event.show;
    this.data = $event.d;
    debugger;
  }

  constructor() { }

  ngOnInit() {
  }

}
