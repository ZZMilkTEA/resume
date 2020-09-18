//----------------------------------Init Swiper-------------------------------------
var mainSwiper = new Swiper('#main-swiper', {
    autoplay: false,//可选选项，自动滑动
    direction: 'vertical',
    speed: 1000,
    setWrapperSize :true,
    autoHeight: true,
    mousewheel: {
        releaseOnEdges: true,
        thresholdTime: 1200,
      },
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        //   },
        renderBullet: function (index, className) {
            switch(index){
              case 0:text='关于我';break;
              case 1:text='求职意向';break;
              case 2:text='我的技能';break;
              case 3:text='我的项目';break;
              case 4:text='我的兴趣';break;
            }
            return '<span class="' + className + '">' + text + '</span>';
        },
        bulletClass : 'my-bullet',  
        bulletActiveClass: 'my-bullet-active',
    },
})

var mySkillsSwiper = new Swiper('#swiper-container-my-skills',{//子swiper
    direction: 'vertical',
    nested:true,
    //resistanceRatio: 0,
    slidesPerView: 'auto',
    freeMode: true,
    mousewheel: {
        releaseOnEdges: true,
        thresholdTime: 1200,
      },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  var myProjectsSwiper = new Swiper('#swiper-container-my-projects',{//子swiper
    direction: 'vertical',
    nested:true,
    //resistanceRatio: 0,
    slidesPerView: 'auto',
    freeMode: true,
    mousewheel: {
        releaseOnEdges: true,
        thresholdTime: 1200,
      },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
//--------------------------------以下设置鼠标事件触发条件---------------------
// let swiperCallback = function(entries, observer) {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             mainSwiper.mousewheel.enable();
//         } else {
//             mainSwiper.mousewheel.disable();
//         }
//       });
// }
// let swiperScrollObserverOptions = {
//     rootMargin: '10px 0px 10px 0px',
// }

// let swiperScrollObserver = new IntersectionObserver(swiperCallback,swiperScrollObserverOptions);
// let mySwiperDOM = mainSwiper.el;
// console.log(mySwiperDOM);
// animatedScrollObserver.observe(mySwiperDOM);