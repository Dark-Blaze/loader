import { Component } from '@angular/core';


/**
 * This is the sandbox component for both upload and graph child components. 
 * This component is responsible for passing data to and from the child components. This allows siblings to not get coupled with each other.
 * 
 */
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  /**
   * Property responsible for showing or hiding the individual child components
   */
  show: boolean = false;

  /**
   * The data received from the upload component after parsing will be stored in the data variable
   */
  data: any = [];

  /**
   * 
   * @param $event Event 
   * Data obtained from the upload component via event emitter
   * 
   * @description
   * This function will handle the event call from the upload component and store the data obtained from the child(upload) component
   * in the data variable.
   */
  notifyHandler($event) {
    this.show = $event.show;
    this.data = $event.graphData;
  }

  resetView(val){
    this.show = val;
  }

  constructor() { }
}
