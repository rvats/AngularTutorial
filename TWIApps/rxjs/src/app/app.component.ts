import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, of } from "rxjs";
import { mergeMap, map, take } from "rxjs/operators";

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

    const letters$ = of("a", "b", "c", "d", "e");
    const numbers$ = letters$
      .pipe(mergeMap((x) => interval(1000).pipe(take(6),map((i) => x + i))))
      .subscribe((x) => console.log(x));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
