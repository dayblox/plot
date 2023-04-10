# Plot

A WebSocket chatrooms server.

![](../../actions/workflows/ci.yml/badge.svg)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/DZV--w?referralCode=bonus)

## Usage

1. Connect using a WebSocket terminal client ([`wscat` recommended](https://github.com/websockets/wscat))

   - With **no** installation

   ```sh
   pnpm dlx wscat -c wss://plot.gq
   ```

   ```sh
   yarn dlx wscat -c wss://plot.gq
   ```

   ```sh
   npx wscat -c wss://plot.gq
   ```

   - After installation

   ```sh
   wscat -c wss://plot.gq
   ```

2. Join a room with your friends and plot away! :tada:
