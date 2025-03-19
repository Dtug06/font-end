let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh"
    }
];
let shoppingCart = 0;
function displayProduct() {
    console.log(products);
};
function buyProducts() {
    let selectedId = +prompt("Enter the ID of the product you want to buy:");
    let product = products.find((p) => p.id === selectedId);

    if (!product) {
        console.log("Invalid ID! Please check and try again.");
        return;
    }

    let quantityToBuy = +prompt("Enter the quantity you want to buy:");
    if (product.quantity === 0) {
        console.log("Product is out of stock! Please choose another product.");
    } else if (product.quantity < quantityToBuy) {
        console.log("Insufficient product quantity!");
    } else {
        product.quantity -= quantityToBuy;
        shoppingCart += (quantityToBuy * product.price);
        console.log("Purchase successful!");
    }
    displayProduct();
};
function sortProductPrice() {
    let choice = +prompt("Enter your choice(1/0)");
    if (choice) {
        products.sort((a, b) => a.price - b.price);
        console.log("Sắp xếp theo giá tăng dần:");
        console.log(products);
    } else {
        products.sort((b, a) => b.price - a.price);
        console.log("Sắp xếp theo giá giảm dần:");
        console.log(products);
    }
    displayProduct();
}
function sumProduct() {
    console.log(shoppingCart);
};
let choice = +prompt("Enter your choice");
do {
    choice = +prompt("Enter your choice");
    switch (choice) {
        case 1://Display products
            displayProduct();
            break;
        case 2://Choose production
            buyProducts();
            break;
        case 3://Sort production
            sortProductPrice();
            break;
        case 4://Total product
            sumProduct();
            break;
        case 5://Leave program
            console.log("Leave!");
        default:
            console.log("Value invalid!");
    }
} while (choice != 5);




