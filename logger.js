const fs = require('fs')

function append_to_log(text){
  const filename = get_date_string()
  try {
    fs.appendFileSync('./logs/'+filename, text);
  } catch (error) {
    console.log(error);
  }
}

function get_date_string(){
  let date = new Date();
  let d = date.getDate()
  d = d < 10 ? '0'+d : d
  let m = date.getMonth()
  m = m < 10 ? '0' + m : m
  const y = date.getFullYear()
  return `${d}-${m}-${y}`
}

function get_clock_string(){
  const d = new Date()
  let h = d.getHours()
  h = h < 10 ? '0' + h : h
  let m = d.getMinutes()
  m = m < 10 ? '0' + m : m
  let s = d.getSeconds()
  s = s < 10 ? '0' + s : s
  return `${h}:${m}:${s}`
}

function log_price_init(coin_name, price_val){
  let str = `${coin_name} initialized with price: ${price_val}. Time: ${get_clock_string()}\n`
  append_to_log(str)
}

function log_price_error(coin_name){
  let str = `Error when fetching ${coin_name} price. Time: ${get_clock_string()}\n`
  append_to_log(str)
}

function log_price_change(coin_name, old_price, new_price, pump_counter){
  let str = `Price of ${coin_name} grows! Old: ${old_price}; New: ${new_price}; Pump no: ${pump_counter}. Time: ${get_clock_string()}\n`
  append_to_log(str)
}

function log_mail(coin_name){
  append_to_log(`Email about ${coin_name} has been sent correctly!\n`)
}

function log_start(){
  append_to_log(`Script started at ${get_clock_string()}\n`)
}

exports.log_price_change = log_price_change
exports.log_price_error = log_price_error
exports.log_price_init = log_price_init
exports.log_mail = log_mail
exports.log_start = log_start
