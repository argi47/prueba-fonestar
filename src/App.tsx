// import { useEffect } from 'react'
import { useFonestar } from './hooks/useFonestar'
import styles from './App.module.css'
import ProductDetail from './components/ProductDetail/ProductDetail'


function App() {

  const { fonestarData, fetchFonestar } = useFonestar()

  return (
    <>
      <h1 className={styles.title}>Prueba de Argimir para Fonestar</h1>

      {!fonestarData.length ?
        <button
          className={styles.button}
          onClick={fetchFonestar}
        >
          Púlsame
        </button>
        :
        <ProductDetail fonestarData={fonestarData} />
      }
    </>
  )
}

export default App
