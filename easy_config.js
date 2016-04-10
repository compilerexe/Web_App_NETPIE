var microgear = Microgear.create({
    key: APPKEY,
    secret: APPSECRET,
    alias : NETPIE_NAME         /*  optional  */
});

microgear.on('message',function(topic,msg) {

    document.getElementById(CONTENT_ID).innerHTML = msg;

});

microgear.on('connected', function() {

    microgear.setAlias(NETPIE_NAME);    /* alias can be renamed anytime with this function */
    document.getElementById("data").innerHTML = "Now I am connected with netpie...";

});

microgear.on('present', function(event) {
    console.log(event);
});

microgear.on('absent', function(event) {
    console.log(event);
});

microgear.connect(APPID);
