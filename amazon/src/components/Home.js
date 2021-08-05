import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="Home">
             <img className="background" src="https://reviewed-com-res.cloudinary.com/image/fetch/s--OCGmezmg--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1590656678455/Amazon_Prime_Video_tips_1.jpg"></img>
          <div className="Products">
           <div className="items">
           <Product id={1} title="
Google Pixel 5 5G 128GB - Just Black" rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81-fNmQqlLL._SL1500_.jpg" price={64999} />
           <Product id={2} title="Philips Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater" price={2999} image="https://images-na.ssl-images-amazon.com/images/I/61DtBPGSmVL._SL1200_.jpg" rating={4} />
           </div>
           <div className="items">
           <Product id={3} title="Apple Smart Watch A1 Black colour 4G watch Smartwatch  (Black Strap, Free)" image="https://rukminim1.flixcart.com/image/416/416/jy0frm80/smartwatch/7/7/d/a1-black-smartwatch-bsw-12-cyxus-4g-original-imafgb8b4uec97fb.jpeg?q=70" price={21999} rating={4}></Product>
           <Product id={4} title="Amazon Echo (2nd Gen) - Powered by Dolby – Black" image="https://images-na.ssl-images-amazon.com/images/I/61QoZCzMx3L._SL1000_.jpg" price={10999} rating={5}></Product>
           <Product id={5} title="Apple Ipad air" image="https://assets.pcmag.com/media/images/550184-keyboard.jpg" price={103990} rating={5}></Product>
           </div>
           <div className="items">
           <Product id={6} title="Samsung Curved 55-Inch 4K UHD 7 Series Ultra HD Smart TV with HDR and Alexa Compatibility" image="https://images-na.ssl-images-amazon.com/images/I/91o08DsRplL._AC_SX355_.jpg" price={204878} rating={5}></Product>
           </div>
           <div className="items">
           <Product id={7} title="OnePlus 9R 5G (Lake Blue, 12GB RAM, 256GB Storage)" image="https://images-na.ssl-images-amazon.com/images/I/61IwksZ-DGL._SL1500_.jpg" price={45999} rating={5}></Product>
           <Product id={8} title="ASUS Vivobook Ultra K513EA-EJ502TS (i5-1135G7/8G/512 PCIe SSD/Indie BLACK/15.6" image="https://images-na.ssl-images-amazon.com/images/I/41IpZERvY1L.jpg" price={62500} rating={4}></Product>
           </div>
          </div>
        </div>
    )
}

export default Home
