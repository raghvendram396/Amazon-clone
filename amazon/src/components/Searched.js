import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../firebase';
import './Searched.css';
import { Grid } from '@material-ui/core';
import Product from './Product';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


function Searched() {
    const searched_item=useSelector(state=> state.search);
    const item_search=searched_item.replace(/\s/g, "").toLowerCase();
    const [search_array,setsearch_array]=useState([]);
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
      item_style:{
  
      },
      container_style:{
        justifyContent: "center",
      }
  }));
  const click=useSelector(state=>state.search_click)
    useEffect(()=>{
      console.log(searched_item)
      if(searched_item.length!=0) {
      db.collection('products')
      .orderBy('id','asc')
      .onSnapshot(snapshot=>(
        setsearch_array(snapshot.docs.filter(function(doc) {
          return doc.data().title.replace(/\s/g,"").toLowerCase().includes(searched_item.replace(/\s/g,"").toLowerCase(),0);
        }))
    ))
  }
    },[click])

    const classes=useStyles();
const createSearch=(prod,index) => {
    return <Grid item md={6} sm={6} xs={12}>
    <Product
    id={prod.id} title={prod.data().title} rating={prod.rating} price={prod.data().price} image={prod.data().image}></Product>
</Grid>
}
    
  return (
    search_array.length===0?<div className='Home'><h3 style={{margin: "20px"}}>No items found matching your requirement...</h3></div>
:    <div className='Home'>
<Grid container className={classes.container_style} >
{search_array.map(createSearch)}
</Grid> 
    </div>
  )
}

export default Searched