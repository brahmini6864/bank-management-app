import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TransactionsService } from "../../services/transactions.service";

@Component({
  selector: "app-deposit-withdraw",
  templateUrl: "./deposit-withdraw.component.html",
  styleUrls: ["./deposit-withdraw.component.css"]
})
export class DepositWithdrawComponent implements OnInit {
  transactionForm: FormGroup;
  availableBalance;
  isWithdrawLimitExeeded = false;
  isAmountEmpty = false;
  errors = {
    amountEmpty: "Please enter some amount",
    withDrawLimitExceeds: "insufficient balance..!"
  };
  constructor(
    private formBuilder: FormBuilder,
    private transactionService: TransactionsService,
    private router: Router
  ) {
    this.transactionService.getAvailableBalance().subscribe(data => {
      this.availableBalance = data;
    });
  }

  ngOnInit() {
    this.transactionService.setTotalBalance(400000);
    this.transactionForm = this.formBuilder.group({
      amount: ["", Validators.required]
    });
  }

  depositeAmount() {
    if (this.transactionForm.invalid) {
      this.isAmountEmpty = true;
      return;
    }
    let availableBalance =
      this.availableBalance + this.transactionForm.get("amount").value;
    let transactionHistory = {
      transactionDate: new Date(),
      type: "Deposit",
      enteredAmout: this.transactionForm.get("amount").value,
      currentBalance: availableBalance
    };
    this.transactionService.setAvailableBalance(availableBalance);
    this.transactionService.setTransactionHistory(transactionHistory);
    this.clearForm();
  }

  withdrawAmount() {
    if (this.transactionForm.invalid) {
      this.isAmountEmpty = true;
      return;
    }
    let withdrawBalance =
      this.availableBalance - this.transactionForm.get("amount").value;
    let transactionHistory = {
      transactionDate: new Date(),
      type: "Withdraw",
      enteredAmout: this.transactionForm.get("amount").value,
      currentBalance: withdrawBalance
    };
    if (withdrawBalance < 0) {
      this.isWithdrawLimitExeeded = true;
    } else {
      this.transactionService.setAvailableBalance(withdrawBalance);
      this.transactionService.setTransactionHistory(transactionHistory);
      this.clearForm();
    }
  }

  clearForm() {
    this.transactionForm.get("amount").setValue("");
    this.isWithdrawLimitExeeded = false;
    this.isAmountEmpty = false;
  }

  gotoTransactionHistory() {
    this.router.navigate(["/transaction-history"]);
  }
}
