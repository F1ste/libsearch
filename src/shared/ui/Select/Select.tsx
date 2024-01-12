import { useRef } from "react"
import { Dropdown } from "../Dropdown/Dropdown";
import { SlArrowDown } from "react-icons/sl";
import { classNames } from "src/shared/lib/classNames/classNames";
import { useToggleDropdown } from "src/shared/hooks/useToggleDropdown";
import style from './Select.module.scss'

interface OptionType {
    name: string
    value: string
}

interface SelectProps {
    options: (string | OptionType)[]
    placeholder?: string
    value?: string
    setValue: (value: string) => void
}

export const Select = (props: SelectProps) => {
    const { placeholder, value, setValue, options } = props

    const [isDropdownOpen, toggleDropdown] = useToggleDropdown();
    const elementRef = useRef<HTMLDivElement>(null)

    const isOptionStringArray = (options: (string | OptionType)[]): options is string[] => {
        return !!(options?.length && typeof options[0] === 'string')
    }

    const valueToShow = (value: string) => {
        if (isOptionStringArray(options)) {
            return value
        }

        return (options.find(item => (item as OptionType).value === value) as OptionType)?.name || ''
    }

    return (
        <div className={style.select}>
            <div
                className={style.select__toggler}
                ref={elementRef}
                onClick={toggleDropdown}
            >
                <SlArrowDown
                    className={classNames(style.select__arrowDown, { [style.rotated]: isDropdownOpen })}
                    color="#9B9B9B"
                />
                {(valueToShow(value ?? '') || placeholder)}

                <Dropdown
                    isOpen={isDropdownOpen}
                    onClose={toggleDropdown}
                    targetRef={elementRef}
                    horizontalPosition="left"
                    width="100%"
                    className={style.select__dropdown}
                >
                    {options?.length
                        ? options.map((option) => {
                            if (typeof option === "string") {
                                return (
                                    <div
                                        key={option}
                                        className={classNames(style.select__item, { [style.selected]: option === value })}
                                        onClick={() => setValue(option)}
                                    >
                                        {option}
                                    </div>
                                )
                            }
                            return (
                                <div
                                    key={option.name}
                                    className={classNames(style.select__item, { [style.selected]: option.value === value })}
                                    onClick={() => setValue(option.value)}
                                >
                                    {option.name}
                                </div>
                            )
                        })
                        : <div className={style.select__text}>Нет доступных элементов</div>
                    }
                </Dropdown>
            </div>

        </div>
    )
}