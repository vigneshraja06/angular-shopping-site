import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.setChangeValidate();
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.formGroup = this.formBuilder.group({
      email: [
        null,
        [Validators.required, Validators.pattern(emailregex)],
        this.checkInUseEmail,
      ],
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      cname: [null],
      address: [null, Validators.required],
      city: [null, Validators.required],
      zipcode: [null, Validators.required],
      phone: [null, Validators.required],
      validate: '',
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe((validate) => {
      if (validate == '1') {
        this.formGroup
          .get('fname')
          .setValidators([Validators.required, Validators.minLength(3)]);
        this.titleAlert = 'You need to specify at least 3 characters';
      } else {
        this.formGroup.get('fname').setValidators(Validators.required);
      }
      this.formGroup.get('fname').updateValueAndValidity();
    });

    this.formGroup.get('validate').valueChanges.subscribe((validate) => {
      if (validate == '1') {
        this.formGroup
          .get('lname')
          .setValidators([Validators.required, Validators.minLength(3)]);
        this.titleAlert = 'You need to specify at least 3 characters';
      } else {
        this.formGroup.get('lname').setValidators(Validators.required);
      }
      this.formGroup.get('lname').updateValueAndValidity();
    });

    this.formGroup.get('validate').valueChanges.subscribe((validate) => {
      if (validate == '1') {
        this.formGroup.get('cname').setValidators([Validators.minLength(10)]);
        this.titleAlert = 'You need to specify at least 10 characters';
      } else {
        this.formGroup.get('cname').updateValueAndValidity();
      }
    });

    this.formGroup.get('validate').valueChanges.subscribe((validate) => {
      if (validate == '1') {
        this.formGroup
          .get('address')
          .setValidators([Validators.required, Validators.minLength(15)]);
        this.titleAlert = 'You need to specify at least 15 characters';
      } else {
        this.formGroup.get('address').setValidators(Validators.required);
      }
      this.formGroup.get('address').updateValueAndValidity();
    });

    this.formGroup.get('validate').valueChanges.subscribe((validate) => {
      if (validate == '1') {
        this.formGroup
          .get('city')
          .setValidators([Validators.required, Validators.minLength(15)]);
        this.titleAlert = 'You need to specify at least 15 characters';
      } else {
        this.formGroup.get('city').setValidators(Validators.required);
      }
      this.formGroup.get('city').updateValueAndValidity();
    });

    this.formGroup.get('validate').valueChanges.subscribe((validate) => {
      if (validate == '1') {
        this.formGroup
          .get('zipcode')
          .setValidators([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(6),
          ]);
        this.titleAlert = 'You need to specify at least 6 characters';
      } else {
        this.formGroup.get('zipcode').setValidators(Validators.required);
      }
      this.formGroup.get('zipcode').updateValueAndValidity();
    });

    this.formGroup.get('validate').valueChanges.subscribe((validate) => {
      if (validate == '1') {
        this.formGroup
          .get('phone')
          .setValidators([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(12),
          ]);
        this.titleAlert = 'You need to specify at least 10 characters';
      } else {
        this.formGroup.get('phone').setValidators(Validators.required);
      }
      this.formGroup.get('phone').updateValueAndValidity();
    });
  }

  get fname() {
    return this.formGroup.get('fname') as FormControl;
  }

  get lname() {
    return this.formGroup.get('lname') as FormControl;
  }
  get cname() {
    return this.formGroup.get('cname') as FormControl;
  }
  get address() {
    return this.formGroup.get('address') as FormControl;
  }
  get city() {
    return this.formGroup.get('city') as FormControl;
  }
  get zipcode() {
    return this.formGroup.get('zipcode') as FormControl;
  }
  get phone() {
    return this.formGroup.get('phone') as FormControl;
  }

  checkInUseEmail(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable((observer) => {
      setTimeout(() => {
        let result =
          db.indexOf(control.value) !== -1 ? { alreadyInUse: true } : null;
        observer.next(result);
        observer.complete();
      }, 4000);
    });
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required')
      ? 'Field is required'
      : this.formGroup.get('email').hasError('pattern')
      ? 'Not a valid emailaddress'
      : this.formGroup.get('email').hasError('alreadyInUse')
      ? 'This emailaddress is already in use'
      : '';
  }

  onSubmit(post) {
    this.post = post;
  }
}
