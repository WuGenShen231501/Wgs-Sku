// 提示音
var sku_tsy = document.querySelectorAll('.sku_tsy');

function Sku_tsy(num) {
    sku_tsy[num].play();
}

// 全部密钥
var miyao = 688;
//WGS_zfc_jiami('要加密的文本','整数值(密钥)');
function WGS_zfc_jiami(nr, key) {
    function xorEncode(str, key) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            result += String.fromCharCode(charCode ^ key);
        }
        return result;
    }
    const encrypted = xorEncode(nr, key);
    return encrypted;
}
//WGS_zfc_jiami('要解密的文本','整数值(密钥)');
function WGS_zfc_jiemi(nr, key) {
    function xorEncode(str, key) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            result += String.fromCharCode(charCode ^ key);
        }
        return result;
    }
    const decrypted = xorEncode(nr, key);
    return decrypted;
}

// WGS_wenbengundon(class,首行缩进)
function WGS_wenbengundon(qwe, asd) {
    if (asd == undefined) { asd = 0; }
    var wb = document.querySelectorAll(qwe);
    for (var i = 0; i < wb.length; i++) {
        wb[i].addEventListener('mouseover', function(e) {
            var nrcd = this.scrollWidth;
            var hzcd = this.offsetWidth;
            if (nrcd > hzcd) {
                var duochu = nrcd - hzcd;
                var sj = duochu / 50;
                this.style.transition = sj + 's linear';
                this.style.textIndent = (nrcd * -1) + hzcd + (asd * 1) - asd + 'px';
            }
        });
        wb[i].addEventListener('mouseout', function(e) {
            this.style.transition = '';
            this.style.textIndent = asd + 'px';
        });
    }
}

// 弹窗提醒
function Sku_tctx(zdysx1) {
    var div = document.createElement('div');
    div.className = "Sku_tcjg_Max";
    div.innerHTML = zdysx1;
    if (localStorage.bei_jing_kuan_ture == 1) {
        div.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    }

    document.body.appendChild(div);

    var Sku_tcjg_Max = document.querySelectorAll('.Sku_tcjg_Max');
    Sku_tcjg_Max[Sku_tcjg_Max.length - 1].style.left = ((window.innerWidth / 2) - (Sku_tcjg_Max[Sku_tcjg_Max.length - 1].offsetWidth / 2)) + 'px';

    setTimeout(function() {
        var Sku_tcjg_Max = document.querySelectorAll('.Sku_tcjg_Max');
        document.body.removeChild(Sku_tcjg_Max[0]);
    }, 2500)
}




function RGB_zhq(hex, opacity) {
    if (!opacity) {
        let rgb = 'rgb(' + parseInt('0x' + hex.slice(1, 3)) + ', ' +
            parseInt('0x' + hex.slice(3, 5)) + ', ' +
            parseInt('0x' + hex.slice(5, 7)) + ')';
        return rgb;
    } else {
        let rgba = 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ', ' +
            parseInt('0x' + hex.slice(3, 5)) + ', ' +
            parseInt('0x' + hex.slice(5, 7)) + ', ' +
            (opacity) + ')';
        return rgba;
    }
}



// 匹配浏览器高度
nrmaxs3 = document.querySelector('.nrmaxs3');
nrmaxs3.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
window.addEventListener('resize', function() {
    nrmaxs3 = document.querySelector('.nrmaxs3');
    nrmaxs3.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
});




//返回
shezhi_min = document.querySelector('.shezhi_min');
shezhi_ym = document.querySelectorAll('.shezhi_ym');
i_fanhui_tp = document.querySelectorAll('.i_fanhui_tp');
for (var i = 0; i < i_fanhui_tp.length; i++) {
    i_fanhui_tp[i].addEventListener('click', function() {
        for (var i = 0; i < shezhi_ym.length; i++) {
            shezhi_ym[i].style.display = 'none';
        }
        shezhi_min.style.display = 'block';
    });
}

//壁纸设置
var bizhi_gundon = document.querySelector('.bizhi_gundon');
shezhi_bzsz_ym = document.querySelector('.shezhi_bzsz_ym');
shezhi_bzsz = document.querySelector('.shezhi_bzsz');
shezhi_bzsz.addEventListener('click', function() {
    shezhi_min.style.display = 'none';
    shezhi_bzsz_ym.style.display = 'block';
    bzsz_max.scroll(0, 0);
    bizhi_gundon.innerHTML = '↓';
});

//壁纸高度设置
var bzsz_tj = document.querySelector('.bzsz_tj');
var bzsz_sj = document.querySelector('.bzsz_sj');
var bzsz_tj_ym_TP = document.querySelector('.bzsz_tj_ym_TP');
var bzsz_s_gd = 335 / (window.innerWidth / window.innerHeight);
setTimeout(function() {
    var bzsz_s = document.querySelectorAll('.bzsz_s');
    for (var i = 0; i < bzsz_s.length; i++) {
        bzsz_s[i].style.height = bzsz_s_gd + 'px';
    }
});
bzsz_tj.style.height = bzsz_s_gd + 'px';
bzsz_tj.style.lineHeight = bzsz_s_gd + 'px';
bzsz_sj.style.height = bzsz_s_gd + 'px';
bzsz_sj.style.lineHeight = bzsz_s_gd + 'px';
bzsz_tj_ym_TP.style.height = bzsz_s_gd + 'px';
if (bzsz_s_gd > 250) {
    bzsz_tj_ym_TP.style.width = 250 / (window.innerHeight / window.innerWidth) + 'px';
    bzsz_tj_ym_TP.style.left = 'calc((100% - ' + (250 / (window.innerHeight / window.innerWidth)) + 'px) / 2)';
}
window.addEventListener('resize', function() {
    var bzsz_s = document.querySelectorAll('.bzsz_s');
    var bzsz_s_gd = 335 / (window.innerWidth / window.innerHeight);
    for (var i = 0; i < bzsz_s.length; i++) {
        bzsz_s[i].style.height = bzsz_s_gd + 'px';
    }
    bzsz_tj.style.height = bzsz_s_gd + 'px';
    bzsz_tj.style.lineHeight = bzsz_s_gd + 'px';
    bzsz_sj.style.height = bzsz_s_gd + 'px';
    bzsz_sj.style.lineHeight = bzsz_s_gd + 'px';
    bzsz_tj_ym_TP.style.height = bzsz_s_gd + 'px';
    if (bzsz_s_gd > 250) {
        bzsz_tj_ym_TP.style.width = 250 / (window.innerHeight / window.innerWidth) + 'px';
        bzsz_tj_ym_TP.style.left = 'calc((100% - ' + (250 / (window.innerHeight / window.innerWidth)) + 'px) / 2)';
    }
});

//输出所有壁纸
bzsz_tj = document.querySelector('.bzsz_tj');
bzsz_max = document.querySelector('.bzsz_max');
var bi_zhi_s = JSON.parse(localStorage.bi_zhi_s);
for (var i = 0; i < bi_zhi_s.length; i++) {
    var div = document.createElement('div');
    div.className = 'bzsz_s';
    div.style.backgroundImage = 'url(' + bi_zhi_s[i] + ')';
    div.innerHTML = '<i class="iconfont icon-shanchu1 i_bzsz_sc_tp"></i>';
    bzsz_max.insertBefore(div, bzsz_tj);
}

//壁纸删除
bzsz_max = document.querySelector('.bzsz_max');
i_bzsz_sc_tp = document.querySelectorAll('.i_bzsz_sc_tp');
for (var i = 0; i < i_bzsz_sc_tp.length; i++) {
    i_bzsz_sc_tp[i].addEventListener('click', function(e) {
        e.stopPropagation();
        //修改HTML
        bzsz_max.removeChild(this.parentNode);
        //修改内存
        var bi_zhi_s = JSON.parse(localStorage.bi_zhi_s);
        var topimg = this.parentNode.style.backgroundImage.split('("')[1].split('")')[0];
        console.log(topimg);
        //指定删除
        if (topimg && bi_zhi_s.indexOf(topimg) !== -1) {
            bi_zhi_s.splice(bi_zhi_s.indexOf(topimg), 1);
        }
        localStorage.bi_zhi_s = JSON.stringify(bi_zhi_s);

        Sku_tctx('壁纸删除成功');
    });
}

//换壁纸
var bzsz_s = document.querySelectorAll('.bzsz_s');
for (var i = 0; i < bzsz_s.length; i++) {
    bzsz_s[i].addEventListener('click', function() {
        var topimg = this.style.backgroundImage.split('("')[1].split('")')[0];
        localStorage.bi_zhi = topimg;
        document.documentElement.style.backgroundImage = this.style.backgroundImage;
        localStorage.bi_zhi_ys = '';
    });
}

// 随机壁纸 
var bizhi_sjwz = [
    'https://picsum.photos/1920/1080/',
    'https://cdn.seovx.com/?mom=302',
    'https://cdn.seovx.com/d/?mom=302',
    'https://api.btstu.cn/sjbz/api.php',
    'https://t.mwm.moe/pc/',
    'https://t.mwm.moe/fj/',
    'https://imgapi.xl0408.top/index.php',
    'https://api.dujin.org/pic/yuanshen/',
];
localStorage.shuiji_bi_zhi_wz = JSON.stringify(bizhi_sjwz);
var bzsz_sj = document.querySelector('.bzsz_sj');
bzsz_sj.addEventListener('click', function(e) {
    var bizhi_sjwz = JSON.parse(localStorage.shuiji_bi_zhi_wz);
    var shuiji_biz = sjs(0, bizhi_sjwz.length - 1);
    localStorage.bi_zhi = 'sj';
    document.documentElement.style.backgroundImage = 'url(' + bizhi_sjwz[shuiji_biz] + ')';
});

//添加壁纸
bzsz_tj_ym_tp_jk = 0;
bzsz_tj_anniu = document.querySelector('.bzsz_tj_anniu');
bzsz_tj_ym_TP = document.querySelector('.bzsz_tj_ym_TP');
input_bzlj = document.querySelector('.input_bzlj');
bzsz_tj_ym = document.querySelector('.bzsz_tj_ym');
bzsz_tj = document.querySelector('.bzsz_tj');
bzsz_tj.addEventListener('click', function(e) {
    e.stopPropagation();
    bzsz_tj_ym.style.display = 'block';
    input_bzlj.focus();
});
//防止关闭
bzsz_tj_ym.addEventListener('contextmenu', function(e) {
    e.stopPropagation();
    e.preventDefault();
});
bzsz_tj_ym.addEventListener('click', function(e) {
    e.stopPropagation();
});
//监测
input_bzlj.addEventListener('focus', function(e) {
    bzsz_tj_ym_tp_jk = 1;
});
input_bzlj.addEventListener('blur', function(e) {
    bzsz_tj_ym_tp_jk = 0;
});
//添加按钮
bzsz_tj_anniu.addEventListener('click', function() {
    if (input_bzlj.value !== '') {
        //修改内存
        var bi_zhi_s = JSON.parse(localStorage.bi_zhi_s);
        bi_zhi_s.push(bzsz_tj_ym_TP.style.backgroundImage.split('("')[1].split('")')[0]);
        localStorage.bi_zhi_s = JSON.stringify(bi_zhi_s);
        //修改HTML
        var div = document.createElement('div');
        div.className = 'bzsz_s';
        div.style.backgroundImage = bzsz_tj_ym_TP.style.backgroundImage;
        div.innerHTML = '<i class="iconfont icon-shanchu1 i_bzsz_sc_tp"></i>';
        div.style.height = 335 / (window.innerWidth / window.innerHeight) + 'px';
        bzsz_max.insertBefore(div, bzsz_tj);
        //添加按钮样式
        bzsz_s = document.querySelectorAll('.bzsz_s');
        bzsz_s[bzsz_s.length - 1].addEventListener('click', function() {
            var topimg = this.style.backgroundImage.split('("')[1].split('")')[0];
            localStorage.bi_zhi = topimg;
            localStorage.bi_zhi_s = JSON.stringify(bi_zhi_s);
            document.documentElement.style.backgroundImage = this.style.backgroundImage;
        });
        bzsz_max = document.querySelector('.bzsz_max');
        i_bzsz_sc_tp = document.querySelectorAll('.i_bzsz_sc_tp');
        i_bzsz_sc_tp[i_bzsz_sc_tp.length - 1].addEventListener('click', function(e) {
            e.stopPropagation();
            //修改HTML
            bzsz_max.removeChild(this.parentNode);
            //修改内存
            var bi_zhi_s = JSON.parse(localStorage.bi_zhi_s);
            var topimg = this.parentNode.style.backgroundImage.split('("')[1].split('")')[0];
            //指定删除
            function sz_zdsc(sz_s, sz_sc_zhi, sz_tj_zhi) {
                if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1 && sz_tj_zhi) {
                    sz_s.splice(sz_s.indexOf(sz_sc_zhi), 2, sz_tj_zhi);
                } else if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1) {
                    sz_s.splice(sz_s.indexOf(sz_sc_zhi), 1);
                }
            }
            sz_zdsc(bi_zhi_s, topimg);
            localStorage.bi_zhi_s = JSON.stringify(bi_zhi_s);
        });
        //隐藏添加页面
        bzsz_tj_ym.style.display = 'none';
        input_bzlj.value = '';
        bzsz_tj_ym_TP.style.backgroundImage = '';

        Sku_tctx('壁纸添加成功');
    } else {
        //隐藏添加页面
        bzsz_tj_ym.style.display = 'none';
    }
});





// function SHITIDONGHUA(class名, 移动距离(右为正, 左为负), function() {});
var gundon_dsj = undefined;

function SHITIDONGHUA2(bjs, jls, callback) {
    var jlss = Math.round(jls);
    obj_dwjsq = document.querySelector(bjs);
    clearInterval(obj_dwjsq.time);
    obj_dwjsq.time = setInterval(function() {
        var jl = (jlss - obj_dwjsq.scrollTop) / 10;
        jl = jl > 0 ? Math.ceil(jl) : Math.floor(jl);
        if (Math.round(obj_dwjsq.scrollTop) == jlss) {
            clearInterval(obj_dwjsq.time);
            if (callback) {
                callback();
            }
        }
        obj_dwjsq.scroll(0, obj_dwjsq.scrollTop + jl);
    }, 15);
    clearTimeout(gundon_dsj);
    gundon_dsj = setTimeout(function() {
        clearInterval(obj_dwjsq.time);
    }, 1200);
}

function SHITIDONGHUA2_kssy(sx_anniu, gundonye) {
    var sx_anniu1 = document.querySelector(sx_anniu);
    var gundonye1 = document.querySelector(gundonye);
    sx_anniu1.addEventListener('click', function(e) {
        if (sx_anniu1.innerHTML == '↓') {
            var gundonye1 = document.querySelector(gundonye);
            SHITIDONGHUA2(gundonye, gundonye1.scrollHeight - gundonye1.clientHeight);
        } else {
            SHITIDONGHUA2(gundonye, 0);
        }
    });
    gundonye1.addEventListener('scroll', function(e) {
        var gundonye1 = document.querySelector(gundonye);
        if (gundonye1.scrollTop > ((gundonye1.scrollHeight - gundonye1.clientHeight) / 2)) {
            sx_anniu1.innerHTML = '↑';
        } else {
            sx_anniu1.innerHTML = '↓';
        }
    });
}
SHITIDONGHUA2_kssy('.bizhi_gundon1', '.bzsz_max');
SHITIDONGHUA2_kssy('.bizhi_gundon2', '.daorubendi_max_hd');
SHITIDONGHUA2_kssy('.bizhi_gundon3', '.ssjl_max2');
SHITIDONGHUA2_kssy('.bizhi_gundon4', '.ssjl_max');
SHITIDONGHUA2_kssy('.bizhi_gundon5', '.grb_j_max');






//天气设置

//页面打开
shezhi_tianqi_ym = document.querySelector('.shezhi_tianqi_ym');
shezhi_tianqi = document.querySelector('.shezhi_tianqi');
shezhi_tianqi.addEventListener('click', function() {
    shezhi_min.style.display = 'none';
    shezhi_tianqi_ym.style.display = 'block';
});
//显示天气
tianqi_s = document.querySelectorAll('.tianqi_s');
tianqi_s[localStorage.tian_qi].querySelector('i').style.color = RGB_zhq(localStorage.zi_ti_click_color);
tianqi_s[localStorage.tian_qi].style.borderColor = RGB_zhq(localStorage.zi_ti_click_color);
//换天气
for (var i = 0; i < tianqi_s.length; i++) {
    tianqi_s[i].addEventListener('click', function() {
        //清楚所有
        for (var i = 0; i < tianqi_s.length; i++) {
            tianqi_s[i].querySelector('i').style.color = '';
            tianqi_s[i].style.borderColor = '';
        }
        this.querySelector('i').style.color = RGB_zhq(localStorage.zi_ti_click_color);
        this.style.borderColor = RGB_zhq(localStorage.zi_ti_click_color);
        //修改内存
        localStorage.tian_qi = this.getAttribute('data-tianqi-num');
        //修改HTML
        max_dtbj = document.querySelector('.max_dtbj');
        if (localStorage.tian_qi == '4') {
            max_dtbj.style.backgroundImage = 'url(https://wimg.588ku.com/gif620/21/10/20/164e42912197136db3f4dac7b652110a.gif)';
            max_dtbj.style.opacity = '1';
        }
        if (localStorage.tian_qi == '3') {
            max_dtbj.style.backgroundImage = 'url(https://wimg.588ku.com/gif620/21/10/20/164e42912197136db3f4dac7b652110a.gif)';
            max_dtbj.style.opacity = '0.5';
        }
        if (localStorage.tian_qi == '2') {
            max_dtbj.style.backgroundImage = 'url(https://wimg.588ku.com/gif620/20/12/17/7c69a1aad398a7f367d905425346e7f4.gif)';
            max_dtbj.style.opacity = '1';
        }
        if (localStorage.tian_qi == '1') {
            max_dtbj.style.backgroundImage = 'url(https://wimg.588ku.com/gif620/20/12/17/7c69a1aad398a7f367d905425346e7f4.gif)';
            max_dtbj.style.opacity = '0.5';
        }
        if (localStorage.tian_qi == '0') {
            max_dtbj.style.backgroundImage = 'url()';
            max_dtbj.style.opacity = '1';
        }
    });
}



//字体设置

//页面打开
shezhi_ztsz_ym = document.querySelector('.shezhi_ztsz_ym');
shezhi_ztsz = document.querySelector('.shezhi_ztsz');
shezhi_ztsz.addEventListener('click', function() {
    shezhi_min.style.display = 'none';
    shezhi_ztsz_ym.style.display = 'block';
});
//字体颜色
input_color1 = document.querySelector('.input_color1');
if (localStorage.zi_ti_color !== '') {
    input_color1.value = localStorage.zi_ti_color;
} else {
    input_color1.value = '#FFFFFF';
}

