import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shipped',
  templateUrl: './shipped.component.html',
  styleUrls: ['./shipped.component.css']
})
export class ShippedComponent implements OnInit {
  @Output() closeShipped = new EventEmitter<{isDetail: false}>();

  constructor() { }

  ngOnInit() {
  }

  onClickClose(ev) {
    this.closeShipped.emit({
      isDetail: false
    });
  }

}
