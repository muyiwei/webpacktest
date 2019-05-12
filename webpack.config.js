var webpack = require("webpack");
const rm = require('rimraf')
const extractText=require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


class test {
    apply(compiler) {
        compiler.hooks.compilation.tap("test", compilation => {
            console.log("webpack test 构建过程开始！");
            compilation.hooks.buildModule.tap("test",function(module){
              
            })
        });
        compiler.hooks.emit.tap("test", compilation => {
            console.log("准备生成 chunks");
            debugger;
            
        });        
    }
}

var option={
 entry:{
 index:__dirname+"/src/js/main.js"
 }
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
	filename:"[name].js",
	path:__dirname+"/dist1"
},
plugins:[new test()
]
}
rm(__dirname+"/dist1",function(){
	webpack(option,function(error,states){
   console.log(states.toString())
})
})

module.exports = option;