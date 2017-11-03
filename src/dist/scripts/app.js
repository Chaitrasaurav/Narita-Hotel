"use strict";function init(){function t(t,e){$(".js-datepicker-container").each(function(a,i){var s=$.datepicker._getInst(i);s.drawMonth=s.selectedMonth=t,s.drawYear=s.selectedYear=e,$.datepicker._notifyChange(s),$.datepicker._adjustDate(i)})}propertyId=$("#propertyId").val(),property=$("#property").val(),locale=$("body").data("locale"),$.datepicker.regional[$("body").data("i18n")],$("input.js-datepicker").click(function(e){if($(".js-select-guest-container").hasClass("hidden")||$(".js-select-guest-container").addClass("hidden"),$(".js-datepicker-modal").removeClass("hidden"),$(".check-in").removeClass("js-is-invalid"),$(".check-out").removeClass("js-is-invalid"),$(e.target).hasClass("check-in"))if($(e.target).val()){a=$(e.target).val();t(new Date(a).getMonth(),new Date(a).getFullYear()),$(".check-out").removeClass("js-datepicker-highlight"),$(e.target).addClass("js-datepicker-highlight")}else $(e.target).addClass("js-datepicker-highlight"),$(".js-datepicker-container").datepicker("option","gotoCurrent",!0);else if($(e.target).hasClass("check-out"))if($(e.target).val()){a=$(e.target).val();t(new Date(a).getMonth(),new Date(a).getFullYear()),$(".check-out").addClass("js-datepicker-highlight"),$(".check-in").removeClass("js-datepicker-highlight")}else if($(".check-in").val().length){$(e.target).addClass("js-datepicker-highlight"),$(".check-in").removeClass("js-datepicker-highlight");var a=$(".check-in").val();t(new Date(a).getMonth(),new Date(a).getFullYear())}else $(".check-in").addClass("js-datepicker-highlight"),$(".js-datepicker-container").datepicker("option","gotoCurrent",!0)});var e=2;$(window).width()<768&&(e=1),$(".js-datepicker-container").datepicker({minDate:new Date(2018,1,1),numberOfMonths:e,beforeShowDay:function(t){var e=$.datepicker.parseDate($.datepicker._defaults.dateFormat,$("#checkIn").val()),a=$.datepicker.parseDate($.datepicker._defaults.dateFormat,$("#checkOut").val()),i="";return e&&t>e&&(i="dp-highlight-hover"),e&&a&&t>e&&t<a&&(i="dp-highlight"),(e&&t.getTime()==e.getTime()||a&&t.getTime()==a.getTime())&&(i="dp-highlighted"),[!0,e&&(t.getTime()==e.getTime()||!a&&t>e||a&&t>=e)?i:""]},onSelect:function(t,e){var a=$.datepicker.parseDate($.datepicker._defaults.dateFormat,$("#checkIn").val()),i=$.datepicker.parseDate($.datepicker._defaults.dateFormat,$("#checkOut").val()),s=$.datepicker.parseDate($.datepicker._defaults.dateFormat,t);if(a&&i?(s<a?$("#checkIn").hasClass("js-datepicker-highlight")?($("#checkIn").val(t).removeClass("js-datepicker-highlight"),$(".js-datepicker-modal").hasClass("hidden")||$(".js-datepicker-modal").addClass("hidden")):$("#checkOut").hasClass("js-datepicker-highlight")&&($("#checkIn").val(t),$("#checkOut").val("").addClass("js-datepicker-highlight")):s>a&&s<i?$("#checkIn").hasClass("js-datepicker-highlight")?($("#checkIn").val(t).removeClass("js-datepicker-highlight"),$(".js-datepicker-modal").hasClass("hidden")||$(".js-datepicker-modal").addClass("hidden")):$("#checkOut").hasClass("js-datepicker-highlight")&&($("#checkOut").val(t).removeClass("js-datepicker-highlight"),$(".js-datepicker-modal").hasClass("hidden")||$(".js-datepicker-modal").addClass("hidden")):s>i&&($("#checkIn").hasClass("js-datepicker-highlight")?($("#checkIn").val(t).removeClass("js-datepicker-highlight"),$("#checkOut").val("").addClass("js-datepicker-highlight")):$("#checkOut").hasClass("js-datepicker-highlight")&&($("#checkOut").val(t).removeClass("js-datepicker-highlight"),$(".js-datepicker-modal").hasClass("hidden")||$(".js-datepicker-modal").addClass("hidden"))),$(this).datepicker()):!a&&i?($("#checkIn").val(t).removeClass("js-datepicker-highlight"),$("#checkIn").hasClass("js-is-invalid")&&$("#checkIn").removeClass("js-is-invalid"),$("#checkOut").val("").addClass("js-datepicker-highlight"),$(this).datepicker()):s<a?($("#checkIn").val(t),$("#checkIn").hasClass("js-is-invalid")&&$("#checkIn").removeClass("js-is-invalid"),$("#checkIn").hasClass("js-datepicker-highlight")&&($("#checkIn").removeClass("js-datepicker-highlight"),$("#checkOut").addClass("js-datepicker-highlight")),$(this).datepicker()):($("#checkIn").hasClass("js-datepicker-highlight")?($("#checkIn").val(t).removeClass("js-datepicker-highlight"),$("#checkOut").addClass("js-datepicker-highlight")):($("#checkOut").val(t).removeClass("js-datepicker-highlight"),$("#checkOut").hasClass("js-is-invalid")||$("#checkOut").removeClass("js-is-invalid"),$(".js-datepicker-modal").hasClass("hidden")||$(".js-datepicker-modal").addClass("hidden")),$(this).datepicker()),$("body").hasClass("ja_JP")){if($("#checkIn").val().length){o=new Date($("#checkIn").val());$("#checkIn").siblings('input[name="ciDateY"]').val(o.getFullYear()),$("#checkIn").siblings('input[name="ciDateM"]').val(o.getMonth()+1),$("#checkIn").siblings('input[name="ciDateD"]').val(o.getDate())}if($("#checkOut").val().length){var o=new Date($("#checkOut").val());$("#checkOut").siblings('input[name="coDateY"]').val(o.getFullYear()),$("#checkOut").siblings('input[name="coDateM"]').val(o.getMonth()+1),$("#checkOut").siblings('input[name="coDateD"]').val(o.getDate())}}if($("#checkIn").val()){var l=new Date($("#checkIn").val()).getDate();l=l<10?"0"+l:l,$(".js-date-arrival").removeClass("hidden").text(l)}else $(".js-date-arrival").removeClass("hidden").text("");if($("#checkOut").val()){var n=new Date($("#checkOut").val()).getDate();n=n<10?"0"+n:n,$(".js-date-departure").removeClass("hidden").text(n)}else $(".js-date-departure").removeClass("hidden").text("")}}),$(".js-close-datepicker").click(function(){$(".js-datepicker-modal").addClass("hidden")});var a=new Date,i=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1,s=a.getDate()<10?"0"+(a.getDate()+1):a.getDate(),o=a.getFullYear()+"-"+i+"-"+s,l=new Date;l.setDate((new Date).getDate()+1);var n=l.getMonth()+1<10?"0"+(l.getMonth()+1):l.getMonth()+1,r=l.getDate()<10?"0"+(l.getDate()+1):l.getDate(),c=l.getFullYear()+"-"+n+"-"+r,d="http://corporate.mystays.com/narita/en/?hotelid="+propertyId+"&checkin="+o+"&checkout="+c+"&language="+locale+"&adults=2&child=0&rooms=1";$.ajax({type:"GET",url:d,dataType:"json",success:function(t){if(console.info(t),t.rooms.length){var e,a,i={lazyLoad:"ondemand",infinite:!1,speed:500,dots:!0,responsive:[{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,centerMode:!0,centerPadding:"30px"}}]},s=$(".js-accomodation"),o=t.rooms,l=o.length,n=3;new Date;$(window).width()<900&&$(window).width()>600?n=2:$(window).width()<600&&(n=1);for(var r=0;r<l;r++){e=Math.round(parseFloat(o[r].price));try{a=e.toLocaleString("ja-JP")}catch(t){a=e}s.append('<li data-room="'+o[r].roomIdBooking+'">\t\t\t\t\t<img src="../dist/images/room-image.png">\t\t\t\t\t<h3>'+o[r].roomName+'</h3>\t\t\t\t\t<p><span>Starting from:</span><span class="js-accomodation-price">¥ '+a+'</span><span>/night</span></p>\t\t\t\t\t<a href="#" class="js-book-now">Book Now</a>\t\t\t\t</li>')}i.slidesToShow=n,i.slidesToScroll=n,o.length<=n&&(i.dots=!1,i.arrows=!1),s.slick(i),s.find(".slick-arrow").appendTo(s.find(".slick-dots")),s.find(".slick-arrow").addClass("icon arrow")}}}),function(){function t(){if(n<l){i&&(c=i);var d,h;d=c.getDate()<10?"0"+c.getDate():c.getDate(),h=c.getMonth()+1<10?"0"+(h=c.getMonth()+1):c.getMonth()+1,a=c.getFullYear()+"-"+h+"-"+d,$.ajax({type:"GET",url:"https://websdk.fastbooking-services.com/quotation?arrivalDate="+a+"&currency=JPY&property="+o[n].property+"&roomRestriction="+o[n].beName+"&output=json&nights=1&adults=2&_authCode=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOiJeLiokIiwicHJvcGVydGllcyI6Il5qcChhfGJ8Y3xmfGh8anxrfG58b3xzfHR8dXx5KVthLXpdezJ9WzAtOV17NX0kIiwiZ3JvdXBzIjoiXiQiLCJmb3IiOiJNUyIsImlhdCI6MTQ4NTE5MDg1MiwianRpIjoiMzk1ZDQyNmEtMjUxYi00YmM0LThhN2UtZGU3ZjIyMDBhMGMxIn0.nfxBfwao6Z-k2X8rToJOTEouiVf1lhgPAwrTRFIyeW0",success:function(o){var l,d,h;if(o.data.length){l=Math.round(o.data[0].pricePerNight),h=o.data[0].currency_html;try{d=l.toLocaleString("ja-JP")}catch(t){d=l}$(s.find("li")[n]).find(".js-spinner").removeClass("spinner"),$(s.find("li")[n]).find(".js-nearbuy-price").html(h+" "+d),r=0,i=null,c=e,n++}else 5==r&&(r=0,$(s.find("li")[n]).find(".js-spinner").removeClass("spinner").css("visibility","hidden"),i=null,c=e,n++,t()),(i=new Date(a)).setDate(i.getDate()+7),r++;t()}})}}var e,a,i,s=$(".js-nearbuy"),o=[{property:"jpura26317",beName:"Twin-Non-Smoking"},{property:"jpura26309",beName:"Single-Non-Smoking"},{property:"jpura26342",beName:"Superior-Semi-Double-Non-Smoking"}],l=o.length,n=0,r=0,c=new Date;if(c.getDay()<5)switch(c.getDay()){case 0:c.setDate(c.getDate()+9);break;case 1:c.setDate(c.getDate()+8);break;case 2:c.setDate(c.getDate()+7);break;case 3:c.setDate(c.getDate()+6);break;case 4:c.setDate(c.getDate()+5)}else switch(c.getDay()){case 5:c.setDate(c.getDate()+11);break;case 6:c.setDate(c.getDate()+10)}e=c,t()}()}function getReviews(t,e){var a="https://api.trustyou.com/hotels/"+e+"/trust_score.html?embedded=true&lang="+lanId+"&size=m";$.ajax({url:a,success:function(e){$(t).append($(e).find(".counter")),$(t).append($(e).find(".rating-units"))}})}var propertyId,property,locale,lanId=$("body").data("lang");$(document).on("mouseover",".ui-datepicker-calendar td a",function(t){$(".check-out").hasClass("js-datepicker-highlight")&&($(this).parents(".ui-datepicker-group").prevAll().find("td.dp-highlight-hover").removeClass("last-cell").addClass("new-cell"),$(this).parents("tr").prevAll().find("td.dp-highlight-hover").removeClass("last-cell").addClass("new-cell"),$(this).parent("td").prevAll("td.dp-highlight-hover").removeClass("last-cell").addClass("new-cell"),$(this).parent("td.dp-highlight-hover").addClass("last-cell"),$(this).parent("td").nextAll("td.dp-highlight-hover").removeClass("last-cell").removeClass("new-cell"),$(this).parents("tr").nextAll().find("td.dp-highlight-hover").removeClass("last-cell").removeClass("new-cell"),$(this).parents(".ui-datepicker-group").nextAll().find("td.dp-highlight-hover").removeClass("last-cell").removeClass("new-cell"))}),$(".js-select-guest").on("click",function(t){$(".js-datepicker-modal").hasClass("hidden")||$(".js-datepicker-modal").addClass("hidden"),$(".js-select-guest-container").toggleClass("hidden"),$("html, body").animate({scrollTop:$(".js-select-guest").offset().top-100},1e3)}),$(".js-cancel-select-guest").on("click",function(){$(".js-select-guest-container").toggleClass("hidden"),$("html, body").animate({scrollTop:$("#mainForm").offset().top-100},1e3)}),$(".js-add-room").on("click",function(){var t=$(".js-room-list").find("li").length+1,e='<li class="js-room room clearfix" data-room="'+t+'">\t\t\t\t\t<div class="room-container clearfix">\t\t\t\t\t\t<p class="room__heading">'+miscellaneous.roomLabel+t+'</p>\t\t\t\t\t\t<div class="form__control">\t\t\t\t\t\t\t<label class="room__label form__label">'+miscellaneous.adultLabel+'</label>\t\t\t\t\t\t\t<div class="input-wrap">\t\t\t\t\t\t\t\t<select class="room__field form__field js-adult-count">\t\t\t\t\t\t\t\t\t<option value="1">1</option>\t\t\t\t\t\t\t\t\t<option value="2" selected>2</option>\t\t\t\t\t\t\t\t\t<option value="3">3</option>\t\t\t\t\t\t\t\t\t<option value="4">4</option>\t\t\t\t\t\t\t\t\t<option value="5">5</option>\t\t\t\t\t\t\t\t\t<option value="6">6</option>\t\t\t\t\t\t\t\t\t<option value="7">7</option>\t\t\t\t\t\t\t\t</select>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="form__control">\t\t\t\t\t\t\t<label class="room__label form__label">'+miscellaneous.childrenLabel+'</label>\t\t\t\t\t\t\t<div class="input-wrap">\t\t\t\t\t\t\t\t<select class="room__field form__field js-child-count">\t\t\t\t\t\t\t\t\t<option value="0">0</option>\t\t\t\t\t\t\t\t\t<option value="1">1</option>\t\t\t\t\t\t\t\t\t<option value="2">2</option>\t\t\t\t\t\t\t\t\t<option value="3">3</option>\t\t\t\t\t\t\t\t\t<option value="4">4</option>\t\t\t\t\t\t\t\t\t<option value="5">5</option>\t\t\t\t\t\t\t\t\t<option value="6">6</option>\t\t\t\t\t\t\t\t\t<option value="7">7</option>\t\t\t\t\t\t\t\t</select>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t\t<div class="room__delete">\t\t\t\t\t\t<a href="javascript:;" title="'+miscellaneous.deleteRoom+'" class="room__delete-btn js-delete-room"><i class="icon delete-icon"></i></a>\t\t\t\t\t</div>\t\t\t\t</li>';$(".js-room-list").append(e)}),$(".js-room-list").on("click",".js-delete-room",function(t){$(this).parents("li").remove()}),$(".js-room-list").on("change",".js-child-count",function(t){var e=$(this),a=e.val(),i=e.parents(".js-room").find(".js-child-age-list");i.empty();for(var s=0;s<a;s++){var o='<p class="room__heading">Ages</p>\t\t\t\t\t\t<div class="form__con js-child-age-ele">\t\t\t\t\t\t\t<label class="form__label">Child '+(s+1)+'</label>\t\t\t\t\t\t\t<div class="input-wrap">\t\t\t\t\t\t\t\t<select class="form__field">\t\t\t\t\t\t\t\t\t<option value="1">1</option>\t\t\t\t\t\t\t\t\t<option value="2">2</option>\t\t\t\t\t\t\t\t\t<option value="3">3</option>\t\t\t\t\t\t\t\t\t<option value="4">4</option>\t\t\t\t\t\t\t\t\t<option value="5">5</option>\t\t\t\t\t\t\t\t\t<option value="6">6</option>\t\t\t\t\t\t\t\t\t<option value="7">7</option>\t\t\t\t\t\t\t\t\t<option value="8">8</option>\t\t\t\t\t\t\t\t\t<option value="9">9</option>\t\t\t\t\t\t\t\t\t<option value="10">10</option>\t\t\t\t\t\t\t\t\t<option value="11">11</option>\t\t\t\t\t\t\t\t\t<option value="12">12</option>\t\t\t\t\t\t\t\t\t<option value="13">13</option>\t\t\t\t\t\t\t\t\t<option value="14">14</option>\t\t\t\t\t\t\t\t</select>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>';i.append(o)}}),$(".js-confirm").on("click",function(){for(var t=$(".js-select-guest-container").find(".js-adult-count"),e=$(".js-select-guest-container").find(".js-child-count"),a=0,i=0,s=0;s<t.length;s++)a+=Number(t[s].value);for(s=0;s<e.length;s++)i+=Number(e[s].value);$(".js-select-guest").val(a+i),$(".js-total-adult").val(a),$(".js-total-children").val(i),$(".js-total-room").val($(".js-room").length),$(".js-select-guest-container").toggleClass("hidden"),$("html, body").animate({scrollTop:$("#mainForm").offset().top},1e3)}),$(".js-more-photos").on("click",function(t){t.preventDefault(),$(".first-image").trigger("click")}),$(".js-tabs-select").on("change",function(t){var e=$(this).val();$("ul.tabs li").removeClass("current"),$(".tab-content").removeClass("current"),$('ul.js-tabs li[data-tab="'+e+'"]').addClass("current"),$("#"+e).addClass("current"),$("#"+e).find(".js-tab-slider").slick("setPosition",0),$("#"+e).find(".js-tab-slider-inner").slick("setPosition",0)}),$("ul.js-tabs li").click(function(){var t=$(this).attr("data-tab");$("ul.js-tabs li").removeClass("current"),$(".tab-content").removeClass("current"),$(".js-tabs-select").val(t).trigger("change"),$(this).addClass("current"),$("#"+t).addClass("current"),$("#"+t).find(".js-tab-slider").slick("setPosition",0),$("#"+t).find(".js-tab-slider-inner").slick("setPosition",0)});var slickConfig={lazyLoad:"ondemand",infinite:!1,speed:500,responsive:[{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,centerMode:!0,centerPadding:"30px"}}]},noOfSlide=3;$(window).width()<900&&$(window).width()>600?noOfSlide=2:$(window).width()<600&&(noOfSlide=1);var createSlider=function(t){var e=$(t);e.length>1?e.map(function(t,e){slickConfig.dots=!0,slickConfig.arrows=!0,slickConfig.slidesToShow=noOfSlide,slickConfig.slidesToScroll=noOfSlide,$(e).find("li").length<=noOfSlide&&(slickConfig.dots=!1,slickConfig.arrows=!1),$(e).slick(slickConfig),$(e).find(".slick-arrow").appendTo($(e).find(".slick-dots")),$(e).find(".slick-arrow").addClass("icon arrow")}):(slickConfig.dots=!0,slickConfig.arrows=!0,slickConfig.slidesToShow=noOfSlide,slickConfig.slidesToScroll=noOfSlide,e.find("li").length<=noOfSlide&&(slickConfig.dots=!1,slickConfig.arrows=!1),e.slick(slickConfig),e.find(".slick-arrow").appendTo(e.find(".slick-dots")),e.find(".slick-arrow").addClass("icon arrow"))};createSlider(".js-tab-slider"),$(window).width()>600&&createSlider(".js-nearbuy"),$(".js-tab-slider-inner").slick({infinite:!1,speed:300,slidesToShow:1,dots:!0,dotsClass:"custom_paging",customPaging:function(t,e){return e+1+" of "+t.slideCount}}),$(".js-tab-slider-inner .slick-arrow").addClass("icon arrow"),$(".header_cta-dropdown").on("click",function(){$(".header_language").toggleClass("active")}),$(".js-header-link").on("click",function(t){var e=$(t.target).attr("href");$("html, body").animate({scrollTop:$(e).offset().top},1250)}),$(".js-main-form-btn").on("click",function(){var t=$(this).parents("form"),e=!0;if(t.find(":input.required").each(function(t){this.value.length?$(this).removeClass("js-is-invalid"):(e=!1,$(this).addClass("js-is-invalid"))}),e){var a,i="";$("body").hasClass("ja_JP")?(t.serializeArray().forEach(function(t){i+="&"+t.name+"="+t.value}),a="https://mystays.rwiths.net/r-withs/tfs0020a.do?"+i):(i="s=results",t.serializeArray().forEach(function(t){if("datein"==t.name||"dateout"==t.name){var e=new Date(t.value);t.value=e.getMonth()+1+"/"+e.getDate()+"/"+e.getFullYear()}i+="&"+t.name+"="+t.value}),a="https://reservations.travelclick.com/"+property+"?"+i+"#/guestsandrooms"),window.open(a,"_blank").focus()}}),$(".js-toggle-menu").on("click",function(t){$(".js-mobile-menu").fadeIn()}),$(".js-close-mobile-menu").on("click",function(t){$(".js-mobile-menu").fadeOut()}),$(document).on("click",".js-book-now",function(t){t.preventDefault();var e,a,i,s,o,l,n,r,c,d=new Date(2018,1,1),h=new Date;d.setHours(0,0,0,0),h.setHours(0,0,0,0),h<d?(a=new Date(2018,1,1),i=new Date(2018,1,2)):(a=new Date,i=new Date),i.setDate(i.getDate()+1),s=a.getDate()<10?"0"+a.getDate():a.getDate(),l=a.getMonth()+1<10?"0"+(l=a.getMonth()+1):a.getMonth()+1,o=i.getDate()<10?"0"+i.getDate():i.getDate(),n=i.getMonth()+1<10?"0"+(n=i.getMonth()+1):i.getMonth()+1,"en_GB"===locale?(r=l+"/"+s+"/"+a.getFullYear(),c=n+"/"+o+"/"+i.getFullYear(),$(t.target).parents("li").data("room")?e="https://reservations.travelclick.com/"+property+"?hotelid="+property+"&datein="+r+"&dateout="+c+"&rooms=1&adults=2&children=0&roomtypeid="+$(t.target).parents("li").data("room")+"#/accommodation/room":$(t.target).parents("li").data("hotel")&&(e="https://www.book-secure.com/index.php?s=results&property="+$(t.target).parents("li").data("hotel")+"&arrival="+r+"&departure="+c+"&adults1=2&children1=0&children2=0&rooms=1&locale="+locale+"&currency=JPY")):"ja_JP"===locale&&(r=a.getFullYear()+"-"+l+"-"+s,c=i.getFullYear()+"-"+n+"-"+o,$(t.target).parents("li").data("name")?e="https://mystays.rwiths.net/r-withs/tfs0020a.do?&hotelNo="+property+"&ciDateY="+a.getFullYear()+"&ciDateM="+l+"&ciDateD="+s+"&coDateY="+i.getFullYear()+"&coDateM="+n+"&coDateD="+o+"&otona=2&s1=0&room=1":$(t.target).parents("li").data("hotel")&&(e="https://mystays.rwiths.net/r-withs/tfs0020a.do?&hotelNo="+$(t.target).parents("li").data("hotel")+"&ciDateY="+a.getFullYear()+"&ciDateM="+l+"&ciDateD="+s+"&coDateY="+i.getFullYear()+"&coDateM="+n+"&coDateD="+o+"&otona=2&s1=0&room=1")),window.open(e,"_blank").focus()}),$(document).keyup(function(t){27==t.keyCode&&($(".js-datepicker-modal").hasClass("hidden")||($(".js-datepicker-modal").addClass("hidden"),$("#checkIn").removeClass("js-datepicker-highlight"),$("#checkOut").removeClass("js-datepicker-highlight")))}),$(document).click(function(t){$(t.target).hasClass("js-datepicker-modal")||$(t.target).parents().hasClass("js-datepicker-modal")||$(t.target).parents().hasClass("ui-datepicker-header")||$(t.target).hasClass("js-datepicker")||($(".js-datepicker-modal").addClass("hidden"),$("#checkIn").removeClass("js-datepicker-highlight"),$("#checkOut").removeClass("js-datepicker-highlight"))}),$(".fancybox-thumb").fancybox({prevEffect:"none",nextEffect:"none",helpers:{title:{type:"outside"},thumbs:{width:40,height:40}}}),getReviews("#maihama","259a4e86-e00b-4e93-8325-e09048339c7a"),getReviews("#conference","48921673-c222-4d22-b3fa-196b7d4d045f"),getReviews("#flexstay","a9a109e3-56b9-41cd-880e-fd20ddb576f9"),$.ajax({url:"https://api.trustyou.com/hotels/58be015a-8c2d-46ed-94e6-e92b32e156e3/trust_score.html?embedded=true&lang="+lanId+"&size=m",success:function(t){$("#guide-logo").append(t)}}),$(document).ready(init);