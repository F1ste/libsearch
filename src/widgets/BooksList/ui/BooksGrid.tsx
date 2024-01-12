import { IBook } from 'src/entities/Book/model/Book';
import { BookItemSkeleton } from 'src/features/BookItem/ui/BookItemSkeleton';
import { BookItem } from 'src/features/BookItem';
import style from './BookList.module.scss'

interface BooksGridProps {
    books?: IBook[]
    isFetching: boolean
}

export const BooksGrid = ({ books, isFetching }: BooksGridProps) => {
    if (isFetching && !books?.length) {
        return (
            <div className={style.bookList__grid}>
                {[...Array(14)].map((_, index) => <BookItemSkeleton key={index} />)}
            </div>
        )
    }

    if (!books) {
        return null
    }
    return (
        <div className={style.bookList__grid}>
            {books.reduce<IBook[]>((accumulator, currentBook) => {
                if (!accumulator.find((item) => item.id === currentBook.id)) {
                    accumulator.push(currentBook);
                }
                return accumulator
            }, [])
                .map(book => (
                    <BookItem key={book.id} book={book} />
                ))}
        </div>
    )
}