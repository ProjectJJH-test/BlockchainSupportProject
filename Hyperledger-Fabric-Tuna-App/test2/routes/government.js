var express = require('express');
var router = express.Router();  
var session = require('express-session');
var channel3Query = require('../channel3.js');

router.post('/approveAction', async function(req, res){//피후원자 승인
    var rid = req.body.recipientId;
    var data = [];
    data = await channel3Query.approveRecipient(rid).then(async function(){
        var data=[];
        var recipients = await channel3Query.query1('queryAllRecipient');

        for(recipient of recipients){
            data.push(recipient);
        }
        return data;
    })
    res.render('approve',{
        session: session,
        data: data
    });
});
module.exports = router;