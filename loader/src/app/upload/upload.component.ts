import { Component, OnInit } from '@angular/core';
import { Parser } from "../utils/parser";


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  result: any = [];
  parser = new Parser();
  constructor() {
  }

  ngOnInit() {
  }

  onChange(e) {
    let data;
    this.parser.getParsedHTMLElement("line", e.target).then((response) => {
      data = response;
    })
  }
}

