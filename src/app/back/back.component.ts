import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  usNm: string;
  constructor(
    private router: Router,
    private snap: ActivatedRoute
  ) { }

  ngOnInit() {
    //this.usNm = this.snap.snapshot.params['usNm'];

    this.snap.params.subscribe(params => this.usNm = params['usNm']);
  }
  callMe(nm: string) {
    this.router.navigate(['back', nm]);
  }
}
