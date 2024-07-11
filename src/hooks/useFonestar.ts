import axios from 'axios'

export default function useFonestar() {

  const fetchFonestar = async () => {

    try {

      const loginUrl = 'https://apidev.fonestar.com/v1/login'
      const apiKey = '0b2951d48367a7afaa2976a224c7c011ec00470064d52933d725624ab102b2fe'

      const userData = {
        fs_user: 'fdelpozo@fonestar.es',
        fs_key: '3Bgjfsdhgf%8'
      }

      const headers = { 'X-API-KEY': apiKey }

      const { data } = await axios.post(loginUrl, userData, { headers: headers })
      const token = data && data['api-token'] ? data['api-token'] : ''

      if (!token) return

      console.log('token: ', token)
    }
    catch (error) {
      console.log(error)
    }

  }

  return {
    fetchFonestar
  }
}