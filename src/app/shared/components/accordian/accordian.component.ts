
import { Component, Input, OnInit } from '@angular/core';
import { AccordianModel } from '../../models/accordian.model';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  @Input() accordianInput: AccordianModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // Function for expand and collapse accordian content
  toggleAccordian(item: AccordianModel) {
    item.isExpanded = !item.isExpanded
  }

}
