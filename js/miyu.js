function unable_select(){$(document).bind("selectstart",function(){return!1})}function vertical_center(a){var b=$(window).height(),c=$(a).height(),d=$("#nav").height();b-d>=c?$(a).css("margin-top",(b-d-c)/2+d):$(a).css("margin-top",d),$(window).resize(function(){var b=$(window).height(),c=$(a).height(),d=$("#nav").height();b-d>=c?$(a).css("margin-top",(b-d-c)/2+d):$(a).css("margin-top",d)})}function desks(){var a;localStorage.desks?(a=get_desks_num(),load_desks(a)):(localStorage.desks="3",a=get_desks_num(),load_desks(a))}function get_desks_num(){var a=localStorage.desks;return a=parseInt(a)}function load_desks(a){var b=$("#main").width(),c=a*b,d=-((a-1)/2)*b;960==b&&$("#pointing").css("width",40*a),b>1e3&&$("#pointing").css("width",55*a),$("#slide").css("width",c),$("#slide").css("margin-left",d),3==a&&($("#slide").append('<div class="desks" id="desk2"><div class="desk_in" id="desk_in2" desk="2"><div class="outico" id="add2"><div class="add" addto="2"></div></div></div></div>'),$("#slide").append('<div class="desks" id="desk1"><div class="desk_in" id="desk_in1" desk="1"><div class="outico" id="add1"><div class="add" addto="1"></div></div></div></div>'),$("#slide").append('<div class="desks" id="desk3"><div class="desk_in" id="desk_in3" desk="3"><div class="outico" id="add3"><div class="add" addto="3"></div></div></div></div>'),$("#pointing").append('<div class="radius"  desk="2" id="radius2"></div>'),$("#pointing").append('<div class="radius"  desk="1" style="background-color:rgba(0,0,0,0.9)" id="radius1"></div>'),$("#pointing").append('<div class="radius"  desk="3" id="radius3"></div>')),5==a&&($("#slide").append('<div class="desks" id="desk4"><div class="desk_in" id="desk_in4" desk="4"><div class="outico" id="add4"><div class="add" addto="4"></div></div></div></div>'),$("#slide").append('<div class="desks" id="desk2"><div class="desk_in" id="desk_in2" desk="2"><div class="outico" id="add2"><div class="add" addto="2"></div></div></div></div>'),$("#slide").append('<div class="desks" id="desk1"><div class="desk_in" id="desk_in1" desk="1"><div class="outico" id="add1"><div class="add" addto="1"></div></div></div></div>'),$("#slide").append('<div class="desks" id="desk3"><div class="desk_in" id="desk_in3" desk="3"><div class="outico" id="add3"><div class="add" addto="3"></div></div></div></div>'),$("#slide").append('<div class="desks" id="desk5"><div class="desk_in" id="desk_in5" desk="5"><div class="outico" id="add5"><div class="add" addto="5"></div></div></div></div>'),$("#pointing").append('<div class="radius"  desk="4" id="radius4"></div>'),$("#pointing").append('<div class="radius"  desk="2" id="radius2"></div>'),$("#pointing").append('<div class="radius"  desk="1" style="background-color:rgba(0,0,0,0.9)" id="radius1"></div>'),$("#pointing").append('<div class="radius"  desk="3" id="radius3"></div>'),$("#pointing").append('<div class="radius"  desk="5" id="radius5"></div>')),$(document).mousedown(function(b){var c,d,e;"radius"==b.target.className&&(c=b.target,d=$(c).attr("desk"),d=parseInt(d),e=trans_margin(a,d),slide_to(e,420),$("#set").attr("desk",d),$(".radius").css("background-color","rgba( 50,50,50,0.6)"),$(c).css("background-color","rgba( 0,0,0,0.9)"))})}function load_ico(){var a,b;if(localStorage.desk1)for(a=get_desks_num(),b=1;a>=b;b++)load_icox(b);else localStorage.desk1='{"site":[{"name":"淘宝特卖","url":"http://www.taobao.com/go/chn/tbk_channel/channelcode.php?pid=mm_29924319_3495625_11460798&eventid=101329","icoid":"0","type":"4","img":"ico/1.png","bgcolor":""},{"name":"天猫商城","url":"http://s.click.taobao.com/t_9?p=mm_29924319_0_0&l=http%3A%2F%2Fwww.tmall.com","icoid":"1","type":"4","img":"ico/2.png","bgcolor":""},{"name":"京东商城","url":"http://www.jd.com","icoid":"2","type":"1","img":"ico/3.png","bgcolor":""},{"name":"chrome应用商店","url":"https://chrome.google.com/webstore/category/home?utm_source=chrome-ntp-icon","icoid":"","type":"1","img":"ico/103.png","bgcolor":""},{"name":"人人网","url":"http://www.renren.com","icoid":"","type":"1","img":"ico/38.png","bgcolor":""},{"name":"爱奇艺","url":"http://www.iqiyi.com","icoid":"","type":"1","img":"ico/59.png","bgcolor":""},{"name":"新浪微博","url":"http://weibo.com","icoid":"5","type":"1","img":"ico/6.png","bgcolor":""},{"name":"支付宝","url":"http://www.alipay.com","icoid":"6","type":"1","img":"ico/7.png","bgcolor":""},{"name":"QQ空间","url":"http://qzone.qq.com","icoid":"8","type":"1","img":"ico/9.png","bgcolor":""},{"name":"去哪儿网","url":"http://www.qunar.com/","icoid":"9","type":"1","img":"ico/10.png","bgcolor":""},{"name":"网易","url":"http://www.163.com","icoid":"","type":"1","img":"ico/5.png","bgcolor":""},{"name":"愤怒的小鸟","url":"http://f3.doyo.cn/flash/swf/85/96a40a32fe64633f8078.swf","icoid":"","type":"1","img":"ico/68.png","bgcolor":""}',localStorage.desk2='{"site":[',localStorage.desk3='{"site":[',localStorage.desk4='{"site":[',localStorage.desk5='{"site":[',load_icox(1)}function load_icox(a){var c,d,b=localStorage["desk"+a];if(b+="]}",b.length>18)for(b=JSON.parse(b),c=b.site.length,d=0;c>d;d++)"0"==b.site[d].type&&$("#add"+a).before('<div class="outico"><div class="ico" draggable="true" style="background-image:url('+b.site[d].img+");background-color:"+b.site[d].bgcolor+';" type="'+b.site[d].type+'"  url="'+b.site[d].url+'" icoid="'+b.site[d].icoid+'"><span class="theiconame">'+b.site[d].name+"</span></div></div>"),("1"==b.site[d].type||"4"==b.site[d].type)&&$("#add"+a).before('<div class="outico"><div class="ico" draggable="true" style="background-image:url('+b.site[d].img+");background-color:"+b.site[d].bgcolor+';" type="'+b.site[d].type+'" url="'+b.site[d].url+'" icoid="'+b.site[d].icoid+'"></div></div>'),"2"==b.site[d].type&&$("#add"+a).before('<div class="outico"><div class="ico" draggable="true" style="background-image:url('+b.site[d].img+");background-color:"+b.site[d].bgcolor+";background-size:"+b.site[d].bgsize+";background-position:"+b.site[d].bgposition+'" type="'+b.site[d].type+'" url="'+b.site[d].url+'" icoid="'+b.site[d].icoid+'"><span class="theappname">'+b.site[d].name+"</span></div></div>")}function trans_margin(a,b){var c=$("#main").width();if(3==a)switch(b){case 1:return-c;case 2:return 0;case 3:return-2*c}if(5==a)switch(b){case 1:return-2*c;case 2:return-c;case 3:return-3*c;case 4:return 0;case 5:return-4*c}}function slide_to(a,b){$("#slide").animate({marginLeft:a+"px"},{queue:!1,duration:b,easing:"easeOutBack"})}function left_slide(a){var c,d,b=$("#main").width();return b=parseInt(b),c=$("#slide").css("margin-left"),c=parseInt(c),d=.16*b,0>c?(c+=b,$("#slide").animate({marginLeft:c+"px"},{queue:!1,duration:a,easing:"easeOutBack"}),c):($("#slide").animate({marginLeft:d+"px"},150),$("#slide").animate({marginLeft:"0px"},150),c)}function righ_slide(a){var c,d,e,f,b=$("#main").width();return b=parseInt(b),c=$("#slide").css("margin-left"),c=parseInt(c),d=.16*b,e=get_desks_num(),f=-(e-1)*b,c>f?(c-=b,$("#slide").animate({marginLeft:c+"px"},{queue:!1,duration:a,easing:"easeOutBack"}),c):($("#slide").animate({marginLeft:f-d+"px"},150),$("#slide").animate({marginLeft:f+"px"},150),c)}function slide(a){$("#left_button").mousedown(function(){if("0"==hideico)return!1;$("#slide").stop(!0,!0);var b=left_slide(a);point_slide(b)}),$("#righ_button").mousedown(function(){if("0"==hideico)return!1;$("#slide").stop(!0,!0);var b=righ_slide(a);point_slide(b)}),$(document).mousewheel(function(b,c){var d;if("0"==hideico)return!1;if("false"==lock){if($("#slide").is(":animated"))return!1;0>c?($("#slide").stop(!1,!0),d=righ_slide(a),point_slide(d)):($("#slide").stop(!1,!0),d=left_slide(a),point_slide(d))}}),$(document).keydown(function(a){var d,b=$("#searchinput").attr("f"),c=$("#searchinput").val();if(0==b||1==b&&0==c.length){if($("#slide").is(":animated"))return!1;if(37==a.which){if("0"==hideico)return!1;$("#slide").stop(!0,!0),d=left_slide(c),point_slide(d)}if(39==a.which){if("0"==hideico)return!1;$("#slide").stop(!0,!0),d=righ_slide(c),point_slide(d)}}})}function margin_to_desk(a){var b=get_desks_num(),c=$("#main").width();if(c=parseInt(c),3==b)switch(a){case 0:return 2;case-c:return 1;case-2*c:return 3}if(5==b)switch(a){case 0:return 4;case-c:return 2;case-2*c:return 1;case-3*c:return 3;case-4*c:return 5}}function point_slide(a){var b=margin_to_desk(a);$("#set").attr("desk",b),$(".radius").css("background-color","rgba( 50,50,50,0.6)"),$("#radius"+b).css("background-color","rgba( 0,0,0,0.9)")}function launch(a){$(document).click(function(b){var c,d,e,f,g,h,i,j;1==b.which&&("ico"==b.target.className&&(c=b.target),"theiconame"==b.target.className&&(c=b.target.parentNode),"theappname"==b.target.className&&(c=b.target.parentNode),d=$(c).css("width"),d=parseInt(d),e=$(c).css("height"),e=parseInt(e),f=$("#main").width(),f=parseInt(f),960==f?(g=9,h=5,i=38,j=34):(g=13,h=7,i=51,j=46),"2"==$(c).attr("type")?($(c).animate({width:.9*d+"px",height:.9*e+"px",marginLeft:g+"px",marginTop:h+"px",fontSize:j+"px",backgroundSize:"72px"},a),$(c).animate({width:d+"px",height:e+"px",marginLeft:"0",marginTop:"0",fontSize:i+"px",backgroundSize:"80px"},a,function(){$(c).css({width:"",height:""});var a=$(c).attr("url");window.open(a,sitetarget)})):($(c).animate({width:.9*d+"px",height:.9*e+"px",marginLeft:g+"px",marginTop:h+"px",fontSize:j+"px"},a),$(c).animate({width:d+"px",height:e+"px",marginLeft:"0",marginTop:"0",fontSize:i+"px"},a,function(){$(c).css({width:"",height:""});var a=$(c).attr("url");window.open(a,sitetarget)})))})}function select_zoom(a){$(document).mousedown(function(b){var c,d,e;"icoset"==b.target.className&&(c=b.target,d=12,e=10,$(c).animate({width:"164px",height:"82px",marginLeft:"13px",marginTop:"7px",fontSize:d+"px"},a),$(c).animate({width:"184px",height:"92px",marginLeft:"0",marginTop:"0",fontSize:e+"px"},a,function(){$(".icoset").css({"border-color":"","border-width":""}),$(".icoset").html(""),$(c).css({"border-color":"rgba(131, 168, 11,1)","border-width":"5px"}),$(c).html('<img src="ico/check.png" />');var a=$(c).attr("value");$("#set").attr("addvalue",a)}))})}function demo_zoom(a){$("#icodemo").mousedown(function(b){var d,e,f,g;b.target,d=13,e=7,f=34,g=38,$("#icodemo").animate({width:"164px",height:"82px",marginLeft:d+"px",marginTop:e+"px",fontSize:f+"px"},a),$("#icodemo").animate({width:"184px",height:"92px",marginLeft:"0",marginTop:"0",fontSize:g+"px"},a)})}function resize(){$(window).resize(function(){var e,f,a=get_desks_num(),b=$("#main").width(),c=a*b,d=-((a-1)/2)*b;960==b&&$("#pointing").css("width",40*a),b>1e3&&$("#pointing").css("width",55*a),$("#slide").css("width",c),$("#slide").css("margin-left",d),e=$("#set").attr("desk"),e=parseInt(e),f=trans_margin(a,e),slide_to(f,0)})}function add(){$(document).mousedown(function(a){var b,c;"add"==a.target.className&&(lock="true",$("#app").hide(),$("#miyuset").hide(),$("#addbox").show(),b=a.target,c=$(b).attr("addto"),$("#set").attr("addto",c),$("#lightbox").fadeIn(100))}),$("#back").mousedown(function(){back()}),$(document).mousedown(function(a){var c,b=a.target;"sitelist"==b.className&&($(".icoset").css({"border-color":"","border-width":""}),$(".icoset").html(""),$("#set").attr("addvalue",""),$(".sitelist").css({color:"","border-bottom-width":"1px","border-bottom-color":""}),$(b).css({color:"#33B5E5","border-bottom":"1px solid #33B5E5"}),c=$(b).attr("icocontain"),$(".icocontent").hide(),$("#"+c).show())}),$("#addbu").mousedown(function(){var b,c,d,e,f,g,h,i,j,k,l,m,a=$("#set").attr("menu");if("2"==a){if(b=$("#miyuinput").val(),c=$("#miyuurl").val(),d=c,e=c.substring(0,4),"http"!=e&&(c="http://"+c),0==b.length)return $("#namealert").fadeIn(50),!1;if(0==d.length)return $("#urlalert").fadeIn(50),!1;f=$("#icodemo").css("background-color"),g='{"name":"'+b+'","url":"'+c+'","icoid":"","type":"0","img":"","bgcolor":"'+f+'"}',$("#set").attr("addvalue",g)}return h=$("#set").attr("addvalue"),i=$("#set").attr("addto"),j=i,k=get_ico_num(j),h=JSON.parse(h),h.icoid=k,h=JSON.stringify(h),l=localStorage["desk"+j],l.length<=17?l+=h:l=l+","+h,localStorage["desk"+j]=l,m=JSON.parse(h),i="add"+i,"0"==m.type&&$("#"+i).before('<div class="outico"><div class="ico" draggable="true" style="background-image:url('+m.img+");opacity:"+trans+";background-color:"+m.bgcolor+';" type="'+m.type+'"  url="'+m.url+'" icoid="'+m.icoid+'" thedesk="'+j+'"><span class="theiconame">'+m.name+"</span></div></div>"),"1"==m.type&&$("#"+i).before('<div class="outico"><div class="ico" draggable="true" style="background-image:url('+m.img+");opacity:"+trans+";background-color:"+m.bgcolor+';" type="'+m.type+'"  url="'+m.url+'" icoid="'+m.icoid+'" thedesk="'+j+'"></div></div>'),"2"==m.type&&$("#"+i).before('<div class="outico"><div class="ico" draggable="true" style="background-image:url('+m.img+");opacity:"+trans+";background-color:"+m.bgcolor+";background-size:"+m.bgsize+";background-position:"+m.bgposition+'" type="'+m.type+'"  url="'+m.url+'" icoid="'+m.icoid+'" thedesk="'+j+'"><span class="theappname">'+m.name+"</span></div></div>"),back(),!1})}function back(){lock="false",$("#lightbox").fadeOut(100,function(){$("#miyuinput").val(""),$("#miyuurl").val(""),$("#bgpointer").css({"margin-left":"0px"}),$("#icodemo").css("background-color","rgb(244,179,0)"),$("#iconame").text("米鱼"),$("#dui").remove(),$(".appico").css({"border-color":"","border-width":""}),$("#appcolor").hide(),$(".appico").css("background-color","rgb(0,130,135)")}),$(".icoset").css({"border-color":"","border-width":""}),$(".icoset").html(""),$("#set").attr("addvalue","")}function get_ico_num(a){var c,d,b=localStorage["desk"+a];return b.length<=15?0:(b+="]}",c=JSON.parse(b),d=c.site.length)}function bgfrombing(){var c,a=localStorage.bgtype,b=localStorage.bgcolor;return"4"==a?($("body").css("background-image","url(bg.jpg)"),!1):"3"==a?($("body").css("background-image",""),$("body").css("background-color",b),!1):"1"==a||"2"==a?(c=localStorage.bg,$("body").css("background-image",c),!1):($.ajax({url:"http://miyudaohang.sinaapp.com/bg.php",dataType:"text",error:function(){var a=localStorage.bingbg;$("body").css("background-image",a)},success:function(a){var c,b=a.substring(0,11);"http://s.cn"==b?(c="url("+a+")",localStorage.bingbg=c,$("body").css("background-image",c)):(a=localStorage.bingbg,$("body").css("background-image",a))}}),void 0)}function hidetheico(){$("#hideico").mousedown(function(){var a=hideico;"1"==a?($("#slide").hide(),$("#pointing").hide(),$("#left_button").hide(),$("#righ_button").hide(),hideico="0",$("#hideico").html("显示图标"),localStorage.hideico="0"):($("#slide").show(),$("#pointing").show(),$("#left_button").show(),$("#righ_button").show(),hideico="1",$("#hideico").html("隐藏图标"),localStorage.hideico="1")})}function showico(){if(localStorage.hideico){var a=localStorage.hideico;"0"==a&&($("#slide").hide(),$("#pointing").hide(),$("#left_button").hide(),$("#righ_button").hide(),hideico="0",$("#hideico").html("显示图标"))}}function addmenu(){$("#normal").mousedown(function(){$(".icoset").css({"border-color":"","border-width":""}),$(".icoset").html(""),$("#set").attr("addvalue",""),$("#set").attr("menu","1"),$(".menu_op").css({color:"","border-bottom":""}),$("#normal").css({color:"#33B5E5","border-bottom":"2px solid #33B5E5"}),$(".contain").hide(),$("#normalsite").show(),$("#dui").remove(),$(".appico").css({"border-color":"","border-width":""}),$("#appcolor").hide(),$(".appico").css("background-color","rgb(0,130,135)")}),$("#byself").mousedown(function(){$(".icoset").css({"border-color":"","border-width":""}),$(".icoset").html(""),$("#set").attr("addvalue",""),$("#set").attr("menu","2"),$(".menu_op").css({color:"","border-bottom":""}),$("#byself").css({color:"#33B5E5","border-bottom":"2px solid #33B5E5"}),$(".contain").hide(),$("#byselfsite").show(),$("#dui").remove(),$(".appico").css({"border-color":"","border-width":""}),$("#appcolor").hide(),$(".appico").css("background-color","rgb(0,130,135)")}),$("#native").mousedown(function(){$(".icoset").css({"border-color":"","border-width":""}),$(".icoset").html(""),$("#set").attr("addvalue",""),$("#set").attr("menu","3"),$(".menu_op").css({color:"","border-bottom":""}),$("#native").css({color:"#33B5E5","border-bottom":"2px solid #33B5E5"}),$(".contain").hide(),$("#nativeapp").show(),$("#appcolor").hide()})}function choosecolor(){$("#miyuinput").keydown().keyup(function(){var a=$(this).val();0==a.length?$("#iconame").text("米鱼"):$("#iconame").text(a)}),$(document).mousedown(function(a){var c,d,e,b=a.target;"bgcolor"==b.className&&(c=$(b).index(),d=$(b).css("background-color"),$("#icodemo").css("background-color",d),c=parseInt(c),e=29*c,$("#bgpointer").animate({marginLeft:e+"px"},300))}),$(document).mousedown(function(a){var c,d,e,f,b=a.target;"appbgcolor"==b.className&&(c=$(b).index(),d=$(b).css("background-color"),c=parseInt(c),$('[appid="'+theappbg+'"]').css("background-color",d),e=$("#set").attr("addvalue"),e=JSON.parse(e),e.bgcolor=d,e=JSON.stringify(e),$("#set").attr("addvalue",e),f=29*c,$("#appbgpointer").animate({marginLeft:f+"px"},300))})}function onrightmousedown(a){$(document).mousedown(function(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;3==b.which&&("ico"==b.target.className&&(c=b.target),"theiconame"==b.target.className&&(c=b.target.parentNode),"theappname"==b.target.className&&(c=b.target.parentNode),d=c.parentNode,e=d.parentNode,f=$(d).index(),g=$(e).attr("id"),h=$(c).css("width"),h=parseInt(h),i=$(c).css("height"),i=parseInt(i),j=$("#main").width(),j=parseInt(j),960==j?(k=9,l=5,m=38,n=34):(k=13,l=7,m=51,n=46),$(".ico,.add,#tmdemo").css("opacity",trans),$(".ico,.add,#tmdemo").attr("tm","false"),$(c).css("opacity","1"),o=$(c).attr("type"),$(c).attr("tm","true"),"4"==o?($("#whynot").show(),$("#icoshanchu").text("此应用无法删除"),$("#icoshanchu").attr("sc","0")):($("#whynot").hide(),$("#icoshanchu").text("删除"),$("#icoshanchu").attr("sc","1")),draglock="true",$(c).animate({width:.9*h+"px",height:.9*i+"px",marginLeft:k+"px",marginTop:l+"px",fontSize:n+"px"},a),$(c).animate({width:h+"px",height:i+"px",marginLeft:"0",marginTop:"0",fontSize:m+"px"},a,function(){$(c).css({width:"",height:""}),$("#duihao").remove(),$(c).append('<img id="duihao" src="ico/check.png" />'),$(".ico").css({"border-color":"","border-width":""}),$(c).css({"border-color":"rgba(131, 168, 11,1)","border-width":"5px"}),$("#set").attr("sico",f),$("#set").attr("gpe",g),$("#footer").animate({bottom:"0px"},{queue:!1,duration:200,easing:"easeInOutCirc"})}))})}function comfirm(){$("#icoquxiao").mousedown(function(){var a,b,c;draglock="false",a=$("#set").attr("sico"),b=$("#set").attr("gpe"),c=$("#"+b)[0].childNodes[a].childNodes[0],$(c).attr("tm","false"),$(c).css("opacity",trans),$(".ico").css({"border-color":"","border-width":""}),$("#duihao").remove(""),$("#footer").animate({bottom:-135},{queue:!1,duration:300,easing:"easeInOutCirc"})}),$("#icoshanchu").mousedown(function(){var a,b,c,d,e,f,g,h;return draglock="false",a=$("#icoshanchu").attr("sc"),"0"==a?!1:(b=$("#set").attr("sico"),a=parseInt(b),c=$("#set").attr("gpe"),d=$("#"+c).attr("desk"),d="desk"+d,e=localStorage[d],e+="]}",f=JSON.parse(e),f.site.splice(a,1),g=JSON.stringify(f.site),g='{"site":'+g,h=g.length,v=g.substring(0,h-1),localStorage[d]=v,$("#"+c).children()[b].remove(),$("#footer").animate({bottom:-135},{queue:!1,duration:300,easing:"easeInOutCirc"}),void 0)})}function showlightbox(){$("#setbutton").mousedown(function(){lock="true",$("#addbox").hide(),$("#app").hide(),allsethide(),$("#miyuset").show(),$("#lightbox").fadeIn(100),getpreset()}),$("#appmanage").mousedown(function(){lock="true",$("#addbox").hide(),$("#miyuset").hide(),$("#app").show(),showapp(),$("#lightbox").fadeIn(100)}),$("#appback").mousedown(function(){back(),$("#appfooter").animate({bottom:-135},{queue:!1,duration:300,easing:"easeInOutCirc"})}),$("#setback").mousedown(function(){allsethide(),back()})}function bigger(a){return a[3]?3:a[2]?2:a[1]?1:a[0]?0:4}function showapp(){$("#secondeline").children().remove(),chrome.management.getAll(function(a){var b,c,d,e;for(b=0;b<a.length;b++)try{a[b].isApp&&("undefined"==typeof a[b].icons?(c="app.png",a[b].enabled||(c="app0.png",d="false"),a[b].enabled&&(c="app.png",d="true")):(e=bigger(a[b].icons),a[b].enabled||(c=a[b].icons[e].url+"?grayscale=true",d="false"),a[b].enabled&&(c=a[b].icons[e].url,d="true")),$("#secondeline").append('<div class="mappout"><div class="mappico" appid="'+a[b].id+'" url="'+a[b].appLaunchUrl+'" enable="'+d+'" style="background-color:rgb(0,130,135);background-image:url('+c+');background-size:80px 80px;background-repeat:no-repeat;background-position:20px center;"><span class="mappname">'+a[b].name+"</span></div></div>"))}catch(f){}})}function nativeapp(){$("#applist").children().remove(),chrome.management.getAll(function(a){var b,c,d;for(b=0;b<a.length;b++)try{a[b].isApp&&a[b].enabled&&("undefined"==typeof a[b].icons?c="app.png":(d=bigger(a[b].icons),c=a[b].icons[d].url),$("#applist").append('<div class="appout"><div class="appico" value=\'{"name":"'+a[b].name+'","url":"'+a[b].appLaunchUrl+'","type":"2","img":"'+c+'","bgcolor":"rgb(0,130,135)","bgposition":"20px center","bgsize":"80px 80px"}\' appid="'+a[b].id+'" url="'+a[b].appLaunchUrl+'" style="background-color:rgb(0,130,135);background-image:url('+c+');background-size:80px 80px;background-repeat:no-repeat;background-position:20px center;"><span class="appname">'+a[b].name+"</span></div></div>"))}catch(e){}})}function loadnativeapp(a){$("#native").mousedown(function(){nativeapp()}),$(document).mousedown(function(b){var c,f,g;"appico"==b.target.className&&(c=b.target,$(".appico").css("background-color","rgb(0,130,135)"),$("#appbgpointer").css("margin-left","0px")),"appname"==b.target.className&&(c=b.target.parentNode,$(".appico").css("background-color","rgb(0,130,135)"),$("#appbgpointer").css("margin-left","0px")),f=12,g=10,$(c).animate({width:"164px",height:"82px",marginLeft:"13px",marginTop:"7px",fontSize:f+"px",backgroundSize:"72px"},a),$(c).animate({width:"184px",height:"92px",marginLeft:"0",marginTop:"0",fontSize:g+"px",backgroundSize:"80px"},a,function(){var a,b;$(c).css({width:"",height:""}),$("#dui").remove(),$(c).append('<img id="dui" src="ico/check.png" />'),$(".appico").css({"border-color":"","border-width":""}),$(c).css({"border-color":"rgba(131, 168, 11,1)","border-width":"5px"}),a=$(c).attr("value"),$("#set").attr("addvalue",a),$("#appcolor").slideDown(500),b=$(c).attr("appid"),theappbg=b})})}function miyualert(){$("#miyuinput").mousedown(function(){$("#namealert").hide()}),$("#miyuurl").mousedown(function(){$("#urlalert").hide()})}function launchapp(a){$(document).mousedown(function(b){var c,d,e,f;if(1==b.which){if("mappico"==b.target.className&&(c=b.target),"mappname"==b.target.className&&(c=b.target.parentNode),d=$(c).attr("enable"),"false"==d)return alert("此应用未启用，请右击此应用以启用！"),!1;e=12,f=10,$(c).animate({width:"164px",height:"82px",marginLeft:"13px",marginTop:"7px",fontSize:e+"px",backgroundSize:"72px"},a),$(c).animate({width:"184px",height:"92px",marginLeft:"0",marginTop:"0",fontSize:f+"px",backgroundSize:"80px"},a,function(){var a=$(c).attr("url");window.open(a,sitetarget)})}3==b.which&&("mappico"==b.target.className&&(c=b.target),"mappname"==b.target.className&&(c=b.target.parentNode),e=12,f=10,$(c).animate({width:"164px",height:"82px",marginLeft:"13px",marginTop:"7px",fontSize:e+"px",backgroundSize:"72px"},a),$(c).animate({width:"184px",height:"92px",marginLeft:"0",marginTop:"0",fontSize:f+"px",backgroundSize:"80px"},a,function(){var b,a=$(c).attr("appid");$("#set").attr("appid",a),b=$(c).attr("enable"),"true"==b&&($("#jinyong").text("禁用"),$("#set").attr("jinyong","true")),"false"==b&&($("#jinyong").text("启用"),$("#set").attr("jinyong","false")),$(c).css({width:"",height:""}),$("#dh").remove(),$(c).append('<img id="dh" src="ico/check.png" />'),$(".mappico").css({"border-color":"","border-width":""}),$(c).css({"border-color":"rgba(131, 168, 11,1)","border-width":"5px"}),$("#appfooter").animate({bottom:"0px"},{queue:!1,duration:200,easing:"easeInOutCirc"})}))})}function manage(){$("#appicoquxiao").mousedown(function(){$("#dh").remove(),$(".mappico").css({"border-color":"","border-width":""}),$("#appfooter").animate({bottom:-135},{queue:!1,duration:300,easing:"easeInOutCirc"})}),$("#jinyong").mousedown(function(){var a=$("#set").attr("jinyong"),b=$("#set").attr("appid");"true"==a&&chrome.management.setEnabled(b,!1,function(){$("#set").attr("appid",""),showapp(),$("#appfooter").animate({bottom:-135},{queue:!1,duration:300,easing:"easeInOutCirc"})}),"false"==a&&chrome.management.setEnabled(b,!0,function(){$("#set").attr("appid",""),showapp(),$("#appfooter").animate({bottom:-135},{queue:!1,duration:300,easing:"easeInOutCirc"})})}),$("#xiezai").mousedown(function(){var a=$("#set").attr("appid");chrome.management.uninstall(a,function(){$("#set").attr("appid",""),showapp(),$("#appfooter").animate({bottom:-135},{queue:!1,duration:300,easing:"easeInOutCirc"})})})}function drag(){var a=document;a.ondragstart=function(a){var b,c,d,e;return"true"===draglock?!1:("ico"==a.target.className&&(b=null,c=null,d=null,e=null,b=a.target.parentNode,c=b.parentNode,d=$(b).index(),e=c.childNodes[d],b.ondrag=function(){$(b).hide(),$("#drag0").length>0||$(e).before('<div id="drag0"></div>')},b.ondragend=function(){var a,c,e,f,g,h,i,k,l;$(b).insertAfter("#drag0"),$(b).show(),$("#drag0").remove(),a=$(b).index(),c=b.parentNode,e=$(c).attr("desk"),f=localStorage["desk"+e],f+="]}",g=JSON.parse(f),h=g.site,i=h[d],h[a],h.splice(d,1),h.splice(a,0,i),k=JSON.stringify(g),l=k.length,v=k.substring(0,l-2),localStorage["desk"+e]=v}),void 0)},a.ondragover=function(a){var b,c,d;a.preventDefault(),"ico"==a.target.className&&(b=a.target.parentNode,c=$(b).index(),d=$("#drag0").index(),c>d&&$("#drag0").insertAfter(b),d>c&&$("#drag0").insertBefore(b))}}function FloatMul(a,b){var c=0,d=a.toString(),e=b.toString();try{c+=d.split(".")[1].length}catch(f){}try{c+=e.split(".")[1].length}catch(f){}return Number(d.replace(".",""))*Number(e.replace(".",""))/Math.pow(10,c)}$(document).ready(function(){draglock="false",hideico="1",lock="false",$("#set").attr("desk","1"),bgfrombing(),desks(),unable_select(),vertical_center("#main"),load_ico(),slide(420),launch(50),launchapp(50),select_zoom(50),demo_zoom(50),loadnativeapp(50),resize(),add(),hidetheico(),showico(),addmenu(),choosecolor(),onrightmousedown(50),comfirm(),city(),showlightbox(),manage(),miyualert(),drag(),$("#searchinput").focus(function(){$("#searchinput").attr("f","1")}),$("#searchinput").blur(function(){$("#searchinput").attr("f","0")}),localStorage.tarnsparent?(trans=localStorage.tarnsparent,$(".ico,.add,#tmdemo").css("opacity",trans),$("#range").val(100*trans),$("#tmd").text(FloatMul(trans,100))):(trans="1",localStorage.tarnsparent="1",$(".ico,.add").css("opacity",trans))}),document.oncontextmenu=function(a){"searchinput"!=a.target.id&&"urlimgpath"!=a.target.id&&a.preventDefault()};