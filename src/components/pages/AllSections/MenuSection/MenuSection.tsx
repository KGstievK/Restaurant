import scss from './MenuSection.module.scss'

const MenuSection = () => {
  return (
    <section className={scss.MenuSection}>
      <div className="container">
        <div className={scss.content}>
          <h1>MenuSection</h1>
        </div>
      </div>
    </section>
  )
}

export default MenuSection