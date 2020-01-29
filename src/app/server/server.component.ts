import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  mm='';
  serverId: number=10;
  serverStatus='Offline';
  serverCreated= false;
  servers = ['server1', 'server 2'];
  serverName= 'test';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
   }

  ngOnInit() {
  }
  createServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    }
  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
