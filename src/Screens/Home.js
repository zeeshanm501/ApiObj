import axios from "axios";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom'
import Grid from "@mui/material/Grid";
import { useEffect} from "react";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";
import { Card } from "@mui/material";
import { CardContent, CardMedia } from "@mui/material";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardRender from "./CardRender";

const Home = () => {
    const[data,setData] = useState([])
    let getData= () =>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    let navigate = useNavigate();
    let moveData = (data) => {
      navigate('/CardRender',{
        state:data
      }) }

      useEffect(() => {
        getData();
      }, []);
  return (
    <div>

      <Container>
        <Grid container sx={{ marginTop: "100px" }} spacing={3}>
          {data.map((e, i) => (
            <Grid item md={3} xs={12} sm={6} key={i}>
              <Card onClick={()=>moveData(e)} className="bgLight" sx={{ maxWidth: 345 }}>
                <CardMedia>
                  <img src={e.image} width="75%" height="250" alt="" />
                </CardMedia>
                <CardContent>
                  <Tooltip title={e.title}>
                    <Typography
                      sx={{ height: 60, overflow: "hidden", fontSize: "18px" }}
                      variant="h6"
                    >
                      {e.title.slice(0, 30) +
                        (e.title.length > 30 ? "..." : "")}
                    </Typography>
                  </Tooltip>
                  <Chip label={e.category} />
                  <Typography sx={{ fontSize: "16px" }}>
                    Rs {e.price}/-
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Routes>
        <Route path='CardRender' element={<CardRender/>}/>
      </Routes>
      
    </div>
  )
}

export default Home
