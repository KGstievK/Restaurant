import MenuTab from '@/ui/menuTab/MenuTab'
import scss from './MenuSection.module.scss'

const MenuSection = () => {
  return (
    <section className={scss.MenuSection}>
      <div className="container">
        <div className={scss.content}>
          <h1>MenuSection</h1>
          <MenuTab/>
        </div>
      </div>
    </section>
  )
}
export default MenuSection
