import {
  Transaction,
  Payment,
  Payout,
  Transfer,
  WalletAddress,
  PaymentPlan,
  PaymentPlanSubscriber,
  BankAccount,
  Customer,
  Misc,
  Webhook,
} from './lib';
import { CoinForBarterRequest } from './services';

export default class CoinForBarter {
  public Transaction: Transaction;
  public Payment: Payment;
  public Payout: Payout;
  public Transfer: Transfer;
  public WalletAddress: WalletAddress;
  public PaymentPlan: PaymentPlan;
  public PaymentPlanSubscriber: PaymentPlanSubscriber;
  public BankAccount: BankAccount;
  public Customer: Customer;
  public Misc: Misc;
  public Webhook: Webhook;
  private readonly Request: CoinForBarterRequest;
  constructor(
    private readonly publicKey: string,
    private readonly secretKey: string,
    private readonly secretHash: string = '',
  ) {
    this.Request = new CoinForBarterRequest(this.publicKey, this.secretKey);
    this.Payment = new Payment(this.Request, this.publicKey);
    this.Payout = new Payout(this.Request);
    this.Transfer = new Transfer(this.Request);
    this.WalletAddress = new WalletAddress(this.Request);
    this.PaymentPlan = new PaymentPlan(this.Request);
    this.PaymentPlanSubscriber = new PaymentPlanSubscriber(this.Request);
    this.BankAccount = new BankAccount(this.Request);
    this.Customer = new Customer(this.Request);
    this.Misc = new Misc(this.Request);
    this.Webhook = new Webhook(this.secretHash);
  }
}
