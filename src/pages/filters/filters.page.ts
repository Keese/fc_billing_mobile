import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'filters.page.html'
})

export class FiltersPage{

    months= [
            {id:1, name: 'Janeiro'},
            {id:2, name: 'Fevereiro'},
            {id:3, name: 'Março'},
            {id:4, name: 'Abril'},
            {id:5, name: 'Maio'},
            {id:6, name: 'Junho'},
            {id:7, name: 'Julho'},
            {id:8, name: 'Agosto'},
            {id:9, name: 'Setembro'},
            {id:10, name: 'Outubro'},
            {id:11, name: 'Novembro'},
            {id:12, name: 'Dezembro'},
        ]

    constructor(public nav: NavController){}
}