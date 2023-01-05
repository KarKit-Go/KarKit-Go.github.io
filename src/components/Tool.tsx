import ContentPageCatalog, { IContent } from "./ContentPageCatalog";

const contentList: IContent[] = [
  {
    id: "aa",
    title: "小车配置",
    content: [
      "执行机构：",
      "● 选型：TT电机+麦克纳姆轮",
      "● 理由：采用麦克纳姆轮可以减少一定的机械结构复杂度，降低用户的拼装难度",
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051607487.png",
      "控制系统：",
      "● 选型：Arduino+motor Shield+ESP32",
      "● 理由：电机驱动板中以基于arduino的最为丰富，功能也最为强大，故而使用arduino以及盾板进行驱动，而使用esp32进行串口通信与网络通信，控制小车",
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051607488.png",
      "动力系统：",
      "● 选型：18650电池",
      "● 理由：相对通用，电池盒的适配更便捷",
    ],
  },
  {
    id: "bb",
    title: "环境材料",
    content: [
      `我们提供的材料：`,
      `1. 魔术贴带：贴在地面上，用于划分道路与连接几何体`,
      `2. 魔术贴圆点：贴在您制作的环境模拟物上，将其与魔术贴带固定`,
      `3. 划线瓦楞纸：3cm*3cm的方格瓦楞纸，您可以根据此制作比例合适的环境模拟物`,
      `制作方式跳转<a href="../#/book">操作手册</a>`,
      `4. 普通瓦楞纸：用此自定义环境模拟物`,
      `5. 卡片夹：用此操纵需要移动的环境模拟物`,
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051653884.png",
      `自备的自定义材料：`,
      `1. 报纸：可以揉成任何您需要的形状，可以作为支撑物或是几何体使用`,
      `2. 喷雾：可以模拟天气，进行视线阻挠`,
      `3. 颜料：可以测试环境中的颜色影响效果`,
      `4. 根据您测试所需的其它个性化材料`,
    ],
  },
  {
    id: "cc",
    title: "电脑软件",
    content: [
      "1. chrome浏览器（最新版）",
      "理由：兼容性好，可以避免许多bug",
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301021802140.png",
      "2. mixly安装",
      "理由：简单易用，上手快",
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301021806716.png",
      "3. 花生壳内网透传",
      "其它类似的内网透传软件也可以",
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301021809923.png",
      "4. 腾讯会议等即时通讯软件",
    ],
  },

  {
    id: "dd",
    title: "手机软件",
    content: [
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051607485.png",
      `软件控制端使用逻辑架构`,
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051607492.png",
      "手机软件端驾驶状态显示",
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051607493.png",
      "实时镜头画面",
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051607489.png",
      "测试设置与显示调节",
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051607490.png",
      "设备连接与传感器设置",
      "https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051607494.png",
      "测试回放与数据记录",
    ],
  },
];

const Tool = () => {
  return (
    <ContentPageCatalog
      title="工具介绍"
      contentList={contentList}
    ></ContentPageCatalog>
  );
};

export default Tool;
