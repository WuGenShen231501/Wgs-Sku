// 提示音
var sku_tsy = document.querySelectorAll('.sku_tsy');

function Sku_tsy(num) {
    sku_tsy[num].play();
}

// 所有文本超出字体浮动效果
function WGS_wenbengundon(qwe) {
    var wb = document.querySelectorAll(qwe);
    for (var i = 0; i < wb.length; i++) {
        wb[i].addEventListener('mouseover', function(e) {
            var nrcd = this.scrollWidth;
            var hzcd = this.offsetWidth;
            if (nrcd > hzcd) {
                var duochu = nrcd - hzcd;
                var sj = duochu / 50;
                this.style.transition = sj + 's linear';
                this.style.textIndent = (nrcd * -1) + hzcd + 'px';
            }
        });
        wb[i].addEventListener('mouseout', function(e) {
            this.style.transition = '';
            this.style.textIndent = '0px';
        });
    }
}

// 单独文本超出字体浮动效果
function WGS_wenbengundon_dd(qwe) {
    qwe.addEventListener('mouseover', function(e) {
        var nrcd = this.scrollWidth;
        var hzcd = this.offsetWidth;
        if (nrcd > hzcd) {
            var duochu = nrcd - hzcd;
            var sj = duochu / 50;
            this.style.transition = sj + 's linear';
            this.style.textIndent = (nrcd * -1) + hzcd + 'px';
        }
    });
    qwe.addEventListener('mouseout', function(e) {
        this.style.transition = '';
        this.style.textIndent = '0px';
    });
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
    }, 3000)
}



// RGB转换器
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
nrmaxs1 = document.querySelector('.nrmaxs1');
dhr_xg_tj = document.querySelector('.dhr_xg_tj');
lj_xg_tj = document.querySelector('.lj_xg_tj');
lj_zcb_ym = document.querySelector('.lj_zcb_ym');
nrmaxs1.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
dhr_xg_tj.style.top = (window.innerHeight - dhr_xg_tj.offsetHeight) / 2 + 'px';
lj_xg_tj.style.top = (window.innerHeight - 221) / 2 + 'px';
lj_zcb_ym.style.top = (window.innerHeight - 221) / 2 + 'px';
window.addEventListener('resize', function() {
    nrmaxs1 = document.querySelector('.nrmaxs1');
    dhr_xg_tj = document.querySelector('.dhr_xg_tj');
    lj_xg_tj = document.querySelector('.lj_xg_tj');
    lj_zcb_ym = document.querySelector('.lj_zcb_ym');
    nrmaxs1.style.marginTop = (window.innerHeight + 56 - 523 - 80) / 2 + 'px';
    dhr_xg_tj.style.top = (window.innerHeight - dhr_xg_tj.offsetHeight) / 2 + 'px';
    lj_xg_tj.style.top = (window.innerHeight - 221) / 2 + 'px';
    lj_zcb_ym.style.top = (window.innerHeight - 221) / 2 + 'px';
});




//链接全局功能指向
function qjgnzx() {
    console.clear();
    console.log('指向: ' + zhi_xian);
    console.log('链接导航栏指向: ' + dhr_zhi_xian);
    console.log('链接导航栏右击指向: ' + dhr_zhi_xian2);
    console.log('链接指向: ' + lj_zhi_xian);
    console.log('功能指向: ' + gong_neng);
    console.log('------------------------');
}
//导航栏max 和 链接页面max 的右击事件
lian_jie_l = document.querySelector('.lian_jie_l');
lian_jie_l.addEventListener('contextmenu', function(e) {
    e.stopPropagation();
    e.preventDefault();
    zhi_xian = '导航栏';
    qjgnzx();
    var dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
    var dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
    dhr_shezhi_gn_cmm.style.display = 'none';
    dhr_shezhi_gn_sc.style.display = 'none';
    var dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
    dhr_shezhi_gn.style.display = 'block';
    dhr_shezhi_gn.style.top = e.pageY + 'px';
    dhr_shezhi_gn.style.left = e.pageX + 'px';
    ycgn_dhr_xgk();
    ycgn_lj_xgk();
});
lian_jie_r = document.querySelector('.lian_jie_r');
lian_jie_r.addEventListener('contextmenu', function(e) {
    e.stopPropagation();
    e.preventDefault();
    zhi_xian = '链接';
    qjgnzx();
    var dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
    var dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
    dhr_shezhi_gn_cmm.style.display = 'none';
    dhr_shezhi_gn_sc.style.display = 'none';
    var dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
    dhr_shezhi_gn.style.display = 'block';
    dhr_shezhi_gn.style.top = e.pageY + 'px';
    dhr_shezhi_gn.style.left = e.pageX + 'px';
    ycgn_dhr_xgk();
    ycgn_lj_xgk();
});

