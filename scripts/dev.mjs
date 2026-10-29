import { spawn } from "node:child_process"
import net from "node:net"
import process from "node:process"

const port = 43123

const bridge = net.createServer((socket) => {
  const upstream = net.connect({ port, host: "127.0.0.1" })
  const close = () => {
    socket.destroy()
    upstream.destroy()
  }
  upstream.on("error", close)
  socket.on("error", close)
  socket.pipe(upstream)
  upstream.pipe(socket)
})

function startVite() {
  const vite = spawn("npx", ["vite"], { stdio: "inherit" })
  const stop = (signal) => {
    bridge.close()
    vite.kill(signal)
  }
  process.on("SIGINT", () => stop("SIGINT"))
  process.on("SIGTERM", () => stop("SIGTERM"))
  vite.on("exit", (code) => {
    bridge.close()
    process.exit(code ?? 0)
  })
}

bridge.on("error", (error) => {
  if (error && error.code === "EADDRINUSE") {
    startVite()
    return
  }
  console.error(error)
  process.exit(1)
})

bridge.listen({ port, host: "::", ipv6Only: true }, () => {
  startVite()
})
