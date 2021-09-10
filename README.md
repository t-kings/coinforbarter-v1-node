# CoinForBarter V1 NodeJs Library

### How to use

<cd>npm install coinforbarter      -node-sdk</cd>

```bash
const CoinForBarter = require('coinforbarter      -node-v3');

const c4b = new CoinForBarter(PUBLIC_KEY, SECRET_KEY, SECRET_HASH);

const customers = c4b.Customers.findAll();
```

For staging, Use TEST API Keys. For production, use LIVE API KEYS. You can get your PUBLIC_KEY and SECRET_KEY from the CoinForBarter dashboard.

Go [here](https://dashboard.coinforbarter.com/settings/api) to get your API Keys.


Turn on Test Mode to get TEST API KEYS and Turn off Test Mode to get LIVE API KEYS

## CoinForBarter Services exposed by the library

1.  #### Customer
      ##### Methods
      - findAll
      - findOne
      - create
      - update


2.  #### BankAccount
      ##### Methods
      - getBankAccountName
      - create
      - findAll
      - findOne
      - makePrimary
      - getBanks


3.  #### Payment
      ##### Methods
      - findOne
      - findAll
      - create
      - setCurrency
      - lockCurrency
      - getPaymentUpdates
      - cancel


4.  #### PaymentPlan
      ##### Methods
      - findAll
      - findOne
      - create
      - update


5.  #### PaymentPlanSubscriber
      ##### Methods
      - create
      - findOne
      - findAll
      - remove


6.  #### Payout
      ##### Methods
      - findAll
      - findOne


7.  #### Transaction
      ##### Methods
      - findAll
      - findOne
      - verify
      - events
      - getFee
      - webhook


8.  #### Transfer
      ##### Methods
      - findAll
      - findOne
      - create
      - getFee


9.  #### WalletAddress
      ##### Methods
      - create
      - findAll
      - findOne
      - makePrimary


10. ####  Webhook
      ##### Methods
      - validate


11. #### Misc
      ##### Methods
      - getCountries
      - getBalance
      - getCurrencies


All methods can be called this way

```bash

const customers = c4b.Customer.findAll();

```
i.e

```bash

 c4b:{
    [service]:method
 }


```
<cd>Some methods may take body data or query params in objects</cd>

For more information on the services listed above, visit the [CoinForBarter documentation](https://developers.coinforbarter.com)


CoinForBarter V1 NodeJs Library is an MIT      -licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://developers.coinforbarter.com).

## Stay in touch

      - Author - [Nwachukwu, Kingsley Tochukwu](https://linkedin.com/in/t-kings)
      - Website - [https://coinforbarter.com](https://coinforbarter.com/)
      - Twitter - [@t-kings](https://twitter.com/t-kings)

## License

CoinForBarter is [MIT licensed](LICENSE).
