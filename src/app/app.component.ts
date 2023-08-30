import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.myForm = this.FormBuilder.group({
      codigoCadastro: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.maxLength(300), Validators.minLength(1)]],
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log('Formulário enviado:', this.myForm.value);
    }
  }
}
