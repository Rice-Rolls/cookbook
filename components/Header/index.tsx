import { Button } from 'antd';
import styles from './index.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        Cookbook
      </div>
      <Button className={styles.search}>Search My Cookbook</Button>
    </div>
  )
}

export default Header;