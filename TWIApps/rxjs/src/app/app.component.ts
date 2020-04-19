import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs';
  subject$;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const number$ = interval(1000).pipe(take(10));

    number$.subscribe(x => console.log('Next: ', x));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subject$.unsubscribe();
    // Above line will clean up any memory leaks issue due to subjects
  }
}