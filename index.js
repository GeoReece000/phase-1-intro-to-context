// Your code here
// createEmployeeRecord function
function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    }
  }
  
  // createEmployeeRecords function
  function createEmployeeRecords(arr) {
    return arr.map(createEmployeeRecord)
  }
  
  // createTimeInEvent function
  function createTimeInEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(" ")
  
    employeeRecord.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date
    })
  
    return employeeRecord
  }
  
  // createTimeOutEvent function
  function createTimeOutEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(" ")
  
    employeeRecord.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date
    })
  
    return employeeRecord
  }
  
  // hoursWorkedOnDate function
  function hoursWorkedOnDate(employeeRecord, date) {
    const timeIn = employeeRecord.timeInEvents.find(event => event.date === date)
    const timeOut = employeeRecord.timeOutEvents.find(event => event.date === date)
  
    return (timeOut.hour - timeIn.hour) / 100
  }
  
  // wagesEarnedOnDate function
  function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date)
  
    return hoursWorked * employeeRecord.payPerHour
  }
  
  // allWagesFor function
  function allWagesFor(employeeRecord) {
    const datesWorked = employeeRecord.timeInEvents.map(event => event.date)
  
    const wages = datesWorked.reduce((acc, date) => {
      return acc + wagesEarnedOnDate(employeeRecord, date)
    }, 0)
  
    return wages
  }
  
  // calculatePayroll function
  function calculatePayroll(employeeRecords) {
    const totalWages = employeeRecords.reduce((acc, employeeRecord) => {
      return acc + allWagesFor(employeeRecord)
    }, 0)
  
    return totalWages
  }
  