import { Container } from '../../../shared/ui/Container/Container'
import { Title, TitleSize } from '../../../shared/ui/Title/Title'
import style from './MainPage.module.scss'



export const MainPage = () => {


    return (
        <Container className={style.mainPage}>
            <div className={style.mainPage__searchBlock}>
                <Title className={style.mainPage__title} size={TitleSize.L}>Поск книг</Title>

            </div>
        </Container>
    )
}