import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm: FormGroup;

  constructor(private FormBuilder: FormBuilder, private http: HttpClient) {
    this.myForm = this.FormBuilder.group({
      codigoCadastro: ['', Validators.required],
      titulo: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120),
        ],
      ],
      descricao: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(280),
        ],
      ],
      imagem: ['', [Validators.required, Validators.minLength(3)]],
      categoria: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120),
        ],
      ],
      autor: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120),
        ],
      ],
      editora: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120),
        ],
      ],
      dataUltimaEdicao: ['', Validators.required],
      precoCusto: ["", [Validators.required, Validators.min(0)]],
      precoVenda: ["", [Validators.required, Validators.min(0)]],
      volumesEstoque: ["", [Validators.required, Validators.min(0)]],
      vendidos: ["", [Validators.required, Validators.min(0)]],
      dataUltimaVenda: ['', Validators.required],
      nomeVendedor: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120),
        ],
      ],
      comissao: [true],
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      const book = this.myForm.value;

      const newBook = {
        isbn: book.codigoCadastro,
        titulo: book.titulo,
        descricao: book.descricao,
        imagem: book.imagem,
        categoria: book.categoria,
        autor: book.autor,
        editora: book.editora,
        data_edicao: book.dataUltimaEdicao,
        preco_custo: book.precoCusto,
        preco_venda: book.precoVenda,
        volumes_estoque: book.volumesEstoque,
        volumes_vendidos: book.vendidos,
        data_venda: book.dataUltimaVenda,
        nome_vendedor: book.nomeVendedor,
        comissao: book.comissao,
      };

      const promise = this.http.post('https://ebooks-api-steel.vercel.app/books', newBook);

      lastValueFrom(promise).then(() => {
        alert("Formulário enviado com sucesso!");
        this.myForm.reset();
        location.reload()
      }).catch(() => {
        alert("Ocorreu um erro ao enviar o formulário");
      });
    }
  }
}
