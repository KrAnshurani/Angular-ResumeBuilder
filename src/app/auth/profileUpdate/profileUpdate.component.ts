import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileUpdate',
  templateUrl: './profileUpdate.component.html',
  styleUrls: ['./profileUpdate.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  formData: any = {};
  errors: any = [];

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }



  profileUpdate(): void {
    this.errors = [];
    this.auth.profileUpdate(this.formData)
      .subscribe((token) => {
        this.router.navigate(['/profile'], { queryParams: { updated: 'success' } });
       },
        (errorResponse) => {
          this.errors.push(errorResponse.error.error);
        });
  }




}
