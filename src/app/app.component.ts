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
  selectedTag: string;
  linkImage: string;
  linkImageTerceiro: string;
  statusCode: string;
  numero: string;
  gatos: string[] = []

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getTags()
      .subscribe(tags => {
        this.tags = tags.message
      })

    this.appService.getGatos()
      .subscribe(gatos => {
        this.gatos = gatos
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
    this.linkImage = 'https:\/\/randomfox.ca\/images\/' + valor + '.jpg';
  }

  consultarTerceiro() {
    console.log(this.selectedTag);
    this.linkImageTerceiro = 'https://http.cat/' + Number(this.numero)
  }

  terceiroModal: boolean = false;

  abrirTerceiroModal() {
    this.terceiroModal = !this.terceiroModal;
  }
}
