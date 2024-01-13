import { Container } from 'src/shared/ui/Container/Container'
import { Title } from 'src/shared/ui/Title/Title'
import style from './NotFoundPage.module.scss'
import { BackButton } from 'src/features/BackButton'

export const NotFoundPage = () => {
   return (
      <Container className={style.notFoundPage}>
         <Title as={'h1'}>Страница не найдена</Title>
         <BackButton />
      </Container>
   )
}

