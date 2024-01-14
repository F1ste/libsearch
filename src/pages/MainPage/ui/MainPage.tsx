import style from './MainPage.module.scss'
import { BookList } from 'src/widgets/BooksList'
import { SearchForm } from 'src/widgets/SearchForm'


export type FormValue = string | string[]

export const MainPage = () => {
    return (
        <div className={style.mainPage}>
            <div className={style.mainPage__searchBlock}>
                <SearchForm />
            </div>
            <div className={style.mainPage__searchResults}>
                <BookList />
            </div>
        </div>
    )
}