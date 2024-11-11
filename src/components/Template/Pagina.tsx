import {ReactNode} from 'react'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'

interface PaginaProps{
    children?: ReactNode
}

export default function Pagina(props:PaginaProps) {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header className='h-20'/>
        <div className='flex-1 flex boxed'>
            <Menu className='w-72' />
            <main className='flex-1 bg-red-500'>{props.children}</main>
        </div>
        <Footer className='h-14'/>
    </div>
  )
}

