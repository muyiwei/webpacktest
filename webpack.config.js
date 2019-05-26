var webpack = require("webpack");
const rm = require('rimraf')
const extractText = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin")

class test {
    apply(compiler) {
        compiler.hooks.compilation.tap("test", compilation => {
            console.log("webpack test 构建过程开始！");
            compilation.hooks.buildModule.tap("test", function(module) {

            })
        });
        compiler.hooks.emit.tap("test", compilation => {
            console.log("准备生成 chunks");


        });
    }
}

var option = {
    // mode:"development",
    // entry:{
    // index:__dirname+"/src/js/main.js"
    // }
    entry: ["./src/js/main.js"]

        ,
    // externals: {
    //     'jquery': "$"
    // },
    module: {

        rules: [{
                test: /\.css$/,
                loader: "css-loader"
                // use: extractText.extract({
                //         use: "css-loader"
                //       })
            }, {
                test: /\.js$/,
                loader: "babel-loader"
            }

        ]
    },
    output: {
        filename: "[name][chunkhash].js",
        path: __dirname + "/dist"
    },
    optimization:{
       //splitChunks:{chunks:"all"}
    },
    plugins: [
new webpack.NoEmitOnErrorsPlugin(),
    new test(),
        new webpack.DefinePlugin({
            "Myname": JSON.stringify("ADSASDsa"),
            AA: {
                a: "cc"
            },
            A: function() {
                console.log("1111");
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new htmlWebpackPlugin({
            template: "index.html",
            filename: "index.html"
        }),
        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require("./manifest.json")
        }),
         new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require("./manifest2.json")
        })
    ]
}
rm(__dirname + "/dist", function() {
    webpack(option, function(error, states) {
        if (error) {
            console.log(error)
            return;
        }
        debugger;
        // process.stdout.write(states.toString({
        //     colors: true,
        //     modules: true,
        //     children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        //     chunks: true,
        //     chunkModules: true
        // }) + '\n\n')
    })
})

module.exports = option;