//链接导航栏开始
function lian_jie_l_kaishi() {
    // 创建全局指向对象和功能对象
    var dhr_sz = JSON.parse(localStorage.dhr_sz);
    zhi_xian = '无';
    if (dhr_sz.length !== 0) {
        dhr_zhi_xian = 0;
    } else {
        dhr_zhi_xian = '无';
    }
    dhr_zhi_xian2 = '无';
    lj_zhi_xian = '无'
    gong_neng = '无';
    //左侧导航栏
    lian_jie_l = document.querySelector('.lian_jie_l');
    lian_jie_r = document.querySelector('.lian_jie_r');
    //for循环输出指定导航栏个数
    var dhr_sz = JSON.parse(localStorage.dhr_sz);
    for (var i = 0; i < dhr_sz.length; i++) {
        var dhr_div = document.createElement('div');
        dhr_div.innerHTML = dhr_sz[i];
        //指定顺序值
        dhr_div.setAttribute('dhr_num', i);
        lian_jie_l.appendChild(dhr_div);
    }
    //for循环输出指定导航栏页面个数
    for (var i = 0; i < dhr_sz.length; i++) {
        var dhr_ym_div = document.createElement('div');
        lian_jie_r.appendChild(dhr_ym_div);
    }
    //第一个开始样式：显示第一个导航
    lian_jie_l = document.querySelector('.lian_jie_l');
    lian_jie_l_s = lian_jie_l.children;
    if (lian_jie_l_s.length !== 0) {
        lian_jie_l_s[0].style.color = RGB_zhq(localStorage.zi_ti_click_color);
        lian_jie_l_s[0].style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
        lian_jie_l_s[0].style.borderBottom = '1px solid ' + RGB_zhq(localStorage.zi_ti_click_color);
    }
    //第一个开始样式：显示第一个导航栏页面
    lian_jie_r_s = lian_jie_r.children;
    for (var i = 0; i < dhr_sz.length; i++) {
        lian_jie_r_s[i].style.display = 'none';
    }
    if (lian_jie_r_s.length !== 0) {
        lian_jie_r_s[0].style.display = 'block';
    }
    //链接导航栏click事件
    for (var i = 0; i < lian_jie_l_s.length; i++) {
        // 禁止选择字体
        lian_jie_l_s[i].addEventListener('selectstart', function(e) {
            e.preventDefault();
        });
        //点击事件
        lian_jie_l_s[i].addEventListener('click', function() {
            //设置指向
            dhr_zhi_xian = this.getAttribute('dhr_num');
            qjgnzx();
            //变样式
            for (var i = 0; i < lian_jie_l_s.length; i++) {
                lian_jie_l_s[i].style.color = '';
                lian_jie_l_s[i].style.backgroundColor = '';
                lian_jie_l_s[i].style.borderBottom = '';
            }
            this.style.color = RGB_zhq(localStorage.zi_ti_click_color);
            this.style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
            this.style.borderBottom = '1px solid ' + RGB_zhq(localStorage.zi_ti_click_color);
            //切换页面
            var dhr_sz = JSON.parse(localStorage.dhr_sz);
            for (var i = 0; i < dhr_sz.length; i++) {
                lian_jie_r_s[i].style.display = 'none';
            }
            lian_jie_r_s[this.getAttribute('dhr_num')].style.display = 'block';
            lian_jie_r.scroll(0, 0);
        });
        //右击事件
        lian_jie_l_s[i].addEventListener('contextmenu', function(e) {
            e.preventDefault();
            e.stopPropagation();
            // 设置指向
            dhr_zhi_xian2 = this.getAttribute('dhr_num');
            zhi_xian = '导航栏';
            qjgnzx();
            //显示设置
            dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
            dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
            dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
            dhr_shezhi_gn.style.display = 'block';
            dhr_shezhi_gn_sc.style.display = 'block';
            dhr_shezhi_gn_cmm.style.display = 'block';
            dhr_shezhi_gn.style.top = e.pageY + 'px';
            dhr_shezhi_gn.style.left = e.pageX + 'px';
            //隐藏修改框 
            ycgn_dhr_xgk();
            ycgn_lj_xgk();
        });
    }

    //导出所有链接
    var dhr_ym_dx = JSON.parse(localStorage.dhr_ym_dx);
    lian_jie_r_s = lian_jie_r.children;
    for (var j = 0; j < Object.keys(dhr_ym_dx).length; j++) {
        for (var i = 0; i < Object.keys(dhr_ym_dx['dhr_ym_dx' + j]).length; i++) {
            var lian_jie_rs_div = document.createElement('div');
            lian_jie_rs_div.className = 'lj_max';
            lian_jie_rs_div.setAttribute('lj_num', i);
            //判断是否有下载按钮
            if (dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][4]) {
                lian_jie_rs_div.innerHTML = '<div class="lj_tp" style="background-image: url(' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][1] + '</div><div class="lj_xx_b">' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][2] + '</div></div><div class="lj_lj"><a class="lj_lj_t" target="_blank" href="' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][3] + '">进入</a><a class="lj_lj_b" target="_blank" href="' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][4] + '">下载</a></div>';
            } else {
                lian_jie_rs_div.innerHTML = '<div class="lj_tp" style="background-image: url(' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][1] + '</div><div class="lj_xx_b">' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][2] + '</div></div><div class="lj_lj"><a class="lj_lj_t" target="_blank" href="' + dhr_ym_dx['dhr_ym_dx' + j]['dhr_ym_sz' + i][3] + '">进入</a></div>';
            }
            lian_jie_r_s[j].appendChild(lian_jie_rs_div);
        }
    }
    WGS_wenbengundon('.lj_xx_b');

    //为所有链接添加事   
    lj_max = document.querySelectorAll('.lj_max');
    for (var i = 0; i < lj_max.length; i++) {
        // 链接添加右击事件
        lj_max[i].addEventListener('contextmenu', function(e) {
            e.preventDefault();
            e.stopPropagation();
            // 设置指向
            lj_zhi_xian = this.getAttribute('lj_num');
            zhi_xian = '链接';
            qjgnzx();
            //显示设置
            var dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
            var dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
            var dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
            dhr_shezhi_gn.style.display = 'block';
            dhr_shezhi_gn_sc.style.display = 'block';
            dhr_shezhi_gn_cmm.style.display = 'block';
            dhr_shezhi_gn.style.top = e.pageY + 'px';
            dhr_shezhi_gn.style.left = e.pageX + 'px';
            //隐藏修改框
            ycgn_dhr_xgk();
            ycgn_lj_xgk();
        });
    }
}
lian_jie_l_kaishi();

//one开始
function one_kaishi() {
    //第一个开始样式：显示第一个导航栏
    lian_jie_l = document.querySelector('.lian_jie_l');
    lian_jie_l_s = lian_jie_l.children;
    lian_jie_r = document.querySelector('.lian_jie_r');
    for (var i = 0; i < lian_jie_l_s.length; i++) {
        lian_jie_l_s[i].style.color = '';
        lian_jie_l_s[i].style.backgroundColor = '';
        lian_jie_l_s[i].style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
    }
    if (lian_jie_l_s.length !== 0) {
        lian_jie_l_s[0].style.color = RGB_zhq(localStorage.zi_ti_click_color);
        lian_jie_l_s[0].style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
        lian_jie_l_s[0].style.borderBottom = '1px solid ' + RGB_zhq(localStorage.zi_ti_click_color);
    }
    //第一个开始样式：显示第一个导航栏页面
    lian_jie_r_s = lian_jie_r.children;
    dhr_sz = JSON.parse(localStorage.dhr_sz);
    for (var i = 0; i < dhr_sz.length; i++) {
        lian_jie_r_s[i].style.display = 'none';
    }
    if (lian_jie_r_s.length !== 0) {
        lian_jie_r_s[0].style.display = 'block';
    }
}