function zi_ti_color_s() {
    var style_s1 = document.querySelector('.style_s1');
    style_s1.innerHTML = 'html {color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .top_dhl div:hover,.sy_dwck_s:hover {background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.15) + ';} .so_yq:hover {color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .so_yq {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} ::placeholder {color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';} .iconfont:hover {color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .so_ssk {color:' + RGB_zhq(localStorage.zi_ti_color) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .iconfont {color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .so_anniu {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .lian_jie_l div:hover {background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.15) + ';} .lian_jie_l div {border-bottom:1px solid ' + RGB_zhq(localStorage.zi_ti_color, 0.3) + ';} .lj_xx_b,.lj_xx_b_2 {color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';} .lj_lj_t {color:' + RGB_zhq(localStorage.zi_ti_color) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .lj_lj_b {color:' + RGB_zhq(localStorage.zi_ti_color) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .lj_max {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .dhr_srk {border-color:' + RGB_zhq(localStorage.zi_ti_color) + '; color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .dhr_qrk{border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .dhr_qrk:hover {border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + '; color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .lj_max:hover {border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .lj_lj_t:hover,.lj_lj_b:hover {color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .lj_xg_tj input {color:' + RGB_zhq(localStorage.zi_ti_color) + ';border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .jl_qrk:hover {border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + '; color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .jl_qrk {border-color:' + RGB_zhq(localStorage.zi_ti_color) + '; color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .liu_yan_z {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .liu_yan_tx {border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.75) + '; background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + ';} .liu_yan_sxuan_s:hover {background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.15) + ';}';

    var style_s2 = document.querySelector('.style_s2');
    style_s2.innerHTML = '.liu_yan_top {border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.7) + ';} .liu_yan_time {color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .liu_yan_button {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .liu_yan_button:hover,.drym_dr:hover {border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + '; color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .input_djs_tjym_time_s,.input_djs_tjym_sj,.liu_yan_srk {color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .liu_yan_sxuan_s {border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.3) + ';} .shezhi_min div {border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + ';} .shezhi_ym_top {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .tianqi_s {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .bzsz_tj {background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';} .ztsz_chongzhi,.bjsz_chongzhi {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .ztsz_chongzhi:hover,.bjsz_chongzhi:hover {border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + '; color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .bjk_xzk {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .input_bzlj {border-color:' + RGB_zhq(localStorage.zi_ti_color) + '; color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .bzsz_tj_anniu {border-color:' + RGB_zhq(localStorage.zi_ti_color) + '; color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .bzsz_tj_anniu:hover { color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .bzsz_tj_ym_TP {background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';} .shezhi_min div:hover {background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.15) + ';color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .ztfg_s {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .cdcsh_click,.bfsz_sccd,.bfsz_xzcd {background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .top_tou_xian {border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + ';} .top_tou_xian:hover {border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .tou_xian_tp {background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';} .input_tou_xian,.tou_xian_qr {color:' + RGB_zhq(localStorage.zi_ti_color) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .tou_xian_qr:hover {color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';}';

    var style_s3 = document.querySelector('.style_s3');
    style_s3.innerHTML = '.sy_dwck_ym,.sy_dwck,.sy_zp_tj_ym,.sy_zpzs_max,.sy_hddb,.kcp_kc span,.kcp_xq span,.top_tou_xian_sc,.drym_min,.wl_max,.bzsz_tj_ym,.sy_djs_tjym,.sy_djs,.liu_yan_sxuan_div,.liu_yan_mao_bo_li,.lj_xg_tj,.dhr_xg_tj,.lian_jie_l_max,.lian_jie_r_max,.topmax,.shezhi_max,.music_ym {backdrop-filter: blur(' + localStorage.mao_bo_li + 'px);} .input_djs_tjym_time_s2,.input_djs_tjym_sj,.input_djs_tjym_time_s,.djs_tjym_qr,.mblxg,.input_drmm_mm,.daoru_ym_sc,.drmm_mm_qr,.drym_tx,.imput_drym_mm,.sy_zpzs_jr,.sy_zpzs_tj,.sy_zp_tj_anniu,.input_sy_zp_tj,.sy_hddb,.input_ji_ru_srk,.input_ji_ru_ss,.bfsz_zdbf_qrk,.sy_lbt_b {border-color:' + localStorage.zi_ti_color + ';} .input_djs_tjym_time_s2,.input_drmm_mm,.daoru_ym_sc,.imput_drym_mm,.input_sy_zp_tj,.input_ji_ru_srk,.input_ji_ru_ss {color:' + localStorage.zi_ti_color + ';} .sy_zp_tj_anniu:hover,.drmm_mm_qr:hover,.djs_tjym_qr:hover,.sy_zpzs_tj:hover,.sy_zpzs_jr:hover,.sy_dwck_s:hover,.daoru_ym_bendi_click:hover {color:' + localStorage.zi_ti_click_color + ';border-color:' + localStorage.zi_ti_click_color + ';} .drym_tx {background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + ';} .sy_dwck {color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';} .sy_dwck_s {border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.3) + ';} .liu_yan_z a, .lian_jie_ssk {color:' + localStorage.zi_ti_color + ';} .liu_yan_z a:hover {color:' + localStorage.zi_ti_click_color + ';} .daoru_ym_dc,.daoru_ym_dr,.daoru_ym_bendi,.daorubendi_s_sj,.daorubendi_s_yy,.daorubendi_s_cs {background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';}.input_tmd{background: -webkit-linear-gradient(' + localStorage.zi_ti_color + ', ' + localStorage.zi_ti_color + ') no-repeat, none;border: 1px solid ' + localStorage.zi_ti_color + ';}.input_tmd::-webkit-slider-thumb {background: ' + localStorage.zi_ti_color + ';}.music_s {border-bottom:1px solid ' + RGB_zhq(localStorage.zi_ti_color, 0.3) + ';}';

    var style_s5 = document.querySelector('.style_s5');
    style_s5.innerHTML = '.music_s:hover {background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.1) + ';}.music_bottom_hk {background: -webkit-linear-gradient(' + RGB_zhq(localStorage.zi_ti_color) + ', ' + RGB_zhq(localStorage.zi_ti_color) + ') no-repeat,' + RGB_zhq(localStorage.zi_ti_color, 0.2) + ';}.music_bottom_hk::-webkit-slider-thumb { background: ' + RGB_zhq(localStorage.zi_ti_color) + ';} .music_boyyom_tj_ym,.Sku_tcjg_Max,.sy_lbt,.sy_djs_txl,.sy_nrs_t_span,.ssbqym,.sd_dtnr_max,.lj_zcb_ym {backdrop-filter: blur(' + localStorage.mao_bo_li + 'px);}.music_tjym_qd:hover {border-color:' + localStorage.zi_ti_click_color + ';color:' + localStorage.zi_ti_click_color + ';}.music_tjym_mz,.music_tjym_url,.ssjl_s{border-color:' + localStorage.zi_ti_color + ';color:' + localStorage.zi_ti_color + ';}.lian_jie_l2_sy{background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.15) + ';border-bottom:1px solid ' + RGB_zhq(localStorage.zi_ti_click_color) + ';}.ssbq_s {border-bottom:1px solid ' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';}.ssbq_s:hover {background-color:' + RGB_zhq(localStorage.zi_ti_click_color, 0.15) + ';color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';} .daoru_ym_jmdc{background-color:' + RGB_zhq(localStorage.zi_ti_color, 0.2) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';} .su_biao{color:' + localStorage.zi_ti_color + ';}.daoru_ym_my{border-color:' + localStorage.zi_ti_color + ';color:' + localStorage.zi_ti_color + ';}.lbnr_ljbz{color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';}.lbnr_ljxz,.lbnr_ljdz,.lbnr_max {color:' + RGB_zhq(localStorage.zi_ti_color) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';}.lbnr_ljxz:hover,.lbnr_ljdz:hover {color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';border-color:' + RGB_zhq(localStorage.zi_ti_click_color) + ';}.sy_zpzs_kaiguan,.lbnr_ljtp{border-color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';}.sy_zpzs_kaiguan_ts{color:' + RGB_zhq(localStorage.zi_ti_color, 0.5) + ';}.WGS_HTSP_TJ,.shezhi_sp_xp_min2,.htsp_qjss_jdt,.lj_zcb_name,.lj_zcb_dizhi,.lj_zcb_qr {color:' + RGB_zhq(localStorage.zi_ti_color) + '; border-color:' + RGB_zhq(localStorage.zi_ti_color) + ';}.htsp_qjss_jdt2 {background-color:' + RGB_zhq(localStorage.zi_ti_color) + ';}.lj_lj_t:hover,.lj_lj_b:hover { box-shadow: 0px 0px 30px ' + RGB_zhq(localStorage.zi_ti_click_color, 0.3) + ';}.lj_max:hover { box-shadow: inset 0px -17px 15px -20px ' + RGB_zhq(localStorage.zi_ti_click_color, 0.8) + ';}';

    zi_ti_color_bh();
}
//字体颜色改变
input_color1.addEventListener('input', function() {
    //修改内存
    localStorage.zi_ti_color = input_color1.value;
    //修改HTML
    if (localStorage.zi_ti_color !== '') {
        zi_ti_color_s();
    }
});

//重字体颜色
input_color2 = document.querySelector('.input_color2');
input_color2.value = localStorage.zi_ti_click_color;
input_color2.addEventListener('input', function() {
    //修改内存
    localStorage.zi_ti_click_color = input_color2.value;
    //修改HTML
    zi_ti_color_s();
});

//重置
var yuan_zi_ti_color = localStorage.zi_ti_color;
var yuan_zi_ti_click_color = localStorage.zi_ti_click_color;
ztsz_chongzhi = document.querySelector('.ztsz_chongzhi');
ztsz_chongzhi.addEventListener('click', function() {
    //修改内存
    localStorage.zi_ti_color = yuan_zi_ti_color;
    localStorage.zi_ti_click_color = yuan_zi_ti_click_color;
    //加载页面
    input_color2.value = localStorage.zi_ti_click_color;
    input_color1.value = localStorage.zi_ti_color;
    zi_ti_color_s();
});







//背景设置

//页面打开
shezhi_bjsz_ym = document.querySelector('.shezhi_bjsz_ym');
shezhi_bjsz = document.querySelector('.shezhi_bjsz');
shezhi_bjsz.addEventListener('click', function() {
    shezhi_min.style.display = 'none';
    shezhi_bjsz_ym.style.display = 'block';
});

function bei_jing_color_s() {
    topmax.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    lian_jie_l_max = document.querySelector('.lian_jie_l_max');
    lian_jie_r_max = document.querySelector('.lian_jie_r_max');
    lian_jie_l_max.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    lian_jie_r_max.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    liu_yan = document.querySelector('.liu_yan');
    liu_yan.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    shezhi_max = document.querySelector('.shezhi_max');
    shezhi_max.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    liu_yan_sxuan_div = document.querySelector('.liu_yan_sxuan_div');
    liu_yan_sxuan_div.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    lj_xg_tj = document.querySelector('.lj_xg_tj');
    lj_xg_tj.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    dhr_xg_tj = document.querySelector('.dhr_xg_tj');
    dhr_xg_tj.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    dhr_shezhi_gns = document.querySelector('.dhr_shezhi_gns');
    s_jiao_xing = document.querySelector('.s_jiao_xing');
    dhr_shezhi_gns.style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.25);
    s_jiao_xing.style.borderColor = RGB_zhq(localStorage.zi_ti_click_color, 0.25);
    liu_yan_shezhi_gns = document.querySelector('.liu_yan_shezhi_gns');
    liu_yan_s_jiao_xing = document.querySelector('.liu_yan_s_jiao_xing');
    liu_yan_shezhi_gns.style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.25);
    liu_yan_s_jiao_xing.style.borderColor = RGB_zhq(localStorage.zi_ti_click_color, 0.25);
    top_tou_xian_sc = document.querySelector('.top_tou_xian_sc');
    top_tou_xian_sc.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    sy_djs = document.querySelector('.sy_djs');
    sy_djs.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    sy_shezhi_gns = document.querySelector('.sy_shezhi_gns');
    sy_shezhi_gns.style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.25);
    sy_s_jiao_xing = document.querySelector('.sy_s_jiao_xing');
    sy_s_jiao_xing.style.borderColor = RGB_zhq(localStorage.zi_ti_click_color, 0.25);
    sy_djs_tjym = document.querySelector('.sy_djs_tjym');
    sy_djs_tjym.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    bzsz_tj_ym = document.querySelector('.bzsz_tj_ym');
    bzsz_tj_ym.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    sy_nrs_ts = document.querySelectorAll('.sy_nrs_t_span');
    for (var i = 0; i < sy_nrs_ts.length; i++) {
        sy_nrs_ts[i].style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    }
    sy_dwck_ym = document.querySelector('.sy_dwck_ym');
    drym_min = document.querySelector('.drym_min');
    drym_min.style.backgroundColor = RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd);
    var style_s4 = document.querySelector('.style_s4');
    style_s4.innerHTML = '.sy_3d_kaiguan,.sy_djs_txl,.Sku_tcjg_Max,.sy_dwck_ym,.sy_dwck,.wl_max,.sy_lbt,.sy_zp_tj_ym,.sy_zpzs_max,.sy_hddb,.kcp_kc span,.kcp_xq span,.music_boyyom_yj,.music_boyyom_tj_ym,.daoru_ym_dr_mmym,.ssbqym,.sd_dtnr_max,.lj_zcb_ym {background-color:' + RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd) + ';} .lian_jie_ssk {background:linear-gradient(to top, ' + RGB_zhq(localStorage.bei_jing_color, '0.3') + ' 0%, ' + RGB_zhq(localStorage.bei_jing_color, '0') + ' 50%);} .lian_jie_ssk:focus {background:linear-gradient(to top, ' + RGB_zhq(localStorage.bei_jing_color, '0.7') + ' 0%, ' + RGB_zhq(localStorage.bei_jing_color, '0') + ' 100%);}.music_ym {background-color: ' + RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd) + ';}.sy_b{ background: linear-gradient(to bottom, ' + RGB_zhq(localStorage.bei_jing_color, '0') + ', ' + RGB_zhq(localStorage.bei_jing_color, localStorage.bei_jing_tmd) + ' 70%);}';
}
//背景颜色
input_color3 = document.querySelector('.input_color3');
input_color3.value = localStorage.bei_jing_color;
input_color3.addEventListener('input', function() {
    localStorage.bei_jing_color = input_color3.value;
    bei_jing_color_s();
});

//背景透明度
input_tmd_z = document.querySelector('.input_tmd_z');
input_tmd1 = document.querySelector('.input_tmd1');
input_tmd1.value = localStorage.bei_jing_tmd * 100;
input_tmd_z.innerHTML = (localStorage.bei_jing_tmd * 100) + '%';
input_tmd1.style.backgroundSize = input_tmd1.value + '% 100%';
input_tmd1.addEventListener('input', function() {
    localStorage.bei_jing_tmd = (input_tmd1.value / 100);
    input_tmd_z.innerHTML = input_tmd1.value + '%';
    this.style.backgroundSize = this.value + '% 100%';
    bei_jing_color_s();
});

//背景框
sy_lbt = document.querySelector('.sy_lbt');
sy_zp_tj_ym = document.querySelector('.sy_zp_tj_ym');
daoru_ym_dr_mmym = document.querySelector('.daoru_ym_dr_mmym');
music_boyyom_tj_ym = document.querySelector('.music_boyyom_tj_ym');
music_ym = document.querySelector('.music_ym');
music_boyyom_yj = document.querySelector('.music_boyyom_yj');
bjk_xzk = document.querySelector('.bjk_xzk');
sy_djs_r_s = document.querySelectorAll('.sy_djs_r_s');
sy_djs_r_t = document.querySelectorAll('.sy_djs_r_t');
sy_djs_r_time = document.querySelectorAll('.sy_djs_r_time');
sy_djs_l = document.querySelector('.sy_djs_l');
sy_djs_l_t = document.querySelector('.sy_djs_l_t');
sy_djs_l_time = document.querySelector('.sy_djs_l_time');
sy_djs_txl = document.querySelector('.sy_djs_txl');
ssbqym = document.querySelector('.ssbqym');
sy_nrs_t_span = document.querySelectorAll('.sy_nrs_t_span');
sy_3d_kaiguan = document.querySelector('.sy_3d_kaiguan');
lj_zcb_ym = document.querySelector('.lj_zcb_ym');
if (localStorage.bei_jing_kuan_ture == 1) {
    bjk_xzk.innerHTML = '✔';
} else if (localStorage.bei_jing_kuan_ture == 0) {
    bjk_xzk.innerHTML = '';
}

function bj_kuan_hs() {
    topmax.style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    lian_jie_l_max.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    lian_jie_r_max.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    liu_yan.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    shezhi_max.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    liu_yan_sxuan_div.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    lj_xg_tj.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    dhr_xg_tj.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    top_tou_xian_sc.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs_tjym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    drym_min.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_zpzs_max.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_zp_tj_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_dwck_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_lbt.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    for (var i = 0; i < sy_nrs_t_span.length; i++) {
        sy_nrs_t_span[i].style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    }
    for (var i = 0; i < (sy_djs_r_s.length < 6 ? sy_djs_r_s.length : sy_djs_r_s.length - 1); i++) {
        sy_djs_r_s[i].style.borderRight = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    }
    for (var i = 0; i < sy_djs_r_t.length; i++) {
        sy_djs_r_t[i].style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    }
    for (var i = 0; i < sy_djs_r_time.length; i++) {
        sy_djs_r_time[i].style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    }
    sy_djs_l.style.borderRight = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs_l_t.style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs_l_time.style.borderBottom = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_hddb.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    music_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    music_boyyom_yj.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    music_boyyom_tj_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_djs_txl.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    ssbqym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    daoru_ym_dr_mmym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    sy_3d_kaiguan.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
    lj_zcb_ym.style.border = '1px solid ' + RGB_zhq(localStorage.bei_jing_kuan_color, localStorage.bei_jing_kuan_tmd);
}
setTimeout(function() {

}, 1000);

bjk_xzk.addEventListener('click', function() {
    if (localStorage.bei_jing_kuan_ture == 1) {
        localStorage.bei_jing_kuan_ture = 0;
        bjk_xzk.innerHTML = '';
        topmax.style.borderBottom = '';
        lian_jie_l_max.style.border = '';
        lian_jie_r_max.style.border = '';
        liu_yan.style.border = '';
        shezhi_max.style.border = '';
        lj_xg_tj.style.border = '';
        dhr_xg_tj.style.border = '';
        top_tou_xian_sc.style.border = '';
        sy_djs_tjym.style.border = '';
        drym_min.style.border = '';
        sy_zpzs_max.style.border = '';
        sy_zp_tj_ym.style.border = '';
        sy_dwck_ym.style.border = '';
        liu_yan_sxuan_div.style.border = '';
        sy_lbt.style.border = '';
        sy_djs.style.border = '';
        sy_djs_l.style.border = '';
        sy_djs_l_t.style.border = '';
        sy_djs_l_time.style.border = '';
        sy_hddb.style.border = '';
        for (var i = 0; i < sy_nrs_t_span.length; i++) {
            sy_nrs_t_span[i].style.border = '';
        }
        for (var i = 0; i < (sy_djs_r_s.length < 6 ? sy_djs_r_s.length : sy_djs_r_s.length - 1); i++) {
            sy_djs_r_s[i].style.borderRight = '';
        }
        for (var i = 0; i < sy_djs_r_t.length; i++) {
            sy_djs_r_t[i].style.borderBottom = '';
        }
        for (var i = 0; i < sy_djs_r_time.length; i++) {
            sy_djs_r_time[i].style.borderBottom = '';
        }
        music_ym.style.border = '';
        music_boyyom_yj.style.border = '';
        music_boyyom_tj_ym.style.border = '';
        sy_djs_txl.style.border = '';
        ssbqym.style.border = '';
        daoru_ym_dr_mmym.style.border = '';
        sy_3d_kaiguan.style.border = '';
        lj_zcb_ym.style.border = '';
    } else if (localStorage.bei_jing_kuan_ture == 0) {
        localStorage.bei_jing_kuan_ture = 1;
        bjk_xzk.innerHTML = '✔';
        bj_kuan_hs();
    }
});
input_color4 = document.querySelector('.input_color4');
input_tmd2 = document.querySelector('.input_tmd2');
input_tmd_z2 = document.querySelector('.input_tmd_z2');
input_tmd_z2.innerHTML = (localStorage.bei_jing_kuan_tmd * 100) + '%';
input_color4.value = localStorage.bei_jing_kuan_color;
input_tmd2.value = localStorage.bei_jing_kuan_tmd * 100;
input_tmd2.style.backgroundSize = input_tmd2.value + '% 100%';
input_color4.addEventListener('input', function() {
    //修改内存
    localStorage.bei_jing_kuan_color = input_color4.value;
    // 修改html
    if (localStorage.bei_jing_kuan_ture == 1) {
        bj_kuan_hs();
    }
});
input_tmd2.addEventListener('input', function() {
    //修改内存
    localStorage.bei_jing_kuan_tmd = (input_tmd2.value / 100);
    // 修改html
    input_tmd_z2.innerHTML = input_tmd2.value + '%';
    if (localStorage.bei_jing_kuan_ture == 1) {
        bj_kuan_hs();
    }
    this.style.backgroundSize = this.value + '% 100%';
});

//毛玻璃
nrmaxs = document.querySelectorAll('.nrmaxs');
mblxg = document.querySelector('.mblxg');

if (localStorage.mao_bo_li == 0) {
    mblxg.innerHTML = '';
    for (var i = 0; i < nrmaxs.length; i++) {
        nrmaxs[i].style.transition = '0.4s';
    }
} else if (localStorage.mao_bo_li == 5) {
    mblxg.innerHTML = '✔';
    for (var i = 0; i < nrmaxs.length; i++) {
        nrmaxs[i].style.transition = '0s';
    }
}

mblxg.addEventListener('click', function() {
    if (localStorage.mao_bo_li == 0) {
        localStorage.mao_bo_li = 5;
        mblxg.innerHTML = '✔';
        zi_ti_color_s();
        for (var i = 0; i < nrmaxs.length; i++) {
            nrmaxs[i].style.transition = '0s';
        }
    } else if (localStorage.mao_bo_li == 5) {
        localStorage.mao_bo_li = 0;
        mblxg.innerHTML = '';
        zi_ti_color_s();
        for (var i = 0; i < nrmaxs.length; i++) {
            nrmaxs[i].style.transition = '0.4s';
        }
    }
});

//重置 
var yuan_bei_jing_color = localStorage.bei_jing_color;
var yuan_bei_jing_tmd = localStorage.bei_jing_tmd;
var yuan_bei_jing_kuan_ture = localStorage.bei_jing_kuan_ture;
var yuan_bei_jing_kuan_color = localStorage.bei_jing_kuan_color;
var yuan_bei_jing_kuan_tmd = localStorage.bei_jing_kuan_tmd;
var yuan_mao_bo_li = localStorage.mao_bo_li;
bjsz_chongzhi = document.querySelector('.bjsz_chongzhi');
bjsz_chongzhi.addEventListener('click', function() {
    //修改内存
    localStorage.bei_jing_color = yuan_bei_jing_color;
    localStorage.bei_jing_tmd = yuan_bei_jing_tmd;
    localStorage.bei_jing_kuan_ture = yuan_bei_jing_kuan_ture;
    localStorage.bei_jing_kuan_color = yuan_bei_jing_kuan_color;
    localStorage.bei_jing_kuan_tmd = yuan_bei_jing_kuan_tmd;
    localStorage.mao_bo_li = yuan_mao_bo_li;
    //更改页面
    input_color3.value = localStorage.bei_jing_color;
    input_tmd1.value = localStorage.bei_jing_tmd * 100;
    input_tmd1.style.backgroundSize = input_tmd1.value + '% 100%';
    input_tmd_z.innerHTML = input_tmd1.value + '%';
    input_color4.value = localStorage.bei_jing_kuan_color;
    input_tmd2.value = localStorage.bei_jing_kuan_tmd * 100;
    input_tmd2.style.backgroundSize = input_tmd2.value + '% 100%';
    input_tmd_z2.innerHTML = input_tmd2.value + '%';
    bei_jing_color_s();
    if (localStorage.bei_jing_kuan_ture == 1) {
        localStorage.bei_jing_kuan_ture = 0;
    } else {
        localStorage.bei_jing_kuan_ture = 1;
    }
    bjk_xzk.click();
    if (localStorage.mao_bo_li == 5) {
        localStorage.mao_bo_li = 0;
    } else {
        localStorage.mao_bo_li = 5;
    }
    mblxg.click();
});



//主题风格
shezhi_ztfg = document.querySelector('.shezhi_ztfg');
shezhi_ztfg_ym = document.querySelector('.shezhi_ztfg_ym');
shezhi_ztfg.addEventListener('click', function() {
    shezhi_ztfg_ym.style.display = 'block';
    shezhi_min.style.display = 'none';
});
//毛玻璃
tianqi_xy = document.querySelector('.tianqi_xy');
ztfg1 = document.querySelector('.ztfg1');
ztfg1.addEventListener('click', function() {
    tianqi_xy.click();
    localStorage.bi_zhi = 'https://pic.3gbizhi.com/uploads/20231218/bc41092030bb7e763170bc172af92039.png';
    document.documentElement.style.backgroundImage = 'url(https://pic.3gbizhi.com/uploads/20231218/bc41092030bb7e763170bc172af92039.png)';
    input_color1.value = '#ccfbff';
    localStorage.zi_ti_color = '#ccfbff';
    input_color2.value = '#ccfbff';
    localStorage.zi_ti_click_color = '#ccfbff';
    zi_ti_color_s();
    input_color3.value = '#000000';
    localStorage.bei_jing_color = '#000000';
    input_tmd1.value = '10';
    localStorage.bei_jing_tmd = '0.1';
    input_tmd_z.innerHTML = '10%';
    input_tmd1.style.backgroundSize = '10% 100%';
    bei_jing_color_s();
    input_color4.value = '#d1feff';
    localStorage.bei_jing_kuan_color = '#d1feff';
    input_tmd2.value = '80';
    localStorage.bei_jing_kuan_tmd = '0.8';
    input_tmd_z2.innerHTML = '80%';
    input_tmd2.style.backgroundSize = '80% 100%';
    localStorage.bei_jing_kuan_ture = '0';
    bjk_xzk.click();
    localStorage.mao_bo_li = 0;
    mblxg.click();
});
//黑白配
tianqi_qt = document.querySelector('.tianqi_qt');
ztfg2 = document.querySelector('.ztfg2');
ztfg2.addEventListener('click', function() {
    tianqi_qt.click();
    localStorage.bi_zhi = '#'
    document.documentElement.style.backgroundImage = 'url(#)';
    input_color1.value = '#000000';
    localStorage.zi_ti_color = '#000000';
    input_color2.value = '#000000';
    localStorage.zi_ti_click_color = '#000000';
    zi_ti_color_s();
    input_color3.value = '#ffffff';
    localStorage.bei_jing_color = '#ffffff';
    input_tmd1.value = '90';
    localStorage.bei_jing_tmd = '0.9';
    input_tmd_z.innerHTML = '90%';
    input_tmd1.style.backgroundSize = '90% 100%';
    bei_jing_color_s();
    input_color4.value = '#000000';
    localStorage.bei_jing_kuan_color = '#000000';
    input_tmd2.value = '100';
    localStorage.bei_jing_kuan_tmd = '1';
    input_tmd_z2.innerHTML = '100%';
    input_tmd2.style.backgroundSize = '100% 100%';
    localStorage.bei_jing_kuan_ture = '0';
    bjk_xzk.click();
    localStorage.mao_bo_li = 5;
    mblxg.click();
});
//粉色配
tianqi_xx = document.querySelector('.tianqi_xx');
ztfg3 = document.querySelector('.ztfg3');
ztfg3.addEventListener('click', function() {
    tianqi_xx.click();
    localStorage.bi_zhi = 'https://pic.3gbizhi.com/uploads/20231227/e0b15cfc41a57575ca154db81ed745f2.png';
    document.documentElement.style.backgroundImage = 'url(https://pic.3gbizhi.com/uploads/20231227/e0b15cfc41a57575ca154db81ed745f2.png)';
    input_color1.value = '#feb4b4';
    localStorage.zi_ti_color = '#feb4b4';
    input_color2.value = '#ffe5e5';
    localStorage.zi_ti_click_color = '#ffe5e5';
    zi_ti_color_s();
    input_color3.value = '#0a0505';
    localStorage.bei_jing_color = '#0a0505';
    input_tmd1.value = '59';
    localStorage.bei_jing_tmd = '0.59';
    input_tmd_z.innerHTML = '59%';
    input_tmd1.style.backgroundSize = '59% 100%';
    bei_jing_color_s();
    input_color4.value = '#ffc7c7';
    localStorage.bei_jing_kuan_color = '#ffc7c7';
    input_tmd2.value = '80';
    localStorage.bei_jing_kuan_tmd = '0.8';
    input_tmd_z2.innerHTML = '80%';
    input_tmd2.style.backgroundSize = '80% 100%';
    localStorage.bei_jing_kuan_ture = '0';
    bjk_xzk.click();
    localStorage.mao_bo_li = 5;
    mblxg.click();
});
// 雅致黑
var ztfg4 = document.querySelector('.ztfg4');
ztfg4.addEventListener('click', function(e) {
    tianqi_qt.click();
    localStorage.bi_zhi = 'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/4e4a20a4462309f7e770251f7a0e0cf3d7cad6a4.jpg';
    document.documentElement.style.backgroundImage = 'url(https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/4e4a20a4462309f7e770251f7a0e0cf3d7cad6a4.jpg)';
    input_color1.value = '#ededed';
    localStorage.zi_ti_color = '#ededed';
    input_color2.value = '#ffffff';
    localStorage.zi_ti_click_color = '#ffffff';
    zi_ti_color_s();
    input_color3.value = '#000000';
    localStorage.bei_jing_color = '#000000';
    input_tmd1.value = '0';
    localStorage.bei_jing_tmd = '0';
    input_tmd_z.innerHTML = '0%';
    input_tmd1.style.backgroundSize = '0% 100%';
    bei_jing_color_s();
    input_color4.value = '#ffffff';
    localStorage.bei_jing_kuan_color = '#ffffff';
    input_tmd2.value = '50';
    localStorage.bei_jing_kuan_tmd = '0.5';
    input_tmd_z2.innerHTML = '50%';
    input_tmd2.style.backgroundSize = '50% 100%';
    localStorage.bei_jing_kuan_ture = '0';
    bjk_xzk.click();
    localStorage.mao_bo_li = 5;
    mblxg.click();
});
// 温馨米
var ztfg5 = document.querySelector('.ztfg5');
ztfg5.addEventListener('click', function(e) {
    tianqi_qt.click();
    localStorage.bi_zhi = 'https://pic.3gbizhi.com/uploads/20240130/d97c54c7a77532c34f74c5ee56562a70.jpg';
    document.documentElement.style.backgroundImage = 'url(https://pic.3gbizhi.com/uploads/20240130/d97c54c7a77532c34f74c5ee56562a70.jpg)';
    input_color1.value = '#fffae9';
    localStorage.zi_ti_color = '#fffae9';
    input_color2.value = '#f8dca6';
    localStorage.zi_ti_click_color = '#f8dca6';
    zi_ti_color_s();
    input_color3.value = '#000000';
    localStorage.bei_jing_color = '#000000';
    input_tmd1.value = '50';
    localStorage.bei_jing_tmd = '0.5';
    input_tmd_z.innerHTML = '50%';
    input_tmd1.style.backgroundSize = '50% 100%';
    bei_jing_color_s();
    input_color4.value = '#fff7eb';
    localStorage.bei_jing_kuan_color = '#fff7eb';
    input_tmd2.value = '80';
    localStorage.bei_jing_kuan_tmd = '0.8';
    input_tmd_z2.innerHTML = '80%';
    input_tmd2.style.backgroundSize = '80% 100%';
    localStorage.bei_jing_kuan_ture = '0';
    bjk_xzk.click();
    localStorage.mao_bo_li = 5;
    mblxg.click();
});
// 待发布
var ztfg6 = document.querySelector('.ztfg6');
ztfg6.addEventListener('click', function(e) {
    Sku_tctx('不久将与世人见面 (ง •_•)ง');
});






//存档初始化
shezhi_cdcsh_ym = document.querySelector('.shezhi_cdcsh_ym');
shezhi_cdcsh = document.querySelector('.shezhi_cdcsh');
shezhi_cdcsh.addEventListener('click', function() {
    shezhi_min.style.display = 'none';
    shezhi_cdcsh_ym.style.display = 'block';
});
cdcsh_click = document.querySelector('.cdcsh_click');
cdcsh_click.addEventListener('click', function() {
    localStorage.removeItem('dhr_sz');
    localStorage.removeItem('dhr_ym_dx');
    localStorage.removeItem('bi_zhi_s');
    localStorage.removeItem('liu_yan_dx');
    localStorage.removeItem('sy_djs');
    localStorage.removeItem('sy_zpzs_mz');
    localStorage.removeItem('sy_zpzs_lj');
    localStorage.removeItem('music_cd');
    localStorage.removeItem('lsjl');
    location.reload();
});



//备份
// 上传存档
shezhi_bfsz_ym = document.querySelector('.shezhi_bfsz_ym');
shezhi_bfsz = document.querySelector('.shezhi_bfsz');
shezhi_bfsz.addEventListener('click', function() {
    shezhi_min.style.display = 'none';
    shezhi_bfsz_ym.style.display = 'block';
});
bfsz_sccd = document.querySelector('.bfsz_sccd');
bfsz_sccd.addEventListener('click', function() {
    bfsz_sccd.innerHTML = '上传成功';
    bfsz_xzcd.style.display = 'block';
    setTimeout(function() {
        bfsz_sccd.innerHTML = '上传存档';
    }, 5000);
    localStorage.dhr_sz_bf = localStorage.dhr_sz;
    localStorage.dhr_ym_dx_bf = localStorage.dhr_ym_dx;
    localStorage.bi_zhi_s_bf = localStorage.bi_zhi_s;
    localStorage.liu_yan_dx_bf = localStorage.liu_yan_dx;
    localStorage.sy_djs_bf = localStorage.sy_djs;
    localStorage.sy_zpzs_lj_bf = localStorage.sy_zpzs_lj;
    localStorage.sy_zpzs_mz_bf = localStorage.sy_zpzs_mz;
    localStorage.music_cd_bf = localStorage.music_cd;
    localStorage.lsjl_bf = localStorage.lsjl;
    localStorage.htsp_s_bf = localStorage.htsp_s;
    localStorage.sku_zcb_bf = localStorage.sku_zcb;

});
// 下载存档
bfsz_xzcd = document.querySelector('.bfsz_xzcd');
if (localStorage.dhr_sz_bf == '' && localStorage.dhr_ym_dx_bf == '' && localStorage.bi_zhi_s_bf == '' && localStorage.liu_yan_dx_bf == '' && localStorage.sy_djs_bf == '') {
    bfsz_xzcd.style.display = 'none';
} else {
    bfsz_xzcd.style.display = 'block';
}
bfsz_xzcd.addEventListener('click', function() {
    localStorage.dhr_sz = localStorage.dhr_sz_bf;
    localStorage.dhr_ym_dx = localStorage.dhr_ym_dx_bf;
    localStorage.bi_zhi_s = localStorage.bi_zhi_s_bf;
    localStorage.liu_yan_dx = localStorage.liu_yan_dx_bf;
    localStorage.sy_djs = localStorage.sy_djs_bf;
    localStorage.sy_zpzs_lj = localStorage.sy_zpzs_lj_bf;
    localStorage.sy_zpzs_mz = localStorage.sy_zpzs_mz_bf;
    localStorage.music_cd = localStorage.music_cd_bf;
    localStorage.lsjl = localStorage.lsjl_bf;
    localStorage.htsp_s = localStorage.htsp_s_bf;
    localStorage.sku_zcb = localStorage.sku_zcb_bf;
    location.reload();
});
//自动上传
bfsz_zdbf_qrk = document.querySelector('.bfsz_zdbf_qrk');
if (localStorage.zdbf == '1') {
    bfsz_zdbf_qrk.innerHTML = '✔';
    var bfsz_sccd = document.querySelector('.bfsz_sccd');
    bfsz_sccd.click();
} else if (localStorage.zdbf == '0') {
    bfsz_zdbf_qrk.innerHTML = '';
}
bfsz_zdbf_qrk.addEventListener('click', function(e) {
    if (localStorage.zdbf == '1') {
        localStorage.zdbf = '0';
        bfsz_zdbf_qrk.innerHTML = '';
    } else if (localStorage.zdbf == '0') {
        localStorage.zdbf = '1';
        bfsz_zdbf_qrk.innerHTML = '✔';
    }
});



function S_ku_jiami(myao) {
    var jm_lsbl = myao;
    // 10次加密
    for (var i = 0; i < 10; i++) {
        jm_lsbl = window.btoa(jm_lsbl);
    }
    return jm_lsbl + 'A';
}

function S_ku_jiemi(myao2) {
    var jm_lsbl2 = myao2.slice(0, -1);
    // 10次解密
    for (var i = 0; i < 10; i++) {
        jm_lsbl2 = window.atob(jm_lsbl2);
    }
    return jm_lsbl2;
}

//登录密码
drmm_mm_qr = document.querySelector('.drmm_mm_qr');
drmm_mm_mm = document.querySelector('.drmm_mm_mm');
drmm_mm_mm_max = document.querySelector('.drmm_mm_mm_max');
drmm_mm_xmm = document.querySelector('.drmm_mm_xmm');
drmm_mm_zcsr = document.querySelector('.drmm_mm_zcsr');
shezhi_drmm_ym = document.querySelector('.shezhi_drmm_ym');
shezhi_drmm = document.querySelector('.shezhi_drmm');
shezhi_drmm.addEventListener('click', function() {
    shezhi_drmm_ym.style.display = 'block';
    shezhi_min.style.display = 'none';
    if (drmm_mm_mm_max.style.display == 'block') {
        drmm_mm_mm.focus();
    } else {
        drmm_mm_xmm.focus();
    }
});
//密码设置
function drmm_mm_red() {
    setTimeout(function() {
        imput_drym_mm = document.querySelector('.imput_drym_mm');
        drmm_mm_mm = document.querySelector('.drmm_mm_mm');
        drmm_mm_mm_max = document.querySelector('.drmm_mm_mm_max');
        drmm_mm_xmm = document.querySelector('.drmm_mm_xmm');
        imput_drym_mm.style.borderColor = '';
        drmm_mm_zcsr.style.borderColor = '';
        drmm_mm_mm.style.borderColor = '';
        drmm_mm_xmm.style.color = '';
        drmm_mm_zcsr.style.color = '';
        drmm_mm_mm.style.color = '';
    }, 2000);
}

drmm_mm_qr.addEventListener('click', function() {

    if (localStorage.dr_mm == '') {
        drmm_mm_xmm.style.borderColor = '';
        drmm_mm_zcsr.style.borderColor = '';
        if (drmm_mm_xmm.value == '' || drmm_mm_zcsr.value == '') {
            if (drmm_mm_xmm.value == '') {
                drmm_mm_xmm.style.borderColor = 'red';
                drmm_mm_red();
            }
            if (drmm_mm_zcsr.value == '') {
                drmm_mm_zcsr.style.borderColor = 'red';
                drmm_mm_red();
            }
        } else {
            if (drmm_mm_xmm.value !== drmm_mm_zcsr.value) {
                drmm_mm_zcsr.style.borderColor = 'red';
                drmm_mm_zcsr.style.color = 'red';
                drmm_mm_red();
            } else {
                localStorage.dr_mmdr_drsj = 0;
                localStorage.dr_mm = S_ku_jiami(drmm_mm_xmm.value);
                location.reload();
            }
        }
    }

    if (localStorage.dr_mm !== '') {
        drmm_mm_xmm.style.borderColor = '';
        drmm_mm_zcsr.style.borderColor = '';
        drmm_mm_mm.style.borderColor = '';
        if (S_ku_jiami(drmm_mm_mm.value) !== localStorage.dr_mm) {
            drmm_mm_mm.style.color = 'red';
            drmm_mm_mm.style.borderColor = 'red';
            drmm_mm_red();
        } else {
            if (drmm_mm_xmm.value !== drmm_mm_zcsr.value) {
                drmm_mm_zcsr.style.borderColor = 'red';
                drmm_mm_zcsr.style.color = 'red';
                drmm_mm_red();
            } else {
                localStorage.dr_mmdr_drsj = 0;
                localStorage.dr_mm = drmm_mm_xmm.value == '' ? drmm_mm_xmm.value : S_ku_jiami(drmm_mm_xmm.value);
                location.reload();
            }
        }
    }

});
//登入页面设置 
nrmax = document.querySelector('.nrmax');
var drym_cs_jz;
drym_max = document.querySelector('.drym_max');
drym_max.addEventListener('click', function(e) {
    imput_drym_mm.focus();
});
drym_min = document.querySelector('.drym_min');
drym_min.addEventListener('click', function(e) {
    imput_drym_mm.focus();
});
drym_dr = document.querySelector('.drym_dr');
imput_drym_mm = document.querySelector('.imput_drym_mm');
// 查看是否处罚中
function drym_cf_hsjsq() {
    drym_cs_jz = setInterval(function() {
        var nowTime = +new Date();
        var inputTime = localStorage.dr_mm_cf;
        var times = (inputTime - nowTime) / 1000;
        if (times < 0) {
            clearInterval(drym_cs_jz);
            localStorage.dr_mm_cf = 0;
            imput_drym_mm.disabled = ''; // 解除禁用
            imput_drym_mm.placeholder = '输入密码';
            imput_drym_mm.focus();
        } else {
            var m = parseInt(times / 60 % 60);
            m = m < 10 ? '0' + m : m;
            var s = parseInt(times % 60);
            s = s < 10 ? '0' + s : s;
            drym_cfsj = m + ':' + s;
            imput_drym_mm.placeholder = '稍后再尝试 ' + drym_cfsj;
        }
    }, 1000);
}

if (localStorage.dr_mm_cf != 0) {
    imput_drym_mm.disabled = 'disabled';
    imput_drym_mm.placeholder = '稍后再尝试';

    var nowTime = +new Date();
    var inputTime = localStorage.dr_mm_cf;
    var times = (inputTime - nowTime) / 1000;
    var m = parseInt(times / 60 % 60);
    m = m < 10 ? '0' + m : m;
    var s = parseInt(times % 60);
    s = s < 10 ? '0' + s : s;
    drym_cfsj = m + ':' + s;
    imput_drym_mm.placeholder = '稍后再尝试 ' + drym_cfsj;

    drym_cf_hsjsq();
}
// 登入按钮
drym_dr.addEventListener('click', function() {
    if (S_ku_jiami(imput_drym_mm.value) == localStorage.dr_mm) {
        localStorage.drym_srcs = 0;
        localStorage.drym_cs = 0;
        clearInterval(drmm_dsq);
        imput_drym_mm.value = '';
        drym_max.style.display = 'none';
        nrmax.style.display = 'block';
        setTimeout(function() {
            nrmaxs0_nr = document.querySelector('.nrmaxs0_nr');
            nrmaxs0_nr.style.opacity = 1;
            nrmaxs0_nr.style.transform = 'translateY(0px)';
        }, 100);
        if (nrmaxs0.style.display == 'block') { sy_lbnr_hs(); }

        // 登入时间戳
        localStorage.dr_mmdr_drsj = +new Date();
    } else {
        if (imput_drym_mm.value !== '') {
            localStorage.drym_cs++; //错误次数
            imput_drym_mm.style.borderColor = 'red';
            drmm_mm_red();
            imput_drym_mm.value = '';
            imput_drym_mm.focus();

            Sku_tctx('密码错误 !');
        } else {
            imput_drym_mm.focus();
        }
        if (localStorage.drym_cs == 5) {
            imput_drym_mm.value = '';
            imput_drym_mm.disabled = 'disabled';
            imput_drym_mm.placeholder = '稍后再尝试';
            localStorage.dr_mm_cf = (+new Date() + (1000 * 60 * 10));
            drym_cf_hsjsq();
            localStorage.drym_cs = 0;
            Sku_tctx('密码错误 ! 10分钟后再尝试');
        }
        if (localStorage.dr_mm_cf != 0) {
            Sku_tctx('稍后再尝试 !');
        }
    }
});

// 自动登入
if (localStorage.dr_mm !== '') {
    drym_mm_length = S_ku_jiemi(localStorage.dr_mm).length;
}
imput_drym_mm.addEventListener('input', function(e) {
    localStorage.drym_srcs++;
    if (S_ku_jiami(imput_drym_mm.value) == localStorage.dr_mm && localStorage.drym_srcs == drym_mm_length) {
        drym_dr.click();
    }
});

// 免密登入
var drmm_zddr_g = document.querySelector('.drmm_zddr_g');
if (localStorage.dr_mmdr == 0) {
    drmm_zddr_g.innerHTML = '';
} else {
    drmm_zddr_g.innerHTML = '✔';
}
drmm_zddr_g.addEventListener('click', function(e) {
    if (drmm_zddr_g.innerHTML == '✔') {
        drmm_zddr_g.innerHTML = '';
        localStorage.dr_mmdr = 0;
        localStorage.dr_mmdr_drsj = 0;
        Sku_tctx('关闭 保持登录状态 !');
    } else {
        drmm_zddr_g.innerHTML = '✔';
        localStorage.dr_mmdr = 1;
        localStorage.dr_mmdr_drsj = 0;
        Sku_tctx('打开 保持登录状态 !');
    }
});
var drmm_mmdr_sj = document.querySelector('.drmm_mmdr_sj');
drmm_mmdr_sj.value = localStorage.dr_mmdr_mmfw;
drmm_mmdr_sj.addEventListener('blur', function(e) {
    if (drmm_mmdr_sj.value >= 1 && drmm_mmdr_sj.value <= (60 * 24 * 3)) {
        Sku_tctx('更改成功 !');
        localStorage.dr_mmdr_drsj = 0;
        localStorage.dr_mmdr_mmfw = drmm_mmdr_sj.value;
    } else if (drmm_mmdr_sj.value < 1) {
        Sku_tctx('更改失败 ! 时间不能小于 1 分钟');
        drmm_mmdr_sj.value = localStorage.dr_mmdr_mmfw;
    } else if (drmm_mmdr_sj.value > (60 * 24 * 3)) {
        Sku_tctx('更改失败 ! 时间不能大于 72 小时');
        drmm_mmdr_sj.value = localStorage.dr_mmdr_mmfw;
    }
});






//关于我们
shezhi_gywm = document.querySelector('.shezhi_gywm');
shezhi_gywm_ym = document.querySelector('.shezhi_gywm_ym');
gywm_ci_shu = document.querySelector('.gywm_ci_shu');
shezhi_gywm.addEventListener('click', function() {
    shezhi_gywm_ym.style.display = 'block';
    shezhi_min.style.display = 'none';
});
gywm_ban_ben = document.querySelector('.gywm_ban_ben');
gywm_ban_ben.innerHTML = localStorage.ban_ben;
gywm_ci_shu.innerHTML = localStorage.sy_ci_shu + ' 次';





// 导入与导出
var daoru_ym_jmdc = document.querySelector('.daoru_ym_jmdc');
var daoru_ym_dr = document.querySelector('.daoru_ym_dr');
var daoru_ym_dc = document.querySelector('.daoru_ym_dc');
var daoru_ym_sc = document.querySelector('.daoru_ym_sc');
var shezhi_daoru = document.querySelector('.shezhi_daoru');
var shezhi_daoru_ym = document.querySelector('.shezhi_daoru_ym');
var jisuan_bendidx = 0;

shezhi_daoru.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_daoru_ym.style.display = 'block';
    daoru_ym_sc.focus();

    var daochu_sz = [];
    // 导航栏
    daochu_sz[0] = localStorage.dhr_sz;
    //导航栏页面
    daochu_sz[1] = localStorage.dhr_ym_dx;
    //万能搜索引擎
    daochu_sz[2] = localStorage.sy_sosuo_yq;
    //头像
    daochu_sz[3] = localStorage.tou_xiang;
    //留言
    daochu_sz[4] = localStorage.liu_yan_dx;
    // 所有壁纸
    daochu_sz[5] = localStorage.bi_zhi_s;
    // 当前壁纸
    daochu_sz[6] = localStorage.bi_zhi;
    //天气
    daochu_sz[7] = localStorage.tian_qi;
    //字体颜色
    daochu_sz[8] = localStorage.zi_ti_color;
    //重字体颜色
    daochu_sz[9] = localStorage.zi_ti_click_color;
    //背景颜色
    daochu_sz[10] = localStorage.bei_jing_color;
    //背景透明度
    daochu_sz[11] = localStorage.bei_jing_tmd;
    //背景确认框
    daochu_sz[12] = localStorage.bei_jing_kuan_ture;
    //背景框颜色
    daochu_sz[13] = localStorage.bei_jing_kuan_color;
    //背景框透明度
    daochu_sz[14] = localStorage.bei_jing_kuan_tmd;
    //毛玻璃
    daochu_sz[15] = localStorage.mao_bo_li;
    //自动备份
    daochu_sz[16] = localStorage.zdbf;
    //使用次数
    daochu_sz[17] = localStorage.sy_ci_shu;
    //倒计时
    daochu_sz[18] = localStorage.sy_djs;
    //密码
    daochu_sz[19] = localStorage.dr_mm;
    //作品展示
    daochu_sz[20] = localStorage.sy_zpzs_lj;
    daochu_sz[21] = localStorage.sy_zpzs_mz;
    // 音乐
    daochu_sz[22] = localStorage.music_cd;
    daochu_sz[23] = localStorage.music_bfsx;
    daochu_sz[24] = localStorage.music_sydx;
    // 搜索记录
    daochu_sz[25] = localStorage.lsjl;
    // 轮播选择
    daochu_sz[26] = localStorage.sy_lbxz;
    // HTSP
    daochu_sz[27] = localStorage.htsp_s;
    // 注册表
    daochu_sz[28] = localStorage.sku_zcb;
    // 背景颜色
    daochu_sz[29] = localStorage.bi_zhi_ys;
    //上传时间
    function getFormattedTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
        const date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
        const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
        const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
        return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    }
    daochu_sz[30] = getFormattedTime();

    jisuan_bendidx = JSON.stringify(daochu_sz).length;
});

//导出
daoru_ym_dc.addEventListener('click', function(e) {
    var daochu_sz = [];
    // 导航栏
    daochu_sz[0] = localStorage.dhr_sz;
    //导航栏页面
    daochu_sz[1] = localStorage.dhr_ym_dx;
    //万能搜索引擎
    daochu_sz[2] = localStorage.sy_sosuo_yq;
    //头像
    daochu_sz[3] = localStorage.tou_xiang;
    //留言
    daochu_sz[4] = localStorage.liu_yan_dx;
    // 所有壁纸
    daochu_sz[5] = localStorage.bi_zhi_s;
    // 当前壁纸
    daochu_sz[6] = localStorage.bi_zhi;
    //天气
    daochu_sz[7] = localStorage.tian_qi;
    //字体颜色
    daochu_sz[8] = localStorage.zi_ti_color;
    //重字体颜色
    daochu_sz[9] = localStorage.zi_ti_click_color;
    //背景颜色
    daochu_sz[10] = localStorage.bei_jing_color;
    //背景透明度
    daochu_sz[11] = localStorage.bei_jing_tmd;
    //背景确认框
    daochu_sz[12] = localStorage.bei_jing_kuan_ture;
    //背景框颜色
    daochu_sz[13] = localStorage.bei_jing_kuan_color;
    //背景框透明度
    daochu_sz[14] = localStorage.bei_jing_kuan_tmd;
    //毛玻璃
    daochu_sz[15] = localStorage.mao_bo_li;
    //自动备份
    daochu_sz[16] = localStorage.zdbf;
    //使用次数
    daochu_sz[17] = localStorage.sy_ci_shu;
    //倒计时
    daochu_sz[18] = localStorage.sy_djs;
    //密码
    daochu_sz[19] = localStorage.dr_mm;
    //作品展示
    daochu_sz[20] = localStorage.sy_zpzs_lj;
    daochu_sz[21] = localStorage.sy_zpzs_mz;
    // 音乐
    daochu_sz[22] = localStorage.music_cd;
    daochu_sz[23] = localStorage.music_bfsx;
    daochu_sz[24] = localStorage.music_sydx;
    // 搜索记录
    daochu_sz[25] = localStorage.lsjl;
    // 轮播选择
    daochu_sz[26] = localStorage.sy_lbxz;
    // HTSP
    daochu_sz[27] = localStorage.htsp_s;
    // 注册表
    daochu_sz[28] = localStorage.sku_zcb;
    // 背景颜色
    daochu_sz[29] = localStorage.bi_zhi_ys;
    //上传时间
    function getFormattedTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
        const date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
        const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
        const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
        return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    }
    daochu_sz[30] = getFormattedTime();

    daoru_ym_sc.value = JSON.stringify(daochu_sz);

    daoru_ym_sc_tjzs();

    // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
    WGS_txt_wenbenchuanjian('S-ku库', daoru_ym_sc.value);

    function WGS_txt_wenbenchuanjian(fileName, txt) {
        // 创建文本内容
        var text = txt;

        // 创建Blob对象
        var blob = new Blob([text], {
            type: "text/plain;charset=utf-8"
        });

        // 创建下载链接
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url); // 释放内存
    }

});

