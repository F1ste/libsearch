
import searchIcon from 'src/shared/assets/search.svg'
import { Input } from 'src/shared/ui/Input/Input'
import { Button } from 'src/shared/ui/Button/Button'
import style from './SearchInput.module.scss'
import { FormEvent } from 'react'

interface SearchInputProps {
  value: string
  setValue: (query: string) => void
  onChangeQuery: (e: FormEvent<HTMLFormElement>) => void
}

export const SearchInput = ({ value, setValue, onChangeQuery }: SearchInputProps) => {
  return (
    <form className={style.searchInput} onSubmit={onChangeQuery}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={style.searchInput__textField} placeholder='Поиск ..' />
      <Button
        type='submit'
        className={style.searchInput__button}
      >
        <img
          src={searchIcon}
          alt="Поиск"
          className={style.searchInput__icon}
        />
      </Button>
    </form>
  )
}