import materials from "../materials";
import kitchenWares from "../kitchen_wares";
import { MenuItem } from "../type";

const eggAndTomatoStirFry: MenuItem = {
  chineseName: "番茄炒蛋",
  englishName: "Egg and Tomato Stir-fry",
  functionName: 'eggAndTomatoStirFry',
  materials: [materials.tomato, materials.egg, materials.greenOnion],
  kitchenWares: [kitchenWares.fryPan],
  steps: [
    {
      type: 'assign',
      id: 'slippedTomato',
      target: '切片西红柿',
      materials: [materials.tomato],
      content: '将{materials.tomato}洗净后用沸水烫一下，去皮、去蒂，切片'
    },
    {
      type: 'assign',
      id: 'egg',
      target: '鸡蛋',
      content: '将鸡蛋打入碗中，加盐，用筷子充分搅打均匀'
    },
    {
      type: 'action',
      kitchenWares: [kitchenWares.fryPan],
      content: '{kitchenWares.fryPan}中放油'
    },
    {
      type: 'timer',
      content: '油烧热',
      timer: 120
    },
    {
      type: 'action',
      kitchenWares: [kitchenWares.fryPan],
      content: '{egg}放入{kitchenWares.fryPan}中炒熟盛出'
    },
    {
      type: 'timer',
      content: '剩余的油烧热',
      timer: 30
    },
    {
      type: 'ifAction',
      condition: '有糖',
      content: [
        {
          type: 'action',
          content: '放入糖'
        }
      ]
    },
    {
      type: 'action',
      content: '放盐'
    },
    {
      type: 'action',
      content: '下{slippedTomato}煸炒，倒入鸡蛋翻炒几下出锅即成'
    }
  ]
}

export default eggAndTomatoStirFry;