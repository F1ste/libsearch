import { SkeletonPlaceholder } from 'src/shared/SkeletonPlaceholder/SkeletonPlaceholder'
import style from './BookItem.module.scss'

export const BookItemSkeleton = () => {
  return (
    <div className={style.bookItem__skeleton}>
      <SkeletonPlaceholder className={style.bookItem__mediaBlock} heightUnset widthUnset inlineStyle={{border:'none'}}/>

      <SkeletonPlaceholder className={style.bookItem__title} height={24} />

      <SkeletonPlaceholder height={18} width='40%' />

      <SkeletonPlaceholder height={18} width='60%'  />
    </div >
  )
}