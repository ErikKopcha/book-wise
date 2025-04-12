import BookCard from '@/entities/book/ui/BookCard';
import { IBookList } from './model';

const BookList = (props: IBookList) => {
	const { title, books, containerClassName } = props;

	return (
		<section className={containerClassName}>
			<h2 className="text-4px font-bebas-neue text-light-400">{title}</h2>
			<ul className="book-list">
				{books.map((book) => (
					<BookCard key={book.title} {...book} />
				))}
			</ul>
		</section>
	);
};

export default BookList;
