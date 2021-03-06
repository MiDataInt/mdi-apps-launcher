/* -----------------------------------------------------------
like preload.js, mdi-apps-launcher/framework.js has limited access to Node 
it provides a conduit from mdi-apps-framework/framework.js to Electron main.js
----------------------------------------------------------- */
const { contextBridge, ipcRenderer } = require('electron');
const allowedEventTypes = [
    "showDocumentation"
];
contextBridge.exposeInMainWorld('mdiElectron', {
    frameworkToElectron: (eventType, data) => {
        if(allowedEventTypes.includes(eventType)) 
            ipcRenderer.send(eventType, data)
    }
});
