// let task1 = new Vue({
// 	el:'#',
// 	data:


// })
// let app1 = new Vue
// ({
//     el: "#app1",
//     data: 
// 	{
// 		visibleTOrF: true,
// 		elementLink1:true,
// 		elementLink2:true,
// 		elementLink3:true
//     },
//     methods:
//     {
//     	dropDown1:function()
//     	{
//     		this.visibleTOrF = !this.visibleTOrF
//     	},
//     	elementLink11:function()
//     	{
//     		this.visibleTOrF = !this.visibleTOrF,
//     		this.elementLink1 = !this.elementLink1
//     	},
//     	elementLink22:function()
//     	{
//     		this.visibleTOrF = !this.visibleTOrF,
//     		this.elementLink2 = !this.elementLink2
//     	},
//     	elementLink33:function()
//     	{
//     		this.visibleTOrF = !this.visibleTOrF,
//     		this.elementLink3 = !this.elementLink3
//     	}
//     }
// });
let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

let app2 = new Vue
({
	el: "#app2",
	data:
	{	
		tempForNumberScrollJakor: 0,
		elem: null,
		ycoordMenu: 0,
		ycoord: 0,
		visibleTOrF2: true,
		visibleButtonUP: true,
		border22: false,
		focus22: false,
		onFocus22: true,
		showDetails: "Show details",
		items:
		[
			{
				message: 'a',
				link: 'a',
			},
			{
				message: 'as',
				link: 's'
			},
			{
				message: 'asd',
				link: 'd'
			},
			{
				message: 'asdf',
				link: 'f',
			},
		],
	},
	methods:
	{
		visibleMenu:function()
		{			
			this.visibleTOrF2 = !this.visibleTOrF2,
			this.border22 = !this.border22
		},
		invisibleMenu:function()
		{			
			this.visibleTOrF2 = true,
			this.border22 = false,
			this.focus22 = false,
			this.onFocus22 = true
		},
		focusElem:function()
		{
			this.focus22 = true,
			this.onFocus22 = false
		},
		scrollToJakor:function(link)
		{
			this.elem = document.getElementById(link),
			this.ycoordMenu = getYCoords(this.elem),
			setTimeout(function downn()
			{
				if((app2.ycoordMenu - (window.pageYOffset+250)) > 70 && app2.tempForNumberScrollJakor != (app2.ycoordMenu - window.pageYOffset))
				{
					app2.tempForNumberScrollJakor = (app2.ycoordMenu - window.pageYOffset);
					window.scrollTo(0, window.pageYOffset+100);
					setTimeout(downn, 25)
				};
			},100)
		},
		scroll:function()
		{
			setTimeout(function upp() 
			{
  				if(app2.ycoord > 70)
  				{
  					app2.ycoord -= 100;
  					window.scrollTo(0, app2.ycoord);
  					setTimeout(upp, 25);	
  				};
  			}, 100)
			// while(this.ycoord > 70)
			// {
			// 	console.log(this.ycoord)
			// 	this.ycoord -= 50;
			// 	setTimeout(() => window.scrollTo(0, this.ycoord), 100);
			// }
		},
		
	},
	
})
window.onscroll = function() 
{
	posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	app2.ycoord = posTop;
	if(posTop > 100)
	{
		app2.visibleButtonUP = false;
	}
	else
	{
		app2.visibleButtonUP = true;
	}
}
function getYCoords(elem) 
{
 	let temp = elem.getBoundingClientRect();
	return(temp.top + window.pageYOffset);
}