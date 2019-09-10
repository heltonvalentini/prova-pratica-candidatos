import {Component, ViewChild} from '@angular/core';
import * as moment from 'moment';

declare var $: any;
@Component({
    selector: 'panel',
    templateUrl: './panel.component.html',
    styleUrls: ['panel.component.css']
})
export class PanelComponent {


    activeMenu: boolean = false;
    availableValue: number = 0;
    returnUrl: string;

    getName() {
        return JSON.parse(localStorage.getItem('currentUser')).name;
    }

    getLastAccess() {
        var longDate = JSON.parse(localStorage.getItem('currentUser')).lastlogin;
        var date = new Date();
        date.setTime(longDate);
        moment.locale("pt-br");
        return moment(date).format("DD/MM/YYYY HH:mm");
    }

    getCgc() {
        return JSON.parse(localStorage.getItem('currentUser')).cgc;
    }
    
    isBackofficeAccess(){
    	return JSON.parse(localStorage.getItem('currentUser')).acessoColaborador;
    }
    
    getNameColaborador(){
    	return JSON.parse(localStorage.getItem('currentUser')).nameColaborador;
    }

    ngOnInit() {
        $('html').css("overflow", "");
        //if(!this.isBackofficeAccess()){
        //	this.searchAntecipation();        	
        //}
        this.openModal();
    }

    public openModal() {
        if (localStorage.getItem("modal")) {
            $('#mensagemDados_md').modal('show');
        }
        localStorage.removeItem("modal");
    }

    public setToogle() {
        this.activeMenu = (!this.activeMenu);
        if (this.activeMenu == true) {
            $('html').css("overflow", "hidden");
        } else {
            $('html').css("overflow", "");
        }
    }


}
