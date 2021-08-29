Vue.component("heade",{
  template: 
  `<header>
    <nav>
        <div>
            <a href="">
                <img width="50px" src="./img/favicon.ico" alt="">
            </a>
        </div>
        <div class="menu">
            <a href="">Human</a>
            <a href="">Shark</a>
            <a href="">Telegram</a>
        </div>
        <div class="mobile-menu">
            <a href=""><img src="./img/menu.png" alt=""></a>
        </div>
    </nav>

    <!-- Presentation -->
    <div>
        <div class="title">
            <h1>Talk <br> with a <br> shark</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates eius laboriosam asperiores nihil repudiandae modi odit ipsa, harum possimus officiis assumenda soluta molestias at. Odio optio hic repellat odit sunt.</p>
            <a href="#" class="myButton">Talk!</a>
        </div>
    </div>
  </header>`
});

Vue.component("seccionl",{
  template:
  `<section class="cont-sec">
    <div class="cont-info">
        <div class="imagen">
            <img src="./img/1.png" alt="">
        </div>
        <div class="info">
            <h2>Traduce de <br> humano a tiburon.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam corrupti eum eius ex perspiciatis minus in, quibusdam impedit rerum, voluptate temporibus modi consectetur, quisquam error asperiores voluptates est cupiditate?</p>
            <div><a href="#" class="myButton">Talk!</a></div>
        </div>
    </div>
  </section>
  `
});

var app = new Vue({
    el: '#principal',
    data: {
        mensaje: "hola",
        mensaje_tiburon: "raw"
    }
  })