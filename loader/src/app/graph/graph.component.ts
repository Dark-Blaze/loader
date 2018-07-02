import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit, DoCheck {
  ngOnInit() {
  }

  @Input()
  graphData: any = [];


  ngDoCheck(){
    debugger;
  }

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  showYAxisLabel = true;
  yAxisLabel = 'Score';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() {
    
  }


  ngAfterViewInit(){
  }

  onSelect(event) {
  }

}
