const { app, ipcMain, BrowserWindow } = require("electron");
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

ipcMain.addListener("my-button-click", () => {
  console.log("Event received: my-button-click");
  app.setBadgeCount(app.getBadgeCount() + 1);
});
