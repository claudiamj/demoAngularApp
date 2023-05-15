export interface BookDate {
    $date: string;
}

export interface Book {
    _id: number;
    title: string;
    isbn: string;
    pageCount: number;
    publishedDate: BookDate;
    thumbnailUrl: string;
    shortDescription: string;
    longDescription: string;
    status: string;
    authors: String[];
    categories: String[];
}
  