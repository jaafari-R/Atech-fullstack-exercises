const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
};


// displayData(alert, logData, "I like to party")
displayData(alert, console.log, "I like to party")
  