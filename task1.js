// let task1 = new Vue({
// 	el:'#',
// 	data:


// })
let app1 = new Vue
({
    el: '#app1',
    data: 
	{
		visibleTOrF: true,
		elementLink1:true,
		elementLink2:true,
		elementLink3:true
    },
    methods:
    {
    	dropDown1:function()
    	{
    		this.visibleTOrF = !this.visibleTOrF
    	},
    	elementLink11:function()
    	{
    		this.visibleTOrF = !this.visibleTOrF,
    		this.elementLink1 = !this.elementLink1
    	},
    	elementLink22:function()
    	{
    		this.visibleTOrF = !this.visibleTOrF,
    		this.elementLink2 = !this.elementLink2
    	},
    	elementLink33:function()
    	{
    		this.visibleTOrF = !this.visibleTOrF,
    		this.elementLink3 = !this.elementLink3
    	}
    }
});