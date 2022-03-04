import React, { useEffect ,useState} from 'react'
import "./Home.css"
import Product from "./Product";
import {db} from "../firebase.js";
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
const useStyles=makeStyles(theme=>({
    carousel_style:{
        width: "100%",
        zIndex: "0",
        height: "1000px",
        marginBottom: "-720px",
       [theme.breakpoints.down(840)]:{
           height: "500px",
           marginBottom: "-360px"
       },
       [theme.breakpoints.down(400)]:{
           height: "300px",
           marginBottom: "-220px"
       }
    
    },
    grid_style:{
        zIndex: "0"
    },
    item_style:  {

    }
}));

function Home() {
    const dispatch=useDispatch();
    const [products,setproducts]=useState([]);
   useEffect(()=> {
db.collection('products').
orderBy('id','asc').
onSnapshot(snapshot=>(
    setproducts(snapshot.docs.map(doc=>({data: doc.data()})))
))
dispatch({type:"SET_SEARCH",payload: ""})   
},[])
//    products?.map(prod=>{
//        console.log(prod.data.title);
//        })
       const classes=useStyles();
const createProd=(prod,index) => {
    if(index%6==0 || index%6==1){
    return <Grid item md={6} sm={6} xs={12}>
    <Product
    id={prod.data.id} title={prod.data.title} rating={prod.data.rating} price={prod.data.price} image={prod.data.image}></Product>
</Grid>}
else if(index%6==2 || index%6==3 || index%6==4) {
    return <Grid item md={4} className={classes.item_style} sm={6} xs={12}>
    <Product id={prod.data.id} title={prod.data.title} rating={prod.data.rating} price={prod.data.price} image={prod.data.image}></Product>
</Grid>
}
else {
    return <Grid item md={12} className={classes.item_style} sm={6} xs={12}>
    <Product id={prod.data.id} title={prod.data.title} rating={prod.data.rating} price={prod.data.price} image={prod.data.image}></Product>
</Grid>
}
}
 
    return (
<div className="Home">
<Carousel className={classes.carousel_style} autoPlay={true} stopAutoPlayOnHover={true} interval={4000} navButtonsAlwaysInvisible={true} indicators={false}> 
{/* <img className="background" src="https://reviewed-com-res.cloudinary.com/image/fetch/s--OCGmezmg--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1590656678455/Amazon_Prime_Video_tips_1.jpg"></img> */}
<img className="background" src="https://m.media-amazon.com/images/I/61pxhbXv8tL._SX3740_.jpg"></img>
<img className="background" src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"></img>
<img className="background" src="https://m.media-amazon.com/images/I/71rYbTryV8L._SX3740_.jpg"></img>
<img className="background" src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3740_.jpg"></img>
</Carousel>
          <Grid container className={classes.grid_style}>
        {products.length==0?<div style={{fontSize: "100px",display: "flex",margin: "20px"}}><CircularProgress /><h3 style={{marginLeft:"20px"}}>Loading Content...</h3></div>:products.map(createProd)}
          </Grid>
        </div>
    )
}

export default Home
