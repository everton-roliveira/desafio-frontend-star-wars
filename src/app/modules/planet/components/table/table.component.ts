import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { TableConfig } from 'src/app/@core/models/table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() properties: {
    head: string[],
    body: any[]
  };

  @Input() config: TableConfig = {
    border: false,
    textAlign: 'left',
    headerTextAlignLastColumn: 'left'
  };

  @ContentChild(TemplateRef) tableRow: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
