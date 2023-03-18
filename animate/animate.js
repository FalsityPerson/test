// 简单动画函数封装obj目标对象，target目标位置，callback回调函数

//匀速动画 给盒子当前的位置＋固定移动的值

//缓动动画思路：
//1.让盒子每次移动距离慢慢变小，速度会慢慢落下来。
//2.缓动动画 核心算法步长：（目标值-现在的位置）/10
//3.停止条件是:让当前盒子位置等于目标位置就停止定时器


function animate(obj, target, callback) {

    //清除之前的定时器，同一时间仅有一个定时器
    clearInterval(obj.timer);
    //给不同的元素指定不同的定时器
    obj.timer = setInterval(function () {

        var step = (target - obj.offsetLeft) / 10;
        //step>0向上取整 math.ceil；step<0向下取整math.floor
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            //停止动画，本质停止定时器
            clearInterval(obj.timer);
            //回调函数写到定时器结束位置,判断是否有回调函数

            // if (callback) {
            //     //调用函数
            //     callback();

            // }

            //&&短路运算符，双真才触发
            callback && callback();
        }
        //把每次加1 ，这个步长值改为一个变量，步长公式（目标值-现在的位置）/10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}