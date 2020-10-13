import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {mask} from '../../../shared/helpers/mask.helper';
import {take} from 'rxjs/operators';
import {AddressService} from '../../../core/api/address.service';
import {User} from '../../../shared/models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userForm: FormGroup;
  mask = mask;
  user: User;

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService
  ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      userName: [this.user?.userName || '', Validators.required],
      email: [this.user?.email || '', Validators.email],
      address: this.fb.group({
        street: [this.user?.address?.street || '', Validators.required],
        postalCode: [this.user?.address?.postalCode || '', Validators.required],
        uf: [this.user?.address?.uf || '', Validators.required],
        city: [this.user?.address?.city || '', Validators.required],
        neighborhood: [this.user?.address?.neighborhood || '', Validators.required],
        number: [this.user?.address?.number || '', Validators.required],
      })
    });
    this.user ? this.userForm.disable() : this.userForm.enable();
  }

  checkZipAndRequest(event: string) {
    if (this.userForm.get('address').get('postalCode').valid) {
      this.addressService.getAddressByCep(event).pipe(take(1)).subscribe(
        response => {
          this.userForm.get('address').patchValue({
            uf: response.uf,
            city: response.localidade,
            street: response.logradouro,
            neighborhood: response.bairro,
          });
        }
      );
    }
  }

  edit() {
    this.userForm.enabled ? this.userForm.disable() : this.userForm.enable();
  }

  postNewUser() {
    console.log(this.userForm.getRawValue());
    localStorage.setItem('user', JSON.stringify(this.userForm.getRawValue()));
  }
}
