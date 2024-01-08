import { ReactNode } from 'react'
import style from './Container.module.scss'
import { classNames } from '../../lib/classNames/classNames'

interface ContainerProps {
  className?: string
  children?: ReactNode
}

export const Container = ({ className = '', children }: ContainerProps) => {
  return (
    <div className={classNames(style.container, {}, [className])}>
      {children}
    </div>
  )
}