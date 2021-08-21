# welnet.js

Raw TCP request with nothing but JavaScript.
Using Chromium's tcpPermission and [playay's WS2S](https://github.com/playay/ws2s)

### Warning

I higly recommend using the universalTCP.js file. Using ws2s work on every browser, tcpPermission only work on recents chromium builds.

# It's useless

For now, at least.
I'll soon create a JavaScript FTP Client with this.

# Usage
## Universal

1) Include the universalTCP.js file
2) (Optional) If you have a ws2s server, modify ws2sHost const in universalTCP.js
3) You can use the JavaScript function welnetTCP() like this:
welnetTCP(host, port, data, msgCallback, closeCallback)
host -> server's domain name or IP address
port -> server's port
data -> first packet to send, raw
msgCallback -> callback with the response packet (E.g. : function(event){console.log("Server Response:", event.data);} )
closeCallback -> (Optional) callback when the connection is terminated (E.g. : function(){console.log("Connection Terminated");} )

## Chrome-Only

Not tested.