// 加密导出

daoru_ym_jmdc.addEventListener('click', function(e) {
    var daochu_sz = [];
    // 导航栏
    daochu_sz[0] = localStorage.dhr_sz;
    //导航栏页面
    daochu_sz[1] = localStorage.dhr_ym_dx;
    //万能搜索引擎
    daochu_sz[2] = localStorage.sy_sosuo_yq;
    //头像
    daochu_sz[3] = localStorage.tou_xiang;
    //留言
    daochu_sz[4] = localStorage.liu_yan_dx;
    // 所有壁纸
    daochu_sz[5] = localStorage.bi_zhi_s;
    // 当前壁纸
    daochu_sz[6] = localStorage.bi_zhi;
    //天气
    daochu_sz[7] = localStorage.tian_qi;
    //字体颜色
    daochu_sz[8] = localStorage.zi_ti_color;
    //重字体颜色
    daochu_sz[9] = localStorage.zi_ti_click_color;
    //背景颜色
    daochu_sz[10] = localStorage.bei_jing_color;
    //背景透明度
    daochu_sz[11] = localStorage.bei_jing_tmd;
    //背景确认框
    daochu_sz[12] = localStorage.bei_jing_kuan_ture;
    //背景框颜色
    daochu_sz[13] = localStorage.bei_jing_kuan_color;
    //背景框透明度
    daochu_sz[14] = localStorage.bei_jing_kuan_tmd;
    //毛玻璃
    daochu_sz[15] = localStorage.mao_bo_li;
    //自动备份
    daochu_sz[16] = localStorage.zdbf;
    //使用次数
    daochu_sz[17] = localStorage.sy_ci_shu;
    //倒计时
    daochu_sz[18] = localStorage.sy_djs;
    //密码
    daochu_sz[19] = localStorage.dr_mm;
    //作品展示
    daochu_sz[20] = localStorage.sy_zpzs_lj;
    daochu_sz[21] = localStorage.sy_zpzs_mz;
    // 音乐
    daochu_sz[22] = localStorage.music_cd;
    daochu_sz[23] = localStorage.music_bfsx;
    daochu_sz[24] = localStorage.music_sydx;
    // 搜索记录
    daochu_sz[25] = localStorage.lsjl;
    // 轮播选择
    daochu_sz[26] = localStorage.sy_lbxz;
    // HTSP
    daochu_sz[27] = localStorage.htsp_s;
    // 注册表
    daochu_sz[28] = localStorage.sku_zcb;
    // 背景颜色
    daochu_sz[29] = localStorage.bi_zhi_ys;
    //上传时间
    function getFormattedTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
        const date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
        const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
        const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
        return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    }
    daochu_sz[30] = getFormattedTime();

    daoru_ym_sc.value = WGS_zfc_jiami(JSON.stringify(daochu_sz), miyao);

    daoru_ym_sc_tjzs();

    // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
    WGS_txt_wenbenchuanjian('S-ku加密库', WGS_zfc_jiami(JSON.stringify(daochu_sz), miyao));

    function WGS_txt_wenbenchuanjian(fileName, txt) {
        // 创建文本内容
        var text = txt;

        // 创建Blob对象
        var blob = new Blob([text], {
            type: "text/plain;charset=utf-8"
        });

        // 创建下载链接
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url); // 释放内存
    }

});

