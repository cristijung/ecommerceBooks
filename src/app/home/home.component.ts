import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

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
export class HomeComponent {
  
  constructor(http: HttpClient) {
    http
      .get<any[]>('https://ebooks-api-steel.vercel.app/books')
      .subscribe((data) => {
        this.veterinarios = data;
      });
    }

    displayedColumns: string[] = ['id', 'name', 'email'];
}
