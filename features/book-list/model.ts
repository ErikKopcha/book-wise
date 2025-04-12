import { IBook } from "@/entities/book/model";

export interface IBookList {
  title: string;
  books: IBook[];
  containerClassName?: string;
}