// 统计字数
var daoru_ym_sc_zishu = document.querySelector('.daoru_ym_sc_zishu');

function daoru_ym_sc_tjzs() {
    if (daoru_ym_sc.value.length < 15000) {
        daoru_ym_sc_zishu.innerText = '输入 ' + daoru_ym_sc.value.length + ' 位数';
    } else {
        if (daoru_ym_sc.value.length > jisuan_bendidx) {
            daoru_ym_sc_zishu.innerText = '输入 ' + daoru_ym_sc.value.length + ' 位数 > 本地 ' + jisuan_bendidx + ' 位数';
        } else if (daoru_ym_sc.value.length == jisuan_bendidx) {
            daoru_ym_sc_zishu.innerText = '输入 ' + daoru_ym_sc.value.length + ' 位数 = 本地 ' + jisuan_bendidx + ' 位数';
        } else {
            daoru_ym_sc_zishu.innerText = '输入 ' + daoru_ym_sc.value.length + ' 位数 < 本地 ' + jisuan_bendidx + ' 位数\n(当前数据量较小' + (jisuan_bendidx - daoru_ym_sc.value.length) + '位,建议谨慎操作导入)';
        }
    }
}
daoru_ym_sc.addEventListener('input', function(e) {
    daoru_ym_sc_tjzs();
});

//导入
var daoru_sz = [];

function daoru_sz_hs() {
    if (daoru_sz.length == 31) {
        // 导航栏
        localStorage.dhr_sz = daoru_sz[0];
        //导航栏页面
        localStorage.dhr_ym_dx = daoru_sz[1];
        //万能搜索引擎
        localStorage.sy_sosuo_yq = daoru_sz[2];
        //头像
        localStorage.tou_xiang = daoru_sz[3];
        //留言
        localStorage.liu_yan_dx = daoru_sz[4];
        // 所有壁纸
        localStorage.bi_zhi_s = daoru_sz[5];
        // 当前壁纸
        localStorage.bi_zhi = daoru_sz[6];
        //天气
        localStorage.tian_qi = daoru_sz[7];
        //字体颜色
        localStorage.zi_ti_color = daoru_sz[8];
        //重字体颜色
        localStorage.zi_ti_click_color = daoru_sz[9];
        //背景颜色
        localStorage.bei_jing_color = daoru_sz[10];
        //背景透明度
        localStorage.bei_jing_tmd = daoru_sz[11];
        //背景确认框
        localStorage.bei_jing_kuan_ture = daoru_sz[12];
        //背景框颜色
        localStorage.bei_jing_kuan_color = daoru_sz[13];
        //背景框透明度
        localStorage.bei_jing_kuan_tmd = daoru_sz[14];
        //毛玻璃
        localStorage.mao_bo_li = daoru_sz[15];
        //自动备份
        localStorage.zdbf = daoru_sz[16];
        //使用次数
        localStorage.sy_ci_shu = daoru_sz[17];
        //倒计时
        localStorage.sy_djs = daoru_sz[18];
        //密码
        localStorage.dr_mm = daoru_sz[19];
        //作品展示
        localStorage.sy_zpzs_lj = daoru_sz[20];
        localStorage.sy_zpzs_mz = daoru_sz[21];
        // 音乐 
        localStorage.music_cd = daoru_sz[22];
        localStorage.music_bfsx = daoru_sz[23];
        localStorage.music_sydx = daoru_sz[24];
        // 搜索记录
        localStorage.lsjl = daoru_sz[25];
        // 轮播选择
        localStorage.sy_lbxz = daoru_sz[26];
        // HTSP
        localStorage.htsp_s = daoru_sz[27];
        // 注册表
        localStorage.sku_zcb = daoru_sz[28];
        // 背景颜色
        localStorage.bi_zhi_ys = daoru_sz[29];

        // 时间戳0
        localStorage.dr_mmdr_drsj = 0;
        location.reload();
    } else {
        Sku_tctx('格式错误 ! 缺少导入模块');
        daoru_ym_sc.value = '';
    }
}

var daoru_ym_dr_mmym = document.querySelector('.daoru_ym_dr_mmym');
var daoru_ym_dr_mmym_qr = document.querySelector('.daoru_ym_dr_mmym_qr');
var daoru_ym_my = document.querySelector('.daoru_ym_my');
daoru_ym_dr.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log(WGS_zfc_jiami(daoru_ym_sc.value, miyao));
    try {
        if (daoru_ym_sc.value[0] == '[') {
            daoru_sz = JSON.parse(daoru_ym_sc.value);
            daoru_sz_hs();
        } else if (WGS_zfc_jiami(daoru_ym_sc.value, miyao) == 'ˇ˅˗˕˞˃˘˕˞') { //密钥
            // 暂停使用
            daoru_ym_sc.disabled = 'disabled';
            daoru_ym_sc.value = '';
            daoru_ym_sc.placeholder = '获取中.........';
            daoru_ym_sc_tjzs();
            // 确保服务器支持CORS
            const url = WGS_zfc_jiami('˘˄˄ˀ˃ʊʟʟˇ˅˗˕˞˃˘˕˞ʂʃʁʅʀʁʞ˗˙˄˘˅˒ʞ˙˟ʟ˧˗˃ʝˣ˛˅ʟˣʝ˛˅倐奶尣ʞ˄ˈ˄', miyao);

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.text();
                })
                .then(data => {
                    daoru_ym_sc.value = data;
                    Sku_tctx('日期: ' + WGS_zfc_jiami(daoru_ym_sc.value.substring(daoru_ym_sc.value.length - 21, daoru_ym_sc.value.length - 2), miyao));
                    // 可以使用
                    daoru_ym_sc.disabled = '';
                    daoru_ym_sc.placeholder = '导入模块 / 密钥 / 网址';
                    daoru_ym_sc_tjzs();
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                    Sku_tctx('获取失败! 网络故障 或 地址错误');
                    console.log('获取失败! 网络故障 或 地址错误');
                    // 可以使用
                    daoru_ym_sc.disabled = '';
                    daoru_ym_sc.placeholder = '导入模块 / 密钥 / 网址';
                    daoru_ym_sc_tjzs();
                });
        } else if (daoru_ym_sc.value.substring(0, 4) == 'http') { //网址导入
            // 暂停使用
            daoru_ym_sc.disabled = 'disabled';
            daoru_ym_sc.placeholder = '获取中.........';
            // 确保服务器支持CORS
            const url = daoru_ym_sc.value;
            daoru_ym_sc.value = '';

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.text();
                })
                .then(data => {
                    daoru_ym_sc.value = data;
                    // 可以使用
                    daoru_ym_sc.disabled = '';
                    daoru_ym_sc.placeholder = '导入模块 / 密钥 / 网址';
                })
                .catch(error => {
                    console.error('There has been a problem with your fetch operation:', error);
                    Sku_tctx('获取失败! 网络故障 或 地址错误');
                    console.log('获取失败! 网络故障 或 地址错误');
                    // 可以使用
                    daoru_ym_sc.disabled = '';
                    daoru_ym_sc.placeholder = '导入模块 / 密钥 / 网址';
                });
        } else {
            daoru_sz = JSON.parse(WGS_zfc_jiemi(daoru_ym_sc.value, miyao));
            if (daoru_sz[19] == '') {
                daoru_sz_hs();
            } else {
                daoru_ym_dr_mmym.style.display = 'block';
                daoru_ym_my.focus();
            }
        }
    } catch (error) {
        // 如果上面代码有异常时
        daoru_ym_sc.value = '';
        daoru_ym_sc_tjzs();
        Sku_tctx('格式错误 ! 不符合的导入模块');
    }
});

// 加密导入密钥页面
daoru_ym_dr_mmym.addEventListener('click', function(e) {
    e.stopPropagation();
});
daoru_ym_dr_mmym_qr.addEventListener('click', function(e) {
    daoru_sz = JSON.parse(WGS_zfc_jiemi(daoru_ym_sc.value, miyao));
    if (daoru_sz[19] == S_ku_jiami(daoru_ym_my.value)) {
        daoru_sz_hs();
    }
    if (daoru_ym_my.value == '') {
        Sku_tctx('密钥不能为空 !');
    } else {
        Sku_tctx('密钥错误 !');
        daoru_ym_my.value = '';
        daoru_ym_my.focus();
    }
});

// 2023加:导入本地
var daoru_ym_bendi = document.querySelector('.daoru_ym_bendi');
daoru_ym_bendi.addEventListener('click', function(e) {
    var zd_daochu = [];
    // 导航栏
    zd_daochu[0] = localStorage.dhr_sz;
    //导航栏页面
    zd_daochu[1] = localStorage.dhr_ym_dx;
    //万能搜索引擎
    zd_daochu[2] = localStorage.sy_sosuo_yq;
    //头像
    zd_daochu[3] = localStorage.tou_xiang;
    //留言
    zd_daochu[4] = localStorage.liu_yan_dx;
    // 所有壁纸
    zd_daochu[5] = localStorage.bi_zhi_s;
    // 当前壁纸
    zd_daochu[6] = localStorage.bi_zhi;
    //天气
    zd_daochu[7] = localStorage.tian_qi;
    //字体颜色
    zd_daochu[8] = localStorage.zi_ti_color;
    //重字体颜色
    zd_daochu[9] = localStorage.zi_ti_click_color;
    //背景颜色
    zd_daochu[10] = localStorage.bei_jing_color;
    //背景透明度
    zd_daochu[11] = localStorage.bei_jing_tmd;
    //背景确认框
    zd_daochu[12] = localStorage.bei_jing_kuan_ture;
    //背景框颜色
    zd_daochu[13] = localStorage.bei_jing_kuan_color;
    //背景框透明度
    zd_daochu[14] = localStorage.bei_jing_kuan_tmd;
    //毛玻璃
    zd_daochu[15] = localStorage.mao_bo_li;
    //自动备份
    zd_daochu[16] = localStorage.zdbf;
    //使用次数
    zd_daochu[17] = localStorage.sy_ci_shu;
    //倒计时
    zd_daochu[18] = localStorage.sy_djs;
    //密码
    zd_daochu[19] = localStorage.dr_mm;
    //作品展示
    zd_daochu[20] = localStorage.sy_zpzs_lj;
    zd_daochu[21] = localStorage.sy_zpzs_mz;
    // 音乐
    zd_daochu[22] = localStorage.music_cd;
    zd_daochu[23] = localStorage.music_bfsx;
    zd_daochu[24] = localStorage.music_sydx;
    // 搜索记录
    zd_daochu[25] = localStorage.lsjl;
    // 轮播选择
    zd_daochu[26] = localStorage.sy_lbxz;
    // HTSP
    zd_daochu[27] = localStorage.htsp_s;
    // 注册表
    zd_daochu[28] = localStorage.sku_zcb;
    // 背景颜色
    zd_daochu[29] = localStorage.bi_zhi_ys;
    //上传时间
    function getFormattedTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
        const date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
        const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
        const minute = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
        const second = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
        return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    }
    // 打包时间
    zd_daochu[30] = getFormattedTime();

    try {
        //保存
        window.localStorage.setItem(
            `${'DATE:'+getFormattedTime() + ' Byte:' +JSON.stringify(zd_daochu).length}自动保存`,
            JSON.stringify(zd_daochu)
        )

        // 更新html
        var daorubendi_max_hd = document.querySelector('.daorubendi_max_hd');
        var daorubendi_min = document.querySelector('.daorubendi_min');
        daorubendi_max_hd.removeChild(daorubendi_min);
        var div = document.createElement('div');
        div.className = 'daorubendi_min';
        daorubendi_max_hd.appendChild(div);
        cxjiaz_daorubendi_xx();
        bendidaoru_click();
        bendidaoru_sc();

        // 导入提醒
        daoru_ym_bendi.innerHTML = '导入成功';
        setTimeout(function() {
            daoru_ym_bendi.innerHTML = '导入本地';
        }, 2000);
    } catch (error) {
        // 如果上面代码有异常时
        Sku_tctx('导入错误 ! 请检查内存是否充足 或 其他问题');
    }
});





