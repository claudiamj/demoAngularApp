import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() books!: Book[];

  /*get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get subtitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail(): string | boolean {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail.replace(
        'http:',
        ''
      );
    }

    return false;
  }*/
}
