
function log(msg, lvl = 0){
        console.log(`LVL: ${lvl} | ${JSON.stringify(msg) }`);
}

module.exports = {log};
