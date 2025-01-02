
// index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Try Amazon clone</title>
    <link rel ="stylesheet" href="style.css">
</head>
<nav>
    <a href="/"></a>
    <img src ="assets/amazon_logo.png" width ="100" alt=""> 
</a>
<div class="nav country">
<img src ="assets/location_icon.png" height ="20" alt="">
<div>
    <p>Deliver To</p>
    <h1>United Kingdom</h1>
</div>
</div>
<div class="nav-search">
<div class="nav-search-category">
<p>All</p>
<img src="./assets/dropdown_icon.png" height="12" alt="">
</div>
<input type="text" class ="nav-search-input"placeholder ="Search Amazon">
<img src="./assets/search_icon.png" 
class="nav-search-icon" alt="">
</div>
<div class="nav-language">
    <img src="./assets/us_flag.png" width="25px"
    alt ="">
    <p>EN</p>
    <img src="./assets/dropdown_icon.png"width="8px" alt="">
</div>
<div class="nav-text">
    <p>Hello, Sign in</p>
    <h1>Account & Lists <img src ="./assets//dropdown_icon.png"
        width="8px" alt =""></h1>
</div>
<div class="nav-text">
    <p><Return</p>
    <h1> & Orders</h1>
    <a href = "" class="nav-cart">
        <img src ="./assets/cart_icon.png"
    width="35px" alt="">
    <h4>Cart</h4>
    </a>
</nav>
<div class ="nav-bottom">
   <div> <img src="./assets/menu_icon.png"width="25px" alt="">
<p>All</p>
</div>
<p>Today's Deals</p>
<p>Customer Service</p>
<p>Registry</p>
<p>Gift Cards</p>
<p>Sell</p>

</div>

<div class="header-slider">
    <a href ="#"class ="control-prev">&#129144</a>
    <a href ="#"class ="control-next">&#129146</a>
    <ul>
        <img src ="./assets/header1.jpg" 
        class="header-img" alt="">
        <img src ="./assets/header2.jpg" 
        class="header-img" alt="">
        <img src ="./assets/header3.jpg" 
        class="header-img" alt="">
        <img src ="./assets/header4.jpg" 
        class="header-img" alt="">
        <img src ="./assets/header5.jpg" 
        class="header-img" alt="">
    </ul>
</div>
<div class="box-row" header-box>
    <div class="box-col">
        <h3>Free international returns</h3>
        <img src ="./assets/box1-1.jpg" alt="">
        <a href ='/'>Shop More</a>   
    </div>
    <div class="box-col">
        <h3>Lunar New Year</h3>
        <img src ="./assets/box1-2.jpg" alt="">
        <a href ='/'>Shop More</a>   
    </div>
    <div class="box-col">
        <h3>Toy under $25</h3>
        <img src ="./assets/box1-3.jpg" alt="">
        <a href ='/'>Shop More</a>   
    </div>
    <div class="box-col">
        <h3>Deals in Pcs</h3>
        <img src ="./assets/box1-4.jpg" alt="">
        <a href ='/'>Shop More</a>   
    </div>
</div>
    <div class="box-row">
    <div class="box-col">
        <h3>Grooming Products</h3>
        <img src ="./assets/box2-1.jpg" alt="">
        <a href ='/'>Shop More</a>   
    </div>
    <div class="box-col">
        <h3>Latest Devices</h3>
        <img src ="./assets/box2-2.jpg" alt="">
        <a href ='/'>Shop More</a>   
    </div>
    <div class="box-col">
        <h3>Pets Food</h3>
        <img src ="./assets/box2-3.jpg" alt="">
        <a href ='/'>Shop More</a>   
    </div>
    <div class="box-col">
        <h3>Fashion Mart</h3>
        <img src ="./assets/box2-4.jpg" alt="">
        <a href ='/'>Shop More</a>   
    </div>
</div>

<script src="script.js"></script>
<body>
    
</body>
</html>

Style.css

*{
    padding: 0;
   margin: 0;
   box-sizing: border-box;
    font-family: "Outfit variant0", Tofu;
}
body
{
background: #dadada;
}
a{
    text-decoration: none;
    color: inherit;
}
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #131921;
    padding: 10px 20px;
    color: #fff;
}
.nav-country
{
    display: flex;
    align-items: end;
    margin-left: 15px;
    font-size: 13px;
    color: #c4c4c4;
}
.nav-country h1
{
color: #fff;
font-size: 14px;
}
.nav-search
{
    flex: 1;
    display: flex;
    align-items: center;
    background: #fff;
    color: gray;
    max-width: 1000px;
    border-radius: 4px;
    margin-left: 15px;
}
.nav-search-category
{
    display: flex;
    align-items: center;
    padding: 10px 20px;
    gap: 5px;
    background: #e5e5e5;
    border-radius:4px 0 0 4px;
}
.nav-search-input
{
    border: none;
    outline: none;
    padding-left: 20px;
    width: 100%;
}
.nav-search-icon
{
    max-width: 41px;
    padding: 8px;
    background:#ffd64f;
    border: 0  4px 4px 0;
}
.nav-language
{
    display: flex;
    align-items: center;
    gap: 2px;
    font-weight: 600;
    margin-left: 15px;
}
.nav-text
{
    margin-left: 15px;
}
.nav-text p 
{
font-size: 10px;
}
.nav-text h1
{
font-size: 14px;
}
.nav-cart
{
  display: flex;
  align-items: center;
  margin: 0px 15px;  
}
.nav-bottom
{
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 8px 20px;
    background: #232f3e;
    color: #fff;
    font-size: 15px;
}
.nav-bottom div{
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
}
.header-slider ul{
    display: flex;
    overflow-y:hidden;
}
.header-img
{
    max-width: 100%;
    mask-image: linear-gradient(to bottom,
    #000000 50%, transparent 100%);
}
.header-slider a{
    position: absolute;
    top: 20%;
    z-index: 1;
    padding: 5vh 1vw;
    background: #ffffff4f;
    color: #000007;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
}
.control-next{
    right: 0%;
}
.box-row
{
    display: flex;
    flex-wrap: wrap;
    row-gap: 20px;
    justify-content: space-between;
    margin: 20px 30px;   
}
.box-col
{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 20px;
    background: #fff;
    max-width: 24%;
    min-height: 200px;
    z-index:1;
}
.box-col a{
    font-size: 13px;
    color: #009999;
    font-weight: 500;
}
.header-box
{
    margin-top: -20vw;
}


Script.js
const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

function changeSlide()
{
    for(let i=0; i<imgs.length;i++)
    {
        imgs[i].style.display='none';
    }
    imgs[i].style.display='block';
}
changeSlide()

prev_btn.addEventListener('click', (e)=>
{
    if(n>0)
    {
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeSlide();
})
next_btn.addEventListener('click', (e)=>
    {
        if(n<imgs.length-1)
        {
            n++;
        }
        else{
            n=0;
        }
        changeSlide();
    })

