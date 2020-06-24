
// try {
  interview(function(res){
    if(res instanceof Error){
      return console.log('cry')
    }
    console.log('simle')
  })
// } catch (error) {
//   console.log('cry',error)
// }


function interview(callback){
  setTimeout(()=>{
    if(Math.random() < 0.8){
      callback(null,'success')
    }else{
      callback(new Error('fail'))
    }


  },500)
}