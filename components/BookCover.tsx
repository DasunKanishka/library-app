import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
type BookCoverVariant = 'extraSmall' | 'small' | 'medium' | 'regular' | 'wide';

const variantStyles: Record<BookCoverVariant, string> = {
    extraSmall: 'book-cover_extra-small',
    small: 'book-cover_small',
    medium: 'book-cover_medium',
    regular: 'book-cover_regular',
    wide: 'book-cover_wide'
};

interface Props {
    variant?: BookCoverVariant;
    coverColor: string;
    coverUrl: string;
    className?: string;
}

const BookCover = ({
    variant = 'regular',
    coverColor = '#012B48',
    coverUrl = 'https://placehold.co/400x600',
    className
}: Props) => {
    return (
        <div
            className={cn(
                'relative transition-all duration-400',
                variantStyles[variant],
                className
            )}
        >
            Book Side SVG
            <div
                className="absolute z-10"
                style={{ width: '87.5%', height: '88%', left: '12%' }}
            >
                <Image
                    src={coverUrl}
                    alt="book cover"
                    fill
                    className="rounded-sm object-fill"
                />
            </div>
        </div>
    );
};

export default BookCover;
