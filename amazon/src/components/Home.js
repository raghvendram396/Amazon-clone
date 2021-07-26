import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="Home">
             <img className="background" src="https://reviewed-com-res.cloudinary.com/image/fetch/s--OCGmezmg--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1590656678455/Amazon_Prime_Video_tips_1.jpg"></img>
          <div className="Products">
           <div className="items">
           <Product id={1} title="The Lean Startup" rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" price="399" />
           <Product id={2} title="Philips Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater" price="2,999" image="https://images-na.ssl-images-amazon.com/images/I/61DtBPGSmVL._SL1200_.jpg" rating={4} />
           </div>
           <div className="items">
           <Product id={3} title="Raysx Smart Watch A1 Black colour 4G watch Smartwatch  (Black Strap, Free)" image="https://rukminim1.flixcart.com/image/416/416/jy0frm80/smartwatch/7/7/d/a1-black-smartwatch-bsw-12-cyxus-4g-original-imafgb8b4uec97fb.jpeg?q=70" price="2,599" rating={4}></Product>
           <Product id={4} title="Amazon Echo (2nd Gen) - Powered by Dolby – Black" image="https://images-na.ssl-images-amazon.com/images/I/61QoZCzMx3L._SL1000_.jpg" price="10,999" rating={5}></Product>
           <Product id={5} title="Apple Ipad air" image="https://assets.pcmag.com/media/images/550184-keyboard.jpg" price="1,03,999" rating={5}></Product>
           </div>
           <div className="items">
           <Product id={6} title="Samsung UN55RU7300FXZA Curved 55-Inch 4K UHD 7 Series Ultra HD Smart TV with HDR and Alexa Compatibility" image="https://images-na.ssl-images-amazon.com/images/I/91o08DsRplL._AC_SX355_.jpg" price="2,04,878" rating={5}></Product>
           </div>
          </div>
        </div>
    )
}

export default Home
