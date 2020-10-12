import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {mask} from '../../../shared/helpers/mask.helper';
import {take} from 'rxjs/operators';
import {AddressService} from '../../../core/api/address.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userForm: FormGroup;
  mask = mask;

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService
  ) {
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.email],
      address: this.fb.group({
        street: ['', Validators.required],
        postalCode: ['', Validators.required],
        uf: ['', Validators.required],
        city: ['', Validators.required],
        neighborhood: ['', Validators.required],
        number: ['', Validators.required],
      })
    });
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

  postNewUser() {
    console.log(this.userForm.getRawValue());
  }
}
