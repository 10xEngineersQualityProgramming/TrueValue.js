const QubitCircuit = require("./qubit-circuit")
const construct = require("construct-new-second")

module.exports = (function returnTrue() {
  let qc = construct(QubitCircuit)
  qc = qc.x()
  return qc.measure()
})()
