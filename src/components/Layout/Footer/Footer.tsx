<<<<<<< HEAD
'use client '
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import scss from './Footer.module.scss'
const Footer = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	return (
		<motion.footer
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{
				duration: 1,
			}}
			className={scss.Footer}
		>
			<div className='container'>
				<div className={scss.content}>
					<div className={scss.navs}>
						<h1>Restaurant</h1>

						<nav className={scss.inWeb}>
							<a href='#'>Menu</a>
							<a href='#about'>About Us</a>
							<a href='#interior'>Interior</a>
							<a href='#contact'>Contacts</a>
						</nav>

						<nav className={scss.soc}>
							<a href='https://t.me/Amir030707' target='_blank'>
								Telegram
							</a>
							<a href='#'>Instagram</a>
						</nav>
					</div>
					<hr />
					<span>C 2023 Motion Study LLC</span>
				</div>
			</div>
		</motion.footer>
	)
}

export default Footer
=======
import scss from './Footer.module.scss';
import { BiLogoTelegram } from "react-icons/bi";
import { PiInstagramLogoFill } from "react-icons/pi";


const Footer = () => {
  return (
    <section className={scss.footer}>
      <div className={scss.container}>
        <div className={scss.contents}>
          <div className={scss.footerBlock}>
            <h1>Restaurant</h1>
            <nav className={scss['footer-a']}>
              <a href="#">Interior</a>
              <a href="#">About Us</a>
              <a href="#">Menu</a>
              <a href="#">Contacts</a>
            </nav>
            <div className="Footer-icon">
            <BiLogoTelegram />
            <PiInstagramLogoFill />
            </div>
          </div>
          <hr />
          <div className="footer-footer">
            <h5>c 2023 Motion Study LLC</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
>>>>>>> 2814f2d9de884db401fd843c14151d371b69e630
