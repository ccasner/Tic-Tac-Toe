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

# "id":506,"email":"user1","token":"BAhJIiUxNmYwNDM4YzQ2MWUxNzQwYzFiZDY4MTc5OTJkNWM5MwY6BkVG--e31a64fed7c5a21c3dcc7d663ebcaacc3d2abc0e"
# ID=506 OLD_PASSWORD="user1" NEW_PASSWORD="user_1" TOKEN="BAhJIiUxNmYwNDM4YzQ2MWUxNzQwYzFiZDY4MTc5OTJkNWM5MwY6BkVG--e31a64fed7c5a21c3dcc7d663ebcaacc3d2abc0e" sh assets/scripts/auth/json.sh
# API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
# URL_PATH="/change-password/${ID}"
#
# curl "${API}${URL_PATH}" \
#   --include \
#   --request PATCH \
#   --header "Authorization: Token token=$TOKEN" \
#   --header "Content-Type: application/json" \
#   --data '{
#     "passwords": {
#       "old": "'"${OLD_PASSWORD}"'",
#       "new": "'"${NEW_PASSWORD}"'"
#     }
#   }'

# ID=506 TOKEN="BAhJIiUxNmYwNDM4YzQ2MWUxNzQwYzFiZDY4MTc5OTJkNWM5MwY6BkVG--e31a64fed7c5a21c3dcc7d663ebcaacc3d2abc0e" sh assets/scripts/auth/json.sh
# API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
# URL_PATH="/sign-out/$ID"
#
# curl "${API}${URL_PATH}" \
#   --include \
#   --request DELETE \
#   --header "Authorization: Token token=$TOKEN" \
#   --header "Content-Type: application/json" \
#
# echo
