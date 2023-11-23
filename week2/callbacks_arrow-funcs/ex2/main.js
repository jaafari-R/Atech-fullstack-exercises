const getTime = func => func(new Date());

const returnTime = function (time) {
    // alert('The current time is: ' + time)
    console.log('The current time is: ' + time)
}
  
getTime(returnTime)
