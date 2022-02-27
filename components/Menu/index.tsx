import { List } from 'antd';
import { menus } from 'menus';
import styles from './index.module.scss'

const Menu = () => {
  const types = Object.keys(menus) as [keyof typeof menus];
  return (
    <div className={styles.menu}>
      <h2>"Menu"</h2>
      {
        types.map((type => {
          return (
            <div key={type}>
              <h3 className={styles.category}>{menus[type].displayName}</h3>
              <div className={styles.dishes}>
                {menus[type].menus.map(menu => {
                  return (
                    <div className={styles.dish} key={menu.englishName}>{menu.chineseName}</div>
                  )
                })}
              </div>
            </div>
          )
        }))
      }
    </div>
  )
}

export default Menu;