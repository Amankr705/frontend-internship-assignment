import { Component, Input } from '@angular/core';
import { Book } from 'src/app/core/models/book-response.model';
import { Search } from 'src/app/core/models/search-response.model';

@Component({
  selector: 'front-end-internship-assignment-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent {
  @Input() booksList: Book[] = [];
  @Input() subjectName = '';
  @Input() searchList: Search[] = [];

  totalResult = 0;
  totalPages = 0;
  currentPage= 0;
}