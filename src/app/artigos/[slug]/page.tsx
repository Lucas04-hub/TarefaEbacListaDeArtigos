import { getArtigoPorSlug, getSlugs } from '../../artigos'; // ajuste o caminho se necessário
import type { Metadata } from 'next';

interface ArtigoPageProps {
  params: { slug: string }
}


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const artigo = await getArtigoPorSlug(params.slug);

  if (!artigo) {
    return {
      title: 'Artigo não encontrado',
      description: 'O artigo buscado não foi encontrado.',
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.conteudo.slice(0, 120)
  };
}


export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs;
}

export default async function ArtigoPage({ params }: ArtigoPageProps) {
  const artigo = await getArtigoPorSlug(params.slug);

  if (!artigo) {
    return <h2>Artigo não encontrado</h2>;
  }

  return (
    <main>
      <h1>{artigo.titulo}</h1>
      <p><strong>Autor:</strong> {artigo.autor}</p>
      <p><strong>Data:</strong> {artigo.data}</p>
      <div>{artigo.conteudo}</div>
    </main>
  );
}