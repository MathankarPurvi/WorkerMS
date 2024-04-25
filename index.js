const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const cors = require('cors');



const staticPath = path.join(__dirname,"../public")



const ConnectDB = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Data?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.4")
        console.log("Connected to DB");
    } catch (error) {
        console.log("Error",error);
        console.log("Network Error");
    }
}

ConnectDB()
const userSchema = new mongoose.Schema({
    fname:{type:String},
    lname:{type:String},
    mname:{type:String},
    contact:{type:String},
    password:{type:String}
})

const User = new mongoose.model('User',userSchema);

app.use(express.json());
app.use(cors({
    origin:'*'
}))
app.use(express.static(staticPath));

app.get("/" , (req,res) => {
    res.send("hello for the express server")
})

app.post('/api/register',async(req,res)=>{
    try {
        console.log(req.body);
        const {fname,mname,lname,contact,password}  =req.body;
        const newUser = new User({fname,mname,lname,contact,password});
        newUser.save();
        console.log(fname);

        return res.send({success:"ok",newUser});
        // return res.send({success:"ok",fname});
    } catch (error) {
        return res.send({success:"noke",error});
    }
})


app.post('/api/login',async(req,res)=>{
    try {
        // console.log(req.body);
        const {fname,password}  = req.body;
        const user = await User.findOne({fname});
        if(!user){
            return res.send({msg:"Invalid Credentials",ok:false});
        }
        if(user.password!==password){
            return res.send({msg:"Invalid Credentials",ok:false});

        }

        // console.log(fname);

        return res.send({success:"ok",msg:"Login Succesfull",user,ok:true});
        // return res.send({success:"ok",fname});
    } catch (error) {
        return res.send({success:"noke",error,ok:false});
    }
})



app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});