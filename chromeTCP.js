function welnetTCP(host, port, data, msgCallback, closeCallback)
{
	navigator.tcpPermission.requestPermission({"remoteAddress":host, "remotePort": port}).then(function()
	{
		let socket = new TCPSocket(host, port);
		socket.writeable.write(data).then(
			msgCallback,
			closeCallback
		);
	});
};