//重新排序
function cxpx() {
    if (zhi_xian == '导航栏') {
        //导航栏排序
        lian_jie_l_s = document.querySelector('.lian_jie_l').children;
        for (var i = 0; i < lian_jie_l_s.length; i++) {
            //指定顺序值
            lian_jie_l_s[i].setAttribute('dhr_num', i)
        }
    } else if (zhi_xian == '链接') {
        //链接排序
        lian_jie_r = document.querySelector('.lian_jie_r');
        lian_jie_r_s_s = lian_jie_r.children[dhr_zhi_xian].children;
        for (var i = 0; i < lian_jie_r_s_s.length; i++) {
            //指定顺序值
            lian_jie_r_s_s[i].setAttribute('lj_num', i)
        }
    }
}

//导航栏设置

//删除功能
var dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
dhr_shezhi_gn_sc.addEventListener('click', function() {
    if (zhi_xian == '导航栏') {
        //删除内存
        var sz1 = JSON.parse(localStorage.dhr_sz);
        sz1.splice(dhr_zhi_xian2, 1);
        localStorage.dhr_sz = JSON.stringify(sz1);
        dx1 = JSON.parse(localStorage.dhr_ym_dx);
        delete dx1['dhr_ym_dx' + dhr_zhi_xian2];
        var dx2 = {};
        for (var i = 0; i < Object.keys(dx1).length; i++) {
            dx2['dhr_ym_dx' + i] = dx1[Object.keys(dx1)[i]];
        }
        localStorage.dhr_ym_dx = JSON.stringify(dx2);
        // 删除HTML
        lian_jie_l = document.querySelector('.lian_jie_l');
        lian_jie_l_s = lian_jie_l.children;
        lian_jie_l.removeChild(lian_jie_l_s[dhr_zhi_xian2]);
        lian_jie_r = document.querySelector('.lian_jie_r');
        lian_jie_r_s2 = lian_jie_r.children;
        lian_jie_r.removeChild(lian_jie_r_s2[dhr_zhi_xian2]);
        //重新排序
        cxpx();
        //显示第一个
        one_kaishi();
        //指向更改
        lian_jie_l = document.querySelector('.lian_jie_l');
        lian_jie_l_s = lian_jie_l.children;
        if (lian_jie_l_s.length !== 0) {
            dhr_zhi_xian = 0;
        } else {
            dhr_zhi_xian = '无';
        }
        qjgnzx();

        Sku_tctx('分页删除成功');
    } else if (zhi_xian == '链接') {
        // 删除内存
        var dx1 = JSON.parse(localStorage.dhr_ym_dx);
        delete dx1['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian];
        var dx2 = {};
        for (var i = 0; i < Object.keys(dx1).length; i++) {
            dx2['dhr_ym_dx' + i] = new Object();
        }
        for (var j = 0; j < Object.keys(dx1).length; j++) {
            for (var i = 0; i < Object.keys(dx1['dhr_ym_dx' + j]).length; i++) {
                dx2['dhr_ym_dx' + j]['dhr_ym_sz' + i] = dx1['dhr_ym_dx' + j][Object.keys(dx1['dhr_ym_dx' + j])[i]];
            }
        }
        localStorage.dhr_ym_dx = JSON.stringify(dx2);
        //删除HTML
        lian_jie_r = document.querySelector('.lian_jie_r');
        lian_jie_r_s = lian_jie_r.children;
        lian_jie_r_s_s = lian_jie_r_s[dhr_zhi_xian].children;
        lian_jie_r_s[dhr_zhi_xian].removeChild(lian_jie_r_s_s[lj_zhi_xian]);
        //重新排序
        cxpx();

        Sku_tctx('链接删除成功');
    }
});

//修改功能 
lj_srk_tpid = document.querySelector('.lj_srk_tpid');
lj_srk_mc = document.querySelector('.lj_srk_mc');
lj_srk_zsm = document.querySelector('.lj_srk_zsm');
lj_srk_wzid = document.querySelector('.lj_srk_wzid');
lj_srk_xzid = document.querySelector('.lj_srk_xzid');
jl_qrk = document.querySelector('.jl_qrk');
lj_xg_tj = document.querySelector('.lj_xg_tj');
lj_xg_tj_ipt = lj_xg_tj.querySelectorAll('input');
dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
dhr_xg_tj = document.querySelector('.dhr_xg_tj');
dhr_srk = document.querySelector('.dhr_srk');
dhr_qrk = document.querySelector('.dhr_qrk');
dhr_shezhi_gn_cmm.addEventListener('click', function(e) {
    e.stopPropagation();
    if (zhi_xian == '导航栏') {
        //功能指向
        gong_neng = '导航栏修改';
        qjgnzx();
        // 隐藏设置
        dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
        dhr_shezhi_gn.style.display = 'none';
        //显示修改框 
        dhr_xg_tj.style.display = 'block';
        dhr_srk.select();
    } else if (zhi_xian == '链接') {
        //功能指向
        gong_neng = '链接修改';
        qjgnzx();
        // 隐藏设置
        dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
        dhr_shezhi_gn.style.display = 'none';
        //显示修改框内容
        var dx = JSON.parse(localStorage.dhr_ym_dx);
        lj_srk_tpid.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][0];
        lj_srk_mc.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][1];
        lj_srk_zsm.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][2];
        lj_srk_wzid.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][3];
        jl_qrk.innerHTML = '修改<span class="jl_qrk_fh">↵</span>';
        if (dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][4]) {
            lj_srk_xzid.value = dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian][4];
        }
        //显示修改框
        lj_xg_tj.style.display = 'block';
        lj_srk_tpid.select();
        lj_xg_tj_ipt_xzs = 0;
    }
});

