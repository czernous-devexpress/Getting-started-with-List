import { Component } from "@angular/core";
import DataSource from "devextreme/data/data_source";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    products: Array<{
        ID: Number;
        Name: String;
        Price: Number;
        Current_Inventory: Number;
        Backorder: Number;
        Manufacturing: Number;
        Category: String;
        ImageSrc: String;
    }> = [
        {
            ID: 1,
            Name: "HD Video Player",
            Price: 330,
            Current_Inventory: 225,
            Backorder: 0,
            Manufacturing: 10,
            Category: "Video Players",
            ImageSrc: "images/products/1.png"
        },
        {
            ID: 3,
            Name: "SuperPlasma 50",
            Price: 2400,
            Current_Inventory: 0,
            Backorder: 0,
            Manufacturing: 0,
            Category: "Televisions",
            ImageSrc: "images/products/3.png"
        },
        {
            ID: 4,
            Name: "SuperLED 50",
            Price: 1600,
            Current_Inventory: 77,
            Backorder: 0,
            Manufacturing: 55,
            Category: "Televisions",
            ImageSrc: "images/products/4.png"
        },
        {
            ID: 5,
            Name: "SuperLED 42",
            Price: 1450,
            Current_Inventory: 445,
            Backorder: 0,
            Manufacturing: 0,
            Category: "Televisions",
            ImageSrc: "images/products/5.png"
        }
    ];
    dataSource = new DataSource({
        store: this.products,
        group: "Category"
    });
    itemDraggingSettings = {
        allowReordering: true
    };
}
