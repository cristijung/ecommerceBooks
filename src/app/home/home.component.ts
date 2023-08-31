import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  books : newBook[] = [];

  constructor(http: HttpClient) {
    http
      .get<any[]>('https://ebooks-api-steel.vercel.app/books')
      .subscribe((data) => {
        this.books = data;
        console.log(data);
      });
    }

    displayedColumns: string[] = ['id', 'name', 'email'];
}

interface newBook {
  isbn: string,
  titulo: string,
  descricao: string,
  imagem: string,
  categoria: string,
  autor: string,
  editora: string,
  data_edicao: string,
  preco_custo: number,
  preco_venda: number,
  volumes_estoque: number,
  volumes_vendidos: number,
  data_venda: string,
  nome_vendedor: string,
  comissao: boolean,
};
