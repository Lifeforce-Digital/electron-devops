import React, { useEffect, useState } from 'react'
const { ipcRenderer } = require('electron');
import './index.css'

const App = () => {
    useEffect( () => {


        ipcRenderer.on('message', function (event, text) {
                var container = document.getElementById('messages');
                var message = document.createElement('div');
                message.innerHTML = text;
                container.appendChild(message);
            })

            ipcRenderer.on('ping', (event, message) => {
                console.log(message)
            });
            ipcRenderer.on('version', (event, version) => {
                document.getElementById('version').innerText = version;
            });
    }, []);
    return (<div><h1>Hello Testing React, Webpack, Electron </h1> <span id="version">vX.Y.Z</span><div id="messages"></div></div>);
}

export default App;
