import ContentPageCatalog, { IContent } from "./ContentPageCatalog";

const contentList: IContent[] = [
  {
    id: "a",
    title: "设计背景",
    content: [
      "在本学期的《产品设计3》课程中，我们想要针对长途货车司机这一人群进行产品设计，希望能改善货车司机工作中的疲劳驾驶问题。然而，我们遇到了一系列的难题。当我们进行用户调研时发现，卡车司机的群体固然庞大，但他们的工作需要特定的驾驶证和车辆，作为学生，很难去体验他们真实的工作状态，也难以理解他们工作时的疲劳情况。当我们制作出一些交互原型后又发现，在真实的驾驶场景中对原型进行测试是一件非常危险的事，而仿真驾驶系统对于学生而言成本又太过高昂，且很少能找到合适的设备。",
      "于是，我们进一步联想到，不仅是驾驶，面对一些难以亲身体验或测试的特殊情境，如航空飞行、灾情等，在设计师前期的共情以及初步的原型测试阶段都会遇到模拟难度大、成本高的问题。那么，我们是否能提供一些可靠的工具，帮助设计师们更好地以低成本实现特色情境的模拟、帮助他们完成初步的共情或者测试？这便是我们设计KarKit的契机。",
    ],
  },
  {
    id: "b",
    title: "问题定义",
    content: [
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051517375.png",
    ],
  },
  {
    id: "c",
    title: "痛点分析",
    content: [
      "1. 设计师难有机会共情到用户状态",
      "2. 前期原型测试安全隐患和成本消耗过大",
      "3. 前期经验少，耗费设计师大量时间",
    ],
  },
  {
    id: "d",
    title: "问题聚焦",
    content: [
      "怎样以的方式，让<strong>低技术低成本</strong>的方式，让<strong>设计师模拟特色情景</strong>，实现<strong>初步共情或者测试</strong>？",
    ],
  },
  {
    id: "e",
    title: "头脑风暴",
    content: [
      "为此，我们进行了一轮头脑风暴。",
      "在设计的共情环节，由于设计场景的特殊限制，存在一手调研/访谈样本数量不足，以及体验缺少资金、技术等多维度的学习体验门槛，设计师前期共情需要低成本的氛围的营造和行动的模拟引入。",
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051536860.png",
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051536858.png",
      "例如需要舱体视角的驾驶环境及极端工作环境特有的感知限制，我们希望应用AR技术构建一个模拟真实的视觉场景环境，或利用arduino元件建立在动作指令、信息传达等体验上尽量仿真的交互体验，从而帮助设计师发现设计痛点，触发设计灵感。",
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051536861.png",
    ],
  },
  {
    id: "f",
    title: "设计过程",
    content: [],
  },
  {
    id: "g",
    title: "第一次测试",
    content: [],
  },
  {
    id: "h",
    title: "第二次测试",
    content: [],
  },
];

const Design = () => {
  return <ContentPageCatalog title="设计流程" contentList={contentList} />;
};

export default Design;
