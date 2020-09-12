import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactionId: any;
  transaction: any;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

  search(){
    console.log(this.transactionId)
    this.transactionService.searchById(this.transactionId).subscribe((data) => {
      console.log(data);
      this.transaction = data;
    })
  }

  addStaffMember(){
    console.log("addStaffMember")
  }
}
