
let data = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

class Item {
    constructor(data) {
        this.name = data.displayedName.displayedName.value;
        this.description = data.displayedName.displayedName.description;
        this.stock = data.stock.stocks;

        this.getName = this.getName.bind(this);
        this.getStock = this.getStock.bind(this);
        this.getMaxStock = this.getMaxStock.bind(this)
    }

    getName(){
        console.log(this.name.toString());
    }

    getStock() {
        let inStock = [];
        for (const [key, value] of Object.entries(this.stock["34"])){
            if (value > 0) {
                inStock.push(key);
            }
        }
        console.log(inStock);
    }

    getMaxStock() {
        // console.log(Object.keys(this.stock["34"]));
        let maxValue = Math.max.apply( null, Object.values(this.stock["34"]));
        let shopId = Object.keys(this.stock["34"])[Object.keys(this.stock["34"]).findIndex( s => this.stock["34"][s] == maxValue)];
        console.log(`Максимальное кол-во:  ${maxValue}, номер магазина: ${shopId}`);
    }
    
}

let item = new Item(data);

item.getName();

item.getStock();

item.getMaxStock();