// 查看导入本地信息和设置
var shezhi_daoru_bendi_ym = document.querySelector('.shezhi_daoru_bendi_ym');
var daoru_ym_bendi_click = document.querySelector('.daoru_ym_bendi_click');
var bizhi_gundon2 = document.querySelector('.bizhi_gundon2');
var daorubendi_max_hd = document.querySelector('.daorubendi_max_hd');
daoru_ym_bendi_click.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_daoru_ym.style.display = 'none';
    shezhi_daoru_bendi_ym.style.display = 'block';
    bizhi_gundon2.innerHTML = '↓';
    daorubendi_max_hd.scroll(0, 0);
});

// 导出所有保存的密钥  
cxjiaz_daorubendi_xx();

function cxjiaz_daorubendi_xx() {
    function getAutoSaveKeys() {
        const keys = Object.keys(localStorage);
        const autoSaveKeys = keys.filter(key => key.includes('自动保存'));
        return autoSaveKeys;
    }
    var daoru_bendi_s = getAutoSaveKeys();

    // 去除全部自动保存4个字
    function removeLastFourChars(arr) {
        return arr.map(str => str.slice(0, -4));
    }
    var daoru_bendi_s_sj = removeLastFourChars(daoru_bendi_s);

    // 从大到小排序
    function bubbleSort(arr) {
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - i - 1; j++) {
                if (arr[j] < arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    var daoru_bendi_s_pailie_sj = bubbleSort(daoru_bendi_s_sj);

    // html导出存档
    var daorubendi_min = document.querySelector('.daorubendi_min');
    for (var i = 0; i < daoru_bendi_s_pailie_sj.length; i++) {
        var div = document.createElement('div');
        div.className = 'daorubendi_s';
        div.innerHTML = '<div class="daorubendi_s_sj">' + daoru_bendi_s_pailie_sj[i] + '</div><div class="daorubendi_s_yy">应用</div><div class="daorubendi_s_cs"><i class="iconfont icon-shanchu1 i_sc_tb"></i></div>';
        daorubendi_min.appendChild(div);
    }
};


// 本地导入应用click
bendidaoru_click();

function bendidaoru_click() {
    var daorubendi_s_yy = document.querySelectorAll('.daorubendi_s_yy');
    for (var i = 0; i < daorubendi_s_yy.length; i++) {
        daorubendi_s_yy[i].addEventListener('click', function(e) {
            try {
                var daorubendi_click = this.previousElementSibling.innerHTML + '自动保存';
                var drnr = window.localStorage.getItem(`${daorubendi_click}`);
                var daoru_sz = JSON.parse(drnr);
                // 导航栏 
                localStorage.dhr_sz = daoru_sz[0];
                //导航栏页面
                localStorage.dhr_ym_dx = daoru_sz[1];
                //万能搜索引擎
                localStorage.sy_sosuo_yq = daoru_sz[2];
                //头像
                localStorage.tou_xiang = daoru_sz[3];
                //留言
                localStorage.liu_yan_dx = daoru_sz[4];
                // 所有壁纸
                localStorage.bi_zhi_s = daoru_sz[5];
                // 当前壁纸
                localStorage.bi_zhi = daoru_sz[6];
                //天气
                localStorage.tian_qi = daoru_sz[7];
                //字体颜色
                localStorage.zi_ti_color = daoru_sz[8];
                //重字体颜色
                localStorage.zi_ti_click_color = daoru_sz[9];
                //背景颜色
                localStorage.bei_jing_color = daoru_sz[10];
                //背景透明度
                localStorage.bei_jing_tmd = daoru_sz[11];
                //背景确认框
                localStorage.bei_jing_kuan_ture = daoru_sz[12];
                //背景框颜色
                localStorage.bei_jing_kuan_color = daoru_sz[13];
                //背景框透明度
                localStorage.bei_jing_kuan_tmd = daoru_sz[14];
                //毛玻璃
                localStorage.mao_bo_li = daoru_sz[15];
                //自动备份
                localStorage.zdbf = daoru_sz[16];
                //使用次数
                localStorage.sy_ci_shu = daoru_sz[17];
                //倒计时
                localStorage.sy_djs = daoru_sz[18];
                //密码
                localStorage.dr_mm = daoru_sz[19];
                //作品展示
                localStorage.sy_zpzs_lj = daoru_sz[20];
                localStorage.sy_zpzs_mz = daoru_sz[21];
                // 音乐
                localStorage.music_cd = daoru_sz[22];
                localStorage.music_bfsx = daoru_sz[23];
                localStorage.music_sydx = daoru_sz[24];
                // 搜索记录
                localStorage.lsjl = daoru_sz[25];
                // 轮播选择
                localStorage.sy_lbxz = daoru_sz[26];
                // HTSP
                localStorage.htsp_s = daoru_sz[27];
                // 注册表
                localStorage.sku_zcb = daoru_sz[28];
                // 背景颜色
                localStorage.bi_zhi_ys = daoru_sz[29];


                // 时间戳0
                localStorage.dr_mmdr_drsj = 0;
                location.reload();
            } catch (error) {
                // 这个块会在 try 中有错误抛出时执行
                Sku_tctx('模块错误 ! key值以改变 或 其他原因');
            }
        });
    }
}

// 删除本地导入应用
bendidaoru_sc();

function bendidaoru_sc() {
    var daorubendi_s_cs = document.querySelectorAll('.daorubendi_s_cs');
    for (var i = 0; i < daorubendi_s_cs.length; i++) {
        daorubendi_s_cs[i].addEventListener('click', function(e) {
            // 删除内存
            var daorubendi_s_cs = this.previousElementSibling.previousElementSibling.innerHTML + '自动保存';
            localStorage.removeItem(`${daorubendi_s_cs}`);
            // 删除html
            this.parentNode.parentNode.removeChild(this.parentNode);

            Sku_tctx('删除成功');
        });
    }
}





// 历史搜索记录
var shezhi_ssjl = document.querySelector('.shezhi_ssjl');
var shezhi_ssjl_ym = document.querySelector('.shezhi_ssjl_ym');
var ssjl_min = document.querySelector('.ssjl_min');
var ssbqym_max = document.querySelector('.ssbqym_max');
var ssjl_max = document.querySelector('.ssjl_max');
var bizhi_gundon4 = document.querySelector('.bizhi_gundon4');
shezhi_ssjl.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_ssjl_ym.style.display = 'block'; //设置页面打开
    bizhi_gundon4.innerHTML = '↓';
    ssjl_max.scroll(0, 0);
});
// 设置页面输出历史记录
function ssjl_shuchu() {
    ssjl_min.innerHTML = '';
    var ssjl_s = JSON.parse(localStorage.lsjl);
    for (var i = 0; i < ssjl_s.length; i++) {
        var div = document.createElement('div');
        div.className = 'ssjl_s';
        div.innerText = ssjl_s[i];
        // 添加左击搜索
        div.addEventListener('click', function(e) {
            so_ssk.value = this.innerText;
            so_anniu.click();
        });
        // 添加右击删除
        div.addEventListener('contextmenu', function(e) {
            // 删除html
            ssjl_min.removeChild(this);
            // 删除内存
            var lsjl = JSON.parse(localStorage.lsjl);
            lsjl.splice(lsjl.indexOf(this.innerText), 1);
            localStorage.lsjl = JSON.stringify(lsjl);
        });
        ssjl_min.appendChild(div);
    }
}
ssjl_shuchu();
// 删除搜索记录
i_ssjl_sc_tb = document.querySelector('.i_ssjl_sc_tb');
i_ssjl_sc_tb.addEventListener('click', function(e) {
    var lsjl = []
    localStorage.lsjl = JSON.stringify(lsjl);
    ssjl_shuchu();
});
// 匹配补全
var ssbqym_min = document.querySelector('.ssbqym_min');
var so_ssk = document.querySelector('.so_ssk');
var so_yq_s = document.querySelector('.so_yq_s');
so_ssk.addEventListener('click', function(e) {
    e.stopPropagation();
});
so_ssk.addEventListener('input', function(e) {
    if (so_ssk.value !== '') {
        var lsjl = JSON.parse(localStorage.lsjl);
        var qrgs = 0;
        lsjl_jp_dys = -1;
        // 清除原有
        ssbqym_min.innerHTML = '';
        // 匹配添加
        for (var i = 0; i < lsjl.length; i++) {
            if (lsjl[i].indexOf(so_ssk.value) !== -1 && lsjl[i] !== so_ssk.value) {
                qrgs++;
                var div = document.createElement('div');
                div.className = 'ssbq_s';
                div.innerText = lsjl[i];
                div.addEventListener('click', function(e) {
                    so_ssk.value = this.innerText;
                    so_anniu.click();
                });

                ssbqym_min.appendChild(div);

                WGS_wenbengundon('.ssbq_s', 9);
            }
        }
        // 显示页面
        if (qrgs == 0) {
            ssbqym.style.display = 'none';
        } else {
            ssbqym.style.display = 'block';
            // 显示最上面
            ssbqym_max.scroll(0, 0);
        }
    } else {
        var lsjl = JSON.parse(localStorage.lsjl);
        var qrgs = 0;
        lsjl_jp_dys = -1;
        // 清除原有
        ssbqym_min.innerHTML = '';
        // 添加所有
        for (var i = 0; i < lsjl.length; i++) {
            qrgs++;
            var div = document.createElement('div');
            div.className = 'ssbq_s';
            div.innerText = lsjl[i];
            div.addEventListener('click', function(e) {
                so_ssk.value = this.innerText;
                so_anniu.click();
            });

            ssbqym_min.appendChild(div);

            WGS_wenbengundon('.ssbq_s', 9);
        }
        // 显示页面
        if (qrgs == 0) {
            ssbqym.style.display = 'none';
        } else {
            ssbqym.style.display = 'block';
            // 显示最上面
            ssbqym_max.scroll(0, 0);
        }
    }
});
so_ssk.addEventListener('focus', function(e) {
    if (so_ssk.value !== '') {
        var lsjl = JSON.parse(localStorage.lsjl);
        var qrgs = 0;
        lsjl_jp_dys = -1;
        // 清除原有
        ssbqym_min.innerHTML = '';
        // 匹配添加
        for (var i = 0; i < lsjl.length; i++) {
            if (lsjl[i].indexOf(so_ssk.value) !== -1 && lsjl[i] !== so_ssk.value) {
                qrgs++;
                var div = document.createElement('div');
                div.className = 'ssbq_s';
                div.innerText = lsjl[i];
                div.addEventListener('click', function(e) {
                    so_ssk.value = this.innerText;
                    so_anniu.click();
                });

                ssbqym_min.appendChild(div);

                WGS_wenbengundon('.ssbq_s', 9);
            }
        }
        // 显示页面
        if (qrgs == 0) {
            ssbqym.style.display = 'none';
        } else {
            so_yq_s.style.display = 'none';
            ssbqym.style.display = 'block';
            // 显示最上面
            ssbqym_max.scroll(0, 0);
        }
    } else {
        var lsjl = JSON.parse(localStorage.lsjl);
        var qrgs = 0;
        lsjl_jp_dys = -1;
        // 清除原有
        ssbqym_min.innerHTML = '';
        // 添加所有
        for (var i = 0; i < lsjl.length; i++) {
            qrgs++;
            var div = document.createElement('div');
            div.className = 'ssbq_s';
            div.innerText = lsjl[i];
            div.addEventListener('click', function(e) {
                so_ssk.value = this.innerText;
                so_anniu.click();
            });

            ssbqym_min.appendChild(div);

            WGS_wenbengundon('.ssbq_s', 9);
        }
        // 显示页面
        if (qrgs == 0) {
            ssbqym.style.display = 'none';
        } else {
            so_yq_s.style.display = 'none';
            ssbqym.style.display = 'block';
            // 显示最上面
            ssbqym_max.scroll(0, 0);
        }
    }
});
// 上下选择补全
document.addEventListener('keydown', function(e) {
    if (ssbqym.style.display == 'block') {
        var ssbq_s = document.querySelectorAll('.ssbq_s');
        if (e.key == 'ArrowDown') {
            if (lsjl_jp_dys == -1 || lsjl_jp_dys == ssbq_s.length - 1) {
                lsjl_jp_dys = 0;
            } else {
                lsjl_jp_dys++;
            }
            // 自动带入输入框
            so_ssk.value = ssbq_s[lsjl_jp_dys].innerText;
            // so_ssk.selectionEnd = so_ssk.value.length;
            // 去除高亮
            for (var i = 0; i < ssbq_s.length; i++) {
                ssbq_s[i].style.backgroundColor = '';
                ssbq_s[i].style.color = '';
            }
            // 当前高亮
            ssbq_s[lsjl_jp_dys].style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
            ssbq_s[lsjl_jp_dys].style.color = RGB_zhq(localStorage.zi_ti_click_color);
            // 阻挡时滚动
            if ((lsjl_jp_dys + 1) * 40 > ssbqym_max.scrollTop + ssbqym_max.clientHeight) {
                ssbqym_max.scrollTop = ((lsjl_jp_dys + 1) * 40) - ssbqym_max.clientHeight;
            } else if (lsjl_jp_dys * 40 < ssbqym_max.scrollTop) {
                ssbqym_max.scrollTop = lsjl_jp_dys * 40;
            }
        }
        if (e.key == 'ArrowUp') {
            if (lsjl_jp_dys == -1 || lsjl_jp_dys == 0) {
                lsjl_jp_dys = ssbq_s.length - 1;
            } else {
                lsjl_jp_dys--;
            }
            // 自动带入输入框
            so_ssk.value = ssbq_s[lsjl_jp_dys].innerText;
            // 消除自动上键光标靠左，实际靠右
            setTimeout(function() {
                so_ssk.setSelectionRange(so_ssk.value.length, so_ssk.value.length);
            });
            // 去除高亮
            for (var i = 0; i < ssbq_s.length; i++) {
                ssbq_s[i].style.backgroundColor = '';
                ssbq_s[i].style.color = '';
            }
            // 当前高亮
            ssbq_s[lsjl_jp_dys].style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
            ssbq_s[lsjl_jp_dys].style.color = RGB_zhq(localStorage.zi_ti_click_color);
            // 阻挡时滚动
            if ((lsjl_jp_dys + 1) * 40 > ssbqym_max.scrollTop + ssbqym_max.clientHeight) {
                ssbqym_max.scrollTop = ((lsjl_jp_dys + 1) * 40) - ssbqym_max.clientHeight;
            } else if (lsjl_jp_dys * 40 < ssbqym_max.scrollTop) {
                ssbqym_max.scrollTop = lsjl_jp_dys * 40;
            }
        }
    }
});




// 首页内容选择
var sy_lbt = document.querySelector('.sy_lbt');
var shezhi_synr_ym = document.querySelector('.shezhi_synr_ym');
var shezhi_synr = document.querySelector('.shezhi_synr');
var sy_3d_kaiguan = document.querySelector('.sy_3d_kaiguan');
shezhi_synr.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_synr_ym.style.display = 'block';
});
var sy_nr_xz1 = document.querySelector('.sy_nr_xz1');
var sy_nr_xz2 = document.querySelector('.sy_nr_xz2');
var sy_nr_xz3 = document.querySelector('.sy_nr_xz3');
var sy_nr_xz4 = document.querySelector('.sy_nr_xz4');
sy_nr_xz1.addEventListener('click', function(e) {
    sy_lbt.innerHTML = '';
    clearInterval(sy_lbnr_dsq);
    localStorage.sy_lbxz = 0;
    sy_3d_kaiguan.style.display = 'none';
    Sku_tctx('更换成功 ! 可以尝试戳一戳小球 -( ° ▽、° )');
});
sy_nr_xz2.addEventListener('click', function(e) {
    sy_lbt.innerHTML = '';
    clearInterval(sy_lbnr_dsq);
    localStorage.sy_lbxz = 1;
    sy_3d_kaiguan.style.display = 'block';
    Sku_tctx('更换成功 ! 内容过少可能会出现大量重复内容 ╮(╯-╰)╭');
});
sy_nr_xz3.addEventListener('click', function(e) {
    sy_lbt.innerHTML = '';
    clearInterval(sy_lbnr_dsq);
    localStorage.sy_lbxz = 2;
    sy_3d_kaiguan.style.display = 'none';
    Sku_tctx('更换成功 ! 我的电脑只配空白 (;´༎ຶД༎ຶ`)');
});
sy_nr_xz4.addEventListener('click', function(e) {
    Sku_tctx('不久将与世人见面 (ง •_•)ง');
});

// 轮播内容定时器 全局变量
sy_lbnr_dsq = undefined;
// 定时器设置 全局变量
sy_lbt_sc_jsq = undefined;
sy_lbt_sc_jsq2 = undefined;
// 固定位置数
var sjnr_wz_shu = [0, 0, 0, 0, 0];

