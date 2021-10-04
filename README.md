# CoinForBarter NodeJs Library

CoinForBarter Nodejs Library - Integrate and Manage cryptocurrency payments for goods and services

![License, MIT](https://img.shields.io/badge/licence-MIT-black) ![npm, coinforbarter-node](https://img.shields.io/badge/npm-npm%20install%20coinforbarter--node-green) ![yarn, coinforbarter-node](https://img.shields.io/badge/yarn-yarn%20add%20coinforbarter--node-red)

## Table of Contents
---
  - [About](#about)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Services and Methods](#services-and-methods)
  - [Deployment](#deployment)
  - [Built Using](#built-using)
  - [CoinForBarter API References](#coinforbarter-api-references)


## About
---
This is a NodeJs package for implementing CoinForBarter.

## Getting Started
---
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. See references for links to dashboard and API documentation.

## Installation
---
```bash
$ npm install coinforbarter-node

# or
$ yarn add coinforbarter-node

```


## Usage
---
```bash
const CoinForBarter = require('coinforbarter-node');

const publicKey = 'xxxxxxxxxxxxx';
const privateKey = 'xxxxxxxxxxxxx';
const secretHash = 'xxxxxxxxxxxxx';
const coinforbarter = new CoinForBarter(publicKey, privateKey, secretHash);

# An example to get all customers
const customers = coinforbarter.Customer.findAll();
```


## Services and Methods
---

1.  ### Customer
This method handles all customers related to your account. The methods exposed by this service are listed below. [See customer object properties](https://developers.coinforbarter.com/api-reference/#customers-get-all-customers)

- #### findAll
This method gets the list of all customers.
```bash
const query = {};
const getAllCustomers = async () => { 
      return await coinforbarter.Customer.findAll(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#customers-get-all-customers)

- #### findOne
This method gets a particular customer by id.
```bash
const query = {};
const customerId = '';
const getCustomer = async (customerId) => { 
      return await coinforbarter.Customer.findOne(customerId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#customers-get-a-customer)

- #### create
This method creates a customer.
```bash
const params = {};
const createCustomer = async (params) => { 
      return await coinforbarter.Customer.create(params);
}
```
See  [customer parameters](https://developers.coinforbarter.com/api-reference/#customers-create-customer)

- #### update
This method updates a customer.
```bash
const params = {};
const updateCustomer = async (params) => { 
      return await coinforbarter.Customer.update(params);
}
```
See  [customer update parameters](https://developers.coinforbarter.com/api-reference/#customers-update)


2.  ### BankAccount
This method handles all bank account related to your account. The methods exposed by this service are listed below. [See bank account object properties](https://developers.coinforbarter.com/api-reference/#bank-accounts)

- #### getBankAccountName
```bash
const query = {};
const getBankAccountName = async () => { 
      return await coinforbarter.BankAccount.getBankAccountName(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#bank-accounts-get-account-name)

- #### create
```bash
const parms = {};
const createBankAccount = async (parms) => { 
      return await coinforbarter.BankAccount.create(parms);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#bank-accounts-create)

- #### findAll
This method gets the list of all bank accounts.
```bash
const query = {};
const getAllBankAccounts = async () => { 
      return await coinforbarter.BankAccount.findAll(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#bank-accounts-get-all)

- #### findOne
```bash
const query = {};
const bankAccountId = '';
const getBankAccount = async (bankAccountId) => { 
      return await coinforbarter.BankAccount.findOne(bankAccountId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#bank-accounts-get-one)

- #### makePrimary
```bash
const parms = {};
const bankAccountId = '';
const makePrimary = async (bankAccountId) => { 
      return await coinforbarter.BankAccount.makePrimary(bankAccountId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#bank-accounts-make-primary)

- #### getBanks
```bash
const query = {};
const countryCode = '';
const getBank = async (countryCode) => { 
      return await coinforbarter.BankAccount.getBanks(countryCode);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#bank-accounts-all-banks)


3.  ### Payment
This method handles all payments related to your account. The methods exposed by this service are listed below. [See payment object properties](https://developers.coinforbarter.com/api-reference/#payments)

- #### findOne
```bash
const query = {};
const paymentId = '';
const getPayment = async (paymentId) => { 
      return await coinforbarter.Payment.findOne(paymentId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payments-get-one)

- #### create
```bash
const params = {};
const createPayment = async (params) => { 
      return await coinforbarter.Payment.create(params);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payments-create)

- #### setCurrency
```bash
const params = {};
const setCurrency = async (params) => { 
      return await coinforbarter.Payment.setCurrency(params);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payments-set-currency)

- #### lockCurrency
```bash
const paymentId = '';
const lockCurrency = async (paymentId) => { 
      return await coinforbarter.Payment.lockCurrency(paymentId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payments-lock-currency)

- #### getPaymentUpdates
```bash
const query = {};
const getAllBankAccount = async () => { 
      return await coinforbarter.Payment.getPaymentUpdates(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#bank-accounts-all-banks)

- #### cancel
```bash
const query = {};
const paymentId = async () => { 
      return await coinforbarter.Payment.cancel(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#bank-accounts-all-banks)


4.  ### PaymentPlan

- #### findAll
```bash
const query = {};
const getAllPaymentPlan = async () => { 
      return await coinforbarter.PaymentPlan.findAll(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payment-plans-find-all)

- #### findOne
```bash
const query = {};
const getPaymentPlan = async () => { 
      return await coinforbarter.PaymentPlan.findOne(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payment-plans-find-one)

- #### create
```bash
const params = {};
const createPaymentPlan = async () => { 
      return await coinforbarter.PaymentPlan.create(params);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payment-plans-create)

- #### update
```bash
const params = {};
const updatePaymentPlan = async (params) => { 
      return await coinforbarter.PaymentPlan.update(params);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payment-plans-update)


5.  ### PaymentPlanSubscriber

- #### create
```bash
const params = {};
const createPaymentPlanSubscriber = async () => { 
      return await coinforbarter.PaymentPlanSubscriber.create(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payment-plan-subscribers-create)

- #### findOne
```bash
const query = {};
const paymentPlanSubscriberId = '';
const getPaymentPlanSubscriber = async (paymentPlanSubscriberId) => { 
      return await coinforbarter.PaymentPlanSubscriber.findOne(paymentPlanSubscriberId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payment-plan-subscribers-find-one)

- #### findAll
```bash
const query = {};
const getAllPaymentPlanSubscriber = async () => { 
      return await coinforbarter.PaymentPlanSubscriber.findAll(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payment-plan-subscribers-find-all)

- #### remove
```bash
const paymentPlanSubscriberId = '';
const removePaymentPlanSubscriber = async () => { 
      return await coinforbarter.PaymentPlanSubscriber.remove(paymentPlanSubscriberId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payment-plan-subscribers-remove)


6.  ### Payout

- #### findAll
```bash
const query = {};
const getAllPayout = async () => { 
      return await coinforbarter.Payout.findAll(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payouts-get-all)

- #### findOne
```bash
const query = {};
const payOutId = '';
const getPayout = async (payOutId) => { 
      return await coinforbarter.Payout.findOne(payOutId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#payouts-get-one)


7.  ### Transaction

- #### findAll
```bash
const query = {};
const getAllTransactions = async () => { 
      return await coinforbarter.Transaction.findAll(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#transactions-get-all)

- #### findOne
```bash
const query = {};
const transactionId = '';
const getTransaction = async (transactionId) => { 
      return await coinforbarter.Transaction.findOne(transactionId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#transactions-get-one)

- #### verify
```bash
const transactionId = '';
const verifyTransaction = async (transactionId) => { 
      return await coinforbarter.Transaction.verify(transactionId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#transactions-verify)

- #### events
```bash
const query = {};
const getEvent = async () => { 
      return await coinforbarter.Transaction.events(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#transactions-get-transaction-time-log)

- #### getFee
```bash
const transactionId = {};
const getfeeForTransaction = async (transactionId) => { 
      return await coinforbarter.Transaction.getFee(transactionId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#transactions-get-fee)

- #### webhook
```bash
const transactionId = {};
const transaction = async (transactionId) => { 
      return await coinforbarter.Transaction.webhook(transactionId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#transactions-webhook)


8.  ### Transfer

- #### findAll
```bash
const query = {};
const getAllTransfer = async () => { 
      return await coinforbarter.Transfer.findAll(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#transfers-get-all)

- #### findOne
```bash
const query = {};
const transferId = '';
const getTransfer = async (transferId) => { 
      return await coinforbarter.Transfer.findOne(transferId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#transfers-get-one)

- #### create
```bash
const params = {};
const createTransfer = async (params) => { 
      return await coinforbarter.Transfer.findAll(params);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#transfers-create)

- #### getFee
```bash
const query = {};
const getFeeForTransfer = async () => { 
      return await coinforbarter.Transfer.getFee(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#transfers-get-fee)


9.  ### WalletAddress

- #### create
```bash
const params = {};
const createWalletAddress = async (params) => { 
      return await coinforbarter.WalletAddress.create(params);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#wallet-addresses-create)

- #### findAll
```bash
const query = {};
const getAllWalletAddress = async () => { 
      return await coinforbarter.WalletAddress.findAll(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#wallet-addresses-get-all)

- #### findOne
```bash
const query = {};
const walletId = '';
const getWalletAddress = async (walletId) => { 
      return await coinforbarter.WalletAddress.findOne(walletId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#wallet-addresses-get-one)

- #### makePrimary
```bash
const query = {};
const walletAddressId = '';
const makeWalletAddressPrimary = async (walletAddressId) => { 
      return await coinforbarter.WalletAddress.makePrimary(walletAddressId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#wallet-addresses-make-primary)


10.  ###  Wallet

- #### findAll
```bash
const query = {};
const getAllWallet = async () => { 
      return await coinforbarter.Wallet.findAll(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#wallets-find-all)

- #### findOne
```bash
const query = {};
const walletId = '';
const getWallet = async (walletId) => { 
      return await coinforbarter.Wallet.findOne(walletId);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#wallets-find-one)

- #### create
```bash
const params = {};
const createWallet = async (params) => { 
      return await coinforbarter.Wallet.create(params);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#wallets-create)

- #### delete
```bash
const query = {};
const deleteWallet = async () => { 
      return await coinforbarter.Wallet.delete(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#wallets-delete)


11.  ### Misc

- #### getCountries
```bash
const query = {};
const getCountriesMisc = async () => { 
      return await coinforbarter.Misc.getCountries(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#misc-get-countries)

- #### getBalance
```bash
const query = {};
const getBalanceMisc = async () => { 
      return await coinforbarter.Misc.getBalance(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#misc-get-wallet-balances)

- #### getCurrencies
```bash
const query = {};
const getCurrenciesMisc = async () => { 
      return await coinforbarter.Misc.getCurrencies(query);
}
```
See list of [query parameters](https://developers.coinforbarter.com/api-reference/#misc-get-currencies)


This SDK can be used closely with the official [API Reference](https://developers.coinforbarter.com/api-reference). All services and methods can be called this way

```bash

const customers = c4b.Customer.findAll();

```
i.e

```bash

 c4b:{
    [service]:method
 }

# I will do more on documenting each method till i can complete it 😂
```



## Built Using
---
- Typescript


## CoinForBarter API References
- [CoinForBarter Developers Doc](https://developers.coinforbarter.com)
- [CoinForBarter API Reference](https://developers.coinforbarter.com/api-reference/)
- [CoinForBarter Inline Payment Doc](https://developers.coinforbarter.com/docs/integration-options-coinforbarter-inline/)
- [CoinForBarter Dashboard](https://dashboard.coinforbarter.com)

## Stay in Touch

- Author - [Nwachukwu, Kingsley Tochukwu](https://linkedin.com/in/tkings)
- Twitter - [@tkings_](https://twitter.com/tkings_)
- Github - [t-kings](https://github.com/tkings)

Contributions are open, meta properties are not being returned yet by this SDK. You can send me an email via [tochukwu@coinforbarter.com](mailto:tochukwu@coinforbarter.com)


