import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DepositWithdrawComponent } from "./views/deposit-withdraw/deposit-withdraw.component";
import { TransactionsHistoryComponent } from "./views/transactions-history/transactions-history.component";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: "", component: DepositWithdrawComponent },
      { path: "transactions", component: DepositWithdrawComponent },
      { path: "transaction-history", component: TransactionsHistoryComponent },
      { path: "**", redirectTo: "DepositWithdrawComponent" }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
