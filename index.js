require('dotenv').config(); //read variables from .env file

const Coin = require('./coin').Coin
const config = require('./read_config')
const logger = require('./logger')

const coins_data = config.read_coins_info()

function load_coins(coins_data){
  var coins = []
  for (const d of coins_data) {
    const coin = new Coin(...d)
    coins.push(coin)
    coin.check_price()
  }
  return coins
}

//MAIN CODE
logger.log_start()
const coins = load_coins(coins_data)

const check_interval = 3 * 60 * 1000 //check every 3 minutes

var myTimer = setInterval(function(){
  for (const c of coins) {
    c.check_price()
  }
}, check_interval)
