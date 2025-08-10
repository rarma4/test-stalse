import './styles/pages/page.scss'
import { Comfortaa } from 'next/font/google'
import Header from './sections/Header'
import Lancamentos from './sections/Lancamentos'

const comfortaa = Comfortaa({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <Header/>
      <Lancamentos/>
    </>
  )
}
