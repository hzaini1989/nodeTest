var playAction = process.argv[process.argv.length - 1]

const game = require('./lib.js')

// const result = game(playAction)
// console.log(result)

let count = 0;
process.stdin.on('data',e=>{
  const playAction = e.toString().trim()
  // console.log(playAction)

  const result = game(playAction)
  if(result == -1){
    count++
  }
  if(count == 3){
    console.log('你太厉害了，我不玩了！')
    process.exit()
  }


})
