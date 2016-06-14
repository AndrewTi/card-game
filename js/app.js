    var table = document.getElementsByTagName("table")[0];
    var select;
    var arrImg;
    var imgSrc = {
        1 : "https://goo.gl/qj0ksu",
        2 : "https://goo.gl/Uz5j6c",
        3 : "http://goo.gl/7F1Fx2",
        4 : "http://goo.gl/L11FEv",
        5 : "http://vermilion1.github.io/presentations/grunt/images/grunt-logo.png",
        6 : "https://goo.gl/zutVUl",
        7 : "https://goo.gl/YkorhO"
    };

    function checkImgSrc(elem) {
        var attSrc = elem.getAttribute("src");
        var count = 0;
        var countSelect = 1;
        var arrElem = [];
        var leng = arrImg.length;
        var lengt;

        if(select) {
            if(select.getAttribute("src") !== elem.getAttribute("src")){
                return false;
            }
        }else {
            select = elem;
        }

        for(var i = 0; i < leng; i++) {

            if(arrImg[i].getAttribute("src") == attSrc){
                count++;
                arrElem.push(arrImg[i]);
            };
        };

        for(var k = 0, lengt = arrElem.length; k < lengt; k++) {
            if(arrElem[k].getAttribute("select") == "true") {
                countSelect++;
            }
        }

        if(lengt == countSelect) select = null;

        console.log([count, countSelect]);
        return true;
    };

    function selectEl() {
        var elem = this.firstElementChild;
        var elemAttr = elem.getAttribute("select");

        if(!elemAttr) {
            if(!checkImgSrc(elem)) return false;

            elem.style = "opacity: 1";
            elem.setAttribute("select","true");
        };
    };


    function startGame() {
        select = false;
        var arrChild = table.children;

        if(arrChild) {
            for(var j = 0, le = arrChild.length; j < le; j++) {
                table.removeChild(table.firstChild);
            };
        };
        console.log("try");
        for(var i = 0; i < 4; i++) {
            console.log("try");
            var tr = document.createElement("tr");
            for(var k = 0; k < 4; k++) {
                var td = document.createElement("td");
                var img = document.createElement("img");

                img.setAttribute("src", imgSrc[_.random(1,7)]);
                td.addEventListener("click", selectEl);
                td.appendChild(img);
                tr.appendChild(td);

            };
            table.appendChild(tr);
        };
        console.log("asdasd");
        arrImg = document.getElementsByTagName("img");

        setTimeout(function() {

            for(var g = 0, leng = arrImg.length; g < leng; g++) {
                arrImg[g].style = "opacity: 0";
            };

        },2500)
    };

    document.getElementById("click").addEventListener("click", startGame);