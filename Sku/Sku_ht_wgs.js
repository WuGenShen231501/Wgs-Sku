//检测是否第一次使用
var ban_ben_s = 'v7.13';
if (localStorage.ban_ben) {
    console.log('继续使用中');
    //检查是否最新
    if (localStorage.ban_ben !== ban_ben_s) {
        localStorage.ban_ben = ban_ben_s;
        console.log('版本以更新为 ' + ban_ben_s);
    }
} else {
    //删除所有内存
    localStorage.clear();
    console.log('欢迎使用最新版本 ' + ban_ben_s);
    //制定版本
    localStorage.ban_ben = ban_ben_s;
}
// 导航栏
if (localStorage.dhr_sz == undefined) {
    localStorage.dhr_sz = JSON.stringify(['学习', '学校', '工具', '娱乐', '个人']);
}
//导航栏页面
if (localStorage.dhr_ym_dx == undefined) {
    var dhr_ym_dx = {
        "dhr_ym_dx0": {
            "dhr_ym_sz0": ["https://developer.mozilla.org/apple-touch-icon.6803c6f0.png", "MDN", "Web", "https://developer.mozilla.org/zh-CN/#"],
            "dhr_ym_sz1": ["http://common.cnblogs.com/favicon.svg", "博客园", "Web", "https://www.cnblogs.com/"],
            "dhr_ym_sz2": ["https://static.runoob.com/images/icon/mobile-icon.png", "菜鸟教程", "Web", "https://www.runoob.com/"],
            "dhr_ym_sz3": ["https://g.csdnimg.cn/static/logo/favicon32.ico", "CSDN", "Web", "https://www.csdn.net/"],
            "dhr_ym_sz4": ["https://www.w3school.com.cn/ui2019/logo-96-red.png", "W3school", "Web", "https://www.w3school.com.cn/"],
            "dhr_ym_sz5": ["http://static.hdslb.com/mobile/img/512.png", "jQuery", "jQuery 第一集", "https://www.bilibili.com/video/BV1Sy4y1C7ha/?p=358&spm_id_from=pageDriver&vd_source=f3ca2a0fe02a1e088d04e020f7bd5583"]
        },
        "dhr_ym_dx1": {
            "dhr_ym_sz0": ["https://image.zhihuishu.com/zhs/b2cm/base1/202204/eda0803acfa845f0b22ccc02a39a0205.png", "智慧树", "智慧树在线教育", "https://passport.zhihuishu.com/login", "https://www.zhihuishu.com/DownloadApp.html"],
            "dhr_ym_sz1": ["https://t13.baidu.com/it/u=2195149262,1046606890&fm=179&app=42&size=w54&n=0&f=JPEG&fmt=auto?s=E942E410CBB3D1E112F5CCCE030080A2&sec=1676480400&t=8de151c7730d51f2f632cb63afa985e2", "江软教务系统", "江西软件职业技术大学", "http://117.167.136.220:8588/jsxsd/"]
        },
        "dhr_ym_dx2": {
            "dhr_ym_sz0": ["http://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg", "iconfont 图标库", "阿里巴巴图标库", "https://www.iconfont.cn/"],
            "dhr_ym_sz1": ["http://sp.jzsc.net/favicon.ico", "视频素材", "MP4", "http://sp.jzsc.net/"],
            "dhr_ym_sz2": ["http://js.588ku.com/comp/public/css/iconfont/favicon.ico", "千库网", "GIF 动态图片素材", "https://588ku.com/"],
            "dhr_ym_sz3": ["https://img0.baidu.com/it/u=3297579064,2961770361&fm=253&fmt=auto&app=138&f=PNG?w=256&h=256", "天气插件", "自动生成天气代码", "https://www.tianqi.com/plugin/styleset?id=1"],
            "dhr_ym_sz4": ["https://bpic.ooopic.com/15/48/87/59bOOOPICd8_1024.jpg%21/fw/780/quality/90/unsharp/true/compress/true", "特殊符号", "特殊符号大全", "http://fuhao.00cha.net/"],
            "dhr_ym_sz5": ["https://img1.baidu.com/it/u=1993709549,1175714021&fm=253&fmt=auto&app=138&f=PNG?w=300&h=300", "Swiper 中文网", "轮播图插件", "https://www.swiper.com.cn/", "https://www.swiper.com.cn/download/index.html"],
            "dhr_ym_sz6": ["https://wallhaven.cc/favicon.ico", "顶级壁纸", "外网", "https://wallhaven.cc/"],
            "dhr_ym_sz7": ["https://tool.oschina.net/img/favicon.ico", "进制转换器", "在线", "https://tool.oschina.net/hexconvert/"],
            "dhr_ym_sz8": ["http://www.zbjzy.com/wp-content/uploads/2022/10/20180927151755_28RYl.jpeg", "猪八戒资源导航", "电影、音乐、图片、漫画、素材", "http://www.zbjzy.com/?ref=wmdh1"],
            "dhr_ym_sz9": ["http://www.jshaman.com/images/logo2022.png", "JShaman", "JS加密", "http://www.jshaman.com/"],
            "dhr_ym_sz10": ["https://openaicom.imgix.net/8d14e8f0-e267-4b8b-a9f2-a79120808f5a/chatgpt.jpg?fm=auto&q=80&auto=compress,format&fit=min&rect=0,0,2048,2048&w=2560&h=2560", "ChatGPT", "人工智能", "https://openai.com/blog/chatgpt/"],
            "dhr_ym_sz11": ["https://whensunset.gallerycdn.vsassets.io/extensions/whensunset/chatgpt-china/4.5.0/1676108095916/Microsoft.VisualStudio.Services.Icons.Default", "ChatGPT插件", "VSC插件中文版", "https://marketplace.visualstudio.com/items?itemName=WhenSunset.chatgpt-china", "vscode:extension/WhenSunset.chatgpt-china"],
            "dhr_ym_sz12": ["https://skalman.github.io/UglifyJS-online/favicon.ico", "JS UGL", "JavaScript缩小器", "https://skalman.github.io/UglifyJS-online/"],
            "dhr_ym_sz13": ["https://www.lddgo.net/img/icon.png", "JS高级混淆", "在线JS混淆", "https://www.lddgo.net/encrypt/js"],
            "dhr_ym_sz14": ["https://static.runoob.com/images/c-runoob-logo.ico", "菜鸟工具", "超多在线工具", "https://c.runoob.com/"],
            "dhr_ym_sz15": ["https://static.runoob.com/images/c-runoob-logo.ico", "JS混淆加密", "来源 菜鸟工具", "https://c.runoob.com/front-end/6939/"],
            "dhr_ym_sz16": ["https://tool.p2hp.com/tools/images/icon.png", "Web 混淆", "在线全代码混淆", "https://tool.p2hp.com/tool-format-html/"],
            "dhr_ym_sz17": ["https://static.segmentfault.com/main_site/a70f86cb/touch-icon.png", "m3u8 解码工具", "m3u8 视频在线提取", "http://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html"],
            "dhr_ym_sz18": ["https://www.pptsupermarket.com/favicon.ico", "PPT 超级市场", "PPT免费下载", "https://www.pptsupermarket.com/"],
            "dhr_ym_sz19": ["https://www.100font.com/view/img/favicon.ico", "100 font", "免费商用字体网站", "https://www.100font.com/"],
            "dhr_ym_sz20": ["https://adzhp.net/wp-content/uploads/2020/02/A-win.ico", "爱达杂货铺", "资源分享收集 电影 音乐 书籍 办公", "https://adzhp.net/"],
            "dhr_ym_sz21": ["https://www.bookmarkearth.com/media/img/logo/favicon.ico", "书签地球", "浏览器书签共享平台", "https://www.bookmarkearth.com/"],
            "dhr_ym_sz22": ["https://wimg.588ku.com/gif620/20/10/30/ed7e299b6882b05ed0d1a93986e6f4f8.gif", "Tbox导航", "优质工具资源分享网站", "https://www.tboxn.com/#term-3"],
            "dhr_ym_sz23": ["https://trace.moe/favicon128.png", "trace", "AI算法图片查找视频", "https://trace.moe/"],
            "dhr_ym_sz24": ["https://static.52pojie.cn/static/image/common/logo.png", "吾爱破解", "极客技术分享安卓破解病毒分析", "https://www.52pojie.cn/"],
            "dhr_ym_sz25": ["https://image.uisdc.com/wp-content/uploads/2018/09/nav-dkt-new2018.jpg", "设计导航官网", "设计资源工具灵感设计教程", "https://hao.uisdc.com/"],
            "dhr_ym_sz26": ["https://www.midjourney.com/apple-touch-icon.png", "Midjourney", "顶级AI绘画", "https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F"],
            "dhr_ym_sz27": ["https://aicodehelper.com/image/icon-96x96.png", "AICodeHelper", "AI代码生成,免费在线生成最佳AI代码", "https://aicodehelper.com/#1"],
            "dhr_ym_sz28": ["https://www.ajihuo.com/wp-content/uploads/2022/02/favicon.png", "Web开发软件激活码", "IDEA永久破解Pycharm激活码Webstorm激活码", "https://www.ajihuo.com/"],
            "dhr_ym_sz29": ["https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*sRUdR543RjcAAAAAAAAAAAAADvuFAQ/original", "Adobe 全家桶", "Ps.Pr.Ae.Ai.Me.Au.Lr.Id.Ch.Ic.An.Pl.Br.An.Xd.Dw.Dn", "https://www.yuque.com/superindex/zu2q4n"],
            "dhr_ym_sz30": ["http://qingwendang.com/Public/img/webicon.png", "云U盘", "24小时云U盘免登入免费", "http://qingwendang.com/"],
            "dhr_ym_sz31": ["https://qrbtf.com/favicon.ico", "艺术二维码生成", "网址二维码个性化生成", "https://qrbtf.com/"],
            "dhr_ym_sz32": ["https://wangchujiang.com/linux-command/img/favicon.ico", "Linux命令搜索引擎", "添加命令 | 命令列表 | Chrome 插件 | Alfred | Dash | Krunner | 开源中国Web版", "https://wangchujiang.com/linux-command/"],
            "dhr_ym_sz33": ["https://www.logosc.cn/favicon-logosc.ico?v=4", "LOGO在线生成器", "付费LOGO生成器", "https://www.logosc.cn/"]
        },
        "dhr_ym_dx3": {
            "dhr_ym_sz0": ["https://i-1.cncrk.com/2022/3/3/836589de-b06d-4af1-9a1a-014c0923d00b.jpg", "抖音", "记录美好生活", "https://www.douyin.com/", "https://www.douyin.com/download/pc/obj/douyin-pc-client/7044145585217083655/releases/9818478/1.8.0/win32-ia32/douyin-v1.8.0-win32-ia32-douyinDownload1.exe"],
            "dhr_ym_sz1": ["https://pics3.baidu.com/feed/a1ec08fa513d26973146c27a730a17fc4216d87d.jpeg?token=16cb5f5b4a7d6a4a5be4c697d6d2c080", "嘀哩嘀哩", "必应官网", "http://dilidili12.com/"],
            "dhr_ym_sz2": ["http://static.hdslb.com/mobile/img/512.png", "哔哩哔哩", "官网", "https://www.bilibili.com/", "https://app.bilibili.com/?spm_id_from=333.1007.0.0"],
            "dhr_ym_sz3": ["https://img0.baidu.com/it/u=3758243197,3265533541&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=386", "电影天堂", "电影资源下载", "https://dy.dytt8.net/index2.htm", "https://dy.dytt8.net/app.html"],
            "dhr_ym_sz4": ["https://i2.hdslb.com/bfs/face/4437627303cfac2723d509c80c2e181c2cc33fb8.jpg@240w_240h_1c_1s.webp", "死神VS火影绊3.6", "PC 版", "https://www.jianguoyun.com/p/De71JAUQqeW4CBjyzd8D", "https://www.jianguoyun.com/p/De71JAUQqeW4CBjyzd8D"],
            "dhr_ym_sz5": ["https://img.rz520.com/uploadfile/2020/0926/20200926041200390.png", "我的世界", "我的世界药水图纸", "https://gamepedia.cursecdn.com/minecraft_zh_gamepedia/thumb/1/12/MinecraftPotionsClean.png/600px-MinecraftPotionsClean.png?version=9794ac834ba2598c660c77c33809c094"],
            "dhr_ym_sz6": ["https://www.9eip.com/wp-content/uploads/2022/10/%E5%AE%8C%E7%BE%8E%E6%96%B0logo.png", "影视网址导航大全", "影视资源网", "https://www.9eip.com/yingshidaohang"],
            "dhr_ym_sz7": ["https://api.iowen.cn/favicon/www.bfdz.ink.png", "4K影视", "VIP 破解", "https://1080p.tv/"],
            "dhr_ym_sz8": ["https://api.iowen.cn/favicon/www.acgke.cc.png", "QI影院", "来源影视资源", "https://05uskf3i.hxaa76.com/#/?referral_code=m2RsTs3d&spread_id=55"],
            "dhr_ym_sz9": ["https://api.iowen.cn/favicon/dmxq.info.png", "大米影院", "VIP 破解", "https://dmxq.info/?ref=wmdh"],
            "dhr_ym_sz10": ["https://hmcl.huangyuhui.net/favicon.ico", "HMCL", "我的世界国际版第三方启动器", "https://hmcl.huangyuhui.net/", "https://hmcl.huangyuhui.net/download/"],
            "dhr_ym_sz11": ["https://statics.123pan.com/static-by-custom/favicon.ico", "元气骑士 插件", "元气骑士内设外挂插件", "https://www.123pan.com/s/MIyrVv-lEaOd", "https://www.123pan.com/s/MIyrVv-lEaOd"],
            "dhr_ym_sz12": ["https://static.hdslb.com/images/favicon.ico", "原神 BWIKI", "原神攻略BWIKI网", "https://wiki.biligame.com/ys/%E9%A6%96%E9%A1%B5"],
            "dhr_ym_sz13": ["https://www.4khdr.cn/data/attachment/common/c8/common_2_icon.gif", "4KHDR世界", "4K高清电影免费下载", "https://www.4khdr.cn/forum.php?gid=1"]
        },
        "dhr_ym_dx4": {
            "dhr_ym_sz0": ["https://img1.baidu.com/it/u=1989144613,149585719&fm=253&fmt=auto&app=138&f=JPG?w=500&h=500", "QQ空间", "官网", "https://i.qq.com/"],
            "dhr_ym_sz1": ["https://t1.chei.com.cn/passport/favicon.ico", "学信网", "官网", "https://account.chsi.com.cn/passport/login"]
        }
    };
    localStorage.dhr_ym_dx = JSON.stringify(dhr_ym_dx);
}
//万能搜索引擎
if (localStorage.sy_sosuo_yq == undefined) {
    localStorage.sy_sosuo_yq = '百度';
}
//头像
if (localStorage.tou_xiang == undefined) {
    localStorage.tou_xiang = '';
}
//留言
if (localStorage.liu_yan_dx == undefined) {
    var liu_yan_dx = {
        "liu_yan_sz0": ["❄ 在这里可以记录你的日常任务，完成了可以右击标记一下 ❄", "2023 年 1 月 1 日 00:00", 1],
        "liu_yan_sz1": ["❄ 支持上传文字、图片、动态图片、文字链接、图片链接、视频、音乐... ❄", "2023 年 1 月 2 日 00:00", 1],
        "liu_yan_sz2": ["<a href=\"https://baidu.com\" target=“blank”><img src=\"https://wimg.588ku.com/gif620/20/06/16/02d760e4f246d75f853c608376d9afa8.gif\" height=\"150\"></a>", "2023 年 1 月 3 日 00:00", 1],
        "liu_yan_sz3": ["科目三：背灯光按钮", "2023 年 2 月 17 日 15:13", 1],
        "liu_yan_sz4": ["科目三考试", "2023 年 2 月 19 日 14:10", 1],
        "liu_yan_sz5": ["社费剩余：714", "2023 年 2 月 21 日 20:32", 1],
        "liu_yan_sz6": ["<img src=\"https://img.wxcha.com/m00/73/12/279579d11b17fbd1b78f2bba9564f114.jpg?down\">", "2023 年 2 月 21 日 21:47", 1],
        "liu_yan_sz7": ["<img src=\"https://img.wxcha.com/m00/12/d7/ffb4c08a67da82ac624c2f0a634bd144.jpg?down\" alt=\"加载失败\">", "2023 年 2 月 21 日 21:54", 1],
        "liu_yan_sz8": ["科目三：预约", "2023 年 2 月 23 日 19:39", 1],
        "liu_yan_sz9": ["社团打扫", "2023 年 2 月 26 日 21:48", 1],
        "liu_yan_sz10": ["社团训练", "2023 年 2 月 26 日 21:48", "2"],
        "liu_yan_sz11": ["社团下个月工作计划", "2023 年 2 月 26 日 21:48", 1],
        "liu_yan_sz12": ["社联开会", "2023 年 2 月 26 日 21:48", 1],
        "liu_yan_sz13": ["科目三模拟", "2023 年 2 月 26 日 21:48", 1],
        "liu_yan_sz14": ["打扫教室", "2023 年 2 月 26 日 21:49", 1],
        "liu_yan_sz15": ["社团请假条", "2023 年 2 月 27 日 18:16", 1],
        "liu_yan_sz16": ["填档案袋表", "2023 年 3 月 1 日 21:02", 1],
        "liu_yan_sz17": ["<img src=\"http://m.qpic.cn/psc?/V52EGDCK3vVnPj0nbFBN2S250R2fbpWn/ruAMsa53pVQWN7FLK88i5rrZWzPQUBnHYwPRoggbwpWaDTfoyRB5.hjRhpZT6ooVha4d7EkLOjRzWqv6.ti2bnC*J1iRY.bUrhH8nr5l2Ag!/b&bo=owLoAKMC6AADFzI!&rf=viewer_4\" width=\"\" height=\"\" loading=\"lazy\">", "2023 年 3 月 5 日 22:42", 1],
        "liu_yan_sz18": ["科目四考试", "2023 年 3 月 7 日 13:49", "2"],
        "liu_yan_sz19": ["洗衣服", "2023 年 3 月 7 日 15:45", 1],
        "liu_yan_sz20": ["收衣服<br>3个浅蓝衣架：5双袜子，4黑1白<br>3个浅蓝衣架：3条内裤，灰白、厚蓝、紫色<br>4件衣服", "2023 年 3 月 7 日 16:54", "2"],
        "liu_yan_sz21": ["道馆带学员培训", "2023 年 3 月 7 日 16:54", "2"],
        "liu_yan_sz22": ["38", "2023 年 3 月 7 日 22:15", 1],
        "liu_yan_sz23": ["团建", "2023 年 3 月 8 日 20:21", "2"]
    };
    localStorage.liu_yan_dx = JSON.stringify(liu_yan_dx);
}
// 所有壁纸
if (localStorage.bi_zhi_s == undefined) {
    var bi_zhi_s = ["https://pic.netbian.com/uploads/allimg/210317/001935-1615911575642b.jpg", "https://w.wallhaven.cc/full/5g/wallhaven-5gg6d3.png", "https://w.wallhaven.cc/full/m3/wallhaven-m33mv9.png", "https://w.wallhaven.cc/full/yx/wallhaven-yxxvox.png", "https://w.wallhaven.cc/full/3l/wallhaven-3llgk6.png", "https://w.wallhaven.cc/full/rr/wallhaven-rrrw9m.jpg", "https://w.wallhaven.cc/full/yx/wallhaven-yxxwjk.png", "https://w.wallhaven.cc/full/we/wallhaven-we56z6.png", "https://w.wallhaven.cc/full/wq/wallhaven-wq7ey6.png", "https://w.wallhaven.cc/full/v9/wallhaven-v9dvql.jpg", "https://w.wallhaven.cc/full/5w/wallhaven-5w9ej5.jpg", "https://w.wallhaven.cc/full/v9/wallhaven-v9m3z5.png", "https://w.wallhaven.cc/full/5d/wallhaven-5d3pm7.png", "https://w.wallhaven.cc/full/73/wallhaven-733vv9.png", "https://w.wallhaven.cc/full/2e/wallhaven-2ermj9.png", "https://w.wallhaven.cc/full/x8/wallhaven-x83xwd.png"];
    localStorage.bi_zhi_s = JSON.stringify(bi_zhi_s);
}
// 当前壁纸
if (localStorage.bi_zhi == undefined) {
    localStorage.bi_zhi = 'https://w.wallhaven.cc/full/rr/wallhaven-rrrw9m.jpg';
}
//天气
if (localStorage.tian_qi == undefined) {
    localStorage.tian_qi = '0';
}
//字体颜色
if (localStorage.zi_ti_color == undefined) {
    localStorage.zi_ti_color = '#ccfbff';
}
//重字体颜色
if (localStorage.zi_ti_click_color == undefined) {
    localStorage.zi_ti_click_color = '#FFD500';
}
//背景颜色
if (localStorage.bei_jing_color == undefined) {
    localStorage.bei_jing_color = '#000000';
}
//背景透明度
if (localStorage.bei_jing_tmd == undefined) {
    localStorage.bei_jing_tmd = '0.6';
}
//背景确认框
if (localStorage.bei_jing_kuan_ture == undefined) {
    localStorage.bei_jing_kuan_ture = '1';
}
//背景框颜色
if (localStorage.bei_jing_kuan_color == undefined) {
    localStorage.bei_jing_kuan_color = '#FFFFFF';
}
//背景框透明度
if (localStorage.bei_jing_kuan_tmd == undefined) {
    localStorage.bei_jing_kuan_tmd = '0.3';
}
//毛玻璃
if (localStorage.mao_bo_li == undefined) {
    localStorage.mao_bo_li = '0';
}
//备份
if (localStorage.dhr_sz_bf == undefined) {
    localStorage.dhr_sz_bf = '';
}
if (localStorage.dhr_ym_dx_bf == undefined) {
    localStorage.dhr_ym_dx_bf = '';
}
if (localStorage.bi_zhi_s_bf == undefined) {
    localStorage.bi_zhi_s_bf = '';
}
if (localStorage.liu_yan_dx_bf == undefined) {
    localStorage.liu_yan_dx_bf = '';
}
if (localStorage.sy_djs_bf == undefined) {
    localStorage.sy_djs_bf = '';
}
if (localStorage.sy_zpzs_lj_bf == undefined) {
    localStorage.sy_zpzs_lj_bf = '';
}
if (localStorage.sy_zpzs_mz_bf == undefined) {
    localStorage.sy_zpzs_mz_bf = '';
}
//使用次数
if (localStorage.sy_ci_shu == undefined) {
    localStorage.sy_ci_shu = 0;
} else {
    localStorage.sy_ci_shu++;
}
//倒计时
if (localStorage.sy_djs == undefined) {
    var sy_djs = {
        "sy_djs1": ["儿童节", 1685548800000, "2023-06-01 00:00:00"],
        "sy_djs2": ["2024年", 1704038400000, "2024-01-01 00:00:00"]
    };
    localStorage.sy_djs = JSON.stringify(sy_djs);
}
//密码
if (localStorage.dr_mm == undefined) {
    localStorage.dr_mm = '';
}
//作品展示
if (localStorage.sy_zpzs_lj == undefined) {
    var sy_zpzs_lj = ['Sku.html'];
    localStorage.sy_zpzs_lj = JSON.stringify(sy_zpzs_lj);
}
if (localStorage.sy_zpzs_mz == undefined) {
    var sy_zpzs_mz = ['本页'];
    localStorage.sy_zpzs_mz = JSON.stringify(sy_zpzs_mz);
}

// var str = 'sy_djs';
// var str64 = window.btoa(str);
// console.log("字符串是:" + str);
// console.log("经base64编码后:" + str64);
// console.log("base64解码后:" + window.atob(str64));