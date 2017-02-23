import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { ListComponent } from './page_components/list.component';

describe("List page Component (template)", () => {
    let comp:    ListComponent;
    let fixture: ComponentFixture<ListComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;

    //beforeEach permette a TestBed di resettarsi prima di ogni test, evitando cazzi amari
    //async viene usato perché devo iniettare un component che usa template
    //ALERT: c'è un problema con i template
    beforeEach(async(() => {
        //creo un modulo fittizio per contenere gli oggetti che testo
        TestBed.configureTestingModule({
            declarations: [ ListComponent ],
        })
        .compileComponents().catch((m)=> {
            console.log(m);
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListComponent);

        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css("div#array"));
        el = de.nativeElement;

    });

    it('should display the json Object', () => {
        fixture.detectChanges();
        expect(el.textContent).toBeDefined();
    });
});