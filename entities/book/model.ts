export type TBookCoverVariant = "extraSmall" | 'small' | 'medium' | 'regular' | 'wide';

export interface IBookCover {
  className?: string;
  variant: TBookCoverVariant;
  coverColor: string;
  coverUrl: string;
}

export interface IBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  total_copies: number;
  available_copies: number;
  description: string;
  color: string;
  cover: string;
  video: string;
  summary: string;
  isLoanedBook?: boolean;
}
