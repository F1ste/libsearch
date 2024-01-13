import { Container } from 'src/shared/ui/Container/Container'
import style from './SingleBookPage.module.scss'
import { BookDetailed } from 'src/features/BookDetailed'
import { BackButton } from 'src/features/BackButton'

export const SingleBookPage = () => {


    return (
        <Container className={style.singleBookPage}>
            <div className={style.singleBookPage__back}>
                <BackButton />
            </div>
            <BookDetailed />
        </Container>
    )
}