import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils';
import Image from 'next/image';
import Link from 'next/link';
import { IBook } from '../model';
import BookCover from './BookCover';

const BookCard = (props: IBook) => {
	const { id, title, genre, color, cover, isLoanedBook = false } = props;

	return (
		<li className={cn(isLoanedBook && 'xs:w52 ww-full')}>
			<Link
				href={`/books/${id}`}
				className={cn(isLoanedBook && 'flex w-full flex-col items-center')}
			>
				<BookCover coverColor={color} coverUrl={cover} />
				<div className={cn('mt-4', !isLoanedBook && 'xs:max-w-40 max-w-28')}>
					<p className="book-title">{title}</p>
					<p className="book-genre">{genre}</p>
				</div>
				{isLoanedBook && (
					<div className="mt-3 w-full">
						<div className="book-loaned">
							<Image
								src="/icons/calendar.svg"
								alt="calendar"
								width={18}
								height={18}
								className="object-contain"
							/>
							<p className="text-light-100">11 days left to return</p>
						</div>
						<Button className="book-btn" variant="ghost">
							Download receipt
						</Button>
					</div>
				)}
			</Link>
		</li>
	);
};

export default BookCard;
