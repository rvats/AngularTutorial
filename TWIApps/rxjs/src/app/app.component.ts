import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { map, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const numbers$ = interval(1000);
    numbers$
      .pipe(
        take(11)
      ).pipe(
        map(x => x * x),
        filter(x => x > 15)
      ).subscribe(x => console.log(x));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
}