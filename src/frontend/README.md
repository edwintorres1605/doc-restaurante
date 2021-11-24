# FRONTEND

## Creación del proyecto

1. Se crea la carpeta del proyecto
2. Se abre esta carpeta en la terminal
3. En la terminal creamos el proyecto de react con la siguiente instrucción

```
$ npx create-react-app front-restaurante
$ cd front-restaurante
$ npm start
```

4. Si estás en PC ir al siguiente [link](http://localhost:3000) o en tu celular si estás conectad@ a la misma red wifi abrir el segundo link que te ofrece la terminal cuando estás ejecutando el servidor.

Así se debe ver nuestra App en el navegador:

<img :src="$withBase('/img/default.png')" alt="Vista por defecto proyecto React">

## Edición del proyecto

- Abrir un nuevo espacio en Visual Studio Code y arrastrar allí la carpeta del proyecto que se acaba de crear

- Vamos a src/index.js y cambiamos únicamente el contenido del elemento title y el favicon si se desea.

- En src/index.css pasamos los estilos de la plantilla que estamos usando

::: details Click para ver el código
``` css

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');

:root{
    --green:#27ae60;
    --black:#192a56;
    --light-color:#666;
    --box-shadow:0 .5rem 1.5rem rgba(0,0,0,.1);
}

*{
    font-family: 'Nunito', sans-serif;
    margin:0; padding:0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none; border:none;
    text-transform: capitalize;
    transition: all .2s linear;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-padding-top: 5.5rem;
    scroll-behavior: smooth;
}

section{
    padding:2rem 9%;
}

section:nth-child(even){
    background:#eee;
}

.sub-heading{
    text-align: center;
    color:var(--green);
    font-size: 2rem;
    padding-top: 1rem;
}

.heading{
    text-align: center;
    color:var(--black);
    font-size: 3rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
}

.btn{
    margin-top: 1rem;
    display: inline-block;
    font-size: 1.7rem;
    color:#fff;
    background: var(--black);
    border-radius: .5rem;
    cursor: pointer;
    padding:.8rem 3rem;
}

.btn:hover{
    background: var(--green);
    letter-spacing: .1rem;
}

header{
    position: fixed;
    top:0; left: 0; right:0;
    background: #fff;
    padding:1rem 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    box-shadow: var(--box-shadow);
}

header .logo{
    color:var(--black);
    font-size: 2.5rem;
    font-weight: bolder;
}

header .logo i{
    color:var(--green);
}

header .navbar a{
    font-size: 1.7rem;
    border-radius: .5rem;
    padding:.5rem 1.5rem;
    color:var(--light-color);
}

header .navbar a.active,
header .navbar a:hover{
    color:#fff;
    background: var(--green);
}

header .icons i,
header .icons a{
    cursor: pointer;
    margin-left: .5rem;
    height:4.5rem;
    line-height: 4.5rem;
    width:4.5rem;
    text-align: center;
    font-size: 1.7rem;
    color:var(--black);
    border-radius: 50%;
    background: #eee;
}

header .icons i:hover,
header .icons a:hover{
    color:#fff;
    background: var(--green);
    transform: rotate(360deg);
}

header .icons #menu-bars{
    display: none;
}

#search-form{
    position: fixed;
    top:-110%; left:0; 
    height:100%; width:100%;
    z-index: 1004;
    background:rgba(0,0,0,.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0 1rem;
}

#search-form.active{
    top:0;
}

#search-form #search-box{
    width:50rem;
    border-bottom: .1rem solid #fff;
    padding:1rem 0;
    color:#fff;
    font-size: 3rem;
    text-transform: none;
    background:none;
}

#search-form #search-box::placeholder{
    color:#eee;
}

#search-form #search-box::-webkit-search-cancel-button{
    -webkit-appearance: none;
}

#search-form label{
    color:#fff;
    cursor:pointer;
    font-size: 3rem;
}

#search-form label:hover{
    color:var(--green);
}

#search-form #close{
    position: absolute;
    color:#fff;
    cursor: pointer;
    top: 2rem; right:3rem;
    font-size: 5rem;
}

.home .home-slider .slide{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap:2rem; 
    padding-top: 9rem;
}

.home .home-slider .slide .content{
    flex:1 1 45rem;
}

.home .home-slider .slide .image{
    flex:1 1 45rem;
}

.home .home-slider .slide .image img{
    width: 100%;
}

.home .home-slider .slide .content span{
    color:var(--green);
    font-size: 2.5rem;
}

.home .home-slider .slide .content h3{
    color:var(--black);
    font-size: 7rem;
}

.home .home-slider .slide .content p{
    color:var(--light-color);
    font-size: 2.2rem;
    padding:.5rem 0;
    line-height: 1.5;
}

.swiper-pagination-bullet-active{
    background:var(--green);
}

.dishes .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    gap:1.5rem;
}

.dishes .box-container .box{
    padding:2.5rem;
    background:#fff;
    border-radius: .5rem;
    border:.1rem solid rgba(0,0,0,.2);
    box-shadow: var(--box-shadow);
    position: relative;
    overflow: hidden;
    text-align: center;
}

.dishes .box-container .box .fa-heart,
.dishes .box-container .box .fa-eye{
    position: absolute;
    top:1.5rem;
    background:#eee;
    border-radius: 50%;
    height: 5rem;
    width:5rem;
    line-height: 5rem;
    font-size: 2rem;
    color:var(--black);
}

.dishes .box-container .box .fa-heart:hover,
.dishes .box-container .box .fa-eye:hover{
    background: var(--green);
    color:#fff;
}

.dishes .box-container .box .fa-heart{
    right:-15rem;
}

.dishes .box-container .box .fa-eye{
    left:-15rem;
}

.dishes .box-container .box:hover .fa-heart{
    right:1.5rem;
}

.dishes .box-container .box:hover .fa-eye{
    left:1.5rem;
}

.dishes .box-container .box img{
    height:17rem;
    margin:1rem 0;
}

.dishes .box-container .box h3{
    color:var(--black);
    font-size: 2.5rem;
}

.dishes .box-container .box .stars{
    padding:1rem 0;
}

.dishes .box-container .box .stars i{
    font-size: 1.7rem;
    color:var(--green);
}

.dishes .box-container .box span{
    color:var(--green);
    font-weight: bolder;
    margin-right: 1rem;
    font-size: 2.5rem;
}

.about .row{
    display: flex;
    flex-wrap: wrap;
    gap:1.5rem;
    align-items: center;
}

.about .row .image{
    flex:1 1 45rem;
}

.about .row .image img{ 
    width: 100%;
}

.about .row .content{
    flex:1 1 45rem;
}

.about .row .content h3{
    color:var(--black);
    font-size: 4rem;
    padding:.5rem 0;
}

.about .row .content p{
    color:var(--light-color);
    font-size: 1.5rem;
    padding:.5rem 0;
    line-height: 2;
}

.about .row .content .icons-container{
    display: flex;
    gap:1rem;
    flex-wrap: wrap;
    padding:1rem 0;
    margin-top: .5rem;
}

.about .row .content .icons-container .icons{
    background:#eee;
    border-radius: .5rem;
    border:.1rem solid rgba(0,0,0,.2);
    display: flex;
    align-items: center;
    justify-content: center;
    gap:1rem;
    flex:1 1 17rem;
    padding:1.5rem 1rem;
}

.about .row .content .icons-container .icons i{
    font-size: 2.5rem;
    color:var(--green);
}

.about .row .content .icons-container .icons span{
    font-size: 1.5rem;
    color:var(--black);
}

.menu .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap:1.5rem;
}

.menu .box-container .box{
    background: #fff;
    border:.1rem solid rgba(0,0,0,.2);
    border-radius: .5rem;
    box-shadow: var(--box-shadow);    
}

.menu .box-container .box .image{
    height: 25rem;
    width: 100%;
    padding:1.5rem;
    overflow: hidden;
    position: relative;
}

.menu .box-container .box .image img{
    height: 100%;
    width: 100%;
    border-radius: .5rem;
    object-fit: cover;
}

.menu .box-container .box .image .fa-heart{
    position: absolute;
    top:2.5rem; right: 2.5rem;
    height: 5rem;
    width: 5rem;
    line-height: 5rem;
    text-align: center;
    font-size: 2rem;
    background: #fff;
    border-radius: 50%;
    color:var(--black);
}

.menu .box-container .box .image .fa-heart:hover{
    background-color: var(--green);
    color:#fff;
}

.menu .box-container .box .content{
    padding:2rem;
    padding-top: 0;
}

.menu .box-container .box .content .stars{
    padding-bottom: 1rem;
}

.menu .box-container .box .content .stars i{
   font-size: 1.7rem;
   color:var(--green);
}

.menu .box-container .box .content h3{
    color:var(--black);
    font-size: 2.5rem;
}

.menu .box-container .box .content p{
    color:var(--light-color);
    font-size: 1.6rem;
    padding:.5rem 0;
    line-height: 1.5;
}

.menu .box-container .box .content .price{
    color:var(--green);
    margin-left: 1rem;
    font-size: 2.5rem;
}

.review .slide{
    padding:2rem;
    box-shadow:var(--box-shadow);
    border:.1rem solid rgba(0,0,0,.2);
    border-radius: .5rem;
    position: relative;    
}

.review .slide .fa-quote-right{
    position: absolute;
    top:2rem; right:2rem;
    font-size: 6rem;
    color:#ccc;
}

.review .slide .user{
    display: flex;
    gap:1.5rem;
    align-items: center;
    padding-bottom: 1.5rem;
}

.review .slide .user img{
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    object-fit: cover;
}

.review .slide .user h3{
    color:var(--black);
    font-size: 2rem;
    padding-bottom: .5rem;
}

.review .slide .user i{
    font-size: 1.3rem;
    color:var(--green);
}

.review .slide p{
    font-size: 1.5rem;
    line-height: 1.8;
    color:var(--light-color);
}

.order form{
    max-width:90rem;
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
    border:.1rem solid rgba(0,0,0,.2);
    background:#fff;
    padding:1.5rem;
    margin:0 auto;
}

.order form .inputBox{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.order form .inputBox .input{
    width:49%;
}

.order form .inputBox .input span{
    display:block;
    padding:.5rem 0;
    font-size: 1.5rem;
    color:var(--light-color);
}

.order form .inputBox .input input,
.order form .inputBox .input textarea{
    background:#eee;
    border-radius: .5rem;
    padding:1rem;
    font-size: 1.6rem;
    color:var(--black);
    text-transform: none;
    margin-bottom: 1rem;
    width:100%;
}

.order form .inputBox .input input:focus,
.order form .inputBox .input textarea:focus{
    border:.1rem solid var(--green);
}

.order form .inputBox .input textarea{
    height:20rem;
    resize: none;
}

.order form .btn{
    margin-top: 0;
}

.footer .box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap:1.5rem;
}

.footer .box-container .box h3{
    padding:.5rem 0;
    font-size: 2.5rem;
    color:var(--black);
}

.footer .box-container .box a{
    display: block;
    padding:.5rem 0;
    font-size: 1.5rem;
    color:var(--light-color);
}

.footer .box-container .box a:hover{
    color:var(--green);
    text-decoration: underline;
}

.footer .credit{
    text-align: center;
    border-top: .1rem solid rgba(0,0,0,.1);
    font-size: 2rem;
    color:var(--black);
    padding:.5rem;
    padding-top: 1.5rem;
    margin-top: 1.5rem;
}

.footer .credit span{
    color:var(--green);
}

.loader-container{
    position: fixed;
    top:0; left:0;
    height:100%; 
    width:100%;
    z-index: 10000;
    background:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.loader-container img{
    width:35rem;
}

.loader-container.fade-out{
    top:-110%;
    opacity:0;
}

/* media queries  */

@media (max-width:991px){

    html{
        font-size: 55%;
    }
    
    header{
        padding:1rem 2rem;
    }

    section{
        padding:2rem;
    }

}

@media (max-width:768px){

    header .icons #menu-bars{
        display: inline-block;
    }

    header .navbar{
        position: absolute;
        top:100%; left:0; right:0;
        background:#fff;
        border-top: .1rem solid rgba(0,0,0,.2);
        border-bottom: .1rem solid rgba(0,0,0,.2);
        padding:1rem;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }

    header .navbar.active{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    header .navbar a{
        display: block;
        padding:1.5rem;
        margin:1rem;
        font-size: 2rem;
        background:#eee;
    }

    #search-form #search-box{
        width:90%;
        margin:0 1rem;
    }

    .home .home-slider .slide .content h3{
        font-size: 5rem;
    }

}

@media (max-width:450px){

    html{
        font-size: 50%;
    }

    .dishes .box-container .box img{
        height:auto;
        width: 100%;
    }

    .order form .inputBox .input{
        width:100%;
    }

}

```
:::

- En public/index.html pongo los links a iconos de Font Awesome y al cdn de Swiper

::: details Click para ver el código
``` html

<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

<!-- font awesome cdn link  -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

```
:::

- Ahora en src/App.js cambiamos el contenido de la clase pasándole todo el código HTML de la plantilla, para que se vea la página completa, pero que vamos a empezar a cambiar por componentes. 

::: tip
Como en React se escribe con sintaxis de jsx que es una combinación de JS y XML y no es propiamente dicho HTML, entonces hay algunas diferencias importantes:
- En lugar de usar el atributo class para los elementos HTML se usa es className ya que class es una palabra reservada de JS.
- Las propiedades y métodos en JSX se escriben con nomenclatura camelCase, por ejemplo: en lugar de onclick() escribimos onClick()
- Los elementos que no necesitan etiqueta de cierre como img o input deben tener el slash de cierre, quedando así por ejemplo: `<img />`
- Los comentarios se escriben diferente también, ya verás algunos en el código a continuación.

Entonces, recomiendo instalar en Visual Studio Code la extensión HTML to JSX para que con solo dar click derecho sobre el código que queramos cambiar el formato, él lo haga por nosotros. (Buscar la opción convert HTML to JSX al dar click derecho, si no aparece, click en palette para que lleve a todo lo instalado).
:::

::: details Click para vel el código
``` js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* header section starts      */}
      <header>
        <a href="#" className="logo"><i className="fas fa-utensils" />resto.</a>
        <nav className="navbar">
          <a className="active" href="#home">home</a>
          <a href="#dishes">dishes</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#review">review</a>
          <a href="#order">order</a>
        </nav>
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars" />
          <i className="fas fa-search" id="search-icon" />
          <a href="#" className="fas fa-heart" />
          <a href="#" className="fas fa-shopping-cart" />
        </div>
      </header>
      {/* header section ends*/}
      {/* search form  */}
      <form action id="search-form">
        <input type="search" placeholder="search here..." name id="search-box" />
        <label htmlFor="search-box" className="fas fa-search" />
        <i className="fas fa-times" id="close" />
      </form>
      {/* home section starts  */}
      <section className="home" id="home">
        <div className="swiper-container home-slider">
          <div className="swiper-wrapper wrapper">
            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>spicy noodles</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                <a href="#" className="btn">order now</a>
              </div>
              <div className="image">
                <img src="images/home-img-1.png" alt />
              </div>
            </div>
            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>fried chicken</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                <a href="#" className="btn">order now</a>
              </div>
              <div className="image">
                <img src="images/home-img-2.png" alt />
              </div>
            </div>
            <div className="swiper-slide slide">
              <div className="content">
                <span>our special dish</span>
                <h3>hot pizza</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                <a href="#" className="btn">order now</a>
              </div>
              <div className="image">
                <img src="images/home-img-3.png" alt />
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </section>
      {/* home section ends */}
      {/* dishes section starts  */}
      <section className="dishes" id="dishes">
        <h3 className="sub-heading"> our dishes </h3>
        <h1 className="heading"> popular dishes </h1>
        <div className="box-container">
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
            <img src="images/dish-1.png" alt />
            <h3>tasty food</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <span>$15.99</span>
            <a href="#" className="btn">add to cart</a>
          </div>
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
            <img src="images/dish-2.png" alt />
            <h3>tasty food</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <span>$15.99</span>
            <a href="#" className="btn">add to cart</a>
          </div>
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
            <img src="images/dish-3.png" alt />
            <h3>tasty food</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <span>$15.99</span>
            <a href="#" className="btn">add to cart</a>
          </div>
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
            <img src="images/dish-4.png" alt />
            <h3>tasty food</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <span>$15.99</span>
            <a href="#" className="btn">add to cart</a>
          </div>
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
            <img src="images/dish-5.png" alt />
            <h3>tasty food</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <span>$15.99</span>
            <a href="#" className="btn">add to cart</a>
          </div>
          <div className="box">
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
            <img src="images/dish-6.png" alt />
            <h3>tasty food</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <span>$15.99</span>
            <a href="#" className="btn">add to cart</a>
          </div>
        </div>
      </section>
      {/* dishes section ends */}
      {/* about section starts  */}
      <section className="about" id="about">
        <h3 className="sub-heading"> about us </h3>
        <h1 className="heading"> why choose us? </h1>
        <div className="row">
          <div className="image">
            <img src="images/about-img.png" alt />
          </div>
          <div className="content">
            <h3>best food in the country</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
            <div className="icons-container">
              <div className="icons">
                <i className="fas fa-shipping-fast" />
                <span>free delivery</span>
              </div>
              <div className="icons">
                <i className="fas fa-dollar-sign" />
                <span>easy payments</span>
              </div>
              <div className="icons">
                <i className="fas fa-headset" />
                <span>24/7 service</span>
              </div>
            </div>
            <a href="#" className="btn">learn more</a>
          </div>
        </div>
      </section>
      {/* about section ends */}
      {/* menu section starts  */}
      <section className="menu" id="menu">
        <h3 className="sub-heading"> our menu </h3>
        <h1 className="heading"> today's speciality </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="images/menu-1.jpg" alt />
              <a href="#" className="fas fa-heart" />
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
              <a href="#" className="btn">add to cart</a>
              <span className="price">$12.99</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="images/menu-2.jpg" alt />
              <a href="#" className="fas fa-heart" />
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
              <a href="#" className="btn">add to cart</a>
              <span className="price">$12.99</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="images/menu-3.jpg" alt />
              <a href="#" className="fas fa-heart" />
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
              <a href="#" className="btn">add to cart</a>
              <span className="price">$12.99</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="images/menu-4.jpg" alt />
              <a href="#" className="fas fa-heart" />
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
              <a href="#" className="btn">add to cart</a>
              <span className="price">$12.99</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="images/menu-5.jpg" alt />
              <a href="#" className="fas fa-heart" />
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
              <a href="#" className="btn">add to cart</a>
              <span className="price">$12.99</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="images/menu-6.jpg" alt />
              <a href="#" className="fas fa-heart" />
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
              <a href="#" className="btn">add to cart</a>
              <span className="price">$12.99</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="images/menu-7.jpg" alt />
              <a href="#" className="fas fa-heart" />
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
              <a href="#" className="btn">add to cart</a>
              <span className="price">$12.99</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="images/menu-8.jpg" alt />
              <a href="#" className="fas fa-heart" />
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
              <a href="#" className="btn">add to cart</a>
              <span className="price">$12.99</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="images/menu-9.jpg" alt />
              <a href="#" className="fas fa-heart" />
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <h3>delicious food</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
              <a href="#" className="btn">add to cart</a>
              <span className="price">$12.99</span>
            </div>
          </div>
        </div>
      </section>
      {/* menu section ends */}
      {/* review section starts  */}
      <section className="review" id="review">
        <h3 className="sub-heading"> customer's review </h3>
        <h1 className="heading"> what they say </h1>
        <div className="swiper-container review-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <i className="fas fa-quote-right" />
              <div className="user">
                <img src="images/pic-1.png" alt />
                <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
            </div>
            <div className="swiper-slide slide">
              <i className="fas fa-quote-right" />
              <div className="user">
                <img src="images/pic-2.png" alt />
                <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
            </div>
            <div className="swiper-slide slide">
              <i className="fas fa-quote-right" />
              <div className="user">
                <img src="images/pic-3.png" alt />
                <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
            </div>
            <div className="swiper-slide slide">
              <i className="fas fa-quote-right" />
              <div className="user">
                <img src="images/pic-4.png" alt />
                <div className="user-info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
            </div>
          </div>
        </div>
      </section>
      {/* review section ends */}
      {/* order section starts  */}
      <section className="order" id="order">
        <h3 className="sub-heading"> order now </h3>
        <h1 className="heading"> free and fast </h1>
        <form action>
          <div className="inputBox">
            <div className="input">
              <span>your name</span>
              <input type="text" placeholder="enter your name" />
            </div>
            <div className="input">
              <span>your number</span>
              <input type="number" placeholder="enter your number" />
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>your order</span>
              <input type="text" placeholder="enter food name" />
            </div>
            <div className="input">
              <span>additional food</span>
              <input type="test" placeholder="extra with food" />
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>how musch</span>
              <input type="number" placeholder="how many orders" />
            </div>
            <div className="input">
              <span>date and time</span>
              <input type="datetime-local" />
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <span>your address</span>
              <textarea name placeholder="enter your address" id cols={30} rows={10} defaultValue={""} />
            </div>
            <div className="input">
              <span>your message</span>
              <textarea name placeholder="enter your message" id cols={30} rows={10} defaultValue={""} />
            </div>
          </div>
          <input type="submit" defaultValue="order now" className="btn" />
        </form>
      </section>
      {/* order section ends */}
      {/* footer section starts  */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>locations</h3>
            <a href="#">india</a>
            <a href="#">japan</a>
            <a href="#">russia</a>
            <a href="#">USA</a>
            <a href="#">france</a>
          </div>
          <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">dishes</a>
            <a href="#">about</a>
            <a href="#">menu</a>
            <a href="#">reivew</a>
            <a href="#">order</a>
          </div>
          <div className="box">
            <h3>contact info</h3>
            <a href="#">+123-456-7890</a>
            <a href="#">+111-222-3333</a>
            <a href="#">shaikhanas@gmail.com</a>
            <a href="#">anasbhai@gmail.com</a>
            <a href="#">mumbai, india - 400104</a>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
            <a href="#">linkedin</a>
          </div>
        </div>
        <div className="credit"> copyright @ 2021 by <span>mr. web designer</span> </div>
      </section>
      {/* footer section ends */}
      {/* loader part  */}
      {/* <div className="loader-container">
        <img src="images/loader.gif" alt />
      </div> */}
    </div>

  );
}

export default App;

```
:::