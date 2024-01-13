import { Container } from "src/shared/ui/Container/Container"
import { Title, TitleSize } from "src/shared/ui/Title/Title"
import { SearchInput } from "src/features/SearchInput"
import { setCategory, setOrderBy, setQuery, setPage } from "src/entities/Book/reducers/bookSliсe"
import { FormEvent, useState } from "react"
import { useAppDispatch } from "src/shared/hooks/redux"
import { Select } from "src/shared/ui/Select/Select"
import style from './SearchForm.module.scss'
import { bookAPI } from "src/entities/Book/api/api"


export const SearchForm = () => {
    const [serchQuery, setSerchQuery] = useState('');
    const [selectCategory, setSelectCategory] = useState('');
    const [selectOrderBy, setSelectOrderBy] = useState('relevance');

    const dispatch = useAppDispatch();
    const onHandleQuery = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!serchQuery) return;
        dispatch(setQuery(serchQuery));
        dispatch(setCategory(selectCategory));
        dispatch(setOrderBy(selectOrderBy));
        dispatch(setPage(1));
        dispatch(bookAPI.util.resetApiState())
    };


    const onSelectChange = (fieldName: string) => (value: string) => {
        if (fieldName === 'category') {
            setSelectCategory(value);
        }

        if (fieldName === 'orderBy') {
            setSelectOrderBy(value);
        }
    };

    return (
        <Container className={style.searchForm}>
            <Title className={style.searchForm__title} size={TitleSize.L} as={'h1'}>Поиск книг</Title>
            <div className={style.searchForm__form}>
                <SearchInput
                    onChangeQuery={onHandleQuery}
                    value={serchQuery}
                    setValue={setSerchQuery}
                />
                <div className={style.searchForm__sortBlock}>
                    <div className={style.searchForm__item}>
                        <div className={style.searchForm__itemName}>Категории</div>
                        <Select
                            options={[
                                { value: "", name: "all" },
                                { value: "art", name: "art" },
                                { value: "biography", name: "biography" },
                                { value: "computers", name: "computers" },
                                { value: "history", name: "history" },
                                { value: "medical", name: "medical" },
                                { value: "poetry", name: "poetry" },
                            ]}
                            value={selectCategory}
                            setValue={onSelectChange(`category`)}
                        />
                    </div>
                    <div className={style.searchForm__item}>
                        <div className={style.searchForm__itemName}>Сортировка</div>
                        <Select
                            options={[
                                { value: "relevance", name: "relevance" },
                                { value: "newest", name: "newest" },
                            ]}
                            value={selectOrderBy}
                            setValue={onSelectChange(`orderBy`)}
                        />
                    </div>
                </div>

            </div>
        </Container>
    )
}