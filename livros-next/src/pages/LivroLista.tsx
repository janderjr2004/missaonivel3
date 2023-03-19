import { useState, useEffect } from 'react'
import Head from 'next/head'
import { Livro } from '../../classes/modelo/Livro'
import { ControleEditora } from '../../classes/controle/ControleEditora'
import { LinhaLivro } from '../../componentes/LinhaLivro'
import { Menu } from '../../componentes/Menu';

const baseURL = 'http://localhost:3000/api/livros'

const LivroLista = () => {
  const [livros, setLivros] = useState<Array<Livro>>([])
  const [carregado, setCarregado] = useState<boolean>(false)

  useEffect(() => {
    const obterLivros = async () => {
      try {
        const resposta = await fetch(baseURL)
        const dados = await resposta.json()
        setLivros(dados)
        setCarregado(true)
      } catch (erro) {
        console.log(erro)
      }
    }
    if (!carregado) {
      obterLivros()
    }
  }, [carregado])

  const excluirLivro = async (codigo: number) => {
    try {
      const resposta = await fetch(`${baseURL}/${codigo}`, {
        method: 'DELETE',
      })
      const dados = await resposta.json()
      return dados.ok
    } catch (erro) {
      console.log(erro)
    }
  }

  const excluir = async (codigo: number) => {
    const resultado = await excluirLivro(codigo)
    if (resultado) {
      setCarregado(false)
    }
  }

  return (
    <div className="media"> 
      <Head>
        <title>Loja Next - Lista de Livros</title>
        <meta name="description" content="Lista de livros da Loja Next" />
        <link  rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />

      <main className="media">
        <h1 className="text-center">Lista de Livros</h1>
        <table className="table table-striped mx-auto">
          <thead className="table-dark">
            <tr>
              <th>Código</th>
              <th>Título</th>
              <th>Autores</th>
              <th>Editora</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default LivroLista
