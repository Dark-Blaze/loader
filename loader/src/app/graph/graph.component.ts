import { Component, Input, EventEmitter, Output } from '@angular/core';

/**
 * This component is responsible for showing the graph based on the data received from the parent(details) component.
 */
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  /**
   * This variable is responsible for the graph data
   */
  @Input()
  graphData: any = [];


  /**
   * This event can be used to pass any data from this component to the parrent
   */
  @Output() notifyEvent = new EventEmitter<any>();

  /**
   * Graph related variables
   */
  view: any[] = [900, 500];

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

  autoScale = true;

  constructor() {

  }

  onSelect(event) {
  }

}
