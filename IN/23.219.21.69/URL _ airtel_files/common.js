$(document).ready(function(){
	var useragent = navigator.userAgent ;
	var device;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(useragent) ) {
		$('#wynkMvs').show();
		device = 1;
	}
	else{
		$('.advert_strip').hide();
		device = 0;
	}
	var advtN = 0;
	function advtCycle(){
		if(device == 0){
			return false;
		}
		else{
			if(advtN == 0 ){
				$('#wynkMvs').fadeIn().siblings('.advert_strip').hide();
				advtN = 1;
			}else if(advtN == 1 ){
				$('#wynkMsc').fadeIn().siblings('.advert_strip').hide();
				advtN = 2
			}else{
				$('#wynkGames').fadeIn().siblings('.advert_strip').hide();
				advtN = 0
			}
		}		
	}
	
	
	if( /Android/i.test(useragent) ) {
		$('#wynkMsc').click(function(){
			window.location.href='https://app.appsflyer.com/com.bsbportal.music-interstitial?pid=GTM&c=DoT&af_r=http://bnr1.bsbportal.com/rcconf/wynkMusic.apk';
		});
		$('#wynkMvs').click(function(){
			window.location.href='https://app.appsflyer.com/tv.accedo.airtel.wynk-interstitial?pid=GTM&c=DoT&af_r=http://bnr1.bsbportal.com/rcconf/wynkMovies.apk';
		});
		$('#wynkGames').click(function(){
			window.location.href='http://hss.galaxy.gs/c.php?a=10534&p=58&da=1063';
		});
		
	}
	else{
		$('#wynkMsc').click(function(){
			window.location.href='http://wynk.in/mu/DoT';
		});
		$('#wynkMvs').click(function(){
			window.location.href='http://mov.wynk.in/DoT';
		});
		$('#wynkGames').click(function(){
			window.location.href='http://hss.galaxy.gs/c.php?a=10534&p=58&da=1063';
		});
	}

	$(window).load(function(){
		advtCycle();
		setInterval(function(){
			advtCycle();
		},5000);
	});



})