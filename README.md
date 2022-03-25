# crypto_checker
Simple crypto bot to check price changes and notify via email.
For now, it supports only BNB tokens (because it is using pancakeswap api).
Prices are checked every 3 minutes.

## Email configuration
This program in order to work needs to have email account configured. 

**.env** file should include the following variables: 

MAIL_FROM
MAIL_FROM_PASSWORD
MAIL_TO

## Reading data
**conf/config.txt** file is requred in order to load cryptocurrencies and tracking data. Data must be semicolor separated.

*Format is:* 
1. Name - will be displayed in email
2. Token address 
3. <optional> price to track (ussualy buy price). If not set, current price is used.
4. <optional> Pump at witch email should be sent. Default is set to 80% (1.8).

*Example row:*
`ShitCoin;0x28d82c4d7315c02d19562db1080a713eb5cc2639;0.03,1.4`

*Means:*
`Shitcoin` - token name that will appear in an email
`0x28d82c4d7315c02d19562db1080a713eb5cc2639` - address
`0.03` - price to track is 0.03 USD
`1.4` - notify user via email after 40% grow. After notification, current price is tracked.
