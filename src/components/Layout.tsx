import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Header
        title="All-in-One E-commerce App"
        description="Discover premium products and enjoy shopping with us. Risk Free Shopping!"
      />
      <main>
      <Outlet />
      </main>
      <Footer
      title='Bait-us-Salam'
      text='Shop Today!'
      description='Coded with 💙 by Talha Yousuf'
      />
    </div>
  )
}

export default Layout
