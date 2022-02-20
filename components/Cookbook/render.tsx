import { Typography } from "antd";
import { kitchenWares, materials } from "menus/.";
import { ActionStep, AssignStep, IfActionStep, Step, TimerActionStep } from "menus/type";
import { useMemo } from "react";
import styles from './index.module.scss'

const { Text } = Typography;

const assign = (step: AssignStep) => {
  const { id, target, content } = step;
  return (
    <>
      const {target} = {content};
    </>
  )
}

const action = (step: ActionStep) => {
  const { content } = step;
  return (
    <>
      {content};
    </>
  )
}

const timer = (step: TimerActionStep) => {
  const { content, timer } = step;
  return (
    <>
      await {content} ({timer}s);
    </>
  )
}

const ifAction = (step: IfActionStep) => {
  const { condition, content } = step;
  return (
    <>
      if ({condition}) {`{`}
      {renderFunc(content)}
      {`}`}
    </>
  )
}

const renderMap: Record<string, (step: any, indent?: number) => JSX.Element> = {
  assign,
  action,
  timer,
  ifAction
}

const renderFunc = (steps: Step[], indent = 2) => {

  const variables: Record<string, Record<string, string>> = {
    materials,
    kitchenWares,
    id: {}
  };
  steps.forEach((step) => {
    if(step.type === 'assign'){
      const { id, target } = step;
      variables.id[id] = target;
    }
  })

  return steps.map((step => {
    const stepRender = renderMap[step.type];
    if(stepRender) {
      const { content } = step;
      let replacedContent = content;
      if (typeof content === 'string') {
        replacedContent = content?.replace(/\{(\w+\.?\w+)\}/g, (match, $1: string) => {
          const format$1 = $1.split('.');
          const value = format$1.pop() ?? '';
          const key = format$1.pop() ?? 'id';
          return variables?.[key]?.[value] ?? $1
        })
      }
      return <Text className={styles.code} style={{ paddingLeft: `${indent}rem` }} code>{stepRender({...step, content: replacedContent})}</Text>
    }
    return null;
  }))
}

export default renderFunc;