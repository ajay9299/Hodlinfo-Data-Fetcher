const axios = require('axios');
const router = require('express').Router();
const HoldInfo = require('./model');

// Fecth data from api
router.get('/fetch',async(req,res,next)=>{
    try {
        const apiData = await axios("https://api.wazirx.com/api/v2/tickers");  
        const mainObj = apiData["data"];
        var cnt = 0;
        for(var key in mainObj){
            await HoldInfo.create(mainObj[key]);
            cnt++;
            if(cnt===10){
                break;
            }
        }

        res.status(200).json({
            msg:"Data get successfully"
        })
    } catch (error) {
        console.log(error)
    }
})

// Get data from db
router.get('/data',async(req,res,next)=>{
    try {
        const storeData = await HoldInfo.find();
        res.status(200).json({
            data:storeData
        })
    } catch (error) {
        next(error);
    }
})

module.exports = router;