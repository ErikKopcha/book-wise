import BookList from '@/widgets/BookList';
import BookOverview from '@/widgets/BookOverview';

export default function Home() {
	return (
		<>
			<BookOverview />
			<BookList />
		</>
	);
}
