
const parseTime = (time) => {
  return [
    time[0], 
    time[1] < 10 ? `0${time[1]}` : time[1], 
    time[2] < 10 ? `0${time[2]}` : time[2]
  ].join(':')
}

const getCurrentTime = () => {
  let currentTimeArr = new Date().toISOString().split('T')[1].split(':')
  return [currentTimeArr[0], currentTimeArr[1]].join(':')
}

export { parseTime, getCurrentTime }