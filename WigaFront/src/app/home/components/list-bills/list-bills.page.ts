import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bill } from 'src/app/models/bill';
import { Detail } from 'src/app/models/detail';
import { Product } from 'src/app/models/product';
import { ProductoDto } from 'src/app/models/producto-dto';
import { BillService } from 'src/app/services/bill.service';
import { DetailService } from 'src/app/services/detail.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-bills',
  templateUrl: './list-bills.page.html',
  styleUrls: ['./list-bills.page.scss'],
})
export class ListBillsPage implements OnInit {

  bill: any;
  bills: any[] = [];
  details: Detail[] = [];
  producto: Product;
  productos: Product[] = [];
  total = 0;
  productosDto: ProductoDto[] = [];



  constructor(private route: ActivatedRoute, private billService: BillService,
     private detailService: DetailService, private productService: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      console.log(id);
      this.getBills(id);
      
    });
  }
  getBills(id: number){
    this.billService.getBillsById(id).subscribe(response => {
      this.bills = response;
      console.log(this.bills);
      
    })
  }

  listDetails(id: number): void {
    this.detailService.getDetails(id).subscribe(response =>{
      this.details = response;
      response.forEach(detail =>  {
        this.getProducto(detail.idProducto, detail.cantidad);
      });
    })
  }

  expandItem(bill) {
    
    if (bill != this.bill) {

      this.bills.map((listBills) => {
    
        if (bill === listBills) {
          listBills.open = !listBills.open;
          this.details = [];
          this.productosDto = [];
          this.total = 0;
          this.listDetails(bill.numero);
          this.bill = bill;
        } else {
          listBills.open = false;
        }
  
        return listBills;
      });
      
    }
    
  }

  getProducto(id: number, cantidad: number){
    let productoDto: ProductoDto;
    this.productService.getProductById(id).subscribe(response =>{
      this.total = response.precio*cantidad+this.total;
      productoDto = {nombre: response.nombre,precio: response. precio, cantidad: cantidad}
      this.productosDto.push(productoDto);      
    })
  }

}
