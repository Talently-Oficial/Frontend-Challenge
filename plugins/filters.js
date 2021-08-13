import Vue from 'vue'

function addZeroAtStartIfHaveJustOneChar (char) {
  return (char < 10 ? '0' : '') + char
}

/**
* @param {String} rawDate date of any type accepted by Javascript Date API
* @return {String} response format "MM/DD/YYYY"
*/
function formatDate (rawDate) {
  const date = new Date(rawDate)

  const day = addZeroAtStartIfHaveJustOneChar(date.getDate())
  // We need to sum 1 because Javascript Date API gives month number between 0 and 11, e.g. 0 represents January
  const month = addZeroAtStartIfHaveJustOneChar(date.getMonth() + 1)
  const year = date.getFullYear()

  return `${month}/${day}/${year} `
}

Vue.filter('formatdate', formatDate)
