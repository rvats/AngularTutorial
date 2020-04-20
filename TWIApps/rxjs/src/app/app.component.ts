import { Component, OnInit, OnDestroy } from "@angular/core";
import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  title = "rxjs";

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const clicks = fromEvent(document, "click");
    const positions = clicks.pipe(
      map(
        (ev) =>
          function (ev) {
            return {
              clientX: ev.clientX,
              clientY: ev.clientY,
            };
          }
      )
    );
    positions.subscribe(
      (x) =>
        function writeClickCoordinatesToConsole(x) {
          if (x) {
            console.log(
              "You clicked at Coordinate X: ",
              x.clientX,
              ", Coordinate Y: ",
              x.clientY
            );
          }
        }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
