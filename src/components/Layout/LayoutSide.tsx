import { FC } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import scss from './LayoutSide.module.scss'

interface LayoutProps {
<<<<<<< HEAD
	children: React.ReactNode
=======
  children: React.ReactNode
}

const LayoutSide: FC<LayoutProps> = ({children}) => {
  return (
    <div className={scss.LayoutSide}>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
>>>>>>> 2814f2d9de884db401fd843c14151d371b69e630
}

const LayoutSide: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={scss.LayoutSide}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default LayoutSide
