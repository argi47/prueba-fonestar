import { ChangeEvent, useState } from 'react'
import { Languages, ProductDetailType } from '../../../../hooks/useFonestar'
import styles from './Form.module.css'

type FormProps = {
  data: ProductDetailType
}

export default function Form({ data }: FormProps) {

  const [feedback, setFeedback] = useState<Languages>({
    es: data.PROMPT,
    en: data.lang.en,
    fr: data.lang.fr,
    pt: data.lang.pt,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form
      className={styles.form}
    >
      <div>
        <label htmlFor='en'>En: </label>
        <input
          id='en'
          name='en'
          type='text'
          placeholder='English'
          value={feedback.en}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor='fr'>Fr: </label>
        <input
          id='fr'
          name='fr'
          type='text'
          placeholder='Français'
          value={feedback.fr}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor='pt'>Pt: </label>
        <input
          id='pt'
          name='pt'
          type='text'
          placeholder='Português'
          value={feedback.pt}
          onChange={handleChange}
        />
      </div>

      <input className={styles.submit} type='submit' value='Actualizar' />
    </form>
  )
}
