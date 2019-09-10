import {CONSTANTS} from "./../components/routes.constants";

export class CommonsComponent {


    convertDate(inputFormat) {
        var d = new Date(inputFormat);
        return [this.pad(d.getDate()), this.pad(d.getMonth() + 1), d.getFullYear()].join('/');
    }

    pad(s) {
        return (s < 10) ? '0' + s : s;
    }

    convertDaysToTime(nDays: any) {
        return nDays * 24 * 3600 * 1000;
    }

    getDates(dias: number, future?: boolean) {
        var endDate = new Date();
        endDate.setHours(0, 0, 0, 0);
        var startDate = new Date(endDate);
        if (future) {
            startDate.setTime(endDate.getTime() + this.convertDaysToTime(dias));
            var temp = new Date();
            temp.setTime(startDate.getTime());
            startDate.setTime(endDate.getTime() + this.convertDaysToTime(1));
            endDate.setTime(temp.getTime());
        } else {
            startDate.setTime(endDate.getTime() - this.convertDaysToTime(dias - 1));
            endDate.setTime(endDate.getTime() - this.convertDaysToTime(0));
        }
        return {
            startDate: startDate,
            endDate: endDate
        }
    }

    removeDateZone(date: Date): Date {
        date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
        return date;
    }

    public allowedDomain(menu: any): boolean {
        var domain: number = Number((JSON.parse(localStorage.getItem("currentUser")).dominio));
    
        if(Boolean(JSON.parse(localStorage.getItem("currentUser")).acessoColaborador)){
        	domain = Number((JSON.parse(localStorage.getItem("currentUser")).dominioColaborador))
        }
    
        if (menu && menu.allowDomains) {
            for (var i in menu.allowDomains) {
                if (menu.allowDomains[i] == domain) {
                    return true;
                }
            }
        }
        return false;
    }

    public allowedGroups(menu: any): boolean {
        var groups: Array<any> = (JSON.parse(localStorage.getItem("currentUser")).segmentos);
        if (menu && menu.allowGroups) {
            for (var i in menu.allowGroups) {
                for (var j in groups) {
                    if (menu.allowGroups[i] == groups[j].id) {
                        return true;
                    }
                }
            }
        }
        if (menu.allowGroups && menu.allowGroups[0]) {
            if (menu.allowGroups[0] == CONSTANTS.GROUPS.ALL) {
                return true;
            }
        }
        return false;
    }
}
