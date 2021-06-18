import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  clients: Client[] = [];

  constructor(private clientService: ClientService) {

  }
  ngOnInit(): void {
    this.clientService.getClients().subscribe(response => {
      this.clients = response;
      console.log(this.clients);
      
    });
  }

}
