
const API_URL = 'https://pt.wikipedia.org/w/rest.php/v1/search/page'
const IMAGES_API_URL = 'https://pt.wikipedia.org/w/api.php'

export async function buscarCasos(termo = 'mistérios históricos') {
  const url = `${API_URL}?q=${encodeURIComponent(termo)}&limit=30`

  const resposta = await fetch(url)

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os arquivos.')
  }

  const dados = await resposta.json()
  const paginas = dados.pages

  if (paginas.length === 0) {
    return []
  }

  const titulos = paginas
    .map((pagina) => pagina.title)
    .join('|')

  const urlImagens =
    `${IMAGES_API_URL}?action=query` +
    `&format=json` +
    `&formatversion=2` +
    `&prop=pageimages` +
    `&piprop=thumbnail` +
    `&pithumbsize=800` +
    `&pilimit=${paginas.length}` +
    `&titles=${encodeURIComponent(titulos)}` +
    `&origin=*`

  const respostaImagens = await fetch(urlImagens)

  if (!respostaImagens.ok) {
    throw new Error('Não foi possível carregar as imagens.')
  }

  const dadosImagens = await respostaImagens.json()
  const imagensPorId = {}

  dadosImagens.query.pages.forEach((pagina) => {
    imagensPorId[pagina.pageid] =
      pagina.thumbnail?.source || null
  })

  const casos = paginas.map((pagina) => ({
    id: pagina.id,
    titulo: pagina.title,
    descricao:
      pagina.description || 'Descrição não disponível.',
    imagem: imagensPorId[pagina.id] || null,
    url: `https://pt.wikipedia.org/wiki/${encodeURIComponent(
      pagina.title.replace(/ /g, '_')
    )}`,
  }))

  const comImagem = casos.filter((caso) => caso.imagem)
  const semImagem = casos.filter((caso) => !caso.imagem)

  return [...comImagem, ...semImagem].slice(0, 12)
}
