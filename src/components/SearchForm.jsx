
function SearchForm({ termo, setTermo, onBuscar }) {
  function handleSubmit(event) {
    event.preventDefault()
    onBuscar(termo)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="text"
        value={termo}
        onChange={(event) => setTermo(event.target.value)}
        placeholder="Pesquisar um caso..."
        className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none focus:border-red-500"
      />

      <button
        type="submit"
        className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
      >
        INVESTIGAR
      </button>
    </form>
  )
}

export default SearchForm
