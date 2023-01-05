import ContentOperation, { IContent } from "./ContentOperation";

const contentList: IContent[] = [
  {
    id: "aaa",
    title: "测试案例",
    tips: "这是为您提供的使用KarKit进行初步原型测试的案例，能够帮助您进一步理解KarKit的使用方式。",
    content: `<img class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052002999.png" alt="pic" />
    <div class="little-title">测试设计</div>
    <div class="text">测试目的：研究文本、图像、视频、音频等因素对于驾驶者在驾驶过程中专注度的影响。</div>
    <div class="text">测试时间：2022年11月13日</div>
    <div class="text">测试地点：室外空地</div>
    <div class="text">测试流程：</div>
    <div class="text">测试一 语音（问答、聊天、唱歌）、动作（颈部、手势、表情）对驾驶专注度的影响</div>
    <div class="text">测试二 视觉、听觉、嗅觉、吹风对驾驶专注度的影响</div>
    <div class="text">测试项目：</div>
    <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052004697.png" alt="pic" />
    <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052004698.png" alt="pic" />
    <div class="text">测试记录表：<a href="https://docs.qq.com/doc/DSEVkeU9lbXV4dG15">点击查看</a></div>
    <div class="text">测试需要器材：</div>
    <div class="text">1. 小车空间：颠簸路面、加油站、小坡、隧道、高空坠物</div>
    <div class="text">2. 用户：方向盘、耳机</div>
    <div class="text">3. 测试引导人：手电筒、香水、喷雾、纸片等</div>
    <div class="text">测试人员工作安排：</div>
    <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052003202.png" alt="pic" />
    <div class="little-title">材料准备</div>
    <div class="text">提供材料（魔术贴带、魔术贴圆点、划线瓦楞纸、瓦楞纸、卡片夹）</div>
    <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301051653884.png" alt="pic" />
    <div class="little-title">现场布置</div>
    <div class="text">根据实验需求，设计实验场地。实验现场包含的要素有：</div>
    <div class="text">天：下雨模拟、雾天模拟</div>
    <div class="text">地：隧道、坡地、颠簸路段</div>
    <div class="text">人：加油站、行人</div>
    <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052003203.png" alt="pic" />
    <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052003204.png" alt="pic" />
    <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052003089.png" alt="pic" />
    <div class="text">1、使用背胶魔术贴带，根据图纸在地面上粘贴道路界线。</div>
    <div class="text">2、制作地面道具</div>
    <div class="text">颠簸地面制作：将划线瓦楞纸裁剪成3*11格，竖向卷起，用透明胶粘贴，形成三棱柱。在棱柱其中一侧面粘贴魔术贴，即可固定在道路上。</div>
    <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052003094.png" alt="pic" />    
    <div class="text">坡道制作：将划线瓦楞纸分别裁剪成11*72、11*44两部分，分别作为坡道的支撑和坡面。在支撑和坡面相接处贴上魔术贴，使二者相连。在起点、端点和支撑与道路相接处贴上魔术贴，使坡面固定在道路上。</div>
    <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052003092.png" alt="pic" />
    <div class="text">方形体块制作：将划线瓦楞纸裁剪成十字形，预留固定条。折叠成无底长方体后，在预留固定条上粘贴魔术贴，和道路固定。</div>
    <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052003093.png" alt="pic" />
    <div class="text">隧道制作：将划线瓦楞纸裁剪成长方形，预留固定条，折叠成正方体筒状，在固定条上贴正负魔术贴，使隧道成型。在底部贴上魔术贴，使固定在道路上。</div>
    <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052003094.png" alt="pic" />
    <div class="text">3、准备手动环境道具</div>
    <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052003200.png" alt="pic" />
    <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052003201.png" alt="pic" />`,
  },
  {
    id: "bbb",
    title: "测试设计",
    tips: "首先，您需要根据您的测试需求为本次实验进行设计。您可以通过完善以下信息理清测试思路。",
    content: `<div class="text">一、测试目的：</div>
    <div class="text">二、测试时间：</div>
    <div class="text">三、测试地点：</div>
    <div class="text">四、测试流程大纲：</div>
    <div class="text">五、测试具体项目：</div>
    <div class="text">六、测试环境模拟：</div>
    <div class="text">建议从天、地、人三个角度进行思考</div>
    <div class="text">七、测试需要器材：</div>
    <div class="text">1. 小车空间需要？</div>
    <div class="text">2. 用户需要？</div>
    <div class="text">3. 引导者需要？</div>
    <div class="text">八、测试人员工作安排：</div>
    <div class="text">1. 观察者</div>
    <div class="text">2. 引导者</div>
    <div class="text">3. 录像者</div>
    <div class="text">九、测试记录方式：</div>
    <div class="text">1. 测试项目</div>
    <div class="text">2. 被试者主观评价</div>
    <div class="text">3. 被试者评分体系</div>
    <div class="text">4. 观察者主观记录</div>
    <div class="text">5. 观察者评分体系</div>`,
  },
  {
    id: "ccc",
    title: "材料准备",
    tips: "实验前，您需要准备一部分定制器材和一部分常见的材料。",
    content: `
        <div class="little-title">器材准备</div>
        <div class="text">我们能够为您提供以下器材，您可以依据您的实验需求选择配置：</div>
        <div class="text">基础设备：</div>
        <div class="text">小车：具备模拟油门、刹车、转向的基本驾驶功能。可根据您的需求自定义外观、尺寸、动力系统、配重等。可配置扩展模块以增加或调整更多功能。</div>
        <div class="text">油门、刹车：实现对小车运动速度的控制。</div>
        <div class="text">扩展模块：</div>
        <div class="text">小车的扩展模块：灯光、鸣笛、配重体、档位控制器</div>
        <div class="text">环境的扩展模块：路灯、交通信号灯、瓦楞纸板、魔术贴</div>
        <div class="text">您需要另外准备以下材料：</div>
        <div class="text">绘画工具、剪裁工具、粘贴工具</div>
        <div class="text">至少一台计算机（含较大尺寸的显示器）</div>
        <div class="text">至少一张驾驶用座椅</div>
        <div class="text">手机（可联网含陀螺仪）——用于制作方向盘</div>
        <div class="text">根据您实验需求所需的其他物品</div>

        <div class="little-title">小车配置</div>
        <div class="text">1. 安装电机：</div>
        <div class="text">将电机依次安装在车身上，注意彼此方向</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301031858503.png" alt="pic" />

        <div class="text">2. 安装麦克纳姆轮：</div>
        <div class="text">将麦克纳姆轮以正确的方式进行安装，如下图所示，俯视来看四个轮子形成一个“米”字</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301031904009.png" alt="pic" />

        <div class="text">3. 连接电路：</div>
        <div class="text">将电机按照以下顺序连接</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052040202.png" alt="pic" />

        <div class="text">4. 连接电源</div>
        <div class="text">在确保电池还有电后接入系统</div>

        <div class="text">5. wifi配网：</div>
        <div class="text">确保目前使用的电脑具有无线网卡，可以连接wifi</div>
        <div class="text">给esp32上电，自动进入AP模式，会出现名为WifiManager的WIFI，使用电脑进行连接，密码为11223344</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052037886.png" alt="pic" />

        <div class="text">然后打开电脑的热点，配置一个wifi共享，网络频段需要配置为2.4GHz</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301031737683.png" alt="pic" />

        <div class="text">随后可以打开浏览器，访问192.168.4.1，可以看到esp32目前所扫描到的WIFI，如果没有自己的WIFI，可以刷新页面或者是检查热点的网络频段配置</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301031737689.png" alt="pic" />
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301031737682.png" alt="pic" />

        <div class="text">选择自己的wifi，然后输入密码，点击submit，即可看到配置成功的页面</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301031737690.png" alt="pic" />
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301031737690.png" alt="pic" />
         <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301031737691.png" alt="pic" />

        <div class="text">随后查看esp32的IP地址，在浏览器中访问IP:8080/test，出现如下页面即证明配置成功</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301031737692.png" alt="pic" />

        <div class="text">之后可以打开某个内网透传软件（以花生壳为例），配置一条HTTPS映射，内网主机填入esp32的IP地址，端口为8080，随后，即可在外网地址上访问我们的esp32了，至此，配网结束</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301031737685.png" alt="pic" />
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301031737687.png" alt="pic" />
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301031737688.png" alt="pic" />
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301031737686.png" alt="pic" />
        

        <div class="little-title">Mixly安装</div>
        <div class="text">1. 前往官网下载，mixly2.0RC3，或前往官方QQ群下载（群号199124078）</div>
        <div class="text">2. 根据官方文档进行安装，在路径中不要包含中文即可</div>

        <div class="little-title">Mixly库导入</div>
        <div class="text">在下载好我们提供的mixly库后，打开mixly</div>
        <div class="text">首先选择mixly中的arduino模块</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301022045015.png" alt="pic" />
        
        <div class="text">然后在右上角的设置中选择管理库</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301022045014.png" alt="pic" />
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301022045013.png" alt="pic" />

        <div class="text">接下来选择本地导入</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301022045012.png" alt="pic" />

        <div class="text">找到相应的路径，选择xml文件，随后点击确定</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301022045011.png" alt="pic" />

        <div class="text">我们的KarKit库就顺利导入了！</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301022045010.png" alt="pic" />
    `,
  },
  {
    id: "ddd",
    title: "现场布置",
    tips: "您需要两个独立的空间，分别是【驾驶空间】与【小车空间】。",
    content: `
        <div class="little-title">驾驶空间</div>
        <div class="text">驾驶空间是被试（即驾驶者）所处的空间，包括驾驶座椅、驾驶工具（方向盘、油门刹车等）、驾驶视角（显示器）以及您测试所需的其它物品。</div>
        <div class="text">驾驶者就座，手持方向盘控制车辆行驶方向，脚踩油门刹车控制车辆行驶速度和加速度，面对显示屏，头戴降噪耳机，模拟真实驾驶环境。</div>
        <div class="text">1 方向盘</div>  
        <div class="text">手机上安装karkit的程序，通过摇杆控制小车向左向右转，通过屏幕按键控制小车加速减速。</div>
        <div class="text">拓展说明：可以按图示方案，使用瓦楞纸板制作直径为38cm左右的方向盘，通过魔术贴将手机与方向盘粘连在一起。</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052104388.png" alt="pic" />
        
        <div class="little-title"></div>
        <div class="text">2 刹车油门</div>
        <div class="text">使用手机端KarKit应用程序中的刹车和油门按键，控制小车的加速和减速。</div>
        <div class="text">拓展说明：可以按图示方案，使用木板制作简易刹车油门二合一设备，压力传感器检测是否需要加速。</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052104457.png" alt="pic" />

        <div class="text">3 屏幕 </div>
        <div class="text">屏幕放置在驾驶者面前约30cm远处，确保屏幕内容能占据驾驶者视野范围的大部分区域。</div>
        <div class="text">4 降噪耳机</div>
        <div class="text">驾驶员需要佩戴一副降噪耳机，以达到排除杂音干扰，还原真实车内空间的氛围。</div>

        <div class="little-title">小车空间</div>
        
        <div class="text">小车空间是为小车在模拟场景中驾驶所准备的空间。包括小车及一切场景模拟装置。</div>
        <div class="text">1. 小车的配置与安装</div>
        <img  class="pic" src="https://raw.githubusercontent.com/wujinhjun/wujinhjun-pic/main/202301052104867.png" alt="pic" />

        <div class="text">2. 环境的布置</div>
        <div class="text">(1)道路的搭建</div>
        <div class="text">工具包提供的魔术贴条可以用来贴出小车的行驶路线，固定场地各要素。道路宽度大约为30厘米。</div>
        <div class="text">(2)环境要素的准备</div>
        <div class="text">● 工具包提供的划线瓦楞纸为您提供简单易操作的制作原料。您可以依据边长3厘米的方格，准确测量并省力地切割您需要的长度，而后弯折成你想要的样子。瓦楞纸可以制作大部分的地形效果和街景构筑物。</div>
        <div class="text">● 工具包提供的魔术贴圆点能够代替各类胶水，让您快捷地粘贴各要素，并且便于拆卸收纳和多次利用。</div>
        <div class="text">● 工具包提供的空白瓦楞纸轻薄而易于剪裁，您可以到开源网站下载人物等素材，打印或绘画并裁剪成为环境中的要素。这些要素可以通过卡片夹实时置入小车行驶场地，也可以插入底座，粘贴在道路两侧。</div>
        <div class="text">● 除工具包外，生活中也有丰富的原材料供您选择。您可以利用身边的旧报纸制作山体、落石；利用水壶模拟雨天；利用手电筒模拟强光……一切取决于你的创造力！</div>`,
  },
];

const Book = () => {
  return (
    <ContentOperation
      title="操作手册"
      contentList={contentList}
    ></ContentOperation>
  );
};

export default Book;
