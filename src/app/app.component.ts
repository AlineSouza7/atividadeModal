import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'atividadeModal';

  // variáveis para conseguir conectar à API
  tags: object;
  selectedTag: string
  linkImage: string;
  statusCode: string;

  constructor (private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getTags()
      .subscribe(tags => {
        this.tags = tags.message
        console.log(this.tags)
      })
  }

  aberto: boolean = false;
  outroAberto: boolean = false;

  abrirModal() {
    this.aberto = !this.aberto;
  }

  abrirOutroModal() {
    this.outroAberto = !this.outroAberto;
  }

  consultar(valor) {
    console.log(this.selectedTag);
    this.linkImage = 'https://dog.ceo/api/breeds/image/random' + valor;
  }
}
