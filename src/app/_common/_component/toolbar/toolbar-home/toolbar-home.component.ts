import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-home',
  templateUrl: './toolbar-home.component.html',
  styleUrls: ['./toolbar-home.component.scss']
})
export class ToolbarHomeComponent implements OnInit {

  

  langSupport = [
    { prefix: 'EN', value: 'English'},
    { prefix: 'ES', value: 'Spanish'},
    { prefix: 'FR', value: 'French'},
  ]

  selectedLanguage = this.langSupport[0].prefix;

  constructor() { }

  ngOnInit(): void {
  }

  changeLang(i: number): void {
    this.selectedLanguage = this.langSupport[i].prefix
  }

}
