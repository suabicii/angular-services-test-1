import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  toActiveAmount: number;

  constructor(private usersService: UsersService, private counterService: CounterService) { }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    this.toActiveAmount = this.counterService.incrementActive();
  }
}
