import { Inter } from 'next/font/google'
import { Layout } from '@/components/layouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <Layout>
          <h1>Hola Mundo</h1>
      </Layout>
  );
}
