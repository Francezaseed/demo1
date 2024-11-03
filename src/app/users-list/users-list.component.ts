import { Component, OnInit} from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{
  public userlist:any | undefined;
  constructor(private _user:UserService){
    
  }
  async ngOnInit(): Promise<void> {
    await this.getData();
  }

  async getData(){
    this._user.getUserList().subscribe({next:(resp:any)=>{
      this.userlist = resp;
    },error:(err)=>{
      console.log(err);
    }})
  }
}
