(function($){$.growl=function(title,message,image,priority){notify(title,message,image,priority);}
$.growl.version="1.0.0-b2";function create(rebuild){var instance=document.getElementById('growlDock');if(!instance||rebuild){instance=$(jQuery.growl.settings.dockTemplate).attr('id','growlDock').addClass('growl');if(jQuery.growl.settings.defaultStylesheet){$('head').append('<link rel="stylesheet" type="text/css" href="'+jQuery.growl.settings.defaultStylesheet+'" />');}}else{instance=$(instance);}
$('body').append(instance.css(jQuery.growl.settings.dockCss));return instance;};function r(text,expr,val){while(expr.test(text)){text=text.replace(expr,val);}
return text;};function notify(title,message,image,priority){var instance=create();var html=jQuery.growl.settings.noticeTemplate;if(typeof(html)=='object')html=$(html).html();html=r(html,/%message%/,(message?message:''));html=r(html,/%title%/,(title?title:''));html=r(html,/%image%/,(image?image:jQuery.growl.settings.defaultImage));html=r(html,/%priority%/,(priority?priority:'normal'));var notice=$(html).hide().css(jQuery.growl.settings.noticeCss).fadeIn(jQuery.growl.settings.notice);;$.growl.settings.noticeDisplay(notice);instance.append(notice);$('a[@rel="close"]',notice).click(function(){notice.remove();});if($.growl.settings.displayTimeout>0){setTimeout(function(){jQuery.growl.settings.noticeRemove(notice,function(){notice.remove();});},jQuery.growl.settings.displayTimeout);}};$.growl.settings={dockTemplate:'<div></div>',dockCss:{position:'fixed',top:'10px',right:'10px',width:'300px',zIndex:50000},noticeTemplate:'<div class="notice">'+' <h3 style="margin-top: 15px">%title%</h3>'+' <p>%message%</p>'+'</div>',noticeCss:{opacity:.75,backgroundColor:'#333333',color:'#ffffff'},noticeDisplay:function(notice){notice.css({'opacity':'0.75'}).fadeIn(jQuery.growl.settings.noticeFadeTimeout);},noticeRemove:function(notice,callback){notice.animate({opacity:'0.75',height:'0px'},{duration:jQuery.growl.settings.noticeFadeTimeout,complete:callback});},noticeFadeTimeout:'slow',displayTimeout:3500,defaultImage:'growl.jpg',defaultStylesheet:null,noticeElement:function(el){$.growl.settings.noticeTemplate=$(el);}};})(jQuery);