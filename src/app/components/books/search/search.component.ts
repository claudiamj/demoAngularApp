import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  @Input() query = '';
  @Input() searching = false;
  @Input() error = '';
  @Output() search = new EventEmitter<string>();

  constructor(private store: Store) {}

  onSearch(event: KeyboardEvent): void {
    this.search.emit((event.target as HTMLInputElement).value);
  }
}
