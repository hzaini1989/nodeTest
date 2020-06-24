console.log('hello lib.js')

exports.hello = 'world'

exports.add = function(a,b){
  return a + b
}

exports.geekbang = {
  hello:'world'
}

// 只会输出下面
module.exports = function minus(a,b){
  return a- b;
}