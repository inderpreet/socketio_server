const router = require('express').Router()

const { log } = require("../Middleware/logger");
const {get_data, set_data} = require("../Services");

router.get('/', (req, res)=>{
        log(req.body);
        const data = get_data()
        
        res.setHeader("Content-Type", "application/json");
        res.send(data);
})

module.exports = router;
