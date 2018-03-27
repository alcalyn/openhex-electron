const electron = require('electron');
const path = require('path');
const url = require('url');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const windowOptions = {
    width: 800,
    height: 600,
};

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow(windowOptions);

    mainWindow.loadURL(url.format({
        pathname: path.join( __dirname, 'openhex/build/index.html'),
        protocol: 'file:',
        slashes: true,
    }));

    mainWindow.setMenu(null);

    // Open the DevTools.
    //mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
