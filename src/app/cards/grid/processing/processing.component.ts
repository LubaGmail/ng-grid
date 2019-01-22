import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {
  @Output() closeProcessing = new EventEmitter<{isDetail: false}>();

  constructor() { }

  ngOnInit() {}

  onClickClose(ev) {
    this.closeProcessing.emit({
      isDetail: false
    });
  }

}
