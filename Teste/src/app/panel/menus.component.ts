import {CONSTANTS} from "../shared/components/routes.constants";
export const MENUS = {
  SUMMARY: [
    {
      route: 'home',
      fullRoute: '/painel/resumo/home',
      icon: 'fa-newspaper-o',
      description: 'Inicio',
			allowDomains : [ CONSTANTS.DOMAINS.AGILLI,
				CONSTANTS.DOMAINS.COLABORADOR ],
      allowGroups: [CONSTANTS.GROUPS.ALL]
    },
    {
      route: 'gerenciamento-senhas',
      fullRoute: '/painel/resumo/gerenciamento-senhas',
      icon: 'fa-id-card',
      description: 'gerenciamento de senhas',
			allowDomains : [ CONSTANTS.DOMAINS.AGILLI,
				CONSTANTS.DOMAINS.COLABORADOR ],
      allowGroups: [CONSTANTS.GROUPS.ALL]
    }
  ]
}