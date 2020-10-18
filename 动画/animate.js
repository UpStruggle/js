function animate(obj, target, callback) {
  //callback = function(){} 调用的时候 callback()
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    //步长值写到定时器里面
    //把步长值取成整数，往上取整Math.ceil()
    var step = (target - obj.offsetLeft) / 10;
    //考虑到可能会后退，会是负值，
    step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
      //回调函数写到定时器结束里面
      if (callback) {
        //调用函数
        callback();
      }
    }
    //把每次加1 这个步长值改为一个慢慢变小的值  步长公式：（目标值-现在的位置）/ 10
    obj.style.left = obj.offsetLeft + step + "px";
  }, 15);
}
