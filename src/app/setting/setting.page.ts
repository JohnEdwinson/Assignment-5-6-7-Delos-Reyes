import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  condition = false;
  constructor(private route: Router) { }

back(){

  this.route.navigate(['home'])
}


  ngOnInit() {
  }

}
