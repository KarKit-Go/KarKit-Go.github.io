import { useState, useEffect } from "react";

import "../styles/Homepage.scss";

import { PageFooter } from "./PageHeader";

const intro: string[] = [
  "为特殊用户、以及特殊情境下的用户做设计，是设计师和设计专业学生感兴趣的话题。然而，当真正开展设计时我们却发现，作为设计师的我们往往很难，或者说需要花费很多时间和成本才能接触到真实的用户。而现有的“模拟器”之类的工具也有着娱乐性大于仿真度、模拟体验不够真实、受限于特殊设备等等弊端，无法满足设计师的需求。有没有什么方法能够帮助设计师们更好地以低成本实现特色情境的模拟、帮助他们完成初步的共情或者测试？",
  "以驾驶场景为例，我们推出了KarKit，一套用于模拟驾驶环境和驾驶体验的工具包。它包含以下部分：（1）KarKit应用程序；（2）KarKit硬件套装；（3）KarKit使用手册。应用程序包括电脑端的通讯系统以及手机端的小车控制系统。硬件套装由一些常见的、低成本的物件组成，包括：小车套件、瓦楞纸组件、魔术贴等，以及其他可由用户自行获取和添置的附加材料。",
  "我们的评估结果表明，用户在使用手册的指导下，成功用硬件套装中提供的原料搭建属于自己的驾驶场景，并通过应用程序仿真第一视角的驾驶体验。",
];

const Homepage = () => {
  return (
    <>
      <div className="banner">
        <div className="declare">
          <div className="blank-l"></div>
          <div className="main-body">
            <div className="title">KarKit</div>
            <div className="text">
              KarKit是一套用于模拟驾驶环境和驾驶体验的低成本工具包。在设计初期，如果您需要快速地和驾驶相关职业的人群产生共情，或快速地测试您的汽车相关的设计雏形是否具有可行性，您可以使用KarKit来进行简单的实验。
            </div>
          </div>
          <div className="blank-r"></div>
        </div>
      </div>
      <div className="intro-wrapper">
        <div className="intro-container">
          <div className="intro-title">简介</div>
          <div className="main-text">
            {intro.map((item, index) => (
              <div className="intro-main-text" key={index}>
                {" "}
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageFooter text="-KarKit-" />
    </>
  );
};

export default Homepage;
