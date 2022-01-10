import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { merge, Observable } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: ` <mat-progress-bar> *ngIf="" </mat-progress-bar> `,
})
export class AppComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  private _showLoaderEvents$!: Observable<boolean>;
  private _hideLoaderEvents$!: Observable<boolean>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this._showLoaderEvents$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      mapTo(true)
    );
  }
}
