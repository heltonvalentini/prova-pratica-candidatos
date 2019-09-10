import {Component, ViewChild, ElementRef} from '@angular/core';
import {NotificationsService} from "angular2-notifications";
import {SummaryService} from '../summary.service';


@Component({
  selector: 'panel-passwords',
  styleUrls: ['panelPasswords.component.css'],
  templateUrl: 'panelPasswords.component.html'
})
export class PanelPasswordsComponent {



  public nroPagina: number;
  public filtro: any;
  public itens: any[];

  constructor(private notifications: NotificationsService,
              private summaryService: SummaryService) {
  }

  ngOnInit() {
    this.limparCampos();
  }

  limparCampos() {

    this.filtro = {
      url: '',
      usuario: ''
    }
  }

  pesquisar() {

    setTimeout(() => {

      let filtroParam: any = {
        url: this.filtro.url,
        usuario: this.filtro.usuario
      };

      this.summaryService.obtemReturnPassword(filtroParam).subscribe(result => {
        if(result.value == null || result.value.length == 0) {
          this.notifications.info('Atenção', 'Nenhum dado encontrado');
        }

        let eventos: any[] = [];
        result.value.forEach((item, index) => {
          let evento: any = {};
          evento.id = index;
          evento.url = item[0];
          evento.usuario = item[1];
          evento.senha = item[2];

          eventos.push(evento);
        });
        this.returnPasswordResult(eventos);
      });
    }, 1000);
  }

  salvar(item){
    this.summaryService.saveReturnPassword(item).subscribe(result => {
    });
  }

  excluir(item){
    this.summaryService.deleteReturnPassword(item).subscribe(result => {
    });
  }

  returnPasswordResult(result: any) {
    if (result) {
      this.itens = result;
      this.nroPagina = 1;
    }
  }




}
