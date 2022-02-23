function welnetTCP(host, port, data, msgCallback, closeCallback, ws2sServer)
{
	const ws2sHost = typeof ws2sServer !== "undefined" ? ws2sServer : "wss://ws2s.feling.net/"; //We need a ws2s server. See https://github.com/playay/ws2s
	const socket = new WebSocket(ws2sHost)
	socket.onmessage = msgCallback;
	socket.onopen = function()
	{
		socket.send(JSON.stringify({
			"command": "connect",
			"host": host,
			"port": port
		}));
		socket.send(JSON.stringify({
			"command": "send",
			"data": data
		}));
	};
	socket.onclose = typeof closeCallback !== "function" || !closeCallback ? function(){} : closeCallback;
};
