const dgram = require('dgram');
var musicians = new Map();
var instrumentsBySounds = new Map();

instrumentsBySounds.set('ti-ta-ti', 'piano');
instrumentsBySounds.set('pouet', 'trumpet');
instrumentsBySounds.set('trulu', 'flute');
instrumentsBySounds.set('gzi-gzi', 'violin');
instrumentsBySounds.set('boum-boum', 'drum');

var client = dgram.createSocket('udp4');
client.bind(9021);

client.on('message', function(msg, source) {
	console.log("Dgram has arrived: '" + msg + "'. Source address: " + source.address + ", source port: " + source.port);

	var payload = JSON.parse(msg);

	musicians.set(payload.uuid, [instrumentsBySounds.get(payload.sound), payload.activeSince]);
});

