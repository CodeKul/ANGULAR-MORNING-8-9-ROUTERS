import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit, OnDestroy {

  usNm: string;
  qParam: string;
  subPath: Subscription;
  subQuery: Subscription;

  constructor(
    private router: Router,
    private snap: ActivatedRoute
  ) { }

  ngOnInit() {
    //this.usNm = this.snap.snapshot.params['usNm'];

    this.subPath = this.snap.params.subscribe(params => this.usNm = params['usNm']);
    this.subQuery = this.router.routerState.root.queryParams.subscribe(params => this.qParam = params['key']);
  }
  callMe(nm: string) {
    this.router.navigate(['back', nm]);
  }

  ngOnDestroy() {
    this.subPath.unsubscribe();
    this.subQuery.unsubscribe();
  }
}
