var webpack = require("webpack");
const rm = require('rimraf')

var option={
     mode:"development",
 entry:["jquery"]
 
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
	path:__dirname+"/dist2",
  library: '[name]_[chunkhash]',
},
plugins:[
   new webpack.DllPlugin({
     context: __dirname,
      name: "[name]_[chunkhash]",
    path:__dirname+"/manifest2.json"
   })
]
}
rm(__dirname+"/dist2",function(){
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