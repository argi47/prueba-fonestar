import { FaEdit } from 'react-icons/fa'
import Form from './Form/Form'
import styles from './ProductInfo.module.css'
import { ProductDetailType } from '../../../hooks/useFonestar'
import { useState } from 'react'

type ProductInfoProps = {
  isTablet: boolean
  data: ProductDetailType
  lastElement: boolean
}

export default function ProductInfo({ isTablet, data, lastElement }: ProductInfoProps) {

  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <div
        className={styles.itemsCont}
      >
        <p>
          {!isTablet && <span>Prompt: </span>}
          {data.PROMPT}
        </p>
        <p>
          {!isTablet && <span>En: </span>}
          {data.lang.en}
        </p>
        <p>
          {!isTablet && <span>Fr: </span>}
          {data.lang.fr}
        </p>
        <p>
          {!isTablet && <span>Pt: </span>}
          {data.lang.pt}
        </p>
        <div className={styles.feedbackCont}>
          {data.FEEDBACK &&
            <p>
              {!isTablet && <span>Feedback: </span>}
              {data.FEEDBACK}
            </p>
          }

          <button onClick={() => setShowForm(!showForm)}>
            <FaEdit size='3rem' color='#00AAFF' />
          </button>
        </div>
      </div>

      {showForm &&
        <Form data={data} />
      }

      {!lastElement &&
        <div className={styles.separator} />
      }
    </>
  )
}
