import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


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
    this.subject$ = new BehaviorSubject(200);
    this.subject$.subscribe(x => console.log('First Subscriber ', x));
    this.subject$.next(1);
    this.subject$.next(2);
    this.subject$.next(3);
    // To complete and kill any further subscription use unsubscribe and not complete.
    this.subject$.subscribe(x=> console.log('Second Subscriber ', x));
    this.subject$.next(4);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subject$.unsubscribe();
    // Above line will clean up any memory leaks issue due to subjects
  }
}