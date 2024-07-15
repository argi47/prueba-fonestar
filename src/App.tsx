import { useFonestar } from './hooks/useFonestar'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Spinner from './components/Spinner/Spinner'
import styles from './App.module.css'


function App() {

  const { fonestarData, isLoading, getFonestar, putFonestar } = useFonestar()

  return (
    <>
      <h1 className={styles.title}>Prueba de Argimir para Fonestar</h1>

      {isLoading ?
        <Spinner />
        :
        !fonestarData.length ?
          <button
            className={styles.button}
            onClick={getFonestar}
          >
            Cargar datos
          </button>
          :
          <ProductDetail
            fonestarData={fonestarData}
            putFonestar={putFonestar}
          />
      }
    </>
  )
}

export default App
