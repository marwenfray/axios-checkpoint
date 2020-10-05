const axios =require ('axios');
const express = require ('express');
const app=express();

app.get('/',(req,res)=>{
    
const kyoto = axios.get("api.openweathermap.org/data/2.5/weather?q=kyoto&appid=d92af1e28a5502d5aa7679855447f9b5");
const bangkok = axios.get("api.openweathermap.org/data/2.5/weather?q=bangkok&appid=d92af1e28a5502d5aa7679855447f9b5");
const bali = axios.get("api.openweathermap.org/data/2.5/weather?q=bali&appid=d92af1e28a5502d5aa7679855447f9b5");
const oslo = axios.get("api.openweathermap.org/data/2.5/weather?q=oslo&appid=d92af1e28a5502d5aa7679855447f9b5");
const jakarta = axios.get("api.openweathermap.org/data/2.5/weather?q=jakarta&appid=d92af1e28a5502d5aa7679855447f9b5");
res.send(  
  axios
  .all([kyoto, bangkok, bali, oslo, jakarta])
  .then(axios.spread((kyotoRes, bagkokRes, baliRes, osloRes, jakartaRes) => {
      console.log(kyotoRes.data,bagkokRes.data, baliRes.data, osloRes.data, jakartaRes.data);
    })
  )
  .catch(errors => {
    console.error('errors');
  }))

  });


const PORT = process.env.PORT || 5000



app.listen(PORT,err=>{err?console.log(err):
console.log(`server is connected on port ${PORT} `)}) ;