var img=$(`.body2__img`) , img2=$(`.body3__fleximg`)
var set=true;
setInterval(()=>{
	img.css(`height`,img.find(`img`).height()+24+`px`);
 img2.css(`height`,$(img2.children()[0]).height()+80+`px`);
 if ($(this).width()<=788 && set) {
	set=false;
	$(`.head__abs`).children().each(function () {
		$(this).css(`width`,$(this).width()/2);
	})
} else if (!set && $(this).width()>=789) {
	$(`.head__abs`).children().each(function () {
		$(this).css(`width`,$(this).width()*2);
	})
	set=true;
}
	if ($(window).width()>561) remove();
},30);
function remove(slow=false) {
	$(`.head__burger`).removeClass(`activeBurger`);
	(slow) ? $(`.head__flex2`).slideUp(400) : $(`.head__flex2`).hide();
}
var timer=true;
$(`.head__burger`).on(`click`,function () {
	if (!timer) return;
	timer=false;
	setTimeout(()=>timer=true,400);
	if ($(this).hasClass(`activeBurger`)) {
		remove(true);
	} else {
		$(this).addClass(`activeBurger`);
		$(`.head__flex2`).slideDown(400).css({display:"flex"});
	}
})
$(`.go-to`).on(`mouseenter`,function () {
	$($(this).parent().find(`p`)[1]).fadeIn(300);
})
$(`.go-to`).on(`mouseleave`,function () {
	$($(this).parent().find(`p`)[1]).fadeOut(300);
})
var elem=$(`.body3__butflex`).children();
setInterval(()=>{
	for (let i=0,time=500;i<3;i++,time+=500) {
		setTimeout(()=>{
			$(elem[i]).addClass(`biggerCirc`);
			setTimeout(()=>{
				$(elem[i]).removeClass(`biggerCirc`);
			},400);
		},time);
	}
},1750);
$(`[src="./images/hearth.png"]`).on(`click`,function () {
	$(this).attr(`src`,"./images/redHearth.png");
	$(this).parent().find(`p`).text(`23`)
})