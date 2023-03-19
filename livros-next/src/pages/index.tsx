import Head from 'next/head';
import { Menu } from '../../componentes/Menu';

const styles = {
  main: {
    marginTop: '50px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '50px',
  },
};

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main style={styles.main}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Página Inicial</h1>
      </main>
    </div>
  );
};

export default Home;
