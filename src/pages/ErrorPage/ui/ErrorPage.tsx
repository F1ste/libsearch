import { Button } from "src/shared/ui/Button/Button"


export const ErrorPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
            }}
        >
            Произошла ошибка
            <Button
                onClick={() => location.reload()}
                style={{
                    marginTop: '16px',
                    color: '#fff',
                    backgroundColor: 'var(--dark-blue-color)',
                    padding: '10px 20px'
                }}
            >
                Обновить страницу
            </Button>
        </div>
    )
}