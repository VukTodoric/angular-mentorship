import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { take, tap } from 'rxjs';
import { CountriesService } from 'src/app/features/services/countries.service';
import { Country } from 'src/app/features/models/country.interface';
import { RegistrationCredentials } from '../../models/credentials.interface';
import { Router } from '@angular/router';
import { Role } from '../../models/role.enum';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  test: string[] = [];
  countryIndex!: number;
  user!: RegistrationCredentials;
  selectPlaceholder: string = '-- Please choose a country --';

  PATERN = /^[A-Z].{0,}$/;

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(this.PATERN),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z].{0,}$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    countryId: new FormControl(this.selectPlaceholder),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/[\W\w]+/),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.populateCountryDropdown();
  }

  selectedCountry(event: Event) {
    this.countryIndex = +(event.target as HTMLSelectElement).value;
    this.form.patchValue({
      countryId: this.countryIndex,
    });
  }

  populateCountryDropdown() {
    this.countriesService
      .getCountries()
      .pipe(
        take(1),
        tap((contries: Country[]) => {
          contries.forEach((country: Country) =>
            this.test.push(country.country)
          );
        })
      )
      .subscribe();
  }

  get formPopulated() {
    return (this.user = {
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      countryId: this.countryIndex,
      email: this.form.value.email,
      password: this.form.value.password,
      role: Role.USER,
      createdAt: new Date().toISOString(),
    });
  }

  onSubmit() {
    if (
      this.form.invalid ||
      this.form.value.password !== this.form.value.confirmPassword ||
      this.countryIndex === undefined
    ) {
      return;
    }

    this.authService.registration(this.formPopulated).pipe(take(1)).subscribe();

    this.form.reset();
    this.router.navigateByUrl('/login');
  }
}
