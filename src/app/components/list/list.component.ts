import { Component, Input, OnInit, APP_BOOTSTRAP_LISTENER } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input() aptList;

}
