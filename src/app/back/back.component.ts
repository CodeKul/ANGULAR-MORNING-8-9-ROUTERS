import { Component, OnInit } from '@angular/core';
import {RouterStateSnapShot} from '@angular/router'

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  constructor(
    private snap : RouterStateSnapShot
  ) { }

  ngOnInit() {
  }

}
