const { app, BrowserWindow } = require("electron");
const { join } = require("path");

app.whenReady().then(() => {
  const window = new BrowserWindow({
    webPreferences: {
      preload: join(__dirname, "./preload.js"),
    },
  });
  window.loadFile("index.html");
  window.webContents.openDevTools();
});
