const { contextBridge, ipcRenderer } = require("electron");

console.log(`Hello from preload with a node version:${process.versions.node}`);

contextBridge.exposeInMainWorld("ipc", {
  onMyButtonClick: () => ipcRenderer.send("my-button-click"),
});
