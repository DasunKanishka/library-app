import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import BookCover from './BookCover';

const BookCard = ({
    id,
    title,
    author,
    genre,
    rating,
    totalCopies,
    availableCopies,
    description,
    coverColor,
    coverUrl,
    videoUrl,
    summary,
    isLoanedBook = false
}: Book) => {
    return (
        <li className={cn(isLoanedBook && 'xs:w-52 w-full')}>
            <Link
                href={`/book/${id}`}
                className={cn(
                    isLoanedBook && 'w-full flex flex-col items-center'
                )}
            >
                <BookCover coverColor={coverColor} coverUrl={coverUrl} />

                <div
                    className={cn(
                        'mt-4',
                        !isLoanedBook && 'xs:max-w-40 max-w-28'
                    )}
                >
                    <p className="book-title">{title}</p>

                    <p className="book-genre">{genre}</p>
                </div>

                {isLoanedBook && (
                    <div className="w-full mt-3">
                        <div className="book-loanded">
                            <Image
                                src="/icons/calendar.svg"
                                alt="calendar"
                                width={18}
                                height={18}
                                className="object-contain"
                            />

                            <p className="text-light-100">
                                days left to return
                            </p>
                        </div>

                        <button className="book-btn">Download Receipt</button>
                    </div>
                )}
            </Link>
        </li>
    );
};

export default BookCard;
