// let vid1a2 = new Vue({
// 	el: '#vid1a2',
// 	data:
// 	{
// 		message: 'ff' ,

// 			message: 'Lorem ipsum dolor sit amet, <small>consectetur <i>adipisicing elit</i></small>. Autem, sint!',
// 			view: true,

// 			message1:'',
// 			checked: 'true',
		
// 	}
// })

// let vid3 = new Vue({
// 	el:"#vid3",
// 	data:
// 	{
// 		count:0
// 	},
// 	methods:
// 	{
// 		countUp: function()
// 		{
// 			this.count +=1
// 		},
// 		countDown: function()
// 		{
// 			this.count -=1
// 		},
// 	},
// })
let vid3p2 = new Vue({
	el:"#vid3p2",
	data:
	{
		url:'https://dropmefiles.com/GWMx1',
		cleanUrl:"",
	},
	methods:
	{
		cleanerUrl: function()
		{
			this.cleanUrl = this.url.replace(/^https?:\/\//, '').replace(/\/$/,'')
		}
	},

});