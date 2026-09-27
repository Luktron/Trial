#!/data/data/com.termux/files/usr/bin/bash
# ─────────────────────────────────────────────
#  EXAM://PROTOCOL — Iniciar servidor no Termux
#  Uso: bash start.sh [porta]
# ─────────────────────────────────────────────

PORT=${1:-3000}
DIR="$(cd "$(dirname "$0")" && pwd)"

# Verifica Node.js
if ! command -v node &>/dev/null; then
  echo ""
  echo "  [ERRO] Node.js não encontrado."
  echo "  Instale com:  pkg install nodejs"
  echo ""
  exit 1
fi

# Mostra IPs disponíveis
echo ""
echo "  ╔══════════════════════════════════════════╗"
echo "  ║      EXAM://PROTOCOL  —  Termux          ║"
echo "  ╠══════════════════════════════════════════╣"
echo "  ║  Pasta: $DIR"
echo "  ╠══════════════════════════════════════════╣"

# IP Wi-Fi (wlan0)
WIFI_IP=$(ip addr show wlan0 2>/dev/null | grep 'inet ' | awk '{print $2}' | cut -d/ -f1)
if [ -n "$WIFI_IP" ]; then
  echo "  ║  Wi-Fi:  http://$WIFI_IP:$PORT"
fi

# IP hotspot/usb (outros)
for iface in $(ls /sys/class/net/ 2>/dev/null); do
  if [ "$iface" != "wlan0" ] && [ "$iface" != "lo" ]; then
    IP=$(ip addr show "$iface" 2>/dev/null | grep 'inet ' | awk '{print $2}' | cut -d/ -f1)
    if [ -n "$IP" ]; then
      echo "  ║  $iface:  http://$IP:$PORT"
    fi
  fi
done

echo "  ║  Local:  http://localhost:$PORT"
echo "  ╠══════════════════════════════════════════╣"
echo "  ║  Ctrl+C para parar                       ║"
echo "  ╚══════════════════════════════════════════╝"
echo ""

cd "$DIR"
PORT=$PORT node server.js
