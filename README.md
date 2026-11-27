# nesquik-app ( nestjs app )

## start

`cd nesquik-app` \
создаем .env \
`npm ci` - скачиваем зависимоости \
`docker compose up -d postgres` - запускаем бд \
`npm run migration:run` - применяем миграции \
`npm run start:dev` - запускаем апп

если уже все настроенно \
`cd nesquik-app` \
`docker compose up -d postgres` \
`npm run start:dev`

---

ALL USERS

```
http://localhost:3000/api/v1/users/
```

CREATE USER

```
curl.exe -X POST "http://localhost:3000/api/v1/auth/register" `
    -H "Content-Type: application/json"`
    -d '{\"login\": \"13hto\", \"password\": \"axe atacks\"}'

{"id":2,"login":"2hto","password":"axe atacks"}
```

LOGIN USER

> ! НУЖНО ЗАПОМНИТЬ ТОКЕН

```
curl.exe -X POST "http://localhost:3000/api/v1/auth/login" `
    -H "Content-Type: application/json"`
    -d '{\"login\": \"2hto\", \"password\": \"axe atacks\"}'

{"access_token":"433"}
```

CHECK USER PROFILE

```
curl.exe -X GET "http://localhost:3000/api/v1/users/profile/2"`
    -H "X-User-Access-Key: 433"`

{"id":2,"login":"2hto","password":"axe atacks"}
```

PATCH PROFILE

```
curl.exe -X PATCH "http://localhost:3000/api/v1/users/profile/2" `
    -H "Content-Type: application/json" `
    -H "X-User-Access-Key: 433" `
    -d '{\"login\": \"2hto\", \"password\": \"axe atacks\"}'

{"id":2,"login":"2hto","password":"2axe atacks"}
```

DELETE USER

```
curl.exe -X DELETE "http://localhost:3000/api/v1/users/profile/2" `
    -H "X-User-Access-Key: 433"
```

ALL USERS DATA

```
curl.exe -X GET "http://localhost:3000/api/v1/data/all" `
```

CREATE USER:ID DATA

```
curl.exe -X POST "http://localhost:3000/api/v1/data/all" `
    -H "Content-Type: application/json" `
    -H "X-User-Access-Key: 433" `
    -d '{\"data\": \"ADOTA2KOGDA\"}'
```

CHECK USER:ID DATA

```
curl.exe -X GET "http://localhost:3000/api/v1/data/1" `
    -H "X-User-Access-Key: 433"
```

UPDATE USER:ID DATA

```
curl.exe -X PATCH "http://localhost:3000/api/v1/data/1" `
    -H "Content-Type: application/json" `
    -H "X-User-Access-Key: 433" `
    -d '{\"data\": \"2hto\"}'
```

DELETE USER:ID DATA

```
curl.exe -X DELETE "http://localhost:3000/api/v1/data/1" `
    -H "X-User-Access-Key: 433"
```

BLOCK USER:ID

```
curl.exe -X POST "http://localhost:3000/api/v1/users/3/ban" `
    -H "Content-Type: application/json" `
    -H "X-User-Access-Key: 433"

{"id":3,"login":"3hto","password":"axe atacks","isBanned":true}
```

UNBLOCK USER:ID

```
curl.exe -X POST "http://localhost:3000/api/v1/users/3/unban" `
    -H "Content-Type: application/json" `
    -H "X-User-Access-Key: 433"

{"id":3,"login":"3hto","password":"axe atacks","isBanned":false}
```
