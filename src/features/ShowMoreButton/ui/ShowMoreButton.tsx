import { Button } from 'src/shared/ui/Button/Button'
import style from './ShowMoreButton.module.scss'

interface ShowMoreButtonProps {
    isLoading: boolean;
    totalCount: number;
    page: number;
    limit: number;
    booksLength: number;
    handleClick: () => void
}

export const ShowMoreButton = ({
    isLoading,
    totalCount,
    page,
    limit,
    booksLength,
    handleClick }: ShowMoreButtonProps
) => {
    
    return (
        <>
            {totalCount > page * limit && !!booksLength && (
                <Button
                    isLoading={isLoading}
                    className={style.showMoreButton} onClick={handleClick}
                >
                    Показать еще
                </Button>
            )}
        </>
    )
}