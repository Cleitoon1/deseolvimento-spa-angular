import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styles: [
  ]
})
export class ListaProdutoComponent implements OnInit {

  public produtos: Produto[];

  constructor(private produtoService: ProdutoService) {
    this.produtos = [];
   }


  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe({
        next: produtos => {
          this.produtos = produtos;
          console.log(produtos);
        },
        error: error => console.log(error)
      });
  }

}
