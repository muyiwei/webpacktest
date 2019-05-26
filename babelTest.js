const babel = require("babel-core");
const fs = require("fs");
const option = {
  "plugins": ["babel-plugin-syntax-dynamic-import"]
}
babel.transformFile("./src/js/main.js",option,function(error,result){

console.log(error)
 fs.writeFileSync("main2_2.js",result.code);

})