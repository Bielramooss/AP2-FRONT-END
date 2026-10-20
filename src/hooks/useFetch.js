
import { useState, useEffect } from 'react'
import { buscarCasos } from '../services/api'

function useFetch(termo) {
  const [casos, setCasos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    async function carregarCasos() {
      try {
        setCarregando(true)
        setErro('')

        const dados = await buscarCasos(termo)
        setCasos(dados)
      } catch (erro) {
        setErro(erro.message)
      } finally {
        setCarregando(false)
      }
    }

    carregarCasos()
  }, [termo])

  return { casos, carregando, erro }
}

export default useFetch
