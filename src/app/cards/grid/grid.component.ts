import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() otherGrd: boolean;

  constructor() { }

  ngOnInit() {
    console.log('otherGrd ', this.otherGrd);
  }

}
