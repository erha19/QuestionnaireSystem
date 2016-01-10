exports.index = function(req, res) {
	var queue=[];
	for (key in models){
		typeof(models[key].sync)=='function'?queue.push(models[key]):'';
	}
	sync(queue)
	function sync(arr){
		if(arr.length<=0){
			res.send('Finished')
			return;
		}
		else
			arr.shift().sync().then(function(){
				sync(arr);
			});
	}
};