/**
 * # Account API
 *
 * @module api.account
 */
import AccountOrdersApi from "./accountOrdersApi";

/**
 * Account API
 */
export default class AccountApi {

  private walletAddress: string;

  constructor(walletAddress: string) {
    this.walletAddress = walletAddress;
  }

  /**
   * Account Orders API
   */
  orders() {
    return new AccountOrdersApi(this.walletAddress);
  }

}
