import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { from } from 'rxjs/observable/from';
// import { environment } from '../environments/environment';
const Web3 = require('web3');

declare let window: any;

@Injectable()
export class Web3Service {

  public web3: any;

  constructor() {
    this.checkAndInstantiateWeb3();
  }

  checkAndInstantiateWeb3 = () => {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    /*if (typeof window['web3'] !== 'undefined') {
      console.warn(
        'Using web3 detected from external source. If you find that your accounts don\'t appear or you have 0 MetaCoin, ensure you\'ve configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask'
      );*/
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
    /*} else {
      console.warn(
        'No web3 detected. Falling back to ${environment.HttpProvider}. You should remove this fallback when you deploy live, as it\'s inherently insecure. Contotemr switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask'
      );
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      // this.web3 = new Web3(new Web3.providers.HttpProvider(new Web3.providers.HttpProvider('https://api.myetherapi.com/eth')/!*environment.HttpProvider*!/));
      this.web3 = new Web3(new Web3.providers.HttpProvider('https://api.myetherapi.com/eth'));
    }*/
  };

  getAccounts(): Observable<any> {
    return Observable.create((observer: any) => {
      this.web3.eth.getAccounts((err: any, accs: any) => {
        if (err != null) {
          observer.error('There was an error fetching your accounts.')
        }

        if (accs.length === 0) {
          observer.error('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.')
        }

        observer.next(accs)
        observer.complete()
      });
    })
  }

  toWei(amount:string) {
    return this.web3.utils.toWei(amount, "ether")
  }

  sendTransaction(from: any, to: any, amount: any): Observable<any> {
    return Observable.create((observer: any) => {

      console.log("from - ", from);
      console.log("to - ", to);
      console.log("amount - ", amount);

      let data = { from: from, to: to, value: this.web3.utils.toWei(amount, "ether") };

      this.web3.eth.getAccounts((error, result) => {
        this.web3.eth.sendTransaction(
          data, function(err, transactionHash) {
            if (!err) {
              console.log(transactionHash + " success");
              observer.next(transactionHash)
              observer.complete()
            } else {
              console.log(transactionHash + " !success");
              observer.error()
            }
          });
      });

      /*this.web3.eth.sendTransaction(data, function (err: any, transactionHash: any) {
        if (err) {
          console.log(err); // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
        }
        observer.next(transactionHash)
        observer.complete()
      });*/

      //this.web3.eth.eth.sendTransaction({ from: eth.coinbase, to: eth.accounts[1], value: web3.toWei(0.05, "ether") })
      /*this.web3.eth.getAccounts((err, accs) => {
        if (err != null) {
          observer.error('There was an error fetching your accounts.')
        }
        if (accs.length === 0) {
          observer.error('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.')
        }
        observer.next(accs)
        observer.complete()
      });*/
    })
  }

}
