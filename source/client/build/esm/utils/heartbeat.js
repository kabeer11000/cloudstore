export default function HeartBeat(pingTimeout) {
    clearTimeout(pingTimeout);
    // Use `WebSocket#terminate()`, which immediately destroys the connection,
    // instead of `WebSocket#close()`, which waits for the close timer.
    // Delay should be equal to the interval at which your server
    // sends out pings plus a conservative assumption of the latency.
    pingTimeout = setTimeout(function () {
        // terminate();
    }, 30000 + 1000);
}
