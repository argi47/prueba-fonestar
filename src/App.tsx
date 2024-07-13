import { useFonestar } from './hooks/useFonestar'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Spinner from './components/Spinner/Spinner'
import styles from './App.module.css'


function App() {

  const { fonestarData, isLoading, getFonestar } = useFonestar()

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
          <ProductDetail fonestarData={fonestarData} />
      }
    </>
  )
}

export default App
