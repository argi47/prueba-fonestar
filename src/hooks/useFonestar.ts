import { useState } from 'react'
import axios from 'axios'
import { z } from 'zod'


//  Zod
const FonestarSchema = z.object({
  FEEDBACK: z.string(),
  IAMODEL: z.string(),
  MODEL: z.string(),
  PROMPT: z.string(),
  PROMPTID: z.string(),
  RESPONSE: z.string(),
  UPDATEDAT: z.string(),
})

export type Fonestar = z.infer<typeof FonestarSchema>

export default function useFonestar() {

  const [data, setData] = useState<Fonestar[]>([])

  const fetchFonestar = async () => {

    const apiKey = '0b2951d48367a7afaa2976a224c7c011ec00470064d52933d725624ab102b2fe'

    try {

      const loginUrl = 'https://apidev.fonestar.com/v1/login'
      const userData = { fs_user: 'fdelpozo@fonestar.es', fs_key: '3Bgjfsdhgf%8' }
      const loginHeaders = { 'X-API-KEY': apiKey }

      const { data } = await axios.post(loginUrl, userData, { headers: loginHeaders })
      const token = data && data['api-token'] ? data['api-token'] : ''

      if (!token) return

      console.log('token: ', token)

      const getUrl = 'https://apidev.fonestar.com/v1/ia/models/modelo_traductor/prompts?page=1&pagesize=10'
      const getHeaders = { 'X-API-KEY': apiKey, 'fstoken': token }

      const { data: getData } = await axios.get(getUrl, { headers: getHeaders })

      if (getData && getData._items) {
        setData(getData._items)
        console.log(getData._items)
      }
      else {
        console.log('Los datos no se recibieron bien')
        return
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  return {
    data,
    fetchFonestar
  }
}