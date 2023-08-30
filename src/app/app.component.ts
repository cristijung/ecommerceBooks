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
      titulo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      categoria: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      autor: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      editora: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      dataUltimaEdicao: ['', Validators.required],
      precoCusto: [0, [Validators.required, Validators.min(0)]],
      precoVenda: [0, [Validators.required, Validators.min(0)]],
      volumesEstoque: [0, [Validators.required, Validators.min(0)]],
      vendidos: [0,  [Validators.required, Validators.min(0)]],
      dataUltimaVenda: ['', Validators.required],
      nomeVendedor: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      comissao: [true],
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      console.log('Formulário enviado:', this.myForm.value);
    }
  }
}
