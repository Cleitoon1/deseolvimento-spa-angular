import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html'
})
export class DetalheProdutoComponent implements OnInit {

  id: number;
  produto: Produto;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) {
    this.id = this.route.snapshot.params["id"]
   }

  ngOnInit(): void {
    this.produtoService.obterProduto(this.id)
      .subscribe({
        next: produto => {
          this.produto = produto;
        },
        error: error => console.log(error)
      });
  }

}
