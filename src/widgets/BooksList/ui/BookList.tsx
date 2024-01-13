import style from './BookList.module.scss'
import { bookAPI } from "src/entities/Book/api/api"
import { useAppDispatch, useAppSelector } from "src/shared/hooks/redux"
import { RootState } from "src/app/store/store"
import { setPageIncrement } from "src/entities/Book/reducers/bookSliсe"
import { ShowMoreButton } from "src/features/ShowMoreButton"
import { BooksGrid } from './BooksGrid'
import { Container } from 'src/shared/ui/Container/Container'

export const BookList = () => {
    const { query, category, orderBy, page } = useAppSelector((state: RootState) => state.booksReducer);
    const searchResultsLimit = 30;
    const { data: books, isFetching, isError } = bookAPI.useFetchBooksQuery({
        limit: searchResultsLimit,
        query: query,
        category: category,
        page: page,
        orderBy: orderBy
    }, {
        skip: query.length === 0
    })

    const dispatch = useAppDispatch();

    const handleShowMore = () => {
        dispatch(setPageIncrement());
    };

    const showTitleText = (): string => {
        if (isFetching) {
            return 'Поиск...'
        }

        if (isError) {
            return `Произошла ошибка при получении данных`
        }

        if (books?.totalItems === 0) {
            return 'По Вашему запросу ничего не найдено'
        }

        if (books?.totalItems) {
            return `Найденные книги по Вашему запросу: ${books.totalItems}`
        }

        return 'Введите название книги'
    }

    return (
        <Container className={style.bookList}>

            <div className={style.bookList__foundedBooks}>{showTitleText()}</div>

            <BooksGrid books={books?.items} isFetching={isFetching} />

            {books?.items && books.totalItems !== 0 &&
                <div className={style.bookList__showMore}>
                    <ShowMoreButton
                        booksLength={books.items.length}
                        handleClick={handleShowMore}
                        isLoading={isFetching}
                        limit={searchResultsLimit}
                        page={page}
                        totalCount={books.totalItems}
                    />
                </div>
            }

        </Container >
    )
}