dhr_srk.addEventListener('click', function(e) {
    e.stopPropagation();
});

dhr_qrk.addEventListener('click', function(e) {
    e.stopPropagation();
    if (dhr_srk.value !== '') {
        if (gong_neng == '导航栏修改') {
            //更改内存
            dhr_srk = document.querySelector('.dhr_srk');
            var sz = JSON.parse(localStorage.dhr_sz);
            sz.splice(dhr_zhi_xian2, 1, dhr_srk.value);
            localStorage.dhr_sz = JSON.stringify(sz);
            //更改HTML
            lian_jie_l = document.querySelector('.lian_jie_l');
            lian_jie_r_l = lian_jie_l.children;
            lian_jie_r_l[dhr_zhi_xian2].innerHTML = dhr_srk.value;
            //隐藏
            ycgn_dhr_xgk();

            Sku_tctx('分页修改成功');
        }
    } else {
        dhr_srk = document.querySelector('.dhr_srk');
        dhr_srk.style.borderColor = 'red';
    }
});

for (var i = 0; i < 5; i++) {
    lj_xg_tj_ipt[i].addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

jl_qrk = document.querySelector('.jl_qrk');
jl_qrk.addEventListener('click', function(e) {
    e.stopPropagation();
    if (lj_srk_mc.value !== '' && lj_srk_wzid.value !== '') {
        if (lj_srk_xzid.value !== '') {
            lj_sz_s = [];
            for (var i = 0; i < 5; i++) {
                lj_sz_s[i] = lj_xg_tj_ipt[i].value;
            }
        }
        if (lj_srk_xzid.value == '') {
            lj_sz_s = [];
            for (var i = 0; i < 4; i++) {
                lj_sz_s[i] = lj_xg_tj_ipt[i].value;
            }
        }
        if (gong_neng == '链接修改') {
            //修改内存
            var dx = JSON.parse(localStorage.dhr_ym_dx);
            dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + lj_zhi_xian] = lj_sz_s;
            localStorage.dhr_ym_dx = JSON.stringify(dx);
            //修改HTML
            var xgwz = lian_jie_r.children[dhr_zhi_xian].children[lj_zhi_xian];
            if (lj_sz_s.length == 5) {
                xgwz.innerHTML = '<div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a><a class="lj_lj_b"target="_blank" href="' + lj_sz_s[4] + '">下载</a></div>';
            } else if (lj_sz_s.length == 4) {
                xgwz.innerHTML = '<div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a></div>';
            }
            //隐藏
            ycgn_lj_xgk();

            Sku_tctx('链接修改成功');

            // 添加单独字体浮动
            var xgwz_lj_xx_b = xgwz.querySelector('.lj_xx_b');
            WGS_wenbengundon_dd(xgwz_lj_xx_b);
        }
    } else {
        lj_srk_mc.style.borderColor = '';
        lj_srk_wzid.style.borderColor = '';
        if (lj_srk_mc.value == '') {
            lj_srk_mc.style.borderColor = 'red';
        }
        if (lj_srk_wzid.value == '') {
            lj_srk_wzid.style.borderColor = 'red';
        }
    }
});

//导航栏添加功能
dhr_shezhi_gn_tj = document.querySelector('.dhr_shezhi_gn_tj');
dhr_xg_tj = document.querySelector('.dhr_xg_tj');
dhr_srk = document.querySelector('.dhr_srk');
dhr_qrk = document.querySelector('.dhr_qrk');
dhr_shezhi_gn_tj.addEventListener('click', function(e) {
    e.stopPropagation();
    if (zhi_xian == '导航栏') {
        //功能指向
        gong_neng = '导航栏添加';
        qjgnzx();
        // 隐藏设
        dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
        dhr_shezhi_gn.style.display = 'none';
        //显示修改框 
        dhr_xg_tj.style.display = 'block';
        dhr_srk.select();
    } else if (zhi_xian == '链接') {
        //功能指向
        gong_neng = '链接添加';
        qjgnzx();
        // 隐藏设置
        dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
        dhr_shezhi_gn.style.display = 'none';
        //显示修改框
        lj_xg_tj.style.display = 'block';
        lj_srk_tpid.select();
        lj_xg_tj_ipt_xzs = 0;
        jl_qrk.innerHTML = '添加<span class="jl_qrk_fh">↵</span>';
    }
});

dhr_srk.addEventListener('click', function(e) {
    e.stopPropagation();
});

