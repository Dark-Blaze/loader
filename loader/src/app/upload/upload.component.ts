import { Component, Output, EventEmitter } from '@angular/core';
import { Parser } from "../utils/parser";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  result: any = [];
  parser = new Parser();
  showGraph: boolean = false;
  hideLoader: boolean = true;
  hideError: boolean = true;

  @Output() notifyEvent = new EventEmitter<any>();

  constructor() {
  }

  onChange(e) {
    this.hideLoader = false;
    this.hideError = true;
    let data;
    const that = this;
    this.parser.getParsedHTMLElement("line", e.target).then(function (response) {
      data = response;
      that.notifyEvent.emit({ graphData: data, show: true })
    }, function (response) {
      that.hideLoader = true;
      that.hideError = false;
    })
  }
}

