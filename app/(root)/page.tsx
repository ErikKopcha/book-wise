import { sampleBooks } from '@/shared/constants/common';
import BookList from '@/features/book-list/BookList';
import BookOverview from '@/entities/book/ui/BookOverview';

export default function Home() {
	return (
		<>
			<BookOverview {...sampleBooks[0]} />
			<BookList
				title="Latest Books"
				books={sampleBooks}
				containerClassName="mt-28"
			/>
		</>
	);
}
