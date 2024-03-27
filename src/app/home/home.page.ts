import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { SampleService } from '../sample.service';
import { Company } from './model/model';
import { ModalComponent } from '../modal/modal.component';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  company: Company[] = [];

  constructor(private route: Router, private authenticate: AuthenticationService, private sample: SampleService, private modalController: ModalController, private alertController: AlertController ) {}

  ngOnInit(): void {
    this.sample.getMusic().subscribe(item => {
      this.company = item;
      console.log(item)
    });
  }

async logout(){
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Status',
    message: 'LOG OUT SUCCESSFULLY',
    buttons: ['OK']
  });
  await alert.present();
  this.authenticate.canProceed = true;
  this.route.navigate(['login']);
}
setting(){

  this.route.navigate(['setting'])
}
async toggleModal() {
  const modal = await this.modalController.create({
    component: ModalComponent
  });
  return await modal.present();
}




}
