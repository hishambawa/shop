function Product(name, price, image, type){
    this.name = name;
    this.price = price;
    this.image = image;
    this.type = type;

    this.getInfo = function(){
        alert(this.name + " : " + this.price);
    }
}

function showProducts(product){

    var htmlString = `
    <div class="items `+ product.type +`">
        <div class="image">
            <img src="images/tshirt_2.jpg">
            <figcaption>Sweatshirt</figcaption>
            <figcaption class="price">$75</figcaption>
        </div>

        <div class="cart-options">

            <div class="size">
                <input type="checkbox" name="s-size" class="s"/>
                <input type="checkbox" name="s-size" class="m"/>
                <input type="checkbox" name="s-size" class="l"/>

                <span onclick="selectSize(this)">S</span>
                <span onclick="selectSize(this)">M</span>
                <span onclick="selectSize(this)">L</span>
            </div>

            <dic class="quantity">

                <input type="button" name = "minus" value="-" onclick="changeQuantity(this)">
                <input type="text" value = 0 maxlength="2">
                <input type="button" name = "plus" value="+" onclick="changeQuantity(this)">

            </dic>

            <div class="_cart">
                <input class="add-to-cart" type="button" onclick="addToCart(this)">
            </div>
        </div>

    </div>`;
}

var item = [];

    item.push(new Product("Product 1", 25, "images/tshirt2.png", "tshirt"));
    item.push(new Product("Product 2", 25, "images/tshirt2.png", "tshirt"));

    item[0].getInfo();
    item[1].getInfo();

    item.forEach(showProducts(product));
