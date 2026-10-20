
function ItemDetails({ caso, onFechar }) {
  if (!caso) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-red-900 bg-gray-950 p-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm font-bold tracking-widest text-red-500">
            DOSSIÊ CONFIDENCIAL
          </p>

          <button
            onClick={onFechar}
            className="rounded-lg px-3 py-2 text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            Fechar X
          </button>
        </div>

        {caso.imagem && (
          <img
            src={caso.imagem}
            alt={caso.titulo}
            className="mb-6 max-h-72 w-full rounded-lg object-cover"
          />
        )}

        <p className="mb-2 text-xs text-gray-500">
          IDENTIFICAÇÃO: #{caso.id}
        </p>

        <h2 className="mb-4 text-2xl font-bold text-white">
          {caso.titulo}
        </h2>

        <p className="mb-6 leading-7 text-gray-300">
          {caso.descricao}
        </p>

        <a
          href={caso.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700"
        >
          CONSULTAR FONTE ORIGINAL ↗
        </a>
      </div>
    </div>
  )
}

export default ItemDetails
