import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class TransactionsService {
  private subject = new BehaviorSubject<number>(0);
  private transactionHistory: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  constructor() {
    this.subject.next(400000);
  }

  getTotalBalance() {
    return localStorage.getItem("totalBalance");
  }

  setTotalBalance(amount) {
    localStorage.setItem("totalBalance", amount);
  }
  getAvailableBalance(): Observable<number> {
    return this.subject;
  }
  setAvailableBalance(amount) {
    this.subject.next(amount);
  }
  setTransactionHistory(data) {
    const currentValue = this.transactionHistory.value;
     const updatedValue = [...currentValue, data];
    this.transactionHistory.next(updatedValue);
  }
  getTransactionHistory() {
    return this.transactionHistory;
  }
}
