
import { FC } from 'react'
import searchIcon from 'src/shared/assets/search.svg'
import { Input } from 'src/shared/ui/Input/Input'
import { Button } from 'src/shared/ui/Button/Button'
import style from './SearchInput.module.scss'

interface SearchInputProps {
  className?: string
}

export const SearchInput: FC<SearchInputProps> = () => {
  return (
    <div className={style.searchInput}>
      <Input className={style.searchInput__textField} placeholder='Поиск ..' />
      <Button type='submit' className={style.searchInput__button}>
        <img
          src={searchIcon}
          alt="Поиск"
          className={style.searchInput__icon}
        />
      </Button>
    </div>
  )
}