import { Livro } from "../modelo/Livro";

let livros: Array<Livro> = [
  new Livro(1, 1, "Harry Potter e o Prisioneiro de Azkaban", "Após ser acusado de ter entregue os Potter a Voldemort e matado treze trouxas e seu ex-amigo, Black é condenado a prisão perpétua, sendo aprisionado na prisão de Azkaban", ["J.K. Rowling"]),
  new Livro(2, 2, "Livro 2", "Resumo do livro 2", ["Autor 3"]),
  new Livro(3, 3, "Livro 3", "Resumo do livro 3", ["Autor 4", "Autor 5"])
];

export class ControleLivros {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const maxCodLivro = livros.reduce((max, livro) => (livro.codigo > max ? livro.codigo : max), 0);
    livro.codigo = maxCodLivro + 1;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}
