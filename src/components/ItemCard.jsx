
function ItemCard({ caso, onSelecionar }) {
  return (
    <button
      type="button"
      onClick={() => onSelecionar(caso)}
      className="group overflow-hidden rounded-xl border border-gray-800 bg-gray-900 text-left transition hover:-translate-y-1 hover:border-red-500"
    >
      {caso.imagem ? (
        <img
          src={caso.imagem}
          alt={caso.titulo}
          onError={(event) => {
            event.currentTarget.style.display = 'none'
            event.currentTarget.nextElementSibling.style.display = 'flex'
          }}
          className="h-48 w-full object-contain bg-gray-950"
        />
      ) : null}

      <div
        style={{ display: caso.imagem ? 'none' : 'flex' }}
        className="h-48 flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-900 to-red-950"
      >
        <span className="text-4xl text-red-500">404</span>
        <span className="text-xs tracking-widest text-gray-400">
          IMAGEM CLASSIFICADA
        </span>
      </div>

      <div className="p-5">
        <p className="mb-2 text-xs font-bold tracking-widest text-red-500">
          ARQUIVO #{caso.id}
        </p>

        <h3 className="mb-3 text-lg font-bold text-white">
          {caso.titulo}
        </h3>

        <p className="text-sm leading-6 text-gray-400">
          {caso.descricao}
        </p>

        <p className="mt-5 text-xs font-bold tracking-wider text-red-400">
          ABRIR DOSSIÊ →
        </p>
      </div>
    </button>
  )
}

export default ItemCard
