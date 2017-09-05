# EMAIL="user1" PASSWORD="user_1" sh assets/scripts/game/json2.sh
# API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
# URL_PATH="/sign-in"
#
# curl "${API}${URL_PATH}" \
#   --include \
#   --request POST \
#   --header "Content-Type: application/json" \
#   --data '{
#     "credentials": {
#       "email": "'"${EMAIL}"'",
#       "password": "'"${PASSWORD}"'"
#     }
#   }'

# TOKEN="BAhJIiU3Y2MzNmMwYzA5YmJiNGI2YjMzMzBhMmVkOGRkYzlmZgY6BkVG--33991cdae9e5786eb49448f14bff4bd06e4d00de" sh assets/scripts/game/json.sh
# curl --include --request POST "http://tic-tac-toe.wdibos.com/games" \
# --header "Content-type: application/json" \
# --header "Authorization: Token token=$TOKEN" \
# --data '{}'

# ID=506 TOKEN="BAhJIiU3ZjdiOTNjNjg2YzVkMDU5MTQzYzNmYzljNmJlNDIwNgY6BkVG--ae2200c41c182dab9d987f014acb4761fdc3e999" sh assets/scripts/game/json2.sh
# curl --include --request PATCH "http://tic-tac-toe.wdibos.com/games/${ID}" \
#   --header "Content-type: application/json" \
#   --header "Authorization: Token token=$TOKEN" \
#   --data '{}'

# TOKEN="BAhJIiVhMWZhZmNlNzdmMGRmYzhhYWRkYWNmYjllMGExZThjZAY6BkVG--d99f37af7b6007e63bcd90c7da3c3847335e5650" sh assets/scripts/game/json2.sh
# curl --include --request GET "http://tic-tac-toe.wdibos.com/games" \
# --header "Authorization: Token token=$TOKEN"

# ID=506 TOKEN="BAhJIiU2Y2Y5YzA0ZWVmM2M3MzZiZGNkMGI0ZTMwZmExMDJiMQY6BkVG--27650fd5fa39190048b0ded30a7d3cc4efe374bf" sh assets/scripts/game/json2.sh
# curl --include --request GET "http://tic-tac-toe.wdibos.com/games/$ID" \
# --header "Authorization: Token token=$TOKEN"
echo
