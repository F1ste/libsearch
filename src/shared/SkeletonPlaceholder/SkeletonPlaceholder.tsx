import { classNames } from 'src/shared/lib/classNames/classNames'
import style from './SkeletonPlaceholder.module.scss'
import { CSSProperties, ReactNode } from 'react'

interface SkeletonPlaceholderProps {
    className?: string
    width?: number | string
    height?: number | string
    heightUnset?: boolean
    widthUnset?: boolean
    children?: ReactNode
    inlineStyle?: CSSProperties
}

export const SkeletonPlaceholder = ({ className = '', width = 'auto', height = 'auto', widthUnset, heightUnset, children, inlineStyle }: SkeletonPlaceholderProps) => {
    return (
        <div
            className={classNames(style.skeletonPlaceholder, {}, [className])}
            style={{
                width: !widthUnset ? width : undefined,
                height: !heightUnset ? height : undefined,
                ...inlineStyle
            }}
        >
            <div className={style.skeletonPlaceholder__activity} />
            {children}
        </div>
    )
}
