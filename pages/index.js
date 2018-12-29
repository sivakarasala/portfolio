import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
  <Layout title="Home">
    <h1>Aum Namah Shivaya</h1>
    <Link href="/about">
      <a>Go to about</a>
    </Link>
    <p>Kailasamunaku swagatham</p>
  </Layout>
);

export default Index;