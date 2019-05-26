var webpack = require("webpack");
const rm = require('rimraf')

var option={
     mode:"development",
 entry:["./src/js/test.js","./src/js/test2.js"]
 
,
module:{

	rules:[{
		test:/\.css$/,
    loader:"css-loader"
		// use: extractText.extract({
  //         use: "css-loader"
  //       })
	},
	{
		test:/\.js$/,
        loader:"babel-loader"
	}

	]
}
,
output:{
	filename:"[name][chunkhash].js",
	path:__dirname+"/dist1",
  library: '[name]_[chunkhash]',
},
plugins:[
   new webpack.DllPlugin({
     context: __dirname,
      name: "[name]_[chunkhash]",
    path:__dirname+"/manifest.json"
   })
]
}
rm(__dirname+"/dist1",function(){
	webpack(option,function(error,states){
        if(error)
        {
            console.log(error)
            return;
        }
   console.log(error,states.toString())
})
})

module.exports = option;