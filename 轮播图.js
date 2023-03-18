window.addEventListener('load', function () {
    var main = document.querySelector('.main');
    var lt = document.querySelector('.lt');
    var rt = document.querySelector('.rt');
    var ul = main.querySelector('ul');
    var ol = main.querySelector('ol');
    var mainWidth = main.offsetWidth;

    main.addEventListener('mouseenter', function () {
        lt.style.display = 'block';
        rt.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    main.addEventListener('mouseleave', function () {
        lt.style.display = 'none';
        rt.style.display = 'none';
        timer = setInterval(function () {
            rt.click();
        }, 2000);
    })
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * mainWidth)

        })
    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var circle = 0;
    var num = 0;
    var flag = true;
    rt.addEventListener('click', function () {
        if (flag) {
            flag = false;

            if (num == ul.children.length - 1) {
                ul.style.left = 0
                num = 0;
            }
            num++;
            animate(ul, -num * mainWidth, function () {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();

        }
    })
    lt.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = num * mainWidth + 'px';

            }
            num--;
            animate(ul, -num * mainWidth, function () {
                flag = true;
            });
            circle--;
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange();

        }
    })
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function () {
        //手动调用点击事件
        rt.click();
    }, 2000);
})