dhr_qrk.addEventListener('click', function(e) {
    e.stopPropagation();
    if (dhr_srk.value !== '') {
        if (gong_neng == '导航栏添加') {
            //更改内存
            lian_jie_l = document.querySelector('.lian_jie_l');
            lian_jie_l_s = lian_jie_l.children;
            dhr_srk = document.querySelector('.dhr_srk');
            var sz = JSON.parse(localStorage.dhr_sz);
            sz.splice(lian_jie_l_s.length, 0, dhr_srk.value);
            localStorage.dhr_sz = JSON.stringify(sz);
            var dx = JSON.parse(localStorage.dhr_ym_dx);
            dx['dhr_ym_dx' + lian_jie_l_s.length] = {};
            localStorage.dhr_ym_dx = JSON.stringify(dx);
            //更改HTML
            lian_jie_l = document.querySelector('.lian_jie_l');
            var lian_jie_r_l = lian_jie_l.children;
            var dhr_div = document.createElement('div');
            dhr_div.innerHTML = dhr_srk.value;
            dhr_div.setAttribute('dhr_num', lian_jie_r_l.length);
            lian_jie_l.appendChild(dhr_div);
            var dhr_ym_div = document.createElement('div');
            lian_jie_r.appendChild(dhr_ym_div);
            //添加add
            lian_jie_r = document.querySelector('.lian_jie_r');
            var lian_jie_r_s = lian_jie_r.children;
            lian_jie_l = document.querySelector('.lian_jie_l');
            var lian_jie_l_s = lian_jie_l.children;
            // 禁止选择字体
            lian_jie_l_s[lian_jie_l_s.length - 1].addEventListener('selectstart', function(e) {
                e.preventDefault();
            });
            //点击事件
            lian_jie_l_s[lian_jie_l_s.length - 1].addEventListener('click', function() {
                //设置指向
                dhr_zhi_xian = this.getAttribute('dhr_num');
                qjgnzx();
                //变样式
                for (var i = 0; i < lian_jie_l_s.length; i++) {
                    lian_jie_l_s[i].style.color = '';
                    lian_jie_l_s[i].style.backgroundColor = '';
                    lian_jie_l_s[i].style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
                }
                this.style.color = RGB_zhq(localStorage.zi_ti_click_color);
                this.style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
                this.style.borderBottom = '1px solid ' + RGB_zhq(localStorage.zi_ti_click_color);
                //切换页面
                var dhr_sz = JSON.parse(localStorage.dhr_sz);
                for (var i = 0; i < dhr_sz.length; i++) {
                    lian_jie_r_s[i].style.display = 'none';
                }
                lian_jie_r_s[this.getAttribute('dhr_num')].style.display = 'block';
            });
            //右击事件
            lian_jie_l_s[lian_jie_l_s.length - 1].addEventListener('contextmenu', function(e) {
                e.preventDefault();
                e.stopPropagation();
                // 设置指向
                dhr_zhi_xian2 = this.getAttribute('dhr_num');
                zhi_xian = '导航栏';
                qjgnzx();
                //显示设置
                dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
                dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
                dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
                dhr_shezhi_gn.style.display = 'block';
                dhr_shezhi_gn_sc.style.display = 'block';
                dhr_shezhi_gn_cmm.style.display = 'block';
                dhr_shezhi_gn.style.top = e.pageY + 'px';
                dhr_shezhi_gn.style.left = e.pageX + 'px';
                //隐藏修改框 
                ycgn_dhr_xgk();
            });
            //显示添加的页面
            //导航
            lian_jie_l = document.querySelector('.lian_jie_l');
            lian_jie_l_s = lian_jie_l.children;
            for (var i = 0; i < lian_jie_l_s.length; i++) {
                lian_jie_l_s[i].style.color = '';
                lian_jie_l_s[i].style.backgroundColor = '';
                lian_jie_l_s[i].style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
            }
            if (lian_jie_l_s.length !== 0) {
                lian_jie_l_s[lian_jie_l_s.length - 1].style.color = RGB_zhq(localStorage.zi_ti_click_color);
                lian_jie_l_s[lian_jie_l_s.length - 1].style.backgroundColor = RGB_zhq(localStorage.zi_ti_click_color, 0.15);
                lian_jie_l_s[lian_jie_l_s.length - 1].style.borderBottom = '1px solid ' + RGB_zhq(localStorage.zi_ti_click_color);
            }
            //导航栏页面
            lian_jie_r = document.querySelector('.lian_jie_r');
            lian_jie_r_s = lian_jie_r.children;
            for (var i = 0; i < lian_jie_r_s.length; i++) {
                lian_jie_r_s[i].style.display = 'none';
            }
            if (lian_jie_r_s.length !== 0) {
                lian_jie_r_s[lian_jie_l_s.length - 1].style.display = 'block';
            }
            //指向更改
            dhr_zhi_xian = lian_jie_r_s.length - 1;
            qjgnzx();
            //隐藏
            ycgn_dhr_xgk();

            Sku_tctx('分页添加成功');
        }
    } else {
        dhr_srk = document.querySelector('.dhr_srk');
        dhr_srk.style.borderColor = 'red';
    }
});

jl_qrk = document.querySelector('.jl_qrk');
jl_qrk.addEventListener('click', function(e) {
    e.stopPropagation();
    if (lj_srk_mc.value !== '' && lj_srk_wzid.value !== '') {
        if (lj_srk_xzid.value !== '') {
            lj_sz_s = [];
            for (var i = 0; i < 5; i++) {
                lj_sz_s[i] = lj_xg_tj_ipt[i].value;
            }
        }
        if (lj_srk_xzid.value == '') {
            lj_sz_s = [];
            for (var i = 0; i < 4; i++) {
                lj_sz_s[i] = lj_xg_tj_ipt[i].value;
            }
        }
        if (gong_neng == '链接添加') {
            //修改内存
            var dx = JSON.parse(localStorage.dhr_ym_dx);
            try {
                // 可能产生错误的代码
                var dx_sz_gs = document.querySelector('.lian_jie_r').children[dhr_zhi_xian].children;
            } catch (error) {
                // 这个块会在 try 中有错误抛出时执行
                Sku_tctx('添加错误 ! 请先添加左侧分页');
            }
            dx['dhr_ym_dx' + dhr_zhi_xian]['dhr_ym_sz' + dx_sz_gs.length] = lj_sz_s;
            localStorage.dhr_ym_dx = JSON.stringify(dx);
            //修改HTML
            var xgwz = lian_jie_r.children[dhr_zhi_xian];
            var divss = document.createElement('div');
            divss.className = 'lj_max';
            // 新链接添加右击事件
            divss.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                e.stopPropagation();
                // 设置指向
                lj_zhi_xian = this.getAttribute('lj_num');
                zhi_xian = '链接';
                qjgnzx();
                //显示设置
                var dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
                var dhr_shezhi_gn_sc = document.querySelector('.dhr_shezhi_gn_sc');
                var dhr_shezhi_gn_cmm = document.querySelector('.dhr_shezhi_gn_cmm');
                dhr_shezhi_gn.style.display = 'block';
                dhr_shezhi_gn_sc.style.display = 'block';
                dhr_shezhi_gn_cmm.style.display = 'block';
                dhr_shezhi_gn.style.top = e.pageY + 'px';
                dhr_shezhi_gn.style.left = e.pageX + 'px';
                //隐藏修改框
                ycgn_dhr_xgk();
                ycgn_lj_xgk();
            });
            divss.setAttribute('lj_num', dx_sz_gs.length);
            if (lj_sz_s.length == 5) {
                divss.innerHTML = '<div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a><a class="lj_lj_b"target="_blank" href="' + lj_sz_s[4] + '">下载</a></div>';
            } else if (lj_sz_s.length == 4) {
                divss.innerHTML = '<div class="lj_tp" style="background-image: url(' + lj_sz_s[0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lj_sz_s[1] + '</div><div class="lj_xx_b" >' + lj_sz_s[2] + '</div></div><div class="lj_lj"><a class="lj_lj_t"target="_blank" href="' + lj_sz_s[3] + '">进入</a></div>';
            }
            xgwz.appendChild(divss);
            // 隐藏
            ycgn_lj_xgk();

            Sku_tctx('链接添加成功');

            // 添加单独字体浮动
            var xgwz_lj_xx_b_2 = divss.querySelector('.lj_xx_b');
            WGS_wenbengundon_dd(xgwz_lj_xx_b_2);
        }
    } else {
        lj_srk_mc.style.borderColor = '';
        lj_srk_wzid.style.borderColor = '';
        if (lj_srk_mc.value == '') {
            lj_srk_mc.style.borderColor = 'red';
        }
        if (lj_srk_wzid.value == '') {
            lj_srk_wzid.style.borderColor = 'red';
        }
    }
});

