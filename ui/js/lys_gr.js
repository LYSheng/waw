var lysTxmask=$(".lys_txmask");
var lysTxlei=$(".lys_txlei")[0];
console.log(lysTxlei)
var lysTxul=$('.lys_txul');
var lysTxlis=$('.lys_txlis',lysTxul);
var lysTxulHig=lysTxul.height();
console.log(lysTxlis)
lysTxlei.addEventListener('touchstart',function(e){

    lysTxul.css({transition:'transform 1s .2s'})
    lysTxmask.css({transition:'opacity .2s'});
    lysTxmask.css({opacity: 1,zIndex: 1});
    lysTxul.css({transform: 'translateY(0)'})
},false)
lysTxlis[3].addEventListener('touchstart',function(e){
    lysTxul.css({transition:'transform .5s'})
    lysTxmask.css({transition:'opacity .5s'});
    lysTxmask.css({opacity: 0,zIndex: -1});
    lysTxul.css({transform: 'translateY(100%)'})
},false)

//昵称正则
 var lysNctext=$(".lys_nctext")[0];

var reg=/^[\u4e00-\u9fa5a-z0-9]{4,30}$/;
var lysNcbox=$('.lys_ncbox');
var userm=$('span',lysNcbox);
console.log(userm)
var flagu=true;
lysNctext.onblur=function() {
    var lysNctextval=lysNctext.value.trim();
    if (reg.test(lysNctextval)) {
        flagu = true;
    } else {
        flagu = false;
        userm.css({opacity : '1'})
        setTimeout(function () {
            userm.css({opacity : '0'})
        }, 2000)
        return;
    }
}

//昵称显示
var lysNcchu=$('.lys_ncchuss')[0];
var lysMask=$('.lys_mask');
var lysQx=$('.lys_qx')[0];
var lysQd=$('.lys_qd')[0];
console.log(lysNcchu)
lysMask.css({transform:'translateX(100%)'})
lysNcchu.addEventListener('touchstart',function(e){
    lysMask.css({transition:'transform 1s'})
    lysMask.css({transform:'translateX(0)'})
},false)
// lysQd.addEventListener('touchstart',function(e){
//     lysMask.css({transition:'transform 1s'})
//     lysMask.css({transform:'translateX(100%)'})
// },false)
lysQx.addEventListener('touchstart',function(e){
    lysMask.css({transition:'transform 1s'})
    lysMask.css({transform:'translateX(100%)'})
},false)

// 删除

