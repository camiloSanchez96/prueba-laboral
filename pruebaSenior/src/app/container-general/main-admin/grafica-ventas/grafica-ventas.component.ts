import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-grafica-ventas',
    templateUrl: './grafica-ventas.component.html',
    styleUrls: ['./grafica-ventas.component.scss']
})
export class GraficaVentasComponent implements OnInit {

    public vector = [
        { cant: 15000, mes: "Enero" },
        { cant: 35000, mes: "Febrero"},
        { cant: 45000, mes: "Marzo" },
        { cant: 34000, mes: "Abril" },
        { cant: 26000, mes: "Mayo" },
        { cant: 10000, mes: "Junio"},
        { cant: 65000, mes: "Julio"}];

    constructor() {
    }

    ngOnInit() {
    }

}
