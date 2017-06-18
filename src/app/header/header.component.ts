import { CommonStorage } from './../shared/common-storage.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<String>();
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
    constructor(private cmnStorage: CommonStorage) { }

    onSaveData() {
        this.cmnStorage.storeRecipe().subscribe((response: Response) => {
            console.log(response);
        });
    }

}