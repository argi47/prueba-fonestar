import { useEffect } from 'react'
import useFonestar from './hooks/useFonestar'
import styles from './App.module.css'


function App() {

  const { fetchFonestar } = useFonestar()

  useEffect(() => {
    fetchFonestar()
  }, [])

  return (
    <>
      <h1 className={styles.title}>Prueba Argimir Fonestar</h1>
    </>
  )
}

export default App
