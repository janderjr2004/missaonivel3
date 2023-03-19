import Link from 'next/link';
import livros from '../src/pages/LivroDados';
import dados from '../src/pages/LivroLista';

export const Menu: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid w-100">
        <Link legacyBehavior href="/">
          <a className="navbar-brand">Home</a>
        </Link>

        <div className="collapse navbar-collapse w-100" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link legacyBehavior href="/LivroLista">
                <a className="nav-link">Livros</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/LivroDados">
                <a className="nav-link">Dados do Livro</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
