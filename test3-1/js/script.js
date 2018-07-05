window.onload = function () {
	var search = document.getElementById('search');
	var searchBtn = search.getElementsByTagName('button');
	var blu = document.getElementById('banner-list-ul');
	var bl = blu.getElementsByTagName('a');
	var clu = document.getElementsByClassName('category-list-ul');
	var pc = document.getElementById('page-checked');
	var btn = pc.getElementsByTagName('li');
	var hot = document.getElementById('hot');
	var hotLi = hot.getElementsByTagName('li');

	//banner搜索框按钮点击效果 
	for (var i = 0; i < searchBtn.length; i++) {
		(function(i) {
			searchBtn[i].onclick = function () {
				// 改变url中search
				location.href = location.origin + location.pathname + '?' + funcUrl (searchBtn[i].parentNode.getAttribute("name"), searchBtn[i].getAttribute("value"), 1);
			};
		})(i);
	}

	//banner搜索框按钮点击效果 
	for (var i = 0; i < hotLi.length; i++) {
		(function(i) {
			hotLi[i].onclick = function () {
				// 改变url中search
				location.href = location.origin + location.pathname + '?' + funcUrl (hotLi[i].parentNode.getAttribute("name"), hotLi[i].getAttribute("value"), 1);
			};
		})(i);
	}

	//banner点击效果 
	for (var i = 0; i < bl.length; i++) {
		(function(i) {
			bl[i].onclick = function () {
				for (var j = 0; j < bl.length; j++) {
					bl[j].className = "";
				}
				this.className = "banner-checked";

				// 改变url中search
				location.href = location.origin + location.pathname + '?' + funcUrl (bl[i].parentNode.parentNode.getAttribute("name"), bl[i].getAttribute("value"), 1);
			};
		})(i);
	}
                                
	// category点击效果 
	for (var i = 0; i < clu.length; i++) {
		(function(i){
			var cl = clu[i].getElementsByTagName('li');
			for (var j = 0; j < cl.length; j++) {
				(function(j){
					cl[j].onclick = function () {
						for (var k = 0; k < cl.length; k++) {
							cl[k].className = "";
						}
						this.className = "category-checked";

						// 改变url中search
						location.href = location.origin + location.pathname + '?' + funcUrl (cl[j].parentNode.getAttribute("name"), cl[j].getAttribute("value"), 1);
					};
				})(j);
			}
		})(i);
	}

	//page-button点击效果 
	for (var i = 0; i < btn.length; i++) {		
			(function(i) {
				btn[i].onclick = function () {
						for (var j = 1; j < btn.length-1; j++) {
							(function(j) {
								btn[j].firstChild.className = "";
							})(j);
						}
						this.firstChild.className = "btn-checked";

					// 改变url中search
					location.href = location.origin + location.pathname + '?' + funcUrl (btn[i].parentNode.getAttribute("name"), btn[i].getAttribute("value"), 1);
				};
			})(i);	
	}

	function funcUrl(name,value,type){
    var loca = window.location;
    var baseUrl = type==undefined ? loca.origin + loca.pathname + "?" : "";
    var query = loca.search.substr(1);
    // 如果没有传参,就返回 search 值 不包含问号
    if (name==undefined) { return query }
    // 如果没有传值,就返回要查询的参数的值
    if (value==undefined){
        var val = query.match(new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"));
        return val!=null ? decodeURI(val[2]) : null;
    };
    var url;
    if (query=="") {
        // 如果没有 search 值,则返回追加了参数的 url
        url = baseUrl + name + "=" + value;
    }else{
        // 如果有 search 值,则在其中修改对应的值,并且去重,最后返回 url
        var obj = {};
        var arr = query.split("&");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split("=");
            obj[arr[i][0]] = arr[i][1];
        };
        obj[name] = value;
        url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
    };
    return url;
}
};