import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Parser } from "../utils/parser";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  result: any = [];
  parser = new Parser();
  showGraph:boolean = false;

  @Output() notifyEvent = new EventEmitter<any>();
  
  constructor() {
  }

  ngOnInit() {
  }
  onChange(e) {
    let data;
    const that = this;
    this.parser.getParsedHTMLElement("line", e.target).then(function(response){
      data = response;
      that.notifyEvent.emit({d:data, show:true})
    })
  }
}

