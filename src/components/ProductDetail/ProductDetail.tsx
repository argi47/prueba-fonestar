import { Languages, ProductDetailType } from '../../hooks/useFonestar'
import ProductInfo from './ProductInfo/ProductInfo'
import styles from './ProductDetail.module.css'

type ProductDetailProps = {
  fonestarData: ProductDetailType[]
  putFonestar: (feedback: Languages, id: string) => Promise<void>
}

export default function ProductDetail({ fonestarData, putFonestar }: ProductDetailProps) {

  const isTablet = window.innerWidth >= 768

  return (
    <div className={styles.container}>

      {isTablet &&
        <div className={styles.headerCont}>
          <p>Prompt</p>
          <p>En</p>
          <p>Fr</p>
          <p>Pt</p>
          <p>Feedback</p>
        </div>
      }

      {fonestarData.map((item, i) => (
        <ProductInfo
          key={item.PROMPTID}
          isTablet={isTablet}
          data={item}
          lastElement={!(i < fonestarData.length - 1)}
          putFonestar={putFonestar}
        />
      ))}
    </div>
  )
}
