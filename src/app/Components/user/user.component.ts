import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { IUser } from '../IUser';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isHidden = false;
  users: IUser[] = [
    {
      name: 'quan',
      address: 'Quan hoa,Cau giay',
      phone: '09901821201',
      email: 'quan@gmail.com',
      image: 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg'
    },
    {
      name: 'Nguyet',
      address: 'Tran Hung Dao',
      phone: '0919218281',
      email: 'nguyet@gmail.com',
      image: 'https://thuthuatnhanh.com/wp-content/uploads/2019/12/anh-gai-xinh-de-thuong-cap-3-580x580.jpg'
    },
    {
      name: 'Ngat',
      address: 'Nam Dinh',
      phone: '089128121',
      email: 'ngat@gmail.com',
      image: 'https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg'
    },
  ];
  constructor() {
    
  }


  ngOnInit(): void {
  }

  showImage() {
    this.isHidden = !this.isHidden;
  
  }

  delete(index: number) {
    if (confirm("Are you sure to delete user ?")) {
      this.users.splice(index, 1);
    }
  }

  search(event: any) {
    let keyword = event.target.value;
    console.log(keyword);
    const persions = this.users.find(element => element.name == keyword)
    console.log(persions);


  }
}
