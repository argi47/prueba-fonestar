import { FaEdit } from 'react-icons/fa'
import Form from './Form/Form'
import styles from './ProductInfo.module.css'
import { Languages, ProductDetailType } from '../../../hooks/useFonestar'
import { useState } from 'react'

type ProductInfoProps = {
  isTablet: boolean
  data: ProductDetailType
  lastElement: boolean
  putFonestar: (feedback: Languages, id: string) => Promise<void>
}

export default function ProductInfo({ isTablet, data, lastElement, putFonestar }: ProductInfoProps) {

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

          {/* Descomentar si se quiere mostrar el valor de FEEDBACK recibido en formato string */}

          {/* {data.FEEDBACK &&
            <p>
              {!isTablet && <span>Feedback: </span>}
              {data.FEEDBACK}
            </p>
          } */}

          <button onClick={() => setShowForm(!showForm)}>
            <FaEdit size='3rem' color='#00AAFF' />
          </button>
        </div>
      </div>

      {showForm &&
        <Form
          data={data}
          putFonestar={putFonestar}
        />
      }

      {!lastElement &&
        <div className={styles.separator} />
      }
    </>
  )
}
