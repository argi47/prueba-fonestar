import { ProductDetailType } from '../../hooks/useFonestar'
import { FaEdit } from 'react-icons/fa'
import styles from './ProductDetail.module.css'

type ProductDetailProps = {
  fonestarData: ProductDetailType[]
}

export default function ProductDetail({ fonestarData }: ProductDetailProps) {

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
        <div key={item.PROMPTID}>
          <div
            className={styles.itemsCont}
          >
            <p>{!isTablet && <span>Prompt: </span>}{item.PROMPT}</p>
            <p>{!isTablet && <span>En: </span>}{item.lang.en}</p>
            <p>{!isTablet && <span>Fr: </span>}{item.lang.fr}</p>
            <p>{!isTablet && <span>Pt: </span>}{item.lang.pt}</p>
            <div className={styles.feedbackCont}>
              {item.FEEDBACK &&
                <p>{!isTablet && <span>Feedback: </span>}{item.FEEDBACK}</p>
              }

              <button>
                <FaEdit size='3rem' color='#00AAFF' />
              </button>
            </div>
          </div>

          {(i < fonestarData.length - 1) &&
            <div className={styles.separator} />
          }
        </div>
      ))}
    </div>
  )
}