function sy_lbnr_hs() {
    if (localStorage.sy_lbxz == 0) {
        // 球球
        var sy_lbt = document.querySelector('.sy_lbt');
        var yqdx_w = 30;

        function sjs3(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        sy_lbnr_dsq = setInterval(function() {
            var nrmaxs0 = document.querySelector('.nrmaxs0');
            if (nrmaxs0 && nrmaxs0.style.display == 'block') {
                wz_x = sjs3(0, (1100 - yqdx_w));
                var div = document.createElement('div');
                div.className = 'sy_lbt_qp';
                div.style.backgroundColor = RGB_zhq(localStorage.zi_ti_color);
                div.style.boxShadow = '0 0 20px ' + RGB_zhq(localStorage.zi_ti_color);
                div.style.left = wz_x + 'px';
                div.style.top = 523 + yqdx_w + 'px';
                div.style.width = yqdx_w + 'px';
                div.style.height = yqdx_w + 'px';
                div.style.opacity = sjs3(50, 100) / 100;
                sy_lbt.appendChild(div);

                var sy_lbt_qp = document.querySelectorAll('.sy_lbt_qp');
                sy_lbt_qp[sy_lbt_qp.length - 1].addEventListener('click', function(e) {
                    this.style.opacity = 0;
                    this.style.transform = 'scale(1.5)';
                });
            }
        }, 1000);

        // 消除球球
        sy_lbt_sc_jsq2 = setTimeout(function() {
            sy_lbt_sc_jsq = setInterval(function() {
                var sy_lbt_qp = document.querySelectorAll('.sy_lbt_qp');
                var sy_lbt = document.querySelector('.sy_lbt');
                if (sy_lbt && sy_lbt_qp.length !== 0) { sy_lbt.removeChild(sy_lbt_qp[0]); }
            }, 1000);
        }, 5000);
    } else if (localStorage.sy_lbxz == 1) {
        // 输出框架
        for (var i = 0; i < 5; i++) {
            var sy_lbt = document.querySelector('.sy_lbt');
            var div = document.createElement('div');
            div.className = 'lbnr_max';
            sy_lbt.appendChild(div);
        }
        // 随机函数
        function sjs4(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // 直接输出
        var lbnr_max = document.querySelectorAll('.lbnr_max');
        // 固定位置数
        sjnr_wz_shu = [0, 0, 0, 0, 0];

        function sjnr_shuchu(gs) {
            // 1日程2作品3链接4未标记5设置6音乐
            var sj_nr_bl = [1, 2, 3, 3, 3, 4, 5, 6];

            // sz_zdsc(数组, 要删除的字符(不是索引号), 如果要替换成)
            function sz_zdsc(sz_s, sz_sc_zhi, sz_tj_zhi) {
                if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1 && sz_tj_zhi) {
                    sz_s.splice(sz_s.indexOf(sz_sc_zhi), 2, sz_tj_zhi);
                } else if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1) {
                    sz_s.splice(sz_s.indexOf(sz_sc_zhi), 1);
                }
            }

            function sj_nr_bl_schs(asd, num) { // 检测是否有元素,没有删除
                var sz = JSON.parse(localStorage[`${asd}`]);
                // 设置个数
                var count = 0;
                // 获取个数
                for (var key in sz) {
                    if (sz.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                        count++;
                    }
                }
                if (count == 0) { sz_zdsc(sj_nr_bl, num); }
            }
            // 检测倒计时
            sj_nr_bl_schs('sy_djs', 1);
            // 检测作品
            sj_nr_bl_schs('sy_zpzs_lj', 2);
            // 检测链接
            var dhr_ym_dx = JSON.parse(localStorage.dhr_ym_dx);
            var dhr_ym_dx_zzgs = 0;
            var count6 = 0;
            for (var key in dhr_ym_dx) {
                if (dhr_ym_dx.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                    count6++;
                }
            }
            for (var i = 0; i < count6; i++) {
                var dhr_ym_dxs = dhr_ym_dx['dhr_ym_dx' + i];
                var count7 = 0;
                for (var key in dhr_ym_dxs) {
                    if (dhr_ym_dxs.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                        count7++;
                    }
                }
                if (count7 !== 0) {
                    dhr_ym_dx_zzgs++;
                }
            }
            if (dhr_ym_dx_zzgs == 0) {
                sz_zdsc(sj_nr_bl, 3);
                sz_zdsc(sj_nr_bl, 3);
                sz_zdsc(sj_nr_bl, 3);
            }
            // 检测记录
            var liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
            var count8 = 0;
            var liu_yan_dx_wbj = 0;
            for (var key in liu_yan_dx) {
                if (liu_yan_dx.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                    count8++;
                }
            }
            for (var i = 0; i < count8; i++) {
                if (liu_yan_dx['liu_yan_sz' + i][2] == 2) {
                    liu_yan_dx_wbj++;
                }
            }
            if (liu_yan_dx_wbj == 0) {
                sz_zdsc(sj_nr_bl, 4);
            }
            // 检测音乐
            var music_cd = JSON.parse(localStorage.music_cd);
            if (music_cd[0].length == 0) {
                sz_zdsc(sj_nr_bl, 6);
            }





            for (var i = 0; i < 5; i++) {
                // 大于10不输出
                var sjnr_min_gs = document.querySelectorAll('.lbnr_max')[i].querySelectorAll('.lbnr_min').length;
                if (sjnr_min_gs > 10) {
                    continue;
                }
                // 小于10开始输出
                for (var t = 0; t < gs; t++) {
                    var sknr_sjs = sj_nr_bl[sjs4(0, sj_nr_bl.length - 1)];
                    if (sknr_sjs == 1) { //倒计时
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        div.addEventListener('click', function(e) {
                            sy_dw_richen.click();
                        });
                        // 获取倒计时内存
                        var sy_djs = JSON.parse(localStorage.sy_djs);
                        // 设置个数
                        var count = 0;
                        // 获取个数
                        for (var key in sy_djs) {
                            if (sy_djs.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                                count++;
                            }
                        }
                        var sknr_sjs2 = sjs4(0, count - 1);
                        // 内容编程
                        function countDown(time) {
                            var nowTime = +new Date();
                            var inputTime = +new Date(time);
                            var times = (inputTime - nowTime) / 1000;
                            var d = parseInt(times / 60 / 60 / 24);
                            d = d < 10 ? '0' + d : d;
                            var h = parseInt(times / 60 / 60 % 24);
                            h = h < 10 ? '0' + h : h;
                            var m = parseInt(times / 60 % 60);
                            m = m < 10 ? '0' + m : m;
                            var s = parseInt(times % 60);
                            s = s < 10 ? '0' + s : s;
                            if (times / 60 / 60 > 24) {
                                var time_ab = time.split(' ');
                                var sytians = parseInt((+new Date(time_ab[0] + ' 00:00:00') - +new Date()) / 1000 / 60 / 60 / 24) + 1;
                                if (sytians == 1) {
                                    return '就在明天';
                                } else if (sytians == 2) {
                                    return '就在后天';
                                } else if (sytians == 3) {
                                    return '就在大后天';
                                } else {
                                    return '再过 ' + sytians + ' 天后';
                                }
                                // return (h + d * 24) + ':' + m + ':' + s;
                            } else if (times < 0) {
                                return '日期已过,请注意时间!';
                            } else {
                                return '还剩:' + h + '时' + m + '分' + s + '秒';
                            }
                        }

                        div.innerHTML = '<div class="lbnr_djs">' + sy_djs['sy_djs' + sknr_sjs2][0] + '</div><div class="lbnr_djs2">' + countDown(sy_djs['sy_djs' + sknr_sjs2][2]) + '</div>';
                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    } else if (sknr_sjs == 2) { //作品
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        function decodeUriComponent(str) {
                            return decodeURIComponent(str).replace(/%u([0-9a-f]{4})/gi, function(match, p1) {
                                return String.fromCharCode(parseInt(p1, 16));
                            });
                        }
                        var sy_zpzs_mz = JSON.parse(localStorage.sy_zpzs_mz);
                        var sy_zpzs_lj = JSON.parse(localStorage.sy_zpzs_lj);
                        var sknr_sjs2 = sjs4(0, sy_zpzs_mz.length - 1);
                        div.addEventListener('click', function(e) {
                            window.open(this.querySelector('.lbnr_zp2').innerText.substring(3, 1000));
                        });

                        div.innerHTML = ' <div class="lbnr_zp">个人作品:' + sy_zpzs_mz[sknr_sjs2] + '</div><div class="lbnr_zp2">地址 ' + decodeUriComponent(sy_zpzs_lj[sknr_sjs2]) + '</div>';
                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    } else if (sknr_sjs == 3) { //链接
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        var dhr_ym_dx = JSON.parse(localStorage.dhr_ym_dx);
                        // 设置个数
                        var count2 = 0;
                        // 获取个数
                        for (var key in dhr_ym_dx) {
                            if (dhr_ym_dx.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                                count2++;
                            }
                        }
                        var sknr_sjs2 = sjs4(0, count2 - 1);
                        var dhr_ym_dx2 = dhr_ym_dx['dhr_ym_dx' + sknr_sjs2];
                        // 设置个数
                        var count3 = 0;
                        // 获取个数
                        for (var key in dhr_ym_dx2) {
                            if (dhr_ym_dx2.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                                count3++;
                            }
                        }

                        // 如果是空重新随机
                        while (count3 == 0) {
                            var sknr_sjs2 = sjs4(0, count2 - 1);
                            var dhr_ym_dx2 = dhr_ym_dx['dhr_ym_dx' + sknr_sjs2];
                            // 设置个数
                            count3 = 0;
                            // 获取个数
                            for (var key in dhr_ym_dx2) {
                                if (dhr_ym_dx2.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                                    count3++;
                                }
                            }
                        }

                        var sknr_sjs3 = sjs4(0, count3 - 1);
                        var sjnr_lj = dhr_ym_dx2['dhr_ym_sz' + sknr_sjs3]
                        if (sjnr_lj.length == 4) {
                            div.innerHTML = '<div class="lbnr_ljtp" style="background-image: url(' + sjnr_lj[0] + ');"></div><div class="lbnr_lj_xx"><div class="lbnr_ljmz">' + sjnr_lj[1] + '</div><div class="lbnr_ljbz">' + sjnr_lj[2] + '</div></div><div class="lbnr_lj_dz"><a class="lbnr_ljdz" target="_blank" href="' + sjnr_lj[3] + '">进入</a></div>';
                        } else if (sjnr_lj.length == 5) {
                            div.innerHTML = '<div class="lbnr_ljtp" style="background-image: url(' + sjnr_lj[0] + ');"></div><div class="lbnr_lj_xx"><div class="lbnr_ljmz">' + sjnr_lj[1] + '</div><div class="lbnr_ljbz">' + sjnr_lj[2] + '</div></div><div class="lbnr_lj_dz"><a class="lbnr_ljdz" target="_blank" href="' + sjnr_lj[3] + '">进入</a><a class="lbnr_ljxz" target="_blank" href="' + sjnr_lj[4] + '">下载</a></div>';
                        }

                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.width = '302px'
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    } else if (sknr_sjs == 4) { //记录
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        var liu_yan_dx = JSON.parse(localStorage.liu_yan_dx);
                        // 设置个数
                        var count4 = 0;
                        // 获取个数
                        for (var key in liu_yan_dx) {
                            if (liu_yan_dx.hasOwnProperty(key)) { // 确保属性是对象自身的属性，而不是原型链上的
                                count4++;
                            }
                        }
                        var liu_yan_sz_wbj = [];
                        for (var u = 0; u < count4; u++) {
                            if (liu_yan_dx['liu_yan_sz' + u][2] == 2) {
                                liu_yan_sz_wbj.push(liu_yan_dx['liu_yan_sz' + u]);
                            }
                        }
                        var sknr_sjs2 = sjs4(0, liu_yan_sz_wbj.length - 1);
                        var liu_yan_sz = liu_yan_sz_wbj[sknr_sjs2];

                        div.innerHTML = '<div class="lbnr_jl">未标记录 ' + liu_yan_sz[1] + '</div><div class="lbnr_jl2"></div>';
                        div.querySelector('.lbnr_jl2').innerText = liu_yan_sz[0];
                        div.addEventListener('click', function(e) {
                            var top_dhl_div = document.querySelector('.top_dhl').querySelectorAll('div');
                            top_dhl_div[2].click();
                            liu_yan_sxuan_wbj.click();
                        });
                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    } else if (sknr_sjs == 5) { //设置
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        var shezhi_min_div = document.querySelector('.shezhi_min').querySelectorAll('div');
                        var sknr_sjs2 = sjs4(0, shezhi_min_div.length - 1);

                        div.innerHTML = '<div class="lbnr_sz">设置</div><div class="lbnr_sz2">' + shezhi_min_div[sknr_sjs2].innerText + '</div>';
                        div.addEventListener('click', function(e) {
                            var top_dhl_div = document.querySelector('.top_dhl').querySelectorAll('div');
                            top_dhl_div[3].click();
                            for (var w = 0; w < shezhi_min_div.length; w++) {
                                if (this.querySelector('.lbnr_sz2').innerText == shezhi_min_div[w].innerText) {
                                    shezhi_min_div[w].click();
                                }
                            }
                        });
                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    } else if (sknr_sjs == 6) { //音乐
                        var div = document.createElement('div');
                        div.className = 'lbnr_min';

                        var music_cd = JSON.parse(localStorage.music_cd);
                        var sknr_sjs2 = sjs4(0, music_cd[0].length - 1);

                        div.innerHTML = '<div class="lbnr_yy"><i class="iconfont i_sy_sjnr_yybfq icon-kaishi3"></i><div>播放音乐</div></div><div class="lbnr_yy2">' + music_cd[0][sknr_sjs2] + '</div>';
                        div.addEventListener('click', function(e) {
                            var music_cd = JSON.parse(localStorage.music_cd);
                            var i_music_s_ks_tb = document.querySelectorAll('.i_music_s_ks_tb');
                            i_music_s_ks_tb[music_cd[0].indexOf(this.querySelector('.lbnr_yy2').innerText)].click();
                        });
                        lbnr_max[i].appendChild(div);
                        // 固定位置
                        div.style.left = sjnr_wz_shu[i] + 'px';
                        sjnr_wz_shu[i] += div.offsetWidth + 12;
                    }
                }
            }

            // 删除无用动态
            for (var u = 0; u < 5; u++) {
                var lbnr_min_s = document.querySelectorAll('.lbnr_max')[u].querySelectorAll('.lbnr_min');
                for (var i = 0; i < lbnr_min_s.length; i++) {
                    if ((lbnr_min_s[i].offsetLeft + lbnr_min_s[i].offsetWidth) < lbnr_max[u].style.transform.substring(12, lbnr_max[u].style.transform.length - 3) - 100) {
                        lbnr_max[u].removeChild(lbnr_min_s[i]);
                    }
                }
            }

        }
        sjnr_shuchu(10);
        // 定时输出
        var lbnr_max = document.querySelectorAll('.lbnr_max');
        var sjnr_ydjl = 0;
        var lbnr_max_shu_du_haomiao = 1000;

        // 滚动
        sy_lbnr_dsq = setInterval(function() {
            sjnr_ydjl += 100;
            var lbnr_max = document.querySelectorAll('.lbnr_max');
            for (var i = 0; i < 5; i++) {
                lbnr_max[i].style.transform = 'translateX(-' + sjnr_ydjl + 'px)';
            }
            sjnr_shuchu(1);
        }, lbnr_max_shu_du_haomiao);

        for (var i = 0; i < 5; i++) {
            lbnr_max[i].style.transition = (lbnr_max_shu_du_haomiao / 1000) + 's linear';
        }

    } else if (localStorage.sy_lbxz == 2) {
        // 空、流畅
    }
}

if (localStorage.dr_mm == '' || (localStorage.dr_mm !== '' && mmdr_sf == 1)) {
    sy_lbnr_hs();
}

// 优化内存
top_dhl_S = document.querySelector('.top_dhl').querySelectorAll('div');
top_dhl_S[0].addEventListener('click', function(e) {
    sy_lbt.innerHTML = '';
    clearInterval(sy_lbnr_dsq);
    setTimeout(function() {
        sy_lbnr_hs();
    });

});
top_dhl_S[1].addEventListener('click', function(e) {
    sy_lbt.innerHTML = '';
    clearInterval(sy_lbnr_dsq);
    clearTimeout(sy_lbt_sc_jsq2);
    clearInterval(sy_lbt_sc_jsq);
});
top_dhl_S[2].addEventListener('click', function(e) {
    sy_lbt.innerHTML = '';
    clearInterval(sy_lbnr_dsq);
    clearTimeout(sy_lbt_sc_jsq2);
    clearInterval(sy_lbt_sc_jsq);
});
top_dhl_S[3].addEventListener('click', function(e) {
    sy_lbt.innerHTML = '';
    clearInterval(sy_lbnr_dsq);
    clearTimeout(sy_lbt_sc_jsq2);
    clearInterval(sy_lbt_sc_jsq);
});
var sy_3d_kaiguan = document.querySelector('.sy_3d_kaiguan');
sy_3d_kaiguan.addEventListener('click', function(e) {
    sy_lbt.innerHTML = '';
    clearInterval(sy_lbnr_dsq);
    clearTimeout(sy_lbt_sc_jsq2);
    clearInterval(sy_lbt_sc_jsq);
});





// HTSP
var WGS_HTSP = document.querySelector('.WGS_HTSP');
var gywm_ban_ben_HTSP = 0;
var gywm_ban_ben_sj;
var gywm_ban_ben_djcs = 0;
var gywm_ban_ben = document.querySelector('.gywm_ban_ben');
// sz_zdsc(数组, 要删除的字符(不是索引号), 如果要替换成)
function sz_zdsc(sz_s, sz_sc_zhi, sz_tj_zhi) {
    if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1 && sz_tj_zhi) {
        sz_s.splice(sz_s.indexOf(sz_sc_zhi), 2, sz_tj_zhi);
    } else if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1) {
        sz_s.splice(sz_s.indexOf(sz_sc_zhi), 1);
    }
}
// 本地搜索
gywm_ban_ben.addEventListener('click', function(e) {
    gywm_ban_ben_sj ? clearTimeout(gywm_ban_ben_sj) : undefined;
    gywm_ban_ben_djcs++;
    if (gywm_ban_ben_djcs == 10) {
        gywm_ban_ben_djcs = 0;

        var htsp_s = JSON.parse(localStorage.htsp_s);
        var htsp_s_gs = 0;
        var b = 0;
        Sku_tctx('正在从本地路线检测 HTSP');
        gywm_ban_ben.innerHTML = 'HTSP 玩命加载中....';

        function wzjc(dz, sj) {
            WGS_HTSP.src = dz;
            WGS_HTSP.addEventListener('load', function(e) {
                b = 1;
                console.log('加载成功:' + this.src);
                Sku_tctx('从 ' + dz + ' 检测到 HTSP');
                gywm_ban_ben_HTSP = 1;
                gywm_ban_ben.innerHTML = 'HTSP 地址:' + dz.substring(0, dz.length - 11) + ' (删除 ' + (htsp_s_gs) + ' 剩余 ' + (htsp_s.length - htsp_s_gs) + ')';
                Sku_tsy(0);
            });
            WGS_HTSP.addEventListener('error', function(e) {
                console.log('加载失败:' + this.src);
                // 删除
                var htsp_s2 = JSON.parse(localStorage.htsp_s);
                sz_zdsc(htsp_s2, dz);
                localStorage.htsp_s = JSON.stringify(htsp_s2);
            });

            setTimeout(function() {
                if (b !== 1) {
                    console.log('加载超时:' + dz);
                    gywm_ban_ben_HTSP = 1;
                    htsp_s_gs++;
                    if (htsp_s_gs <= htsp_s.length - 1) {
                        wzjc(htsp_s[htsp_s_gs], 1000);
                    } else {
                        Sku_tctx('本地没有发现有用链接 !');
                        console.log('本地没用发现有用链接 ! 请换全局搜索');
                        gywm_ban_ben.innerHTML = 'HTSP 本地没有发现有用链接,请换全局搜索';
                        Sku_tsy(0);
                    }
                }
            }, sj);
        }

        wzjc(htsp_s[htsp_s_gs], 1000);

        WGS_HTSP.addEventListener('click', function(e) {
            window.open(WGS_HTSP.src.substring(0, WGS_HTSP.src.length - 11));
        });

    }
    gywm_ban_ben_sj = setTimeout(function() {
        gywm_ban_ben_djcs = 0;
    }, 2000);

});

// 全局搜索 
var htsp_qjss_jdt = document.querySelector('.htsp_qjss_jdt');
var htsp_qjss_jdt2 = document.querySelector('.htsp_qjss_jdt2');
var gywm_l = document.querySelectorAll('.gywm_l')[0];
var gywm_ban_ben_djcs2 = 0;
var gywm_ban_ben_sj2;
var htsp_sysj_js;
gywm_l.addEventListener('click', function(e) {
    gywm_ban_ben_sj2 ? clearTimeout(gywm_ban_ben_sj2) : undefined;
    gywm_ban_ben_djcs2++;
    if (gywm_ban_ben_djcs2 == 10) {
        gywm_ban_ben_djcs2 = 0;

        var WGS_HTSP_S = document.querySelector('.WGS_HTSP_S');
        var s_sz = ['az', 'qq', 'ww', 'ee', 'rr', 'tt', 'yy', 'uu', 'ii', 'oo', 'pp', 'aa', 'ss', 'dd', 'ff', 'gg', 'hh', 'jj', 'kk', 'll', 'zz', 'xx', 'cc', 'vv', 'bb', 'nn', 'mm'];
        var s_sz_2 = ['vip', 'xyz'];
        var s_sz_3 = ['9527'];
        var htsp_s_tjgs = 0;
        var htsp_s_tjgs_cg = 0;
        var htsp_s_tjgs_sb = 0;
        var htsp_cgqcfgs = 0;
        gywm_ban_ben.innerHTML = 'HTSP 玩命搜索中....';

        // 剩余时间
        var htsp_miao = 0;
        var gywm_l_1 = document.querySelectorAll('.gywm_l')[0];
        htsp_sysj_js = setInterval(function() {
            htsp_miao++;
            var htsp_miao_g = (htsp_s_tjgs_sb + htsp_s_tjgs_cg) / htsp_miao;
            var htsp_pjsd = ((htsp_s_tjgs - htsp_s_tjgs_sb - htsp_s_tjgs_cg) / htsp_miao_g);
            if (htsp_pjsd == Infinity) {
                gywm_l_1.innerHTML = '版本:';
            } else if (htsp_pjsd <= 60) {
                gywm_l_1.innerHTML = '剩余' + Math.ceil(htsp_pjsd) + '秒:';
            } else {
                gywm_l_1.innerHTML = '剩余' + Math.ceil(htsp_pjsd / 60) + '分钟:';
            }

            if (htsp_s_tjgs_sb + htsp_s_tjgs_cg == htsp_s_tjgs) {
                clearInterval(htsp_sysj_js);
                gywm_l_1.innerHTML = '用时' + (htsp_miao <= 60 + '秒:' ? htsp_miao : Math.ceil(htsp_miao / 60) + '分' + (htsp_miao % 60) + '秒:');
            }
        }, 1000);

        for (var p = 0; p < s_sz_3.length; p++) {
            for (var o = 0; o < s_sz_2.length; o++) {
                for (var i = 0; i < s_sz.length; i++) {
                    for (var u = 0; u < 400; u++) {
                        htsp_s_tjgs++;
                        var wz_shu = u < 10 ? '0' + u : u;
                        var imgs = document.createElement('img');
                        imgs.src = 'https://ht' + wz_shu + s_sz[i] + '.' + s_sz_2[o] + ':' + s_sz_3[p] + '/favicon.ico';
                        imgs.addEventListener('load', function(e) {
                            // 分支加速
                            setTimeout(function() {}, 0);

                            htsp_s_tjgs_cg++;
                            console.log('总共 ' + htsp_s_tjgs + ' 失败 ' + htsp_s_tjgs_sb + ' 成功 ' + htsp_s_tjgs_cg);
                            console.log(this.src);
                            HTSP_src = this.src;

                            // 保存
                            var htsp_s = JSON.parse(localStorage.htsp_s);
                            if (htsp_s.indexOf(this.src) !== -1) {
                                htsp_cgqcfgs++;
                                sz_zdsc(htsp_s, this.src);
                            } else {
                                Sku_tsy(1);
                            }
                            htsp_s.unshift(this.src);
                            localStorage.htsp_s = JSON.stringify(htsp_s);

                            gywm_ban_ben_HTSP = 1;

                            WGS_HTSP.src = this.src;

                            gywm_ban_ben.innerHTML = 'HTSP 成功 ' + htsp_s_tjgs_cg + ' 新增 ' + (htsp_s_tjgs_cg - htsp_cgqcfgs) + ' 本地 ' + htsp_s.length + ' 玩命搜索中...' + (htsp_s_tjgs_cg + htsp_s_tjgs_sb) + '/' + htsp_s_tjgs + ' (进程 ' + (((htsp_s_tjgs_cg + htsp_s_tjgs_sb) / htsp_s_tjgs) * 100).toFixed(2) + '%)';

                            htsp_qjss_jdt.style.display = 'block';
                            htsp_qjss_jdt2.style.width = (((htsp_s_tjgs_cg + htsp_s_tjgs_sb) / htsp_s_tjgs) * 100).toFixed(2) + '%';

                            if (htsp_s_tjgs_sb + htsp_s_tjgs_cg == htsp_s_tjgs) {
                                var htsp_s = JSON.parse(localStorage.htsp_s);
                                gywm_ban_ben.innerHTML = 'HTSP 搜索结束' + ' (检测 ' + htsp_s_tjgs + ' 失败 ' + htsp_s_tjgs_sb + ' 成功 ' + htsp_s_tjgs_cg + ' 重复 ' + htsp_cgqcfgs + ' 新增 ' + (htsp_s_tjgs_cg - htsp_cgqcfgs) + ' 本地 ' + htsp_s.length + ')';
                                htsp_qjss_jdt.style.display = 'none';
                                WGS_HTSP_S.innerHTML = '';
                                Sku_tctx('HTSP 全局搜索已结束 !');
                                Sku_tsy(0);
                            }
                        });
                        imgs.addEventListener('error', function(e) {
                            // 分支加速
                            setTimeout(function() {}, 0);
                            htsp_s_tjgs_sb++;
                            var htsp_s = JSON.parse(localStorage.htsp_s);

                            gywm_ban_ben.innerHTML = 'HTSP 成功 ' + htsp_s_tjgs_cg + ' 新增 ' + (htsp_s_tjgs_cg - htsp_cgqcfgs) + ' 本地 ' + htsp_s.length + ' 玩命搜索中...' + (htsp_s_tjgs_cg + htsp_s_tjgs_sb) + '/' + htsp_s_tjgs + ' (进程 ' + (((htsp_s_tjgs_cg + htsp_s_tjgs_sb) / htsp_s_tjgs) * 100).toFixed(2) + '%)';

                            htsp_qjss_jdt.style.display = 'block';
                            htsp_qjss_jdt2.style.width = (((htsp_s_tjgs_cg + htsp_s_tjgs_sb) / htsp_s_tjgs) * 100).toFixed(2) + '%';

                            console.log('总共 ' + htsp_s_tjgs + ' 失败 ' + htsp_s_tjgs_sb + ' 成功 ' + htsp_s_tjgs_cg);
                            if (htsp_s_tjgs_sb + htsp_s_tjgs_cg == htsp_s_tjgs) {
                                var htsp_s = JSON.parse(localStorage.htsp_s);
                                gywm_ban_ben.innerHTML = 'HTSP 搜索结束' + ' (检测 ' + htsp_s_tjgs + ' 失败 ' + htsp_s_tjgs_sb + ' 成功 ' + htsp_s_tjgs_cg + ' 重复 ' + htsp_cgqcfgs + ' 新增 ' + (htsp_s_tjgs_cg - htsp_cgqcfgs) + ' 本地 ' + htsp_s.length + ')';
                                htsp_qjss_jdt.style.display = 'none';
                                WGS_HTSP_S.innerHTML = '';
                                Sku_tctx('HTSP 全局搜索已结束 !');
                                Sku_tsy(0);
                            }
                        });
                        WGS_HTSP_S.appendChild(imgs);
                    }
                }
            }
        }

        Sku_tctx('搜索路线数量总共 ' + htsp_s_tjgs + ' 个');

        WGS_HTSP.addEventListener('click', function(e) {
            window.open(WGS_HTSP.src.substring(0, WGS_HTSP.src.length - 11));
        });
    }
    gywm_ban_ben_sj2 = setTimeout(function() {
        gywm_ban_ben_djcs2 = 0;
    }, 2000);
});