//文本框选中事件
lj_srk_tpid = document.querySelector('.lj_srk_tpid');
lj_srk_mc = document.querySelector('.lj_srk_mc');
lj_srk_zsm = document.querySelector('.lj_srk_zsm');
lj_srk_wzid = document.querySelector('.lj_srk_wzid');
lj_srk_xzid = document.querySelector('.lj_srk_xzid');
lj_xg_tj = document.querySelector('.lj_xg_tj');
lj_srk_tpid.addEventListener('focus', function() {
    lj_xg_tj_ipt_xzs = 0;
});
lj_srk_mc.addEventListener('focus', function(e) {
    lj_xg_tj_ipt_xzs = 1;
});
lj_srk_zsm.addEventListener('focus', function(e) {
    lj_xg_tj_ipt_xzs = 2;
});
lj_srk_wzid.addEventListener('focus', function(e) {
    lj_xg_tj_ipt_xzs = 3;
});
lj_srk_xzid.addEventListener('focus', function(e) {
    lj_xg_tj_ipt_xzs = 4;
});


//封装隐藏功能

//隐藏导航栏修改框W
function ycgn_dhr_xgk() {
    dhr_srk = document.querySelector('.dhr_srk');
    dhr_xg_tj = document.querySelector('.dhr_xg_tj');
    dhr_xg_tj.style.display = 'none';
    dhr_srk.value = '';
    dhr_srk.style.borderColor = '';
}
//隐藏链接修改框
function ycgn_lj_xgk() {
    lj_srk_tpid = document.querySelector('.lj_srk_tpid');
    lj_srk_mc = document.querySelector('.lj_srk_mc');
    lj_srk_zsm = document.querySelector('.lj_srk_zsm');
    lj_srk_wzid = document.querySelector('.lj_srk_wzid');
    lj_srk_xzid = document.querySelector('.lj_srk_xzid');
    lj_xg_tj = document.querySelector('.lj_xg_tj');
    lj_xg_tj.style.display = 'none';
    lj_srk_tpid.value = '';
    lj_srk_mc.value = '';
    lj_srk_zsm.value = '';
    lj_srk_wzid.value = '';
    lj_srk_xzid.value = '';
    lj_srk_mc.style.borderColor = '';
    lj_srk_wzid.style.borderColor = '';
}


