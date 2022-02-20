import { Typography } from "antd";
import eggAndTomatoStirFry from "menus/foods/eggAndTomatoStirFry";
import styles from './index.module.scss'
import render from "./render";

const { Text } = Typography;

const Cookbook = () => {
  const { chineseName, functionName, englishName, steps, materials, kitchenWares } = eggAndTomatoStirFry;
  return (
    <div className={styles.cookbook}>
      <h2>{chineseName} / {englishName}</h2>
      <h3>Used materials: {materials?.map((item) => <span key={item}>{item}; </span>)}</h3>
      <h3>Used kitchen Wares: {kitchenWares?.map((item) => <span key={item}>{item}; </span>)}</h3>
      <div className={styles.code}>
        <Text code>function {functionName}() {`{`}</Text>
        {render(steps)}
        <Text code>{`}`}</Text>
      </div>
    </div>
  )
}

export default Cookbook;