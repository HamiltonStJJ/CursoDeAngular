import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-paginator',
  imports: [MatPaginatorModule],
  templateUrl: './paginator.html',
  styleUrl: './paginator.css'
})
export class Paginator {
  @Output() onChangePage:EventEmitter<number> = new EventEmitter<number>()
  @Input() length!: number
  pageSize = environment.PAGE_SIZE
  current_page = 0

  changePage(event:PageEvent){
    this.current_page = event.pageIndex ?? 0
    this.onChangePage.emit(this.current_page)
  }
}
