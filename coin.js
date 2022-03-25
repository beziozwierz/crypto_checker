const axios = require('axios')
const mailer = require('./mailer')
const logger = require('./logger')

class Coin {
  constructor(name, address, price = 0, grow_ratio = 1.8){
    this.name = name
    this.address = address
    this.pump_counter = 0;
    this.price = price;
    if(this.price != 0)
      logger.log_price_init(this.name, this.price)
    this.grow_ratio = grow_ratio;
  }

  async check_price(){
    axios.get('https://api.pancakeswap.info/api/v2/tokens/'+this.address).then(res=>{
      const new_price = res.data.data.price
      if(this.price == 0){     //initialize price
        this.price = new_price
        logger.log_price_init(this.name, this.price)
        return
      }
      if(new_price >= this.price * this.grow_ratio){
        this.pump_counter++
        logger.log_price_change(this.name, this.price, new_price, this.pump_counter)
        mailer.send_mail(this.name, this.price, new_price)
        this.price = new_price
        return
      }
    }).catch(e=>{
        logger.log_price_error(this.name)
        return
    })
  }
}

exports.Coin = Coin
