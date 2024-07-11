// import { useEffect } from 'react'
import useFonestar from './hooks/useFonestar'
import styles from './App.module.css'


function App() {

  const { data, fetchFonestar } = useFonestar()

  return (
    <>
      <h1 className={styles.title}>Prueba de Argimir para Fonestar</h1>

      {!data.length ?
        <button
          className={styles.button}
          onClick={fetchFonestar}
        >
          Púlsame
        </button>
        :
        data.map((item) => <p key={item.PROMPTID}>{item.PROMPT}</p>)
      }
    </>
  )
}

export default App