//搜索链接
lian_jie_l2 = document.querySelector('.lian_jie_l2');
lian_jie_ssym = document.querySelector('.lian_jie_ssym');
lian_jie_r2 = document.querySelector('.lian_jie_r2');
lian_jie_ssk = document.querySelector('.lian_jie_ssk');
i_lian_jie_ss_tb = document.querySelector('.i_lian_jie_ss_tb');
i_lian_jie_ss_tb.addEventListener('click', function() {
    console.clear();
    if (lian_jie_ssk.value !== '') {
        lian_jie_r.style.display = 'none';
        lian_jie_l.style.display = 'none';
        lian_jie_r2.style.display = 'block';
        lian_jie_l2.style.display = 'block';
        lian_jie_ssym.innerHTML = '';
        var dhr_ym_dx = JSON.parse(localStorage.dhr_ym_dx);
        var lian_jie_dxs = {};
        for (var i = 0; i < Object.keys(dhr_ym_dx).length; i++) {
            var dhr_ym_dx_s = dhr_ym_dx['dhr_ym_dx' + i]
            for (var o = 0; o < Object.keys(dhr_ym_dx_s).length; o++) {
                lian_jie_dxs['lian_jie_dxs' + Object.keys(lian_jie_dxs).length] = dhr_ym_dx_s['dhr_ym_sz' + o];
            }
        }
        var lian_jie_szs = [];
        for (var i = 0; i < Object.keys(dhr_ym_dx).length; i++) {
            var dhr_ym_dx_s = dhr_ym_dx['dhr_ym_dx' + i]
            for (var o = 0; o < Object.keys(dhr_ym_dx_s).length; o++) {
                if (dhr_ym_dx_s['dhr_ym_sz' + o][4]) {
                    lian_jie_szs[lian_jie_szs.length] = dhr_ym_dx_s['dhr_ym_sz' + o][0].concat(dhr_ym_dx_s['dhr_ym_sz' + o][1]).concat(dhr_ym_dx_s['dhr_ym_sz' + o][2]).concat(dhr_ym_dx_s['dhr_ym_sz' + o][3]).concat(dhr_ym_dx_s['dhr_ym_sz' + o][4]);
                } else {
                    lian_jie_szs[lian_jie_szs.length] = dhr_ym_dx_s['dhr_ym_sz' + o][0].concat(dhr_ym_dx_s['dhr_ym_sz' + o][1]).concat(dhr_ym_dx_s['dhr_ym_sz' + o][2]).concat(dhr_ym_dx_s['dhr_ym_sz' + o][3]);
                }
            }
        }
        for (var i = 0; i < lian_jie_szs.length; i++) {
            var lian_jie_szs_g = lian_jie_szs[i];
            for (var o = 0; o < lian_jie_szs_g.length; o++) {
                if (lian_jie_szs_g.charAt(o) == lian_jie_ssk.value[0].toUpperCase() || lian_jie_szs_g.charAt(o) == lian_jie_ssk.value[0].toLowerCase()) {
                    var zq_gs = 1;
                    for (var p = 1; p < lian_jie_ssk.value.length; p++) {
                        if (lian_jie_szs_g.charAt(o + p) == lian_jie_ssk.value[p].toUpperCase() || lian_jie_szs_g.charAt(o + p) == lian_jie_ssk.value[p].toLowerCase()) {
                            zq_gs++;
                        }
                    }
                    if (zq_gs == lian_jie_ssk.value.length) {
                        var lian_jie_rs_div = document.createElement('div');
                        lian_jie_rs_div.className = 'lj_max';
                        if (lian_jie_dxs['lian_jie_dxs' + i][4]) {
                            lian_jie_rs_div.innerHTML = '<div class="lj_tp" style="background-image: url(' + lian_jie_dxs['lian_jie_dxs' + i][0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lian_jie_dxs['lian_jie_dxs' + i][1] + '</div><div class="lj_xx_b_2">' + lian_jie_dxs['lian_jie_dxs' + i][2] + '</div></div><div class="lj_lj"><a class="lj_lj_t" target="_blank" href="' + lian_jie_dxs['lian_jie_dxs' + i][3] + '">进入</a><a class="lj_lj_b" target="_blank" href="' + lian_jie_dxs['lian_jie_dxs' + i][4] + '">下载</a></div>';
                        } else {
                            lian_jie_rs_div.innerHTML = '<div class="lj_tp" style="background-image: url(' + lian_jie_dxs['lian_jie_dxs' + i][0] + ');"></div><div class="lj_xx"><div class="lj_xx_t">' + lian_jie_dxs['lian_jie_dxs' + i][1] + '</div><div class="lj_xx_b_2">' + lian_jie_dxs['lian_jie_dxs' + i][2] + '</div></div><div class="lj_lj"><a class="lj_lj_t" target="_blank" href="' + lian_jie_dxs['lian_jie_dxs' + i][3] + '">进入</a></div>';
                        }
                        lian_jie_ssym.appendChild(lian_jie_rs_div);
                        break;
                    }
                }
            }
        }
        WGS_wenbengundon('.lj_xx_b_2');
    } else {
        lian_jie_r.style.display = 'block';
        lian_jie_r2.style.display = 'none';
        lian_jie_l.style.display = 'block';
        lian_jie_l2.style.display = 'none';
    }
});

//是否选中
var lian_jie_ssk_xz = 0;
lian_jie_ssk.addEventListener('focus', function() {
    lian_jie_ssk_xz = 1;
});
lian_jie_ssk.addEventListener('blur', function() {
    lian_jie_ssk_xz = 0;
});

document.addEventListener('keyup', function(e) {
    if (nrmaxs1.style.display == 'block' && e.ctrlKey && e.key == '/') {
        lian_jie_ssk.focus();
    }
    if (lian_jie_ssk_xz == 1) {
        i_lian_jie_ss_tb.click();
    }
    if (lian_jie_ssk_xz == 1 && e.key == 'Enter') {
        i_lian_jie_ss_tb.click();
        lian_jie_ssk.blur();
    }
    if (nrmaxs1.style.display == 'block' && e.key == 'Escape') {
        lian_jie_ssk.value = '';
        lian_jie_ssk.blur();
        i_lian_jie_ss_tb.click();
    }
});

// 2023后加
lj_xg_tj.addEventListener('click', function(e) {
    e.stopPropagation();
});




// 注册表
var lj_zcb_ym = document.querySelector('.lj_zcb_ym');
var lj_zcb_i = document.querySelector('.lj_zcb_i');
var lj_zcb_qr = document.querySelector('.lj_zcb_qr');
var lj_zcb_dizhi = document.querySelector('.lj_zcb_dizhi');
var lj_zcb_name = document.querySelector('.lj_zcb_name');

function lj_zcb_ym_sc() {
    lj_zcb_ym.style.display = 'none';
    lj_zcb_dizhi.value = '';
    lj_zcb_name.value = '';
};
lj_zcb_ym.addEventListener('click', function(e) {
    e.stopPropagation();
});
lj_zcb_i.addEventListener('click', function(e) {
    e.stopPropagation();
    ycgn_dhr_xgk();
    ycgn_lj_xgk();
    lj_zcb_ym.style.display = 'block';
    lj_zcb_name.focus();
});

function escapeBackslash(path) {
    var path2 = path.replace(/\\\\/g, '\\');
    var path3 = path2.replace(/\//g, '\\');
    var path4 = path3.replace(/\/\//g, '\\');
    var path5 = path4.replace(/\"/g, '');
    var path6 = path5.replace(/\'/g, '');
    return path6.replace(/\\/g, '\\\\');
}

function isAlphaDash(str) {
    const pattern = /^[a-zA-Z-]+$/;
    return pattern.test(str);
}

lj_zcb_qr.addEventListener('click', function(e) {

    if (isAlphaDash(lj_zcb_name.value) && lj_zcb_name.value != '' && lj_zcb_dizhi.value != '' && (lj_zcb_dizhi.value.substr(lj_zcb_dizhi.value.length - 4, lj_zcb_dizhi.value.length) == 'exe"' || lj_zcb_dizhi.value.substr(lj_zcb_dizhi.value.length - 4, lj_zcb_dizhi.value.length) == 'exe\'' || lj_zcb_dizhi.value.substr(lj_zcb_dizhi.value.length - 3, lj_zcb_dizhi.value.length) == 'exe')) {
        // 保存历史
        var sku_zcb = JSON.parse(localStorage.sku_zcb);
        sku_zcb[0].push('Sku-' + lj_zcb_name.value);
        console.log(escapeBackslash(lj_zcb_dizhi.value));
        sku_zcb[1].push('' + escapeBackslash(lj_zcb_dizhi.value));
        localStorage.sku_zcb = JSON.stringify(sku_zcb);

        // 创建TXT文本 WGS_txt_wenbenchuanjian('文件名','文本内容');
        console.log('Windows Registry Editor Version 5.00\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + ']\n@="URL:' + 'Sku-' + lj_zcb_name.value + ' Protocol Handler"\n"URL Protocol"=""\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\DefaultIcon]\n@="' + escapeBackslash(lj_zcb_dizhi.value) + '"\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\shell]\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\shell\\open]\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\shell\\open\\command]\n@="\\"' + escapeBackslash(lj_zcb_dizhi.value) + '\\" \\"%1\\""');
        WGS_txt_wenbenchuanjian('Sku-' + lj_zcb_name.value + '注册表.reg', 'Windows Registry Editor Version 5.00\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + ']\n@="URL:' + 'Sku-' + lj_zcb_name.value + ' Protocol Handler"\n"URL Protocol"=""\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\DefaultIcon]\n@="' + escapeBackslash(lj_zcb_dizhi.value) + '"\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\shell]\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\shell\\open]\n[HKEY_CLASSES_ROOT\\' + 'Sku-' + lj_zcb_name.value + '\\shell\\open\\command]\n@="\\"' + escapeBackslash(lj_zcb_dizhi.value) + '\\" \\"%1\\""');

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

    } else if (isAlphaDash(lj_zcb_name.value) == false) {
        Sku_tctx('创建失败! 命名格式错误 或 其他原因');
    } else {
        Sku_tctx('创建失败! 路径格式错误 或 其他原因');
    }
});

