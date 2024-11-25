const express= require("express");
const app =express();

app.get("/",(req,res)=>{
    res.json([
        {
            id:1,
            name:"joy",
            age:23
        },
        {
            id:3,
            name:"joyeee",
            age:23
        },
        {
            id:4,
            name:"joydas",
            age:26
        },
        {
            id:2,
            name:"e",
            age:240
        },
    ])
});
app.listen(5000,()=>{
    console.log("the port is running at 5000")
})