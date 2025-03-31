let label = document.getElementById('label')

let ShoppingCart = document.getElementById('shopping_cart')

let basket = JSON.parse(localStorage.getItem('data')) || []

let calculate = () =>
{
    let cartIcon = document.getElementById('cart_amount')

    cartIcon.innerHTML = basket.length
} 

let generate_cart_Items = () =>
{
    if(basket.length !==0)
    {
        return(ShoppingCart.innerHTML=basket.map((x)=>
        {
            let {id,name,price,item,des,img} = x

            return `
                        <div class="cart_item">
                           <div class="cart_item_img">
                               <img width="100px" src="${img}" alt=""/>
                            </div>
                            <p>${name}</p>
                            <p>${price}</p>
                            <button class="rmv_btn" onclick="remove_from_cart(${id})">Remove</button>
                        </div>
                   `
        }))
    }
}

generate_cart_Items()
calculate()

let remove_from_cart = (id) =>
{
    basket = basket.filter((x)=>x.id!=id)

    localStorage.setItem('data',JSON.stringify(basket))

    calculate()

    generate_cart_Items()

}

let Total_amount = () =>
{
    let total_amount = 0
    basket.map((item)=>
    {
        total_amount += item.item * item.price
    })

    label.innerHTML = `
                        <div class="checkout_area">
                                <p>Total amount: ${total_amount}</p>
                                <button class="update" onclick=window.location.reload()>Update</button>
                        </div>
                      `
}
Total_amount()