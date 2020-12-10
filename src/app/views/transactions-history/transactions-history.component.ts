import { Component, OnInit } from "@angular/core";
import { TransactionsService } from "../../services/transactions.service";

@Component({
  selector: "app-transactions-history",
  templateUrl: "./transactions-history.component.html",
  styleUrls: ["./transactions-history.component.css"]
})
export class TransactionsHistoryComponent implements OnInit {
  transactionHistory: any = [];
  constructor(private transactionService: TransactionsService) {}

  ngOnInit() {
    this.transactionService.getTransactionHistory().subscribe(data => {
      this.transactionHistory = data;
    });
    console.log(this.transactionHistory);
  }
}
