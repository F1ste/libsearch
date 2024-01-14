import { classNames } from '../../lib/classNames/classNames'
import style from './Title.module.scss'
import { ReactNode } from 'react'

export enum TitleSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l'
}


interface TitleProps {
  size?: TitleSize
  className?: string
  children?: ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export const Title = ({ children, className = '', size = TitleSize.M, as: Tag = 'h2' }: TitleProps) => {
  const additionalClasses = [
    className,
    style[size],
  ]

  return <Tag className={classNames(style.title, {}, additionalClasses)}>{children}</Tag>
}