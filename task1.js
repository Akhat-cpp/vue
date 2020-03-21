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
let app2 = new Vue
({
	el: "#app2",
	data:
	{
		visibleTOrF2: true,
		border22: false,
		focus22: false,
		onFocus22: true,
		items:
		[
			{
				message: 'a',
				link: '#a',
			},
			{
				message: 'as',
				link: '#s'
			},
			{
				message: 'asd',
				link: '#d'
			},
			{
				message: 'asdf',
				link: '#f',
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
		}
	},
})