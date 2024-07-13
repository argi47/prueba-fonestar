import { ChangeEvent, FormEvent, useState } from 'react'
import { useFonestar } from '../../../../hooks/useFonestar'
import { Languages, ProductDetailType } from '../../../../hooks/useFonestar'
import styles from './Form.module.css'

type FormProps = {
  data: ProductDetailType
}

export default function Form({ data }: FormProps) {

  const { putFonestar } = useFonestar()

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    putFonestar(feedback, data.PROMPTID)
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
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

      <input
        className={styles.submit}
        type='submit'
        value='Actualizar'
        disabled={Object.values(feedback).includes('')}
      />
    </form>
  )
}
