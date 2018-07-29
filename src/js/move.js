var timer,
    index = 0,
    box = allLi = document.querySelector('.lunbo ul'),
    allLi = document.querySelectorAll('.lunbo ul li'),
    num = document.querySelectorAll('.sliderIndex span');
    leftBtn = document.getElementsByClassName('leftBtn')[0];
    rightBtn = document.getElementsByClassName('rightBtn')[0];
    for(var i = 0; i < num.length; i++){
        num[i].index = i;
        num[i].onmouseover = function(){
            console.log(this.index);
            show(this.index);
        }
    }
    function show(val){
        index = val;
        for(var i = 0; i < allLi.length; i++){
          //   当前图片显示的时候所有图片都不显示 
            allLi[i].style.opacity = 0;
            num[i].className = '';
            num[i].style.backgroundColor = '#fff';
        }
        allLi[val].style.opacity = 1;
        num[val].style.backgroundColor='red';
      }
      function autoplay(){
        times = setInterval(function(){
            // 索引自增
            index ++;
            if(index > allLi.length - 1){
                index = 0;
            }
            show(index);
        },2000)
    }
    autoplay();
    // 鼠标移入 onmouseenter onmouseover
    box.onmouseenter = function(){
        clearInterval(times);
    }
    box.onmouseleave = function(){
        autoplay();
    }
    //左
    leftBtn.addEventListener('click',function(){
        if(index >0){
            index--;
        }else{
            index = 6;
        }
        show(index);
    })
    //右
    rightBtn.addEventListener('click',function(){
        if(index < 7){
            index++;
        }else{
            index = 0;
        }
        show(index)
    })