
import { SkeletonPlaceholder } from 'src/shared/SkeletonPlaceholder/SkeletonPlaceholder'
import style from './BookDetailed.module.scss'

export const BookDetailedSkeleton = () => {
  return (
    <div className={style.bookDetailed}>
      <div className={style.bookDetailed__mediaBlock}>
        <SkeletonPlaceholder className={style.bookDetailed__image} heightUnset widthUnset />
      </div>

      <div className={style.bookDetailed__bookInfo}>
        <SkeletonPlaceholder className={style.bookDetailed__title} height={24} />

        <SkeletonPlaceholder className={style.bookDetailed__infoItemSkeleton} height={38} width='100%' />

        <SkeletonPlaceholder className={style.bookDetailed__infoItemSkeleton} height={38} width='100%' />

        <SkeletonPlaceholder className={style.bookDetailed__infoItemSkeleton} height={160} width='100%' />
      </div>
    </div >
  )
}