var ls_zcb_kjj = document.querySelector('.ls_zcb_kjj');
ls_zcb_kjj.addEventListener('click', function(e) {
    document.querySelector('.top_dhl').querySelectorAll('div')[3].click();
    document.querySelector('.shezhi_lszcb').click();
});




//全局事件
dhr_xg_tj = document.querySelector('.dhr_xg_tj');
dhr_shezhi_gn = document.querySelector('.dhr_shezhi_gn');
nrmaxs1 = document.querySelector('.nrmaxs1');
//全局右击事件
document.addEventListener('contextmenu', function() {
    dhr_shezhi_gn.style.display = 'none';
    ycgn_dhr_xgk();
    ycgn_lj_xgk();
    lj_zcb_ym_sc();
});
//全局左击事件
document.addEventListener('click', function() {
    dhr_shezhi_gn.style.display = 'none';
    ycgn_dhr_xgk();
    ycgn_lj_xgk();
    lj_zcb_ym_sc();
});
//全局回车事件
document.addEventListener('keyup', function(e) {
    if (e.key == 'Enter') {
        dhr_xg_tj = document.querySelector('.dhr_xg_tj');
        if (dhr_xg_tj.style.display == 'block') {
            dhr_qrk.click();
        }
        if (lj_xg_tj.style.display == 'block') {
            if (lj_xg_tj_ipt_xzs == 0) {
                lj_srk_tpid.blur();
                lj_srk_mc.select();
            } else if (lj_xg_tj_ipt_xzs == 1) {
                lj_srk_mc.blur();
                lj_srk_zsm.select();
            } else if (lj_xg_tj_ipt_xzs == 2) {
                lj_srk_zsm.blur();
                lj_srk_wzid.select();
            } else if (lj_xg_tj_ipt_xzs == 3) {
                lj_srk_wzid.blur();
                lj_srk_xzid.select();
            } else if (lj_xg_tj_ipt_xzs == 4) {
                jl_qrk.click();
            }
        }
        if (lj_zcb_ym.style.display == 'block') {
            lj_zcb_qr.click();
        }
    }
    if (e.key == 'ArrowUp' || e.key == 'ArrowDown') {
        if (e.key == 'ArrowUp' && lj_xg_tj.style.display == 'block') {
            if (lj_xg_tj_ipt_xzs == 0) {
                lj_srk_tpid.blur();
                lj_srk_xzid.select();
            } else if (lj_xg_tj_ipt_xzs == 4) {
                lj_srk_xzid.blur();
                lj_srk_wzid.select();
            } else if (lj_xg_tj_ipt_xzs == 3) {
                lj_srk_wzid.blur();
                lj_srk_zsm.select();
            } else if (lj_xg_tj_ipt_xzs == 2) {
                lj_srk_zsm.blur();
                lj_srk_mc.select();
            } else if (lj_xg_tj_ipt_xzs == 1) {
                lj_srk_mc.blur();
                lj_srk_tpid.select();
            }
        }
        if (e.key == 'ArrowDown' && lj_xg_tj.style.display == 'block') {
            if (lj_xg_tj_ipt_xzs == 0) {
                lj_srk_tpid.blur();
                lj_srk_mc.select();
            } else if (lj_xg_tj_ipt_xzs == 1) {
                lj_srk_mc.blur();
                lj_srk_zsm.select();
            } else if (lj_xg_tj_ipt_xzs == 2) {
                lj_srk_zsm.blur();
                lj_srk_wzid.select();
            } else if (lj_xg_tj_ipt_xzs == 3) {
                lj_srk_wzid.blur();
                lj_srk_xzid.select();
            } else if (lj_xg_tj_ipt_xzs == 4) {
                lj_srk_mc.blur();
                lj_srk_tpid.select();
            }
        }
    }
    if (nrmaxs1.style.display == 'block') {
        if (e.key == '+') {
            dhr_shezhi_gn_tj.click();
        }
        if (e.key == 'Delete' && dhr_shezhi_gn_sc.style.display == 'block' && dhr_shezhi_gn.style.display == 'block') {
            dhr_shezhi_gn_sc.click();
        }
        if (e.key == 'F2' && dhr_shezhi_gn_cmm.style.display == 'block' && dhr_shezhi_gn.style.display == 'block') {
            dhr_shezhi_gn_cmm.click();
        }
    }
});