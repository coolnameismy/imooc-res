'use strict';

console.log('Popup');


var _makrs = [];

chrome.bookmarks.getTree(function(result){
	console.log(result);
	organize(result[0])
});

var organize = function(obj){
	if (obj.hasOwnProperty('children')) {
		obj.children.map(function(item,index){
			organize(item);
		});
	} 
	//是书签页
	else{
		_makrs.push(obj);
	}
}


//搜索框文字变化时间
$("#search-input").keyup(function(){
    //$("#s-box").hide("slow");
    var text = $("#search-input").val().toLowerCase();
    //console.log(text);

    if(text.length > 2 || text == "" || text==undefined ){
        return;
    }
	
	$(".result").html("");

    _makrs.map(function(item){
    	if (item.title.indexOf(text) != -1) {
    		var html = "<li>" + item.title + "</li>"
    		$(".result").append(html); //移动到外层效率更高
    	}
    });


   

    //     $("#pl__container a").hide();
    //     $(".pl__title").each(function(){
    //         var htmlstr = $(this).html().toLowerCase();
    //         if(htmlstr.indexOf(text) != -1){
    //             console.log(htmlstr);
    //             $(this).parent().show();
    //         }
    //     })
    // }
 

})

 


//优化方案
// 1：缓存结果
// 2：根据用户的markbook数据做性能优化
// 3: 加入网站匹配
// 4：关键字拆开匹配等更灵活的匹配规则。。。
// 5:提高查询效率，先便利取结果，再查询


  