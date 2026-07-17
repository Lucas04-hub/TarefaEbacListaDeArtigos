import { getArtigos } from './artigos';
import Link from 'next/link';

export default async function Home() {
  const artigos = await getArtigos();

  return (
    <div>
      <h1>Lista de Artigos</h1>
      <ul>
        {artigos.map((artigo) => (
          <li key={artigo.slug}>
            <Link href={`/artigos/${artigo.slug}`}>{artigo.titulo}</Link>
            <br />
            Autor: {artigo.autor} <br />
            Data: {artigo.data}
          </li>
        ))}
      </ul>
    </div>
  );
}
