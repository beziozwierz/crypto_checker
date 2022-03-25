const fs = require('fs')

//FILE FORMAT:
//COIN_NAME;ADDRESS;#optional-PRICE;#optional-GROW_RATIO
function read_coins_info(){
  try {
    var ret = []
    const data = fs.readFileSync('./conf/config.txt', 'UTF-8');
    const lines = data.split(/\r?\n/);
    lines.forEach((line) => {
        if(line=='') //matching end of the file
          return
        const columns = line.split(';')
        ret.push(columns)
    });
    return ret
  } catch (err) {
      console.error("Couldn't read config file")
      console.error(err)
      process.exit(1)
  }
}

exports.read_coins_info = read_coins_info
