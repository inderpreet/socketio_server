const { log } = require("../Middleware/logger");

function set_data(data){
        log(data);
}

function get_data(data){
        const _data = {
                "var1": 13,
                "var2": "DATA"
        }
        return _data;
}

module.exports = {set_data, get_data};
