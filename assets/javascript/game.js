$(document).ready(function() {

	var objMax = {
		position: 1,
		badgeName: "assets/images/max-badge.png",
		profilePic: "assets/images/max.jpg",
		p1Pic: "assets/images/max-p1.jpg",
		p2Pic: "assets/images/max-p2.jpg",
		goldenName: "assets/images/max-gold.png",
		standAnimation: "assets/images/max-stand.gif",
		beatenAnimation: "assets/images/max-beaten.gif",
		walkAnimation: "assets/images/max-walk.gif",
		kickAnimation: "assets/images/max-kick.gif",
		hp: 400,
		currentHp: 400,
		ap: 12,
		currentAp: 12,
		cap: 55
	}

	var objAxel = {
		position: 2,
		badgeName: "assets/images/axel-badge.png",
		profilePic: "assets/images/axel.jpg",
		p1Pic: "assets/images/axel-p1.jpg",
		p2Pic: "assets/images/axel-p2.jpg",
		goldenName: "assets/images/axel-gold.png",
		standAnimation: "assets/images/axel-stand.gif",
		beatenAnimation: "assets/images/axel-beaten.gif",
		walkAnimation: "assets/images/axel-walk.gif",
		kickAnimation: "assets/images/axel-kick.gif",
		hp: 380,
		currentHp: 380,
		ap: 12.5,
		currentAp: 12.5,
		cap: 57
	}

	var objBlaze = {
		position: 3,
		badgeName: "assets/images/blaze-badge.png",
		profilePic: "assets/images/blaze.jpg",
		p1Pic: "assets/images/blaze-p1.jpg",
		p2Pic: "assets/images/blaze-p2.jpg",
		goldenName: "assets/images/blaze-gold.png",
		standAnimation: "assets/images/blaze-stand.gif",
		beatenAnimation: "assets/images/blaze-beaten.gif",
		walkAnimation: "assets/images/blaze-walk.gif",
		kickAnimation: "assets/images/blaze-kick.gif",
		hp: 360,
		currentHp: 360,
		ap: 14,
		currentAp: 14, 
		cap: 58
	}

	var objSkate = {
		position: 4,
		badgeName: "assets/images/skate-badge.png",
		profilePic: "assets/images/skate.jpg",
		p1Pic: "assets/images/skate-p1.jpg",
		p2Pic: "assets/images/skate-p2.jpg",
		goldenName: "assets/images/skate-gold.png",
		standAnimation: "assets/images/skate-stand.gif",
		beatenAnimation: "assets/images/skate-beaten.gif",
		walkAnimation: "assets/images/skate-walk.gif",
		kickAnimation: "assets/images/skate-kick.gif",
		hp: 340,
		currentHp: 340,
		ap: 16,
		currentAp: 16, 
		cap: 60
	}

	var arrObjList = [objMax, objAxel, objBlaze, objSkate];
	var objP1Selected = null;
	var objP2Selected = null;
	var intP1Selector = 1;
	var intP1Selected = 0;
	var arrAvailableP2 = [1, 2, 3, 4];
	var intP2Selector = 0;
	var intP2Selected = 0;
	var hpBar1 = 33;
	var damageP1 = 0;
	var damagedHp1 = "";
	var hpBar2 = 33;
	var damageP2 = 0;
	var damagedHp2 = "";
	var intStage = 1;
	var intTimerCounter = 99;
	var bolLoaded = false;
	var bolP1Selection = false;
	var bolP2Selection = false;
	var bolLastRound = false;
	var bolBattleBegan = false;
	var bolUnderAttack = false;
	var bolStageLoaded = false;
	var bolRoundOver = false;

	$.preloadImages = function() {
		for (var i = 0; i < arguments.length; i++) {
			$("<img />").attr("src", "assets/images/" + arguments[i]);
		}
	}

	$.preloadImages("axel-badge.png", "axel-beaten.gif", "axel-gold.png", "axel-kick.gif", "axel-name.png", "axel-p1.jpg", "axel-p2.jpg", "axel-p3.jpg", "axel-p4.jpg", "axel-stand.gif", "axel-walk.gif", "axel.jpg", "background.gif", "blaze-badge.png", "blaze-beaten.gif", "blaze-gold.png", "blaze-kick.gif", "blaze-name.png", "blaze-p1.jpg", "blaze-p2.jpg", "blaze-p3.jpg", "blaze-p4.jpg", "blaze-stand.gif", "blaze-walk.gif", "blaze.jpg", "enter.gif", "erfaanism.png", "explosion.gif", "foreground.png", "gameover.png", "jump.png", "max-badge.png", "max-beaten.gif", "max-gold.png", "max-kick.gif", "max-name.png", "max-p1.jpg", "max-p2.jpg", "max-p3.jpg", "max-p4.jpg", "max-stand.gif", "max-walk.gif", "max.jpg", "player1.png", "player2.png", "power.png", "sega.png", "selectplayer.png", "skate-badge.png", "skate-beaten.gif", "skate-gold.png", "skate-kick.gif", "skate-name.png", "skate-p1.jpg", "skate-p2.jpg", "skate-p3.jpg", "skate-p4.jpg", "skate-stand.gif", "skate-walk.gif", "skate.jpg", "speed.png", "stage1.png", "stage2.png", "stage3.png", "stamina.png", "star1.png", "star2.png", "star3.png", "technique.png");

	setTimeout(function(){
		$("#loading").css("display", "block");
		$("#introMusic").get(0).play();
	}, 1000);

	setTimeout(function(){
		$("#loading").css("display", "none");
		$("#enter").css("display", "block");
		bolLoaded = true;
	}, 3500);

	function player1Selector (position) {
		$("#switchNoise").get(0).play();
		if (!bolP2Selection) {
			$("#max").attr("src", objMax.profilePic);
			$("#axel").attr("src", objAxel.profilePic);
			$("#blaze").attr("src", objBlaze.profilePic);
			$("#skate").attr("src", objSkate.profilePic);
			$(".playerImages").css("opacity", "0.5");
			switch (position) {
				case 1:
				$("#max").css("opacity", 1);
				$("#max").attr("src", objMax.p1Pic);
				$("#onPlayer1Name").attr("src", objMax.goldenName);
				$("#onPlayer1Image").attr("src", objMax.standAnimation);
				break;
				case 2:
				$("#axel").css("opacity", 1);
				$("#axel").attr("src", objAxel.p1Pic);
				$("#onPlayer1Name").attr("src", objAxel.goldenName);
				$("#onPlayer1Image").attr("src", objAxel.standAnimation);
				break;
				case 3:
				$("#blaze").css("opacity", 1);
				$("#blaze").attr("src", objBlaze.p1Pic);
				$("#onPlayer1Name").attr("src", objBlaze.goldenName);
				$("#onPlayer1Image").attr("src", objBlaze.standAnimation);
				break;
				case 4:
				$("#skate").css("opacity", 1);
				$("#skate").attr("src", objSkate.p1Pic);
				$("#onPlayer1Name").attr("src", objSkate.goldenName);
				$("#onPlayer1Image").attr("src", objSkate.standAnimation);
				break;												
			}
		}
	}

	function player2Selector (position) {
		if (!bolP1Selection && bolP2Selection) {
			$("#switchNoise").get(0).play();
			switch (intP1Selected) {
				case 1:
				$("#max").attr("src", objMax.p1Pic);
				$("#axel").attr("src", objAxel.profilePic);
				$("#blaze").attr("src", objBlaze.profilePic);
				$("#skate").attr("src", objSkate.profilePic);
				$(".playerImages").css("opacity", "0.5");
				break;
				case 2:
				$("#max").attr("src", objMax.profilePic);
				$("#axel").attr("src", objAxel.p1Pic);
				$("#blaze").attr("src", objBlaze.profilePic);
				$("#skate").attr("src", objSkate.profilePic);
				$(".playerImages").css("opacity", "0.5");			
				break;
				case 3:
				$("#max").attr("src", objMax.profilePic);
				$("#axel").attr("src", objAxel.profilePic);
				$("#blaze").attr("src", objBlaze.p1Pic);
				$("#skate").attr("src", objSkate.profilePic);
				$(".playerImages").css("opacity", "0.5");			
				break;
				case 4:
				$("#max").attr("src", objMax.profilePic);
				$("#axel").attr("src", objAxel.profilePic);
				$("#blaze").attr("src", objBlaze.profilePic);
				$("#skate").attr("src", objSkate.p1Pic);
				$(".playerImages").css("opacity", "0.5");			
				break;
			}
			switch (position) {
				case 1:
				$("#max").css("opacity", 1);
				$("#max").attr("src", objMax.p2Pic);
				$("#onPlayer2Name").attr("src", objMax.goldenName);
				$("#onPlayer2Image").attr("src", objMax.standAnimation);
				break;
				case 2:
				$("#axel").css("opacity", 1);
				$("#axel").attr("src", objAxel.p2Pic);
				$("#onPlayer2Name").attr("src", objAxel.goldenName);
				$("#onPlayer2Image").attr("src", objAxel.standAnimation);
				break;
				case 3:
				$("#blaze").css("opacity", 1);
				$("#blaze").attr("src", objBlaze.p2Pic);
				$("#onPlayer2Name").attr("src", objBlaze.goldenName);
				$("#onPlayer2Image").attr("src", objBlaze.standAnimation);
				break;
				case 4:
				$("#skate").css("opacity", 1);
				$("#skate").attr("src", objSkate.p2Pic);
				$("#onPlayer2Name").attr("src", objSkate.goldenName);
				$("#onPlayer2Image").attr("src", objSkate.standAnimation);
				break;												
			}
		}
	}

	function beginFight() {
		intTimerCounter = 99;
		setTimeout(function fight() {
		$("#stage").css("display", "none");
		$("#battleScene").css("display", "block");
		var aspectRatio = $("#fgImage").width() / $("#fgImage").height();
		function fgResize() {
			if ( ($("window").width() / $("window").height()) < aspectRatio ) {
				$("#fgImage").removeClass().addClass("fgHeight");
			}
			else {
				$("#fgImage").removeClass().addClass("fgWidth");
			}
		}
		$("window").resize(fgResize()).trigger("resize");
		$("#p1Fighter").attr("src", objP1Selected.standAnimation);
		$("#p2Fighter").attr("src", objP2Selected.standAnimation);
		$("#statName1").attr("src", objP1Selected.badgeName);
		$("#statName2").attr("src", objP2Selected.badgeName);
		$("#statImage1").attr("src", objP1Selected.profilePic);
		$("#statImage2").attr("src", objP2Selected.profilePic);
		bolStageLoaded = true;
		var timer = setInterval(function(){
			intTimerCounter--;
			$("#timerCounter").html(intTimerCounter);
			if (intTimerCounter === 0) {
				clearInterval(timer);
				$("#bgMusic").get(0).pause();
				if (objP2Selected.currentHp <= objP1Selected.currentHp) {
					p1Wins();
				}
				else{
					p2Wins();
				}
			}
		}, 1000);
	}, 2000)};

	function gameOver() {
		$("#stage").css("visibility", "hidden");
		$("#stage").css("display", "block");
		$("#stageImage").attr("src", "assets/images/gameover.png");
		$("#battleScene").css("display", "none");
		$("#stage").css("visibility", "visible");
		setTimeout(function() {
			location.reload(true);
		}, 6000);
	}
	function p1Wins () {
		$("#p1Wins").css("display", "block");
		$("#p1Wins").animate({"left": "50vw", "top": "50vw", "margin-left": "-25vw", "margin-top": "-25vw"}, {duration: 1000});
		bolRoundOver = true;
		setTimeout(function() {
			$("#p1Wins").css({"left": "0", "top": "0", "display": "none"});
			location.reload(true);
		}, 6000);
	}

	function p2Wins () {
		bolRoundOver = true;
		$("#p2Wins").css("display", "block");
		$("#p2Wins").animate({"left": "50vw", "top": "50vw", "margin-left": "-25vw", "margin-top": "-25vw"}, {duration: 1000});
		setTimeout(function() {
			$("#p2Wins").css({"left": "0", "top": "0", "display": "none"});
			gameOver();
		}, 5000);
	}

	function attack() {
		bolUnderAttack = true;
		$("#p1Fighter").attr("src", objP1Selected.walkAnimation);
		$("#p1Fighter").animate({left: "50vw"}, {duration: 800});
		setTimeout(function () {
			$("#p1Fighter").attr("src", objP1Selected.kickAnimation);
			$("#kickNoise1").get(0).play();
			setTimeout(function () {
				$("#p2Fighter").attr("src", objP2Selected.beatenAnimation);
				objP2Selected.currentHp -= objP1Selected.currentAp;
				if (objP2Selected.currentHp > 0) {
					damageP2 = ((objP1Selected.currentAp * 33)/objP2Selected.hp).toFixed(2);
					hpBar2 -= damageP2;
					$("#hpBar2").css("width", "calc(" + hpBar2 + "vw - 4px");
				}
				else {
					$("#hpBar2").css("width", 0);
					p1Wins();
				}
			}, 150);
			setTimeout(function () {
				$("#p1Fighter").attr("src", objP1Selected.walkAnimation);
				$("#p2Fighter").attr("src", objP2Selected.standAnimation);
			}, 800);
			setTimeout(function () {
				$("#p1Fighter").animate({left: "0"}, {duration: 800});
			}, 800);
			setTimeout(function () {
				$("#p1Fighter").attr("src", objP1Selected.standAnimation);
			}, 1600);
		}, 800);

		setTimeout(function () {
			if (!bolRoundOver) {
				$("#p2Fighter").attr("src", objP2Selected.walkAnimation);
				$("#p2Fighter").animate({right: "60vw"}, {duration: 800});
				setTimeout(function () {
					$("#p2Fighter").attr("src", objP2Selected.kickAnimation);
					$("#kickNoise2").get(0).play();
					setTimeout(function () {
						$("#p1Fighter").attr("src", objP1Selected.beatenAnimation);
						objP1Selected.currentHp -= objP2Selected.cap;
						objP1Selected.currentAp += objP1Selected.ap;
					if (objP1Selected.currentHp > 0) {
						damageP1 = ((objP2Selected.cap * 33)/objP1Selected.hp).toFixed(2);
						hpBar1 -= damageP1;
						$("#hpBar1").css("width", "calc(" + hpBar1 + "vw - 4px");
					}
					else {
						$("#hpBar1").css("width", 0);
						p2Wins();
					}
					}, 100);
					setTimeout(function () {
						$("#p2Fighter").attr("src", objP2Selected.walkAnimation);
						$("#p1Fighter").attr("src", objP1Selected.standAnimation);
					}, 800);
					setTimeout(function () {
						$("#p2Fighter").animate({right: "10vw"}, {duration: 800});
					}, 800);
					setTimeout(function () {
						$("#p2Fighter").attr("src", objP2Selected.standAnimation);				
						bolUnderAttack = false;
					}, 1600);
				}, 800);
			}
		}, 3000);
		
	};

	document.onkeydown = function keylog(event) {
		if (bolLoaded && !bolP1Selection && !bolP2Selection && !bolBattleBegan && event.keyCode === 13) {
			$("#enter").css("display", "none");
			$("#playerSelection").css("display", "block");
			$("#max").css("opacity", 1);
			$("#max").attr("src", "assets/images/max-p1.jpg");
			$("#selectNoise").get(0).play();
			$("#pSelectMusic").get(0).play();
			bolP1Selection = true;
		}
		else if (bolP1Selection && !bolP2Selection && !bolBattleBegan && event.keyCode === 39 && intP1Selector <= 3) {
			intP1Selector++;
			player1Selector(intP1Selector);
		}
		else if (bolP1Selection && !bolP2Selection && !bolBattleBegan && event.keyCode === 37 && intP1Selector >= 2) {
			intP1Selector--;
			player1Selector(intP1Selector);
		}
		else if (bolP1Selection && event.keyCode === 13) {
			$("#selectPlayer").get(0).play();
			intP1Selected = intP1Selector;
			objP1Selected = arrObjList[intP1Selected - 1];
			arrAvailableP2.splice(intP1Selected - 1, 1);
			bolP1Selection = false;
			bolP2Selection = true;
			player2Selector(arrAvailableP2[intP2Selector]);
		}
		else if (bolP2Selection && !bolP1Selection && !bolBattleBegan && event.keyCode === 39 && intP2Selector <= 1) {
			intP2Selector++;
			player2Selector(arrAvailableP2[intP2Selector]);
		}
		else if (bolP2Selection && !bolP1Selection && !bolBattleBegan && event.keyCode === 37 && intP2Selector >= 1) {
			intP2Selector--;
			player2Selector(arrAvailableP2[intP2Selector]);
		}
		else if (!bolP1Selection && bolP2Selection && !bolBattleBegan && event.keyCode === 13) {
			intP2Selected = arrAvailableP2[intP2Selector];
			objP2Selected = arrObjList[intP2Selected - 1];
			bolP2Selection = false;
			$("#playerSelection").css("display", "none");
			$("#stage").css("display", "block");
			$("#selectPlayer").get(0).play();
			$("#pSelectMusic").get(0).pause();
			$("#bgMusic").get(0).play();
			arrAvailableP2.splice(intP2Selected - 1, 1);
			beginFight();
			bolBattleBegan = true;
		}
		else if (!bolUnderAttack && !bolRoundOver && bolStageLoaded && !bolP1Selection && !bolP2Selection && bolBattleBegan && event.keyCode === 13) {
			attack();
		}		
	}

});