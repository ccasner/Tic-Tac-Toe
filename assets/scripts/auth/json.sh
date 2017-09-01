# #!/bin/bash
#
#
# # EMAIL="user1" PASSWORD="user1" PASSWORD_CONFIRMATION="user1" sh assets/scripts/auth/json.sh
#
# # API="${API_ORIGIN:-http://httpbin.org}"
# # URL_PATH="/post"
# API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com'}"
# URL_PATH="/sign-up"
#
# curl "${API}${URL_PATH}" \
#   --include \
#   --request POST \
#   --header "Content-Type: application/json" \
#   --data '{
#     "credentials": {
#       "email": "'"${EMAIL}"'",
#       "password": "'"${PASSWORD}"'",
#       "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
#     }
#   }'

# EMAIL="user1" PASSWORD="user1" sh assets/scripts/auth/json.sh
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-in"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
