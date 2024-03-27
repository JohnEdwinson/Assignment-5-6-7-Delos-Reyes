import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: string = "";
  password: string = "";

  constructor(
    private alertController: AlertController,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async logIn() {
  
    const credentials = [
      { username: "user1", password: "12345" },
      { username: "admin", password: "123456" },
     
    ];

    const isValidCredentials = credentials.some(
      (cred) => cred.username === this.userName && cred.password === this.password
    );

    if (isValidCredentials) {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Status',
        message: 'Login Success',
        buttons: ['OK']
      });
      await alert.present();
      this.authenticationService.canProceed = true;
      this.router.navigate(['tabs/home']);
    } else {
      const toast = await this.toastController.create({
        message: 'Login Failed',
        duration: 3000, 
        position: 'bottom' 
      });
      await toast.present();
    }
  }
}
