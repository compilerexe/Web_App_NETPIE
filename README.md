# Document v.1

##### It's simple for use Web Application.

### Step 1 - Insert code in head html
    <script src="jquery-1.12.0.min.js"></script>

    <script src="microgear.js"></script>
    <script type="text/javascript">
      /*------------- Setting NETPIE -----------*/
      var NETPIE_NAME = "htmlgear";
      var CHAT_TO     = "esp8266";
      var APPID       = "WebApp";
      var APPKEY      = "24dxjlLA3LAvyWk";
      var APPSECRET   = "aAU6wX2Iynl9KJXwNXW7fUSW8";
      /*----------------------------------------*/
      /*------------- Setting Show Content ----------*/
      var CONTENT_ID  = "data";
      /*----------------------------------------*/
      $(document).ready(function(){
        function SEND(data) {
          microgear.chat(CHAT_TO,data);
        }
        /*---------- Insert Code ----------*/
        $("#btn_led_on").click(function(){
          SEND("LED_ON");
        });
        $("#btn_led_off").click(function(){
          SEND("LED_OFF");
        });
        $("#btn_msg_send").click(function(){
          var msg = $("#txt_data").val();
          SEND(msg);
          $("#txt_data").val("");
        });
        /*---------------------------------*/
      });
    </script>
    <script src="easy_config.js"></script>

### Step 2 - Change setting your data. 

    /*------------- Setting NETPIE -----------*/
      var NETPIE_NAME = "htmlgear";
      var CHAT_TO     = "esp8266";
      var APPID       = "WebApp";
      var APPKEY      = "24dxjlLA3LAvyWk";
      var APPSECRET   = "aAU6wX2Iynl9KJXwNXW7fUSW8";
      /*----------------------------------------*/
      /*------------- Setting Show Content ----------*/
      var CONTENT_ID  = "data";
      /*----------------------------------------*/

