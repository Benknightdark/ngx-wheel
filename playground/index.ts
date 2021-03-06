/**
 * This is only for local test
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Component } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgxWheelModule } from "ngx-wheel";

@Component({
  selector: "app",
  templateUrl: "./template.html"
})
class AppComponent {
  colors = [
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
    "red",
    "black",
  ];
  //10, 9, 6 ,2
  prizes = [
    "Grand prize",
    "demo 2",
    "demo 3",
    "demo 4",
    "demo 5",
    "demo 6",
    "demo 7",
    "demo 8",
    "demo 9",
    "demo 10",
    "demo 11",
    "demo 12"
  ];
  beforeSpinFn = function () {
    // alert("before");
  };
  spinOnce = false;
  afterSpinFn = function () {
    // alert("after");
  };
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, NgxWheelModule]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
