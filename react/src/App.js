import React from "react";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import List from "devextreme-react/list";
import DataSource from "devextreme/data/data_source";

const products = [
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
const dataSource = new DataSource({
    store: products,
    group: "Category"
});
const itemDraggingSettings = {
    allowReordering: true
};

class App extends React.Component {
    render() {
        return (
            <List
                dataSource={dataSource}
                displayExpr="Name"
                grouped={true}
                searchEnabled={true}
                searchMode="contains"
                searchExpr="Name"
                itemDragging={itemDraggingSettings}
                allowItemDeleting={true}
            />
        );
    }
}
export default App;
