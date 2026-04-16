// 1. 图片切换逻辑
const mainImg = document.getElementById('main-img');
const toggleBtn = document.getElementById('toggle-btn');
const introWrapper = document.getElementById('intro-wrapper');

// 替换为你自己的两张图片路径
const coverImg = '开封府1.jpg'; // 初始封面图
const axisImg = '开封府2.jpg';   // 带轴线的分区图

let isAxisView = false;

toggleBtn.addEventListener('click', () => {
    isAxisView = !isAxisView;
    if (isAxisView) {
        mainImg.src = axisImg;
        toggleBtn.textContent = '← 返回封面图';
        // 切换介绍文字（可选，也可以保留原介绍）
        document.querySelector('.intro-content').innerHTML = `
            <p>开封府复建严格遵循北宋《营造法式》，采用<strong>中轴线对称布局</strong>，分为三大功能区：</p >
            <p><strong>① 西线（武备刑狱）</strong>：宋代监狱、演武场等司法武备区域</p >
            <p><strong>② 中线（核心政务）</strong>：府门、仪门、正厅、议事厅等核心办公区</p >
            <p><strong>③ 东线（文化景观）</strong>：清心楼、潜龙宫、明礼院等文化园林区</p >
            <p style="text-align:center; margin-top:20px; color:#8b0000;">点击对应区域，查看3D实景与详细介绍</p >
        `;
    } else {
        mainImg.src = coverImg;
        toggleBtn.textContent = '点击查看轴线分区 →';
        // 恢复初始介绍
        document.querySelector('.intro-content').innerHTML = `
            <p><strong>始建</strong>：五代后梁开平元年（907年），朱温升汴州为开封府。</p >
            <p><strong>鼎盛（北宋）</strong>：都城东京（汴梁）的“天下首府”，辖17县，掌司法、治安、户籍、赋税。</p >
            <p><strong>衰落</strong>：北宋后地位下降，原建筑被黄河水患、战火彻底摧毁。</p >
            <p><strong>重建</strong>：2002-2003年依《营造法式》复建，2003年开放。</p >
        `;
    }
});

// 2. 区域数据配置（替换为你自己的3D图和介绍）
const areaData = {
    west: {
        title: "西线 · 武备刑狱",
        img: "西.jpg", // 西线3D图路径
        text: `
            <h3>西线 · 武备刑狱</h3>
            <p><strong>核心功能</strong>：宋代司法、武备、监狱区域，是开封府“执法威严”的象征。</p >
            <p><strong>主要建筑</strong>：</p >
            <ul>
                <li><strong>府司西狱</strong>：宋代监狱，含死牢、男女牢、狱神庙，还原北宋狱制</li>
                <li><strong>英武楼、校场</strong>：演武、迎宾、表演场地，展示宋代武备文化</li>
                <li><strong>天庆观</strong>：北宋官方道观，设太极八卦台、三清殿</li>
            </ul>
            <p>该区域完整还原了北宋开封府的司法体系，是了解宋代刑狱制度的核心展区。</p >
        `
    },
    center: {
        title: "中线 · 核心政务",
        img: "中.jpg", // 中线3D图路径
        text: `
            <h3>中线 · 核心政务</h3>
            <p><strong>核心功能</strong>：开封府的行政中枢，严格遵循中轴线对称布局，是北宋官署规制的典范。</p >
            <p><strong>主要建筑</strong>：</p >
            <ul>
                <li><strong>府门</strong>：悬“开封府”匾额，石狮镇守，是开封府的入口标志</li>
                <li><strong>仪门</strong>：官员礼仪之门，体现宋代官仪</li>
                <li><strong>正厅（大堂）</strong>：包公断案核心，前有龙头/虎头/狗头铡、鸣冤鼓、戒石铭</li>
                <li><strong>议事厅</strong>：府尹办公、集议之所</li>
                <li><strong>梅花堂</strong>：“包公倒坐南衙”审案场景，是开封府的文化符号</li>
            </ul>
            <p>该区域是开封府的灵魂，完整还原了北宋天下首府的政务格局。</p >
        `
    },
    east: {
        title: "东线 · 文化景观",
        img: "东.jpg", // 东线3D图路径
        text: `
            <h3>东线 · 文化景观</h3>
            <p><strong>核心功能</strong>：文化、教育、园林景观区，展现北宋东京的文化繁荣。</p >
            <p><strong>主要建筑</strong>：</p >
            <ul>
                <li><strong>清心楼</strong>：全府最高建筑（四层），登楼俯瞰全景，藏历代府尹事迹、包拯“清心为治本”座右铭</li>
                <li><strong>潜龙宫</strong>：全国唯一府衙内“宫”，供宋太宗、真宗、钦宗像</li>
                <li><strong>明礼院（科举区）</strong>：拱奎楼、桂籍堂，还原北宋解试考场</li>
                <li><strong>明镜湖、范公阁</strong>：园林景观，融山水与人文于一体</li>
            </ul>
            <p>该区域是开封府的文化名片，集中展现了北宋的教育、科举与园林文化。</p >
        `
    }
};

// 3. 弹窗交互逻辑
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalText = document.getElementById('modal-text');
const closeBtn = document.getElementById('close-btn');
const hotzones = document.querySelectorAll('.hotzone');

// 点击热区打开弹窗
hotzones.forEach(zone => {
    zone.addEventListener('click', () => {
        const area = zone.dataset.area;
        const data = areaData[area];
        
        modalImg.src = data.img;
        modalText.innerHTML = data.text;
        modal.style.display = 'flex';
    });
});

// 关闭弹窗
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 点击弹窗外部关闭
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ESC键关闭弹窗
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.style.display = 'none';
    }
});