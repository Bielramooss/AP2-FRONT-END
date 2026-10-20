
import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import SearchForm from '../components/SearchForm'
import ItemList from '../components/ItemList'
import ItemDetails from '../components/ItemDetails'
import LoadingSpinner from '../components/LoadingSpinner'

function Home() {
  const [termo, setTermo] = useState('mistérios históricos')
  const [pesquisa, setPesquisa] = useState('mistérios históricos')
  const [casoSelecionado, setCasoSelecionado] = useState(null)

  const { casos, carregando, erro } = useFetch(pesquisa)

  function buscarCasos(evento) {
    const novoTermo = evento.trim()

    if (novoTermo) {
      setPesquisa(novoTermo)
      setCasoSelecionado(null)
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-red-500">
              CENTRAL DE INVESTIGAÇÃO
            </p>

            <h1 className="mt-1 text-2xl font-black tracking-wider">
              ARQUIVO <span className="text-red-500">404</span>
            </h1>
          </div>

          <span className="hidden rounded border border-red-900 px-3 py-2 text-xs text-red-400 sm:block">
            ACESSO RESTRITO
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold tracking-[0.25em] text-red-500">
            NEM TODO MISTÉRIO TEM RESPOSTA
          </p>

          <h2 className="mb-4 text-4xl font-black leading-tight sm:text-5xl">
            Alguns arquivos deveriam permanecer <span className="text-red-500">fechados.</span>
          </h2>

          <p className="leading-7 text-gray-400">
            Explore mistérios, acontecimentos históricos e fenômenos
            intrigantes. Pesquise nos registros e abra um dossiê para
            consultar suas informações e fontes.
          </p>
        </div>

        <div className="mb-10 rounded-xl border border-gray-800 bg-gray-900/60 p-4 sm:p-6">
          <SearchForm
            termo={termo}
            setTermo={setTermo}
            onBuscar={buscarCasos}
          />

          <p className="mt-3 text-xs text-gray-500">
            PESQUISA NO ARQUIVO PÚBLICO · FONTE: WIKIPÉDIA
          </p>
        </div>

        <div className="mb-6 flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold tracking-wide">
            REGISTROS ENCONTRADOS
          </h3>

          <span className="text-sm text-gray-500">
            {casos.length} registros
          </span>
        </div>

        {carregando && <LoadingSpinner />}

        {!carregando && erro && (
          <div className="rounded-lg border border-red-900 bg-red-950/30 p-6 text-red-300">
            <p className="font-bold">Falha ao acessar os arquivos</p>
            <p className="mt-2 text-sm">{erro}</p>
            <p className="mt-2 text-sm">
              Verifique sua conexão e tente novamente.
            </p>
          </div>
        )}

        {!carregando && !erro && (
          <ItemList
            casos={casos}
            onSelecionar={setCasoSelecionado}
          />
        )}
      </section>

      <footer className="border-t border-gray-800 px-6 py-6 text-center text-xs text-gray-500">
        ARQUIVO 404 · CATÁLOGO INVESTIGATIVO · DADOS CONSULTADOS NA WIKIPÉDIA
      </footer>

      <ItemDetails
        caso={casoSelecionado}
        onFechar={() => setCasoSelecionado(null)}
      />
    </main>
  )
}

export default Home
