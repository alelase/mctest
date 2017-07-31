import {Component, OnInit, Input} from '@angular/core';
import {Apps, App} from "../apps";

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  @Input() apps: App[];
  private list: Apps;

  constructor(list: Apps) {
    this.list = list;
    this.apps = list.apps;
  }

  ngOnInit() {
  }

}
