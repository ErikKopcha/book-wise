import BookCoverSvg from '@/entities/book/ui/BookCoverSvg';
import { cn } from '@/shared/utils';
import Image from 'next/image';
import { variantSyules } from '../constants';
import { IBookCover } from '../model';

const BookCover = (props: IBookCover) => {
	const {
		className,
		variant = 'regular',
		coverColor = '#012B48',
		coverUrl = 'https://placehold.co/400*600.png',
	} = props;

	return (
		<div
			className={cn(
				'relative transition-all duration-300',
				variantSyules[variant],
				className
			)}
		>
			<BookCoverSvg coverColor={coverColor} />
			<div
				className="absolute z-10"
				style={{ left: '12%', width: '87.5%', height: '87%' }}
			>
				<Image
					src={coverUrl}
					alt="Book cover"
					fill
					className="rounded-sm object-fill"
				/>
			</div>
		</div>
	);
};

export default BookCover;
