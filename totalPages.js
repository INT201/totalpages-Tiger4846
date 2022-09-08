const { template } = require('@babel/core')
// - กรณี arrayItems เป็น null หรือ undefined ให้ return undefined
// - กรณี rowsPerPage เป็น null หรือ undefined หรือเป็น 0 จะ return 1

function totalPages(arrayItems, rowsPerPage) {
  if (arrayItems === null || arrayItems === undefined){
  return undefined 
  }else if (rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0){
  return 1
  }else {return Math.ceil(arrayItems.length/rowsPerPage)}
}
module.exports = totalPages
