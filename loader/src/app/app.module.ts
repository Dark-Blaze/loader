import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes, Route, RoutesRecognized } from "@angular/router";
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { UploadComponent } from './upload/upload.component';
import { GraphComponent } from './graph/graph.component';

const appRoutes:Routes = [
  {path:"details", component:DetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    UploadComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
