import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image'
import { faClock, faBacon, faSpoon } from '@fortawesome/free-solid-svg-icons'
import { Typography } from "antd";
import eggAndTomatoStirFry from "menus/foods/eggAndTomatoStirFry";
import styles from './index.module.scss'
import render from "./render";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import CodeBlock from "components/CodeBlock";
import React from "react";

const { Text } = Typography;


interface InfoItemProps {
  icon: IconProp;
  title: string;
  content: React.ReactNode
}

const InfoItem = ({ icon, title, content }: InfoItemProps) => {
  return (
    <div className={styles.infoItem}>
      <FontAwesomeIcon className={styles.icon} icon={icon} size={'xs'} />
      <div className={styles.infoTitle}>
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </div>
  )
}

const Cookbook = () => {
  const { chineseName, functionName, englishName, steps, materials, kitchenWares, time, img } = eggAndTomatoStirFry;
  console.log(img)
  return (
    <div className={styles.cookbook}>
      <h2 className={styles.name}>
        <span className={styles.displayName}>{englishName}</span>
        <span className={styles.backName}>{chineseName}</span>
      </h2>
      <div className={styles.content}>
        <CodeBlock>
          <div className={styles.code}>
            <code>function {functionName}() {`{`}</code>
            {render(steps)}
            <code>{`}`}</code>
          </div>
          </CodeBlock>    
        <div className={styles.extraInfo}>
          <InfoItem icon={faClock} title="Estimate time" content={`${time / 60} mins`} />
          <InfoItem icon={faBacon} title="Used materials" content={materials?.map((item) => <span key={item}>{item}; </span>)} />
          <InfoItem icon={faSpoon} title="Used kitchen Wares" content={kitchenWares?.map((item) => <span key={item}>{item}; </span>)} />
        </div>
        <div className={styles.backImage}>
          <img src={`/${img}`} alt="Egg and Tomato Stir-fry" />
        </div>
        <div className={styles.type}>"Chinese Food"</div>
      </div>
    </div>
  )
}

export default Cookbook;