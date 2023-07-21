// ####################################
// #### ----- GST Calculator ----- ####
// ####################################

function gstCalculator() {
  let Tax = prompt("What is the cost before GST?")
  let result = Tax * 1.15
  alert("Your cost with GST is $" + result)
}
