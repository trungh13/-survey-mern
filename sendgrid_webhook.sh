function localtunnel {
  lt -s empty-localtunnel-here-just-me --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done