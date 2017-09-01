# EMAIL="user1" PASSWORD="user_1" sh assets/scripts/game/json.sh
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

echo
