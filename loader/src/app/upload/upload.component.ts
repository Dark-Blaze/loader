import { Component, Output, EventEmitter } from '@angular/core';
import { Parser } from "../utils/parser";

/**
 * This component is for uploading csv files
 */
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

  /**
   * 
   * @param e the event object for the input fiels
   * @description
   * This method will be triggered when there is any change in the upload element. For Ex: when a file is chosen
   * 
   * @returns
   * nothing
   */
  onChange(e):void {
    this.hideLoader = false;
    this.hideError = true;
    let data;
    const that = this;
    /**
     * This method call is responsible for parsing the data and return the formatted data for graph view to use
     * @returns Promise object
     */
    this.parser.getParsedHTMLElement("line", e.target).then(function (response) {
      data = response;
      that.notifyEvent.emit({ graphData: data, show: true })
    }, function (response) {
      that.hideLoader = true;
      that.hideError = false;
    })
  }
}

