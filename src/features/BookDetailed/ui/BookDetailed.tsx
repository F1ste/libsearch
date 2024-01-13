import { useParams } from 'react-router-dom';
import { Title, TitleSize } from 'src/shared/ui/Title/Title';
import blankItem from 'src/shared/assets/blankImage.png'
import { bookAPI } from 'src/entities/Book/api/api';
import { BookDetailedSkeleton } from './BookDetailedSkeleton';
import style from './BookDetailed.module.scss'

export const BookDetailed = () => {
  const urlParams = useParams();

  const { data: book, isFetching } = bookAPI.useFetchSingleBookQuery(urlParams?.book ?? '');

  if (isFetching) {
    return (
      <div>
        <BookDetailedSkeleton />
      </div>
    )
  }
  const { volumeInfo: { imageLinks, title, authors, categories, description } } = book ?? { volumeInfo: {} };

  return (
    <div className={style.bookDetailed}>
      <div className={style.bookDetailed__mediaBlock}>
        {imageLinks
          ? <img className={style.bookDetailed__image} src={imageLinks.thumbnail} alt={title} />
          : <img className={style.bookDetailed__blankImage} src={blankItem} alt={title} />
        }
      </div>
      <div className={style.bookDetailed__bookInfo}>
        <Title className={style.bookDetailed__title} size={TitleSize.S} as={"h4"}>{title}</Title>
        <div className={style.bookDetailed__infoItem}>
          <div className={style.bookDetailed__categories}>Категории: {categories?.join(' / ') ?? '-'}</div>
        </div>
        <div className={style.bookDetailed__infoItem}>
          <div className={style.bookDetailed__authors}>Авторы: {authors?.join(', ') ?? '-'}</div>
        </div>
        <div className={style.bookDetailed__infoItem}>
          <div className={style.bookDetailed__description}>Описание: {description ?? '-'}</div>
        </div>

      </div>
    </div>
  )
}