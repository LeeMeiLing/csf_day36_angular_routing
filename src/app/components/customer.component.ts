import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy{

  param$! : Subscription;
  queryParam$!: Subscription;
  fids!: string[];
  joinedFids:string = ""
  customerId: string = "";

  constructor(private activatedRoute: ActivatedRoute){

  }
 
  // ngOnInit(): void {
  //   this.param$ = this.activatedRoute.params.subscribe(
  //     (params) => {
  //       this.customerId = params['custId'];
  //       console.log(this.customerId);
  //     }
  //   )

  //   this.queryParam$ = this.activatedRoute.queryParams.subscribe(
  //     (queryParams) => {
  //       this.fids = queryParams['fids'].split('|');
  //     }
  //   )
  // }

  ngOnInit(): void {
    this.param$ = this.activatedRoute.params.subscribe(
      (params)=> {
        this.customerId = params['custId'];
        console.log(this.customerId);
      }
    )

    this.queryParam$ = this.activatedRoute.queryParams.subscribe(
      (queryParams) => {
        this.fids = queryParams['fids'].split('|');
        console.log("> fids : ",this.fids)
      }
    )
}

  // clear memory every time page change
  // dont unsubscribe if other components is listening to it
  ngOnDestroy(): void {
    this.param$.unsubscribe();
    this.queryParam$.unsubscribe();
    this.joinedFids = "";
  }

  concat(val:any){
    this.joinedFids = this.joinedFids + val + '|'
  }
}
