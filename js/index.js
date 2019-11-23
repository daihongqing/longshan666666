


window.onload = function() {
   var flag = 1;
   var main18 = document.getElementById('main18');
   main18.onclick = function() {
     if (flag == 1) {
    
       main7.style.transition = '-webkit-transform 1.5s';
       main7.style.transform = 'rotate(-60deg)';
       main6.style.transition = '-webkit-transform 1.5s';
       main6.style.transform = 'rotate(-40deg)';
       main5.style.transition = '-webkit-transform 1.5s';
       main5.style.transform = 'rotate(-20deg)';
       main4.style.transition = '-webkit-transform 1.5s';
       main4.style.transform = 'rotate(0deg)';
       main3.style.transition = '-webkit-transform 1.5s';
       main3.style.transform = 'rotate(20deg)';
       main2.style.transition = '-webkit-transform 1.5s';
       main2.style.transform = 'rotate(40deg)';
       main1.style.transition = '-webkit-transform 1.5s';
       main1.style.transform = 'rotate(60deg)';
       flag = 0;
     } else if (flag == 0) {
    
       main7.style.transition = '-webkit-transform 1.5s';
       main7.style.transform = 'rotate(0deg)';
       main6.style.transition = '-webkit-transform 1.5s';
       main6.style.transform = 'rotate(0deg)';
       main5.style.transition = '-webkit-transform 1.5s';
       main5.style.transform = 'rotate(0deg)';
       main4.style.transition = '-webkit-transform 1.5s';
       main4.style.transform = 'rotate(0deg)';
       main3.style.transition = '-webkit-transform 1.5s';
       main3.style.transform = 'rotate(0deg)';
       main2.style.transition = '-webkit-transform 1.5s';
       main2.style.transform = 'rotate(0deg)';
       main1.style.transition = '-webkit-transform 1.5s';
       main1.style.transform = 'rotate(0deg)';
       flag = 1;
     }
   }
 }

 function doce(fn, wait) {
   let timer = null
   wait = wait || 500;
   return function () {
       clearTimeout(timer)
       timer = setTimeout(() => {
           fn.call(this, ...arguments)//保证this执行 和参数的传递
       }, wait)
   }
}
function throttle(fn, wait) {
   var flag = true;
   return function () {
       if (!flag) return
       setTimeout(() => {
           flag = true;
           fn.call(this, ...arguments)
       }, wait)
   }
}
 function black1(id) {
   let $bigDiv = $(id);
   console.log($bigDiv);

   // $mask = $bigDiv.find('.solide_mask')
   // console.log($mask);

   $bigDiv.on('mouseenter', throttle(function (e) {
       // if (e.target!==this) {
       //     return
       // }
      //  e.stopPropagation()
      $(this).find('h1').css({   transform: 'translateY(0px)',opacity:'1'})
   
       let $mask = $(this).find('.mask').eq(0)
       $mask.css({ opacity:'0.98' },300)
       var e = e || window.event
       var target = $bigDiv[0]
       //获取鼠标x,y坐标
       var x = e.pageX
       var y = e.pageY

       //获取图片距离浏览器位置
       var t = $bigDiv.offset().top
       var b = t + target.offsetHeight
       var l = $bigDiv.offset().left
       var r = l + target.offsetWidth

       //获取鼠标与图片距离浏览器位置的差值（注意有负值，需要绝对值 Math.abs）
       var chaYT = Math.abs(y - t)
       var chaYB = Math.abs(y - b)
       var chaXL = Math.abs(x - l)
       var chaXR = Math.abs(x - r)
       //取得最小值
       
       var min = Math.min(chaYT, chaYB, chaXL, chaXR)
       let boxT = $bigDiv[0].clientHeight
       let boxW = $bigDiv[0].clientWidth
      
       switch (min) {
           case chaYT: //上
               
               $mask.css({ top: -boxT + 'px', left: '0' }).animate({ top: 0, left: 0 }, 250)
               break;

           case chaYB://下
               $mask.css({ top: boxT + 'px', left: '0' }).animate({ top: 0, left: 0 }, 250)
               break;
           case chaXL://左
               $mask.css({ top: 0, left: -boxW + 'px' }).animate({ top: 0, left: 0 }, 250)
               break;

           case chaXR://右
               $mask.css({ top: 0, left: boxW + 'px' }).animate({ top: 0, left: 0 }, 250)
               break;
       }
   }, wait = 10))



   $bigDiv.on('mouseleave', throttle(function (e) {
       // if (e.target!==this) {
       //     return
       // }
       $(this).find('h1').css({   transform: 'translateY(-80px)',opacity:'0'})
      //  e.stopPropagation()
       let $mask = $(this).find('.mask')
       var e = e || window.event
       var target = $(this)[0]
      
       
       //获取鼠标x,y坐标
       var x = e.pageX
       var y = e.pageY

       //获取图片距离浏览器位置
       var t = $(this).offset().top
       var b = t + target.offsetHeight
       var l = $(this).offset().left
       var r = l + target.offsetWidth

       //获取鼠标与图片距离浏览器位置的差值（注意有负值，需要绝对值 Math.abs）
       var chaYT = Math.abs(y - t)
       var chaYB = Math.abs(y - b)
       var chaXL = Math.abs(x - l)
       var chaXR = Math.abs(x - r)
       //取得最小值
       var min = Math.min(chaYT, chaYB, chaXL, chaXR)
       $mask.hide()
       let boxT = $(this)[0].clientHeight
       let boxW = $(this)[0].clientWidth
       $mask.show()
       switch (min) {

           case chaYT: //上
             
               $mask.animate({ top: -boxT + 'px', left: 0 }, 250)

               break;

           case chaYB://下

               $mask.animate({ top: boxT + 'px', left: 0 }, 250)

               break;
           case chaXL://左

               $mask.animate({ top: 0, left: -boxW + 'px' }, 250)

               break;

           case chaXR://右

               $mask.animate({ top: 0, left: boxW + 'px' }, 250)
               break;
       }

   }, wait = 10))

}
black1('.pic1')
black1('.pic2')
black1('.pic3')
black1('.pic4')

// $(function(){
//    let $oDiv=$('.characteritic div')
//    let $h1=$('.characteritic h1')
//    $oDiv.on('mouseenter',function (){
//       $(this).find('h1').css({   transform: 'translateY(0px)',opacity:'1'})
//    })
//    $oDiv.on('mouseleave',function (){
     
//    })
// })






