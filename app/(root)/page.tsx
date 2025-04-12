import BookList from '@/features/book-list/BookList';
import BookOverview from '@/features/book-overview/BookOverview';
import { sampleBooks } from '@/shared/constants/common';

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
