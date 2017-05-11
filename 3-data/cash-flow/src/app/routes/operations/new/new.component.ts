import { Operation } from './../data/operation.model';
import { OperationsService } from './../data/operations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-new',
  template: `
    <p>
      new Works!
    </p>
    <form class="container">
      <label for="description">Description</label>
      <input name="description" 
        #inputDescription 
        [value]="operation.description" 
        (change)="operation.description=inputDescription.value" 
        type="text"/>
      <label for="amount">Amount</label>
      <input name="amount" 
        [(ngModel)]="operation.amount" 
        type="number"/>
      <button (click)="saveOperation()">Save</button>
    </form>
<<<<<<< HEAD
    NumOps:{{operationsService.numOps}}
=======
    <blockquote>
      <em>{{ operation | json }}</em>
    </blockquote>
>>>>>>> 8f661b061d3abefc006d33c9c96e3fbc366aa0c5
  `,
  styles: []
})
export class NewComponent implements OnInit {
  public operation: Operation;

  constructor(public operationsService: OperationsService) { }

  ngOnInit() {
    this.createNewOperation();
  }

  createNewOperation() {
    this.operation = this.operationsService.newOperation();
  }

  saveOperation() {
    this.operationsService.saveOperation(this.operation);
    this.createNewOperation();
  }

}
