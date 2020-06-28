const dgram = require('dgram');
const {v4 : uuidv4 } = require('uuid');
const moment = require('moment');

const instrumentType = process.argv.slice(2)[0];
console.log(instrumentType);



console.log(instrumentType);

switch(instrumentType) {
	case 'flute':
	instrumentSound = 'trulu';
	break;
	case 'piano':
	instrumentSound = 'ti-ta-ti';
	break;
	case 'trumpet':
	instrumentSound = 'pouet';
	break;
	case 'violin':
	instrumentSound = 'gzi-gzi';
	break;
	case 'drum':
	instrumentSound = 'boum-boum';
}


const server = dgram.createSocket('udp4');
const address = ""
server.bind(0, '', () => {
	server.setBroadcast(true)
});


function sendMessage()
{
	var data = {
		sound : instrumentSound,
		uuid : uuidv4(),
		activeSince : moment()
	}

	payload = JSON.stringify(data);
	message = new Buffer.from(payload);

	server.send(message, 0, message.length, 9021, '255.255.255.255', () => {
		console.log("Sending message :"+payload+"via port"+server.address().port);
	})
}

setInterval(sendMessage, 1000)