// 清楚本地HTSP
var gywm_l2 = document.querySelectorAll('.gywm_l')[1];
var gywm_r2 = document.querySelectorAll('.gywm_r')[1];
var gywm_ban_ben_djcs3 = 0;
var gywm_ban_ben_sj3;
gywm_l2.addEventListener('click', function(e) {
    console.log(1);
    gywm_ban_ben_sj3 ? clearTimeout(gywm_ban_ben_sj3) : undefined;
    gywm_ban_ben_djcs3++;
    if (gywm_ban_ben_djcs3 == 10) {
        gywm_ban_ben_djcs3 = 0;
        Sku_tctx('已删除所有本地的HTSP地址 !');
        localStorage.htsp_s = '[]';
        gywm_r2.innerHTML = '已删除所有本地的HTSP地址,请重新进行全局搜索 !';
        setTimeout(function() {
            gywm_r2.innerHTML = '所有文件存储在个人电脑 !';
        }, 10000);
    }
    gywm_ban_ben_sj3 = setTimeout(function() {
        gywm_ban_ben_djcs3 = 0;
    }, 2000);
});

// 添加本地HTSP
var gywm_r2 = document.querySelectorAll('.gywm_r')[1];
var gywm_ban_ben_djcs4 = 0;
var WGS_HTSP_TJ = document.querySelector('.WGS_HTSP_TJ');
var gywm_ban_ben_sj4;
gywm_r2.addEventListener('click', function(e) {
    gywm_ban_ben_sj4 ? clearTimeout(gywm_ban_ben_sj4) : undefined;
    gywm_ban_ben_djcs4++;
    if (gywm_ban_ben_djcs4 == 10) {
        gywm_ban_ben_djcs4 = 0;
        if (WGS_HTSP_TJ.style.display == 'block') {
            WGS_HTSP_TJ.value = localStorage.htsp_s;
        } else {
            WGS_HTSP_TJ.style.display = 'block';
            WGS_HTSP_TJ.focus();
        }
    }
    WGS_HTSP_TJ.focus();
    gywm_ban_ben_sj4 = setTimeout(function() {
        gywm_ban_ben_djcs4 = 0;
    }, 2000);
});

function WGS_HTSP_TJ_click() {
    if (WGS_HTSP_TJ.value !== '' && WGS_HTSP_TJ.value !== localStorage.htsp_s) {
        try {
            // 可能产生错误的代码
            var htsp_s = JSON.parse(localStorage.htsp_s);
            var xing_htsp_s = [];
            var xing_htsp_s2;
            if (WGS_HTSP_TJ.value.substring(0, 4) == 'http') {
                xing_htsp_s2 = JSON.parse('["' + WGS_HTSP_TJ.value + '"]');
            } else {
                xing_htsp_s2 = JSON.parse(WGS_HTSP_TJ.value);
            }
            for (var i = 0; i < xing_htsp_s2.length; i++) {
                if (htsp_s.indexOf(xing_htsp_s2[i]) == -1) {
                    xing_htsp_s.push(xing_htsp_s2[i]);
                }
            }
            localStorage.htsp_s = JSON.stringify(xing_htsp_s.concat(JSON.parse(localStorage.htsp_s)));
            console.log('成功添加 ' + xing_htsp_s.length + ' 个不重复的HTSP地址');
            WGS_HTSP_TJ.value = '';
            WGS_HTSP_TJ.style.display = 'none';
            gywm_r2.innerHTML = '成功添加 ' + xing_htsp_s.length + ' 个不重复的HTSP地址';
            setTimeout(function() {
                gywm_r2.innerHTML = '所有文件存储在个人电脑 !';
            }, 10000);
        } catch (error) {
            // 这个块会在 try 中有错误抛出时执行
            Sku_tctx('无法识别的HTSP模块 !');
        }
    }
}

// 5下复制,快速复制htsp本地地址
var htsp_dz_fz_cs = 0;
var htsp_dz_fz_cs_jsq;
document.addEventListener('copy', function(e) {
    htsp_dz_fz_cs_jsq ? clearTimeout(htsp_dz_fz_cs_jsq) : undefined;
    htsp_dz_fz_cs++;
    if (htsp_dz_fz_cs == 5) {
        htsp_dz_fz_cs = 0;
        e.preventDefault();
        e.clipboardData.setData('text/plain', localStorage.htsp_s);
        Sku_tctx(' 复制成功 (本地HTSP地址 ' + JSON.parse(localStorage.htsp_s).length + ' 条) ');
    }
    htsp_dz_fz_cs_jsq = setTimeout(function() {
        htsp_dz_fz_cs = 0;
    }, 2000)
});





// 历史注册表
var lszcb_ym = document.querySelector('.lszcb_ym');
var shezhi_lszcb = document.querySelector('.shezhi_lszcb');
var ssjl_min2 = document.querySelector('.ssjl_min2');
var ssjl_max2 = document.querySelector('.ssjl_max2');
var bizhi_gundon3 = document.querySelector('.bizhi_gundon3');
shezhi_lszcb.addEventListener('click', function(e) {
    ssjl_min2.innerHTML = '';
    shezhi_min.style.display = 'none';
    lszcb_ym.style.display = 'block';
    bizhi_gundon3.innerHTML = '↓';
    ssjl_max2.scroll(0, 0);
    zcb_s_jz();
});

function zcb_s_jz() {
    var sku_zcb = JSON.parse(localStorage.sku_zcb);
    for (var i = 0; i < sku_zcb[0].length; i++) {
        var div = document.createElement('div');

        div.className = 'lszcb_s';
        div.innerHTML = '<div class="lszcb_s_name">' + sku_zcb[0][i] + '</div><div class="lszcb_s_dizhi">' + sku_zcb[1][i] + '</div><div class="lszcb_s_cj">下载注册表</div><div class="lszcb_s_sc">删除注册表</div>';

        ssjl_min2.appendChild(div);
    }
    // 滚动字体
    WGS_wenbengundon('.lszcb_s_name', '5');
    WGS_wenbengundon('.lszcb_s_dizhi', '5');
    // 添加创建reg
    var lszcb_s_cj = document.querySelectorAll('.lszcb_s_cj');
    for (var i = 0; i < lszcb_s_cj.length; i++) {
        lszcb_s_cj[i].addEventListener('click', function(e) {
            // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
            console.log('Windows Registry Editor Version 5.00\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + ']\n@="URL:' + this.previousElementSibling.previousElementSibling.innerText + ' Protocol Handler"\n"URL Protocol"=""\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\DefaultIcon]\n@="' + this.previousElementSibling.innerText + '"\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\shell]\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\shell\\open]\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\shell\\open\\command]\n@="\\"' + this.previousElementSibling.innerText + '\\" \\"%1\\""');
            WGS_txt_wenbenchuanjian(this.previousElementSibling.previousElementSibling.innerText + '注册表.reg', 'Windows Registry Editor Version 5.00\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + ']\n@="URL:' + this.previousElementSibling.previousElementSibling.innerText + ' Protocol Handler"\n"URL Protocol"=""\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\DefaultIcon]\n@="' + this.previousElementSibling.innerText + '"\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\shell]\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\shell\\open]\n[HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.innerText + '\\shell\\open\\command]\n@="\\"' + this.previousElementSibling.innerText + '\\" \\"%1\\""');

            function WGS_txt_wenbenchuanjian(fileName, txt) {
                // 创建文本内容
                var text = txt;

                // 创建Blob对象
                var blob = new Blob([text], {
                    type: 'text/plain;charset=utf-16le'
                });

                // 创建下载链接
                var url = URL.createObjectURL(blob);
                var link = document.createElement('a');
                link.href = url;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                URL.revokeObjectURL(url); // 释放内存
            }
        })
    }
    // 添加删除创建reg
    //指定删除
    function sz_zdsc(sz_s, sz_sc_zhi, sz_tj_zhi) {
        if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1 && sz_tj_zhi) {
            sz_s.splice(sz_s.indexOf(sz_sc_zhi), 2, sz_tj_zhi);
        } else if (sz_sc_zhi && sz_s.indexOf(sz_sc_zhi) !== -1) {
            sz_s.splice(sz_s.indexOf(sz_sc_zhi), 1);
        }
    }
    var lszcb_s_sc = document.querySelectorAll('.lszcb_s_sc');
    for (var i = 0; i < lszcb_s_sc.length; i++) {
        lszcb_s_sc[i].addEventListener('click', function(e) {
            // 删除本地
            if (this.innerHTML == '删除注册表') {
                // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
                console.log('Windows Registry Editor Version 5.00\n[-HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.previousElementSibling.innerText + ']');
                WGS_txt_wenbenchuanjian('删除' + this.previousElementSibling.previousElementSibling.previousElementSibling.innerText + '注册表.reg', 'Windows Registry Editor Version 5.00\n[-HKEY_CLASSES_ROOT\\' + this.previousElementSibling.previousElementSibling.previousElementSibling.innerText + ']');

                function WGS_txt_wenbenchuanjian(fileName, txt) {
                    // 创建文本内容
                    var text = txt;

                    // 创建Blob对象
                    var blob = new Blob([text], {
                        type: 'text/plain;charset=utf-8'
                    });

                    // 创建下载链接
                    var url = URL.createObjectURL(blob);
                    var link = document.createElement('a');
                    link.href = url;
                    link.download = fileName;
                    document.body.appendChild(link);
                    link.click();
                    URL.revokeObjectURL(url); // 释放内存
                }
            } else if (this.innerHTML == '删除此历史') {
                var sku_zcb = JSON.parse(localStorage.sku_zcb);
                sz_zdsc(sku_zcb[0], this.previousElementSibling.previousElementSibling.previousElementSibling.innerText);
                sz_zdsc(sku_zcb[1], this.previousElementSibling.previousElementSibling.innerText);
                localStorage.sku_zcb = JSON.stringify(sku_zcb);

                this.parentNode.parentNode.removeChild(this.parentNode);
            }
        })
    }
}
// 一键删除和下载
var lszcb_yjxz = document.querySelector('.lszcb_yjxz');
var lszcb_yjsc = document.querySelector('.lszcb_yjsc');
lszcb_yjxz.addEventListener('click', function(e) {
    var sku_zcb = JSON.parse(localStorage.sku_zcb);
    if (sku_zcb[0].length != 0) {
        // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
        var neron = '';
        var neme = '';
        for (var i = 0; i < sku_zcb[1].length; i++) {
            if (i == 0) {
                neron = neron.concat('Windows Registry Editor Version 5.00\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + ']\n@="URL:' + sku_zcb[0][i] + ' Protocol Handler"\n"URL Protocol"=""\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\DefaultIcon]\n@="' + sku_zcb[1][i] + '"\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\shell]\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\shell\\open]\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\shell\\open\\command]\n@="\\"' + sku_zcb[1][i] + '\\" \\"%1\\""');
            } else {
                neron = neron.concat('\nWindows Registry Editor Version 5.00\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + ']\n@="URL:' + sku_zcb[0][i] + ' Protocol Handler"\n"URL Protocol"=""\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\DefaultIcon]\n@="' + sku_zcb[1][i] + '"\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\shell]\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\shell\\open]\n[HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + '\\shell\\open\\command]\n@="\\"' + sku_zcb[1][i] + '\\" \\"%1\\""');
            }
        }
        for (var i = 0; i < sku_zcb[0].length; i++) {
            if (i == sku_zcb[0].length - 1) {
                neme = neme.concat(sku_zcb[0][i]);
            } else {
                neme = neme.concat(sku_zcb[0][i] + ',');
            }
        }

        console.log(neme);
        console.log(neron);
        WGS_txt_wenbenchuanjian(neme + '注册表.reg', neron);

        function WGS_txt_wenbenchuanjian(fileName, txt) {
            // 创建文本内容
            var text = txt;

            // 创建Blob对象
            var blob = new Blob([text], {
                type: 'text/plain;charset=utf-16le'
            });

            // 创建下载链接
            var url = URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(url); // 释放内存
        }
    } else {
        Sku_tctx('暂无历史注册表');
    }
});
lszcb_yjsc.addEventListener('click', function(e) {
    var sku_zcb = JSON.parse(localStorage.sku_zcb);
    if (sku_zcb[0].length != 0) {
        // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
        var neron = '';
        var neme = '';
        for (var i = 0; i < sku_zcb[1].length; i++) {
            if (i == 0) {
                neron = neron.concat('Windows Registry Editor Version 5.00\n[-HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + ']');
            } else {
                neron = neron.concat('\nWindows Registry Editor Version 5.00\n[-HKEY_CLASSES_ROOT\\' + sku_zcb[0][i] + ']');
            }
        }
        for (var i = 0; i < sku_zcb[0].length; i++) {
            if (i == sku_zcb[0].length - 1) {
                neme = neme.concat(sku_zcb[0][i]);
            } else {
                neme = neme.concat(sku_zcb[0][i] + ',');
            }
        }

        console.log(neme);
        console.log(neron);
        WGS_txt_wenbenchuanjian('删除' + neme + '注册表.reg', neron);

        function WGS_txt_wenbenchuanjian(fileName, txt) {
            // 创建文本内容
            var text = txt;

            // 创建Blob对象
            var blob = new Blob([text], {
                type: 'text/plain;charset=utf-16le'
            });

            // 创建下载链接
            var url = URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(url); // 释放内存
        }
    } else {
        Sku_tctx('暂无历史注册表');
    }
});

var lszcb_yjqk = document.querySelector('.lszcb_yjqk');
lszcb_yjqk.addEventListener('click', function(e) {
    // 删除本地
    localStorage.sku_zcb = '[[],[]]';
    ssjl_min2.innerHTML = '';
    Sku_tctx('以清空所有历史注册表');
});

var zh_scanniu = document.querySelector('.zh_scanniu');
zh_scanniu.addEventListener('click', function(e) {
    var lszcb_s_sc = document.querySelectorAll('.lszcb_s_sc');
    if (lszcb_s_sc.length != 0) {
        if (lszcb_s_sc[0].innerHTML == '删除注册表') {
            for (var i = 0; i < lszcb_s_sc.length; i++) {
                lszcb_s_sc[i].innerHTML = '删除此历史';
            }
        } else {
            for (var i = 0; i < lszcb_s_sc.length; i++) {
                lszcb_s_sc[i].innerHTML = '删除注册表';
            }
        }
    }
});






// 传统颜色集
var shezhi_rgb_j_ym = document.querySelector('.shezhi_rgb_j_ym');
var shezhi_rgb_j = document.querySelector('.shezhi_rgb_j');
var grb_j_max = document.querySelector('.grb_j_max');
var rgbj_y_fxk_zt = document.querySelector('.rgbj_y_fxk_zt');
var rgbj_yy_fxk_zzt = document.querySelector('.rgbj_yy_fxk_zzt');
var rgbj_yy_fxk_nrbj = document.querySelector('.rgbj_yy_fxk_nrbj');
var rgbj_yy_fxk_bk = document.querySelector('.rgbj_yy_fxk_bk');
var rgbj_yy_fxk_bz = document.querySelector('.rgbj_yy_fxk_bz');

shezhi_rgb_j.addEventListener('click', function(e) {
    shezhi_min.style.display = 'none';
    shezhi_rgb_j_ym.style.display = 'block';
    grb_j_max.scroll(0, 0);
});

var rgbj_y_fxk_zt_sf = 0;
var rgbj_yy_fxk_zzt_sf = 0;
var rgbj_yy_fxk_nrbj_sf = 0;
var rgbj_yy_fxk_bk_sf = 0;
var rgbj_yy_fxk_bz_sf = 0;

rgbj_y_fxk_zt.addEventListener('click', function(e) {
    if (rgbj_y_fxk_zt_sf == 0) {
        rgbj_y_fxk_zt_sf = 1;
        rgbj_y_fxk_zt.innerHTML = '✔';
    } else {
        rgbj_y_fxk_zt_sf = 0;
        rgbj_y_fxk_zt.innerHTML = '';
    }
});
rgbj_yy_fxk_zzt.addEventListener('click', function(e) {
    if (rgbj_yy_fxk_zzt_sf == 0) {
        rgbj_yy_fxk_zzt_sf = 1;
        rgbj_yy_fxk_zzt.innerHTML = '✔';
    } else {
        rgbj_yy_fxk_zzt_sf = 0;
        rgbj_yy_fxk_zzt.innerHTML = '';
    }
});
rgbj_yy_fxk_nrbj.addEventListener('click', function(e) {
    if (rgbj_yy_fxk_nrbj_sf == 0) {
        rgbj_yy_fxk_nrbj_sf = 1;
        rgbj_yy_fxk_nrbj.innerHTML = '✔';
    } else {
        rgbj_yy_fxk_nrbj_sf = 0;
        rgbj_yy_fxk_nrbj.innerHTML = '';
    }
});
rgbj_yy_fxk_bk.addEventListener('click', function(e) {
    if (rgbj_yy_fxk_bk_sf == 0) {
        rgbj_yy_fxk_bk_sf = 1;
        rgbj_yy_fxk_bk.innerHTML = '✔';
    } else {
        rgbj_yy_fxk_bk_sf = 0;
        rgbj_yy_fxk_bk.innerHTML = '';
    }
});
rgbj_yy_fxk_bz.addEventListener('click', function(e) {
    if (rgbj_yy_fxk_bz_sf == 0) {
        rgbj_yy_fxk_bz_sf = 1;
        rgbj_yy_fxk_bz.innerHTML = '✔';
    } else {
        rgbj_yy_fxk_bz_sf = 0;
        rgbj_yy_fxk_bz.innerHTML = '';
    }
});

