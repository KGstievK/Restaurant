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
