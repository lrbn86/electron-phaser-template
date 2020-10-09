const { app, BrowserWindow, Menu } = require('electron');

Menu.setApplicationMenu(null);

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false,
    maximizable: false,
    center: true,
    useContentSize: true
  });

  // and load the index.html of the app.
  mainWindow.loadFile('./src/index.html');

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

