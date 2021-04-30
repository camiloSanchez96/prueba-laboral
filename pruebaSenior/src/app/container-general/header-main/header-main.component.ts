import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/nebular/interfaces';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss']
})
export class HeaderMainComponent implements OnInit {

  @Input()data:User;

  constructor() { }

  ngOnInit() {
  }

}
