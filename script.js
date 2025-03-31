const shop = document.getElementById("shop")

let basket = JSON.parse(localStorage.getItem('data')) || []

// console.log(shopItemsData)


let generateShop = () =>
{
    shop.innerHTML = shopItemsData.map(
                                        (x) =>
                                        {
                                            let {id,name,price,des,img} = x

                                            return `
                                                    <div class="shop_item" id="product-id-${id}">

                                                    <img src="${img}" alt="" />
                                                    <div class="product-info">
                                                        <h5>${name}</h5>
                                                        <p class="price"><span>Rs</span>${price}<p/>
                                                        <p>${des}<p/>
                                                        <button onclick="add_to_cart('${id}','${name}','${price}','${img}')">Add to cart</button>
                                                        <a href="address.html"><button>Buy Now</button></a>
                                                    </div>

                                                    </div>
                                                   `
                                        }
                                      )
}

let add_to_cart = (id,name,price,img) =>
{
    basket.push(
                    {
                        id:id,
                        item:1,
                        name:name,
                        price:price,
                        img:img
                    }
               )
    
    localStorage.setItem('data',JSON.stringify(basket))

    calculate()
}

let calculate = () =>
{
    let cart_icon = document.getElementById('cart_amount')
    
    let cart_amount = basket.length

    cart_icon.innerHTML = cart_amount
}

calculate()
generateShop()

