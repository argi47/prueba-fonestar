import { useState } from 'react'
import axios from 'axios'
import { z } from 'zod'


//  Validación de esquema con Zod

const FonestarSchema = z.object({
  FEEDBACK: z.string(),
  // IAMODEL: z.string(),
  // MODEL: z.string(),
  PROMPT: z.string(),
  PROMPTID: z.string(),
  RESPONSE: z.string(),
  // UPDATEDAT: z.string()
})

type Fonestar = z.infer<typeof FonestarSchema>

type Languages = {
  en: string
  es: string
  fr: string
  pt: string
}

export type ProductDetailType = Fonestar & {
  lang: Languages
}

export const useFonestar = () => {

  const [fonestarData, setFonestarData] = useState<ProductDetailType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchFonestar = async () => {

    setIsLoading(true)
    const apiKey = '0b2951d48367a7afaa2976a224c7c011ec00470064d52933d725624ab102b2fe'

    try {

      const loginUrl = 'https://apidev.fonestar.com/v1/login'
      const userData = { fs_user: 'fdelpozo@fonestar.es', fs_key: '3Bgjfsdhgf%8' }
      const loginHeaders = { 'X-API-KEY': apiKey }

      const { data } = await axios.post(loginUrl, userData, { headers: loginHeaders })
      const token = data && data['api-token'] ? data['api-token'] : ''

      if (!token) return

      const getUrl = 'https://apidev.fonestar.com/v1/ia/models/modelo_traductor/prompts?page=1&pagesize=10'
      const getHeaders = { 'X-API-KEY': apiKey, 'fstoken': token }

      const { data: getData } = await axios.get(getUrl, { headers: getHeaders })

      if (getData && getData._items && getData._items.length) {

        let auxData: ProductDetailType[] = []

        getData._items.map((item: Fonestar) => {
          const auxObject: ProductDetailType = {
            FEEDBACK: item.FEEDBACK,
            PROMPT: item.PROMPT,
            PROMPTID: item.PROMPTID,
            RESPONSE: item.RESPONSE,
            lang: translateResponse(item.RESPONSE)
          }
          auxData.push(auxObject)

          console.log('item.FEEDBACK: ', item.FEEDBACK)
        })

        setFonestarData(auxData)
      }
      else {
        console.log('ERROR: Los tipos de datos recibidos no coinciden con los esperados.')
        return
      }
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setIsLoading(false)
    }
  }

  const translateResponse = (response: string): Languages => {
    return JSON.parse(response)
  }

  return {
    fonestarData,
    isLoading,
    fetchFonestar
  }
}