'use strict';

console.log('\'Allo \'Allo! Popup');



var greeting = "您好，";
var button = document.getElementById("mybutton");
button.person_name = "Bob";
button.addEventListener("click", function() {
  console.log(greeting + button.person_name + "。aaa");	
  chrome.bookmarks.create({'parentId': bookmarkBar.id,
                               'title': '扩展程序书签'},
                              function(newFolder) {
        console.log("已添加文件夹：" + newFolder.title);
      });
}, false);
