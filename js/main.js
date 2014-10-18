$(document).ready(function(){

	var numbers = [1, 2, 3, 4, 5, 6];
	
	var firstNumber;
	var secondNumber;
	
	var total;

	var count = 0;
	var timer = 0;
	
	var winnings = [
	                {name: "Seeds", src: "<img src='images/seeds.png' />"},
	                {name: "Dirt", src: "<img src='images/dirt.png' />"},
	                {name: "Grass", src: "<img src='images/grass.png' />"},
	                {name: "Cobble", src: "<img src='images/cobble.png' />"},
	                {name: "Stone", src: "<img src='images/stone.png' />"},
	                {name: "Quartz", src: "<img src='images/quartz.png' />"},
	                {name: "Redstone", src: "<img src='images/redstone.png' />"},
	                {name: "Lapis", src: "<img src='images/lapis.png' />"},
	                {name: "Iron", src: "<img src='images/iron.png' />"},
	                {name: "Gold", src: "<img src='images/gold.png' />"},
	                {name: "Emerald", src: "<img src='images/emerald.png' />"},
	                {name: "Diamond", src: "<img src='images/diamond.png' />"}
	               ];

	$('#roll').click(function(){
		var blinkTitle = setInterval(function(){
			
			$('#roll').hide();
			
			count++;
			timer += 100;
			
			$('#total').html("");
			
			if(count >= numbers.length){
				count = 0;
			}
			
			$('#nums1').text(Math.floor(Math.random() * numbers[count])); // Get random element from the numbers array
			$('#nums2').text(Math.floor(Math.random() * numbers[count]));
			
			checkTimer();
		}, 100);
		
		var checkTimer = function(){
			if(timer >= 4000){
				clearInterval(blinkTitle);
				
				$('#roll').show();
				
				firstNumber = $('#nums1').text();
				secondNumber = $('#nums2').text();
				
				total = +firstNumber + +secondNumber;
				
				checkWinnings();
				
				$('#total').html("You rolled a total of " + total);
				
				timer = 0;
			}
		}
	});
	
	var checkWinnings = function(){
		switch(total){
			case 0:
				$('#winnings-holder').append("<span class='winnings'>" + winnings[0].name + winnings[0].src + "</span>");
				break;
			case 1:
				$('#winnings-holder').append("<span class='winnings'>" + winnings[1].name + winnings[1].src + "</span>");
				break;
			case 2:
				$('#winnings-holder').append("<span class='winnings'>" + winnings[2].name + winnings[2].src + "</span>");
				break;
			case 3:
				$('#winnings-holder').append("<span class='winnings'>" + winnings[3].name + winnings[3].src + "</span>");
				break;
			case 4:
				$('#winnings-holder').append("<span class='winnings'>" + winnings[4].name + winnings[4].src + "</span>");
				break;
			case 5:
				$('#winnings-holder').append("<span class='winnings'>" + winnings[5].name + winnings[5].src + "</span>");
				break;
			case 6:
				$('#winnings-holder').append("<span class='winnings'>" + winnings[6].name + winnings[6].src + "</span>");
				break;
			case 7:
				$('#winnings-holder').append("<span class='winnings'>" + winnings[7].name + winnings[7].src + "</span>");
				break;
			case 8:
				$('#winnings-holder').append("<span class='winnings'>" + winnings[8].name + winnings[8].src + "</span>");
				break;
			case 9:
				$('#winnings-holder').append("<span class='winnings'>" + winnings[9].name + winnings[9].src + "</span>");
				break;
			case 10:
				$('#winnings-holder').append("<span class='winnings'>" + winnings[10].name + winnings[10].src + "</span>");
				break;
			case 11:
				$('#winnings-holder').append("<span class='winnings'>" + winnings[11].name + winnings[11].src + "</span>");
				break;
		}
	}
});