var rgb_name = [
    "暗玉紫", "牡丹粉红", "栗紫", "香叶红", "葡萄酱紫", "艳红", "玉红", "茶花红", "高粱红", "满江红", "鼠鼻红", "合欢红", "春梅红", "苋菜红", "烟红", "莓红", "鹅冠红", "枫叶红", "唐菖蒲红", "枣红", "猪肝紫", "葡萄紫", "暗紫苑红", "殷红", "草茉莉红", "酱紫", "山茶红", "锌灰", "海棠红", "蓟粉红", "石蕊红", "淡曙红", "李紫", "石竹红", "淡茜红", "金鱼紫", "山黎豆红", "鼠背灰", "淡蕊香红", "甘蔗紫", "月季红", "尖晶玉红", "水红", "姜红", "芦灰", "茄皮紫", "苍蝇灰", "锦葵红", "粉团花红", "石竹紫", "卵石紫", "晶红", "芝兰紫", "芍药耕红", "暮云灰", "豇豆红", "报春红", "淡绛红", "凤仙花红", "霞光红", "喜蛋红", "夹竹桃红", "松叶牡丹红", "莲瓣红", "白芨红", "隐红灰", "榲桲红", "酢酱草红", "火鹅紫", "鹞冠紫", "品红", "磨石紫", "墨紫", "檀紫", "初荷红", "菜头紫", "葡萄酒红", "淡青紫", "菠根红", "海象紫",
    "兔眼红", "嫩菱红", "洋葱紫", "吊钟花红", "绀紫", "紫荆红", "扁豆花红", "马鞭草紫", "藏花红", "斑鸠灰", "古铜紫", "丹紫红", "丁香淡紫", "玫瑰红", "古鼎灰", "菱锰红", "樱草紫", "龙须红", "电气石红", "玫瑰紫", "苋菜紫", "紫灰", "龙睛鱼紫", "青蛤壳紫", "萝兰紫", "荸荠紫", "豆蔻紫", "扁豆紫", "牵牛紫", "芓紫", "葛巾紫", "青莲", "芥花紫", "凤信紫", "深牵牛紫", "魏紫", "乌梅紫", "桔梗紫", "淡牵牛紫", "剑锋紫", "蕈紫", "槿紫", "芡食白", "龙葵紫", "藤萝紫", "沙鱼灰", "暗龙胆紫", "暗蓝紫", "野葡萄紫", "野菊紫", "水牛灰", "远山紫", "螺甸紫", "晶石紫", "满天星紫", "淡蓝紫", "山梗紫", "牛角灰", "鱼尾灰", "瓦罐灰", "钢蓝", "燕颔蓝", "鲸鱼灰", "青灰", "鸽蓝", "暗蓝", "钢青", "海涛蓝", "飞燕草蓝", "靛青", "安安蓝", "海军蓝", "景泰蓝", "品蓝", "尼罗蓝", "蝶翅蓝", "花青", "鷃蓝", "星蓝", "虹蓝", "柏林蓝",
    "群青", "云水蓝", "羽扇豆蓝", "战舰灰", "晴山蓝", "睛蓝", "搪磁蓝", "潮蓝", "天蓝", "大理石灰", "牵牛花蓝", "宝石蓝", "淡蓝灰", "嫩灰", "银鱼白", "釉蓝", "涧石蓝", "远天蓝", "云山蓝", "秋波蓝", "井天蓝", "鸢尾蓝", "云峰白", "星灰", "钴蓝", "碧青", "苍蓝", "深灰蓝", "灰蓝", "湖水蓝", "海青", "黄昏灰", "霁青", "玉鈫蓝", "胆矾蓝", "樫鸟蓝", "鸥蓝", "翠蓝", "蜻蜓蓝", "孔雀蓝", "蔚蓝", "瀑布蓝", "闪蓝", "甸子蓝", "晚波蓝", "清水蓝", "夏云灰", "海天蓝", "虾壳青", "石绿", "穹灰", "美蝶绿", "垩灰", "蓝绿", "竹绿", "亚丁绿", "月影白", "海王绿", "深海绿", "绿灰", "青矾绿", "苍绿", "飞泉绿", "莽丛绿", "梧枝绿", "铜绿", "草原远绿", "蛙绿", "浪花绿", "苷蓝绿", "粉绿", "淡绿灰", "麦苗绿", "翠绿", "葱绿", "荷叶绿", "淡绿", "田园绿", "玉簪绿", "蟾绿", "蔻梢绿", "薄荷绿", "月白", "蛋白石绿", "竹篁绿", "孔雀绿",
    "宫殿绿", "云杉绿", "毛绿", "冰山蓝", "明灰", "明绿", "松霜绿", "白屈菜绿", "狼烟灰", "瓦松绿", "槲寄生绿", "淡翠绿", "玉髓绿", "鲜绿", "油绿", "宝石绿", "嘉陵水绿", "田螺绿", "水绿", "鹦鹉绿", "艾背绿", "艾绿", "镍灰", "橄榄石绿", "芽绿", "嫩菊绿", "芦苇绿", "姚黄", "蒽油绿", "苹果绿", "海沬绿", "橄榄黄绿", "槐花黄绿", "蝶黄", "象牙白", "橄榄绿", "雪白", "淡灰绿", "佛手黄", "乳白", "香蕉黄", "新禾绿", "油菜花黄", "秋葵黄", "柚黄", "草黄", "硫华黄", "姜黄", "潭水绿", "金瓜黄", "麦秆黄", "蒿黄", "茉莉黄", "藤黄", "芒果黄", "海参灰", "碧螺春绿", "苔绿", "柠檬黄", "草灰绿", "向日葵黄", "素馨黄", "乳鸭黄", "月灰", "葵扇黄", "大豆黄", "金盏黄", "菊蕾白", "黄连黄", "杏仁黄", "谷黄", "木瓜黄", "淡茧黄", "雅梨黄", "银白", "棕榈绿", "鹦鹉冠黄", "枯绿", "浅烙黄", "淡密黄", "芥黄", "栀子黄", "暗海水绿", "篾黄",
    "蚌肉白", "炒米黄", "琥珀黄", "灰绿", "粽叶绿", "尘灰", "鼬黄", "象牙黄", "鲛青", "豆汁黄", "土黄", "香水玫瑰黄", "虎皮黄", "鸡蛋黄", "银鼠灰", "鱼肚白", "初熟杏黄", "山鸡黄", "莲子白", "蟹壳灰", "沙石黄", "甘草黄", "燕羽灰", "鹅掌黄", "麦芽糖黄", "浅驼色", "百灵鸟灰", "酪黄", "荔肉白", "淡肉色", "河豚灰", "蜴蜊绿", "汉白玉", "橙皮黄", "莱阳梨黄", "枇杷黄", "金叶黄", "苍黄", "粉白", "淡橘橙", "珍珠灰", "龟背黄", "浅灰", "铅灰", "中灰", "雄黄", "蜜黄", "风帆黄", "桂皮淡棕", "金莺黄", "肉色", "凋叶棕", "古铜绿", "落英淡粉", "软木黄", "瓜瓤粉", "榴萼黄", "玳瑁黄", "焦茶绿", "蟹壳绿", "山鸡褐", "猴毛灰", "鹿角棕", "淡松烟", "万寿菊黄", "蛋壳黄", "杏黄", "橄榄灰", "鹤灰", "玛瑙灰", "淡银灰", "瓦灰", "夜灰", "北瓜黄", "荷花白", "松鼠灰", "淡米粉", "深灰", "海鸥灰", "茶褐", "驼色", "银灰", "鹿皮褐", "槟榔综",
    "晓灰", "淡赭", "古铜褐", "麂棕", "醉瓜肉", "雁灰", "鲑鱼红", "橘橙", "金黄", "玫瑰粉", "美人焦橙", "米色", "蛛网灰", "淡咖啡", "海螺橙", "岩石棕", "芒果棕", "陶瓷红", "菠萝红", "余烬红", "金莲花橙", "火砖红", "初桃粉红", "铁棕", "介壳淡粉红", "蟹壳红", "金驼", "燕颔红", "淡可可棕", "晨曦红", "玉粉红", "野蔷薇红", "藕荷", "长石灰", "中红灰", "火泥棕", "绀红", "莓酱红", "丁香棕", "淡玫瑰灰", "瓜瓤红", "淡藏花红", "筍皮棕", "润红", "龙睛鱼红", "淡土黄", "珠母灰", "芙蓉红", "落霞红", "法螺红", "草珠红", "咖啡", "中灰驼", "椰壳棕", "蟹蝥红", "淡豆沙", "淡桃红", "淡铁灰", "石板灰", "淡栗棕", "银朱", "草莓红", "洋水仙红", "朱红", "榴花红", "柿红", "可可棕", "淡罂粟红", "大红", "柞叶棕", "蜻蜓红", "橡树棕", "颊红", "桃红", "火岩棕", "淡藤萝紫", "赭石", "铁水红", "胭脂红", "极光红", "红汞红", "萝卜红", "曲红",
    "谷鞘红", "苹果红", "桂红", "粉红", "暗驼棕", "夕阳红", "樱桃红", "珊瑚红", "火山棕", "栗棕", "鹤顶红", "舌红", "鹅血石红", "酱棕", "鱼鳃红", "芦穗灰", "丽春红", "覆盆子红", "海报灰", "豆沙", "榴子红", "秋海棠红", "无花果红", "淡绯", "玫瑰灰", "淡菽红", "枸枢红", "貂紫"
];
var rgb_ys = [
    "5C2223", "EEA2A4", "5A191B", "F07C82", "5A1216", "ED5A65", "C04851", "EE3F4D", "C02C38", "A7535A", "E3B4B8", "F0A1A8", "F1939C", "A61B29", "894E54", "C45A65", "D11A2D", "C21F30", "DE1C31", "7C1823", "541E24", "4C1F24", "82202B", "82111F", "EF475D", "4D1018", "ED556A", "7A7374", "F03752", "E6D2D5", "F0C9CF", "EE2746", "2B1216", "EE4863", "E77C8E", "500A16", "C27C88", "73575C", "EE4866", "621624", "CE5777", "CC163A", "F1C4CD", "EEB8C3", "856D72", "2D0C13", "36282B", "BF3553", "EC9BAD", "63071C", "30161C", "EEA6B7", "E9CCD3", "EBA0B3", "4F383E", "ED9DB2", "EC8AA4", "EC7696", "EA7293", "EF82A0", "EC2C64", "EB507E", "EB3C70", "EA517F", "DE7897", "B598A1", "ED2F6A", "C5708B", "33141E", "621D34", "EF3473", "382129", "310F1B", "381924",
    "E16C96", "951C48", "62102E", "E0C8D1", "D13C74", "4B1E2F", "EC4E8A", "DE3F7C", "A8456B", "CE5E8A", "461629", "EE2C79", "EF498B", "EDE3E7", "EC2D7A", "482936", "440E25", "D2568C", "E9D7DF", "D2357D", "36292F", "D276A3", "C06F98", "CC5595", "C35691", "BA2F7B", "9B1E64", "5D3F51", "4E2A40", "BC84A8", "C08EAF", "411C35", "AD6598", "A35C8F", "681752", "894276", "7E2065", "8B2671", "983680", "C8ADC4", "1C0D1A", "7E1671", "1E131D", "813C85", "D1C2D3", "3E3841", "815C94", "806D9E", "E2E1E4", "322F3B", "8076A3", "35333C", "22202E", "131124", "302F4B", "525288", "2F2F35", "CCCCD6", "74759B", "1F2040", "2E317C", "A7A8BD", "61649F", "2D2E36", "5E616D", "47484C", "0F1423", "131824", "475164", "2B333E", "1C2938", "101F30", "142334", "15559A", "0F59A4",
    "1661AB", "3170A7", "346C9C", "2775B6", "2B73AF", "2474B5", "4E7CA1", "2376B7", "144A74", "93B5CF", "2177B8", "126BAE", "1772B4", "BACCD9", "619AC3", "495C69", "8FB2C9", "5698C3", "11659A", "2983BB", "1677B3", "C4CBCF", "1177B0", "2486B9", "5E7987", "74787A", "CDD1D3", "1781B5", "66A9C9", "D0DFE6", "2F90B9", "8ABCD1", "C3D7DF", "158BB8", "D8E3E7", "B2BBBE", "1A94BC", "5CB3CC", "134857", "132C33", "21373D", "B0D5DF", "22A2C3", "474B4C", "63BBD0", "126E82", "0F95B0", "1491A8", "C7D2D4", "1E9EB3", "3B818C", "0EB0C9", "29B7CB", "51C4D3", "7CABB1", "10AEC2", "648E93", "93D5DC", "617172", "C6E6E8", "869D9D", "57C3C2", "C4D7D6", "12AA9C", "737C7B", "12A182", "1BA784", "428675", "C0C4C3", "248067", "1A3B32", "314A43", "2C9678", "223E36", "497568",
    "141E1B", "69A794", "2BAE85", "9ABEAF", "45B787", "92B3A5", "1F2623", "83CBAC", "70887D", "55BB8A", "20A162", "40A070", "1A6840", "61AC85", "68B88E", "A4CAB6", "3C9566", "5DBE8A", "207F4C", "EEF7F2", "579572", "B9DEC9", "229453", "20894D", "15231B", "66C18C", "A4ACA7", "8A988E", "9ECCAB", "83A78D", "485B4D", "5D655F", "6E8B74", "2B312C", "C6DFC8", "41B349", "43B244", "253D24", "41AE3C", "ADD5A2", "5E665B", "8CC269", "5BAE23", "DFECD5", "CAD3C3", "9FA39A", "B2CF87", "96C24E", "F0F5E5", "B7D07A", "D0DEAA", "373834", "BACF65", "E2E7BF", "BEC936", "D2D97A", "E2D849", "FFFEF8", "5E5314", "FFFEF9", "AD9E5F", "FED71A", "F9F4DC", "E4BF11", "D2B116", "FBDA41", "EED045", "F1CA17", "D2B42C", "F2CE2B", "E2C027", "645822", "FCD217", "F8DF70", "DFC243",
    "F8DF72", "FFD111", "DDC871", "FFFEFA", "867018", "887322", "FCD337", "8E804B", "FECC11", "FCCB16", "FFC90C", "B7AE8F", "F8D86A", "FBCD31", "FCC307", "E9DDB6", "FCC515", "F7E8AA", "E8B004", "F9C116", "F9D770", "FBC82F", "F1F0ED", "5B4913", "F6C430", "B78D12", "F9BD10", "F9D367", "D9A40E", "EBB10D", "584717", "F7DE98", "F9F1DB", "F4CE69", "FEBA07", "8A6913", "876818", "B6A476", "FCB70A", "F0D695", "87723E", "F8E8C1", "D6A01D", "F7DA94", "EAAD1A", "FBB612", "B5AA90", "F7F4ED", "F8BC31", "B78B26", "E5D3AA", "695E45", "E5B751", "F3BF4C", "685E48", "FBB929", "F9D27D", "E2C17C", "B4A992", "F6DEAD", "F2E6CE", "F8E0B0", "393733", "835E1D", "F8F4ED", "FCA104", "815F25", "FCA106", "FFA60F", "806332", "FBF2E3", "FBA414", "E4DFD7", "826B48", "DAD4CB",
    "BBB5AC", "BBB5AC", "FF9900", "FBB957", "DC9123", "C09351", "F4A83A", "F7C173", "E7A23F", "533C1B", "F9E8D0", "DE9E44", "F9CB8B", "F9A633", "DAA45A", "553B18", "513C20", "986524", "97846C", "E3BD8D", "4D4030", "FB8B05", "F8C387", "F28E16", "503E2A", "4A4035", "CFCCC9", "C1B2A3", "867E76", "847C74", "FC8C23", "FBECDE", "4F4032", "FBEEE2", "81776E", "9A8878", "5D3D21", "66462A", "918072", "D99156", "C1651A", "D4C4B7", "BE7E4A", "5C3719", "DE7622", "DB8540", "80766E", "F09C5A", "F97D1C", "F26B1F", "F8B37F", "FA7E23", "F9E9CD", "B7A091", "945833", "F0945D", "964D22", "954416", "E16723", "FC7930", "CF7543", "F86B1D", "CD6227", "F6DCCE", "D85916", "F7CFBA", "F27635", "E46828", "FC6315", "B7511D", "EA8958", "E8B49A", "FB9968", "EDC3AE", "363433",
    "8B614D", "AA6A4C", "A6522C", "FA5D19", "71361D", "B89485", "F68C60", "F6AD8F", "732E12", "F7CDBC", "EF632B", "8C4B31", "64483D", "F9723D", "CF4813", "EE8055", "F8EBE6", "753117", "603D30", "883A1E", "B14B28", "873D24", "F6CEC1", "5B423A", "624941", "673424", "F43E06", "EF6F48", "F4C7BA", "ED5126", "F34718", "F2481B", "652B1C", "EEA08C", "F04B22", "692A1B", "F1441D", "773D31", "EEAA9C", "F0ADA0", "863020", "F2E7E5", "862617", "F5391C", "F03F24", "F33B1F", "F23E23", "F13C22", "F05A46", "F17666", "F15642", "F25A47", "F2B9B2", "592620", "DE2A18", "ED3321", "F04A3A", "482522", "5C1E19", "D42517", "F19790", "AB372F", "5A1F1B", "ED3B2F", "BDAEAD", "EB261A", "AC1F18", "483332", "481E1C", "F1908C", "EC2B24", "EFAFAD", "F2CAC9", "4B2E2B", "ED4845", "ED3333", "5D3131"
];

function RGBToHex(rgb) {
    if (!rgb) rgb = 'rgb(237,237,237)'
    var regexp = /[0-9]{0,3}/g
    var res = rgb.match(regexp) // 利用正则表达式去掉多余的部分，将rgb中的数字提取
    var hexRes = '#'
    var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    var hexArr = []
    for (let i = 0; i < res.length; i++) {
        if (res[i]) {
            if (res[i] > 16) {
                let leftIndex = (res[i] / 16) >> 0 // 向下取整
                let rightIndex = +res[i] % 16
                hexArr.push(hex[leftIndex])
                hexArr.push(hex[rightIndex])
            } else {
                hexArr.push(0)
                hexArr.push(hex[res[i]])
            }
        }
    }
    return hexRes += hexArr.join('') // #EDEDED
}

for (var i = 0; i < rgb_name.length; i++) {
    var divs = document.createElement('div');

    divs.className = 'grb_j_s';
    divs.innerHTML = '<div class="grb_j_grb" style="background-color: #' + rgb_ys[i] + ';"></div><div class="grb_j_grb2" style="background-color: #' + rgb_ys[i] + ';"></div><div class="grb_j_grbname">' + rgb_ys[i] + '</div><div class="grb_j_name">' + rgb_name[i] + '</div>';
    divs.addEventListener('click', function(e) {
        if (rgbj_y_fxk_zt_sf == 1) {
            localStorage.zi_ti_color = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            input_color1.value = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
        }
        if (rgbj_yy_fxk_zzt_sf == 1) {
            localStorage.zi_ti_click_color = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            input_color2.value = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
        }
        if (rgbj_yy_fxk_nrbj_sf == 1) {
            localStorage.bei_jing_color = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            input_color3.value = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            bei_jing_color_s();
        }
        if (rgbj_yy_fxk_bk_sf == 1) {
            localStorage.bei_jing_kuan_color = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            input_color4.value = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            bj_kuan_hs();
        }
        if (rgbj_yy_fxk_bz_sf == 1) {
            document.documentElement.style.backgroundColor = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
            document.documentElement.style.backgroundImage = '';
            localStorage.bi_zhi = '';
            localStorage.bi_zhi_ys = RGBToHex(this.querySelector('.grb_j_grb').style.backgroundColor);
        }

        if (rgbj_y_fxk_zt_sf == 1 || rgbj_yy_fxk_zzt_sf == 1) {
            zi_ti_color_s();
        }

    });

    grb_j_max.appendChild(divs);
}

//重置
var qian_bi_zhi = localStorage.bi_zhi;
var qian_bi_zhi_ys = localStorage.bi_zhi_ys;
var shezhi_rgb_qbcz = document.querySelector('.shezhi_rgb_qbcz');
shezhi_rgb_qbcz.addEventListener('click', function(e) {
    localStorage.bi_zhi = qian_bi_zhi;
    localStorage.bi_zhi_ys = qian_bi_zhi_ys;
    if (qian_bi_zhi_ys !== '') {
        document.documentElement.style.backgroundColor = qian_bi_zhi_ys;
        document.documentElement.style.backgroundImage = '';
    } else {
        document.documentElement.style.backgroundImage = ' url(' + qian_bi_zhi + ')';
    }
    ztsz_chongzhi.click();
    bjsz_chongzhi.click();
});









//全局按键事件
document.addEventListener('keyup', function(e) {
    if (bzsz_tj_ym_tp_jk == 1) {
        bzsz_tj_ym_TP.style.backgroundImage = 'url(' + input_bzlj.value + ')';
    }
    if (e.key == 'Enter' && bzsz_tj_ym_tp_jk == 1) {
        bzsz_tj_anniu.click();
    }
});
var sd_dtnr_max = document.querySelector('.sd_dtnr_max');
document.addEventListener('keydown', function(e) {
    if (e.key == 'Enter' && WGS_HTSP_TJ.style.display == 'block') {
        WGS_HTSP_TJ_click();
    }
    if (gywm_ban_ben_HTSP == 1 && shezhi_gywm_ym.style.display == 'block' && e.altKey && e.key == 'Enter' && shezhi_min.style.display == 'none' && nrmaxs3.style.display == 'block') {
        WGS_HTSP.click();
    }
    if (e.key == 'Enter' && shezhi_drmm_ym.style.display == 'block') {
        drmm_mm_qr.click();
    }
    if (e.key == 'Escape') {
        shezhi_min = document.querySelector('.shezhi_min');
        shezhi_ym = document.querySelectorAll('.shezhi_ym');
        for (var i = 0; i < shezhi_ym.length; i++) {
            shezhi_ym[i].style.display = 'none';
        }
        shezhi_min.style.display = 'block';
    }
    if (e.key == 'Enter') {
        if (daoru_ym_dr_mmym.style.display == 'block') {
            daoru_ym_dr_mmym_qr.click();
        }
        if (daoru_ym_sc.value !== '' && shezhi_daoru_ym.style.display == 'block' && daoru_ym_dr_mmym.style.display == 'none') {
            daoru_ym_dr.click();
        }
        if (daoru_ym_sc.value == '' && shezhi_daoru_ym.style.display == 'block' && daoru_ym_dr_mmym.style.display == 'none') {
            daoru_ym_sc.focus();
        }
    }
});
//全局右击事件
document.addEventListener('contextmenu', function() {
    ssbqym.style.display = 'none';
    bzsz_tj_ym.style.display = 'none';
    input_bzlj.value = '';
    bzsz_tj_ym_TP.style.backgroundImage = '';
    daoru_ym_dr_mmym.style.display = 'none';
    daoru_ym_my.value = '';
});
//全局左击事件
document.addEventListener('click', function() {
    ssbqym.style.display = 'none';
    bzsz_tj_ym.style.display = 'none';
    input_bzlj.value = '';
    bzsz_tj_ym_TP.style.backgroundImage = '';
    daoru_ym_dr_mmym.style.display = 'none';
    daoru_ym_my.value = '';
});

// var sz_name = [];
// var name_s = document.querySelectorAll('span[class="name"]');
// for (var i = 0; i < name_s.length; i++) {
//     sz_name.push(name_s[i].innerText);
// }
// console.log(JSON.stringify(sz_name));

// var sz_rgb = [];
// var rgb_s = document.querySelectorAll('span[class="rgb"]');
// for (var i = 0; i < rgb_s.length; i++) {
//     sz_rgb.push(rgb_s[i].innerText);
// }
// console.log(JSON.stringify(sz_rgb));