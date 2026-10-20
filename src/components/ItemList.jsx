
import ItemCard from './ItemCard'

function ItemList({ casos, onSelecionar }) {
  if (casos.length === 0) {
    return (
      <p className="py-12 text-center text-gray-400">
        Nenhum arquivo encontrado.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {casos.map((caso) => (
        <ItemCard
          key={caso.id}
          caso={caso}
          onSelecionar={onSelecionar}
        />
      ))}
    </div>
  )
}

export default ItemList
