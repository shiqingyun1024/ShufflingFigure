
window.onload = function(){
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var slide = document.getElementById("slide");
    var lis = slide.children[0].children;
    var as = arrow.children;
    var flag = true;
    //alert(lis.length);
    wrap.onmouseover = function(){
        animate(arrow,{opacity:100});
    }
    wrap.onmouseout = function(){
        animate(arrow,{opacity:0});
    }
    //  存储了每个图片的信息
    var json = [//json的另外一种声明，数组声明，第一种声明是对象声明var json = {width：100，height：200}
        {   //  1
            width:200,//输出的方式是json[i].width，这个和遍历json[k]输出的值很像,,对象声明方式的输出是json.width
            top:10,
            left:210,
            opacity:20,
            z:2
        },
        {   //  2
            width:300,
            top:25,
            left:130,
            opacity:40,
            z:3
        },
        {   //  3
            width:400,
            top:40,
            left:50,
            opacity:60,
            z:4
        },
        {  // 4
            width:600,
            top:70,
            left:0,
            opacity:80,
            z:5
        },
        {   // 5
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:6
        },
        {  // 6
            width:600,
            top:70,
            left:600,
            opacity:80,
            z:5
        },
        {   //7
            width:400,
            top:40,
            left:750,
            opacity:60,
            z:4
        },
        {   //8
            width:300,
            top:25,
            left:770,
            opacity:40,
            z:3
        },
        {   //9
            width:200,
            top:10,
            left:790,
            opacity:20,
            z:2
        }
    ];
    var jieliu = true;//利用节流函数法来进行限定只有一张图片走到位了，才能点击，走到下一张
    change();
    for(var k in as){//用for in进行遍历数组，console.log(k)输出的是这个数组的索引号，console.log(as[k])输出的是数值
        //console.log(k);
        //console.log(as[k]);
        as[k].onclick = function(){
            if(this.className == "prev" )
            {
                //alert("左侧");左侧是位置向上动，即第一个跑到最后一个，判断的关键是图片不动，是位置一直在变动，即
            // lis[i]这个是不变的，而是json[i]一直在变，记住是json[i]一直在变，把位置赋予图片，图片的索引号不变
                if(jieliu == true)
                {
                    change(true);
                    jieliu = false;
                }
            }
            else
            {
                //alert("右侧");
                if(jieliu == true)
                {
                    change(false);
                    jieliu = false;
                }
            }
        }
    }
    function change(flag){//用flag的true和false来判断
        if(flag)//即flag=true
        {
            json.push(json.shift());
        }
        else
        {
            json.unshift(json.pop());
        }
        for(var i = 0;i < json.length;i++)
        {
            animate(lis[i],{//width:json[i].width,json的另外一种声明，数组声明
                width:json[i].width,
                top:json[i].top,
                left:json[i].left,
                opacity:json[i].opacity,
                zIndex:json[i].z
            },function(){jieliu = true;})//添加回调函数
        }
    }













}