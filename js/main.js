let switcher = document.querySelectorAll(".switcher li");




switcher.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manegeImgs);
});

function removeActive() {
    switcher.forEach((li) => {
        li.classList.remove("active");
    });
    this.classList.add("active");

}

function manegeImgs() {
    document.querySelectorAll(".product").forEach((product) => {
        product.style.display = "none";
    });


    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.closest(".product").style.display = "block";
    });

    let showMoreBtn = document.getElementById("show-more-btn");
    if (this.dataset.cat === ".all") {
        showMoreBtn.style.display = "block";
        document.querySelectorAll(".more-item").forEach((item) => {
            item.classList.remove("visable");
        });
    } else {
        showMoreBtn.style.display = "none";
    }
}

document.getElementById("instegram-icon").addEventListener("click", function() {
    window.open("https://www.instagram.com/roaa_m_abadi?igsh=Mzk5MmM3MzM2dGwz", "_blank");
});

document.getElementById("linkedin-icon").addEventListener("click", function() {
    window.open("https://www.linkedin.com/feed/", "_blank");
});

document.getElementById("faceBock-icon").addEventListener("click", function() {
    window.open("https://www.facebook.com/profile.php?id=100084248401154&mibextid=LQQJ4d", "_blank");
});




document.getElementById("cart-icon").addEventListener("click", () => {
    document.querySelector(".cart").classList.add("active");
    document.querySelector(".main-content").style.flex = "0 0 80%";
});

document.getElementById('close-cart').addEventListener('click', () => {
    document.querySelector('.cart').classList.remove('active');
    document.querySelector(".main-content").style.flex = "1";
});



document.getElementById("show-more-btn").addEventListener("click", function() {
    let moreItems = document.querySelectorAll(".more-item");
    moreItems.forEach(function(item) {
        item.classList.add("visable");
    })
    this.style.display = 'none';
});

let cart = [];
let total = 0;


document.querySelectorAll(".add-to-cart-btn").forEach(button => {
    button.addEventListener("click", function(event) {

        let productElement = this.closest('.product');
        let title = productElement.querySelector(".product-title").textContent;
        let price = parseFloat(productElement.querySelector(".item-price").textContent.replace('$', ''));
        let image = productElement.querySelector("img").src;

        addToCart(title, price, image);

    });
});


function addToCart(product, price, image) {
    cart.push({ product, price, image });
    total += price;
    upadteCart();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    upadteCart();
}


function upadteCart() {
    let cartContent = document.querySelector(".cart-content");
    let totalElement = document.querySelector(".total-price");

    cartContent.innerHTML = "";

    cart.forEach((item, index) => {

        let li = document.createElement("li");
        li.classList.add("cart-item");

        let img = document.createElement("img");
        img.src = item.image;
        img.alt = item.product;
        img.classList.add('cart-item-image');


        let text = document.createElement('span');
        text.textContent = `${item.product} - $${item.price}`;
        console.log(text);

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(index));

        li.appendChild(img);
        li.appendChild(text);
        li.appendChild(removeButton);

        cartContent.appendChild(li);
    });
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("heart-icon").forEach(button => {
        button.addEventListener("click", (event) => {

            let productElement = this.closest(".product");
            let title = productElement.querySelector(".producr-title").textContent;
            let price = parseFloat(productElement.querySelector(".item-price").textContent.replace("$", ""));
            let image = productElement.querySelector("img").src;

            addToFavarites(title, price, image);
        });
    });

    document.getElementById("heart-icon2").addEventListener("click", () => {
        document.querySelector(".favarites").classList.add("active");
        updateFavorites();
    });

    document.getElementById(".close-favarites").addEventListener("click", () => {
        document.querySelector(".favarites").classList.remove("active");
    });


})