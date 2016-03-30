	function movePosition(element)
	{
		// alert(element.html())

		var end="";
		switch(element.html())
		{
			case "HOME":
				end=0;
				break;
			case "WORK":
				end=$(".show").offset().top-$("#header").height();
				break;
			case "CONTACT":
				end=$("#footer").offset().top-$("#header").height();
				break;
			default:
				end=$(document).scrollTop();
		}
		var start=$(document).scrollTop();
		var change = end - start;
		var t=0;
		var maxT = 30;
		var changeTimer = setInterval(function()
		{
			t++;
			if(t>=maxT)
			{
				clearInterval(changeTimer)
			}
			$(document).scrollTop(Tween.Sine.easeInOut(t,start,change,maxT))
		},30)
	}
