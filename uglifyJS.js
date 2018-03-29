// 代码压缩
// 某些代码需要手动压缩
var fs = require('fs');
var uglify = require('uglify-js')
var path = require("path");
var basePath = path.resolve('src');

// 压缩配置
var options = {
  compress: {
    global_defs: {
      "@alert": "console.log"
    },
    drop_console: true
  },
  warnings: true,
  ie8: true
}

var jsLits = {
  'safe' : '/js/safe.js'
}
console.log('uglify 开始压缩...')

for (var i in jsLits) {
  var jsFile = fs.readFileSync(basePath + jsLits[i],"utf-8")

  console.log(i + '.js' + " -----uglify to----- " + i + '.min.js')
  
  fs.writeFileSync(basePath + '/copyFiles/' + i + '.min.js',uglify.minify(jsFile, options).code,"utf-8")
}
console.log('uglify 压缩完成...')

