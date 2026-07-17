import artigos from '../data/artigos.json';

// Busca todos os artigos
export async function getArtigos() {
  return artigos;
}

// Busca um artigo pelo slug
export async function getArtigoPorSlug(slug: string) {
  return artigos.find((artigo) => artigo.slug === slug);
}

// Retorna todos os slugs (para SSG com generateStaticParams)
export async function getSlugs() {
  return artigos.map((artigo) => ({ slug: artigo.slug }));
}