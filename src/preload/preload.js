const { contextBridge } = require('electron');
const { compute, formatNumber, symbolForOp } = require('../shared/calculator');

// Expose calculator functions to renderer
contextBridge.exposeInMainWorld('calculator', {
  compute,
  formatNumber,
  symbolForOp
});