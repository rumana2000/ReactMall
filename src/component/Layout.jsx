import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Outlet>{children}</Outlet>
      <Footer />
    </>
  )
}
