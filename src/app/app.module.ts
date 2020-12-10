import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DepositWithdrawComponent } from "./views/deposit-withdraw/deposit-withdraw.component";
import { TransactionsHistoryComponent } from "./views/transactions-history/transactions-history.component";
import { TransactionsService } from "./services/transactions.service";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DepositWithdrawComponent,
    TransactionsHistoryComponent
  ],
  bootstrap: [AppComponent],
  providers: [TransactionsService]
})
export class AppModule {}
