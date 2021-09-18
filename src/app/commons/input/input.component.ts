import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Update', icon: 'pi pi-refresh'},
      {label: 'Delete', icon: 'pi pi-times'},
      {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
      {separator: true},
      {label: '<h2>File</h2>', escape: false},
      {label: '<input id="username2" pInputText placeholder="filtre..." />', escape: false},
      {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
  ];
  }

}
