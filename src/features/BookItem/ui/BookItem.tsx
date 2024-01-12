import { IBook } from "src/entities/Book/model/Book"
import { Title, TitleSize } from "src/shared/ui/Title/Title"
import blankItem from 'src/shared/assets/blankImage.png'
import style from './BookItem.module.scss'

interface BookItemProps {
    book: IBook
}

export const BookItem = ({ book }: BookItemProps) => {
    const { volumeInfo: { title, authors, categories, imageLinks } } = book
    return (
        <div className={style.bookItem}>
            <div className={style.bookItem__mediaBlock}>
                {imageLinks 
                ? <img className={style.bookItem__image} src={imageLinks.thumbnail} alt={title} /> 
                : <img className={style.bookItem__blankImage} src={blankItem} alt={title} />
                }
            </div>
            <Title className={style.bookItem__title} size={TitleSize.S} as={"h4"}>{title}</Title>
            {categories &&
                <div className={style.bookItem__authors}>{categories[0]}</div>
            }
            {authors &&
                <div>{authors.join(', ')}</div>
            }

        </div>
    )
}