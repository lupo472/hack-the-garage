import { Injectable } from '@angular/core';
import { ApiService } from '../api.service'


@Injectable()
export class ProjectPlanService {
    constructor (
       private backend: ApiService
    ) { }

    private templateCache: any = new Object();
    private ready: boolean = false;

    //logic goes here
    getProjectTemplate(code: string) {
        //return this.templateCache[code] || [];
        return [
    {
        "nome": "Sezione A - Dati Anagrafici",
        "key": "sezioneA",
        "schede": [
            {
                "nome": "Soggetto del Prestito",
                "key": "schedaSoggettoPrestito",
                "sezioni": [
                    {
                        "nome": "Dati Anagrafici",
                        "key": "paragrafoDatiAnagrafici",
                        "input": [
                            {
                                "key": "cognome",
                                "nome": "Cognome",
                                "type": "text"
                            },
                            {
                                "key": "nome",
                                "nome": "Nome",
                                "type": "text"
                            },
                            {
                                "key": "data_nascita",
                                "nome": "Data di Nascita",
                                "type": "text"
                            },
                            {
                                "key": "cf",
                                "nome": "Codice Fiscale",
                                "type": "text"
                            },
                            {
                                "key": "sesso",
                                "nome": "Sesso",
                                "type": "text"
                            },
                            {
                                "key": "luogo_nascita",
                                "nome": "Nato A",
                                "type": "text"
                            }
                        ]
                    },
                    {
                        "nome": "Dati di Residenza",
                        "key": "paragrafoDatiResidenza",
                        "input": [
                            {
                                "key": "regione",
                                "nome": "Regione",
                                "type": "text"
                            },
                            {
                                "key": "provincia",
                                "nome": "Provincia",
                                "type": "text"
                            },
                            {
                                "key": "comune",
                                "nome": "Comune",
                                "type": "text"
                            },
                            {
                                "key": "cap",
                                "nome": "cap",
                                "type": "text"
                            },
                            {
                                "key": "indirizzo",
                                "nome": "Indirizzo",
                                "type": "text"
                            }
                        ]
                    },
                    {
                        "nome": "Dati Documento",
                        "key": "paragrafoDatiDocumento",
                        "input": [
                            {
                                "key": "documento",
                                "nome": "Documento di Riconoscimento",
                                "type": "text"
                            },
                            {
                                "key": "numero_documento",
                                "nome": "Numero Documento",
                                "type": "text"
                            },
                            {
                                "key": "ente_rilascio",
                                "nome": "Rilasciato Da",
                                "type": "text"
                            },
                            {
                                "key": "data_scadenza",
                                "nome": "Data Scadenza",
                                "type": "text"
                            },
                            {
                                "key": "data_rilascio",
                                "nome": "Data Rilascio",
                                "type": "text"
                            }
                        ]
                    },
                    {
                        "nome": "Altre Informazioni",
                        "key": "paragrafoAltreInformazioni",
                        "input": [
                            {
                                "key": "titolo_studio",
                                "nome": "Titolo di Studio",
                                "type": "text"
                            },
                            {
                                "key": "data_adesione_precedente",
                                "nome": "Data Adesione Precedente piano di prestito",
                                "type": "text"
                            },
                            {
                                "key": "attestato_idoneita",
                                "nome": "soggetto referente del prestito è in possesso dell'attestato di idoneità rilasciato dall'istituto di credito",
                                "type": "select",
                                "options": [
                                    {
                                        "label": "Si",
                                        "value": "si"
                                    },
                                    {
                                        "label": "No",
                                        "value": "no"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nome": "Soggetto Proponente",
                "key": "schedaSoggettoProponente",
                "sezioni": [
                    {
                        "nome": "Dati Anagrafici",
                        "key": "paragrafoDatiAnagrafici",
                        "input": [
                            {
                                "key": "cognome",
                                "nome": "Cognome",
                                "type": "text"
                            },
                            {
                                "key": "nome",
                                "nome": "Nome",
                                "type": "text"
                            },
                            {
                                "key": "data_nascita",
                                "nome": "Data di Nascita",
                                "type": "text"
                            },
                            {
                                "key": "cf",
                                "nome": "Codice Fiscale",
                                "type": "text"
                            },
                            {
                                "key": "sesso",
                                "nome": "Sesso",
                                "type": "text"
                            },
                            {
                                "key": "luogo_nascita",
                                "nome": "Nato A",
                                "type": "text"
                            }
                        ]
                    },
                    {
                        "nome": "Dati di Residenza",
                        "key": "paragrafoDatiResidenza",
                        "input": [
                            {
                                "key": "regione",
                                "nome": "Regione",
                                "type": "text"
                            },
                            {
                                "key": "provincia",
                                "nome": "Provincia",
                                "type": "text"
                            },
                            {
                                "key": "comune",
                                "nome": "Comune",
                                "type": "text"
                            },
                            {
                                "key": "cap",
                                "nome": "cap",
                                "type": "text"
                            },
                            {
                                "key": "indirizzo",
                                "nome": "Indirizzo",
                                "type": "text"
                            }
                        ]
                    },
                    {
                        "nome": "Dati Documento",
                        "key": "paragrafoDatiDocumento",
                        "input": [
                            {
                                "key": "documento",
                                "nome": "Documento di Riconoscimento",
                                "type": "text"
                            },
                            {
                                "key": "numero_documento",
                                "nome": "Numero Documento",
                                "type": "text"
                            },
                            {
                                "key": "ente_rilascio",
                                "nome": "Rilasciato Da",
                                "type": "text"
                            },
                            {
                                "key": "data_scadenza",
                                "nome": "Data Scadenza",
                                "type": "text"
                            },
                            {
                                "key": "data_rilascio",
                                "nome": "Data Rilascio",
                                "type": "text"
                            }
                        ]
                    },
                    {
                        "nome": "Altre Informazioni",
                        "key": "paragrafoAltreInformazioni",
                        "input": [
                            {
                                "key": "titolo_studio",
                                "nome": "Titolo di Studio",
                                "type": "text"
                            },
                            {
                                "key": "data_adesione_precedente",
                                "nome": "Data Adesione Precedente piano di prestito",
                                "type": "text"
                            },
                            {
                                "key": "attestato_idoneita",
                                "nome": "soggetto referente del prestito è in possesso dell'attestato di idoneità rilasciato dall'istituto di credito",
                                "type": "select",
                                "options": [
                                    {
                                        "label": "Si",
                                        "value": "si"
                                    },
                                    {
                                        "label": "No",
                                        "value": "no"
                                    }
                                ]
                            },
                            {
                                "key": "quota",
                                "nome": "Quota",
                                "type": "string"
                            },
                            {
                                "key": "posizione",
                                "nome": "il soggetto referente del prestito è in possesso di un kit di firma digitale in corso di validità",
                                "type": "check"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
               
    }

    cacheAll(){
        this.backend.getProjectTypeList().subscribe(
            (list)=> {
                for (var i of list) this.cacheTemplate(i.id);
            }
        );
    }
    isReady() { return this.ready; }
    private cacheTemplate(id:string) {
        this.backend.getTemplateProject(id).map((data)=> { return JSON.parse(data); }).subscribe(
            (data)=> {
                this.templateCache[id] = data;
                this.ready = true;
            }
        );
    }
}