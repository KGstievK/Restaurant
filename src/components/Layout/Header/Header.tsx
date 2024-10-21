import scss from './Header.module.scss';

const Header = () => {
  return (
    <section className={scss.header}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.headerBlock}>
            <h1>Restaurant</h1>
            <nav className={scss['header-a']}>
              <a href="#">Interior</a>
              <a href="#">About Us</a>
              <a href="#">Menu</a>
              <a href="#">Contacts</a>
            </nav>
            <div className={scss['header-button']}>
              <div className={scss['search-wrapper']}>
                <input type="text" placeholder="Search..." />
                <i className="fas fa-search"></i>
              </div>
            </div>
            <div className={scss['header-en']}>
              <a href="#">En</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
