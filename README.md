# nesquik-app ( nestjs app )

### 3. ORM

zadachi \
1 orm done - POLUCHILI CIKCLICHESKOE - PLOHO - V NEXT ISPRAVIM \
2 token access \
3 migrations not DONE \
4 add data(users)

---

AUTH

```
curl.exe -X POST "http://localhost:3000/api/v1/auth/register" `
 -H "Content-Type: application/json" `
 -d '{\"login\": \"hto\", \"password\": \"axe atacks\"}'
```

```
curl.exe -X POST "http://localhost:3000/api/v1/auth/login" `
 -H "Content-Type: application/json" `
 -d '{\"login\": \"hto\", \"password\": \"axe atacks\"}'
```

```
{"id":14,"access_token":"318","user":{"id":7,"login":"hto","password":"axe atacks"}}
```

DATA

```
curl.exe -X GET "http://localhost:3000/api/v1/users"
```

```
curl.exe -X GET "http://localhost:3000/api/v1/users/profile/7" `
 -H "Content-Type: application/json" `
 -d '{\"access_token\":\"318\"}'
```

```
curl.exe -X PATCH "http://localhost:3000/api/v1/users/profile/7"
 -H "Content-Type: application/json" `
 -d '{\"login\": \"hto\", \"password\": \"axe atacks\", \"access_token\":\"318\"}'
```

```
curl.exe -X DELETE "http://localhost:3000/api/v1/users/profile/3"
 -H "Content-Type: application/json" `
 -d '{\"login\": \"hto\", \"password\": \"axe atacks\", \"access_token\":\"318\"}'
```

---

create user

```
curl.exe -X POST "http://localhost:3000/api/v1/auth" `
 -H "Content-Type: application/json" `
 -d '{\"username\": \"hmud hto\", \"password\": \"axe atacks\"}'
```

```
curl.exe -X GET "http://localhost:3000/api/v1/auth/profile/3"
```

```
curl.exe -X GET "http://localhost:3000/api/v1/auth/users/"
```

patch useraj

```
curl.exe -X PATCH "http://localhost:3000/api/v1/auth/profile/2" `
 -H "Content-Type: application/json" `
 -d '{\"id\": 2, \"username\": \"hmud hto\", \"password\": \"axe atacks\"}'
```

udalit nah

```
curl.exe -X DELETE "http://localhost:3000/api/v1/auth/profile/" `
 -H "Content-Type: application/json" `
 -d '{\"id\": 1}'
```

entities
dto
users.module
миграции data-souce.ts
![alt text](image-1.png)
![alt text](image-2.png)

---

### 2. AOP - middleware

hmw

create user

```
curl.exe -X POST "http://localhost:3000/users" `
 -H "Content-Type: application/json" `
 -d '{\"name\": \"mahmud hto\", \"password\": \"axe atacks\"}'
```

http://localhost:3000/users/1 - check usera \
http://localhost:3000/users/all - vsex

udalit nah

```
curl.exe -X DELETE "http://localhost:3000/users" `
 -H "Content-Type: application/json" `
 -d '{\"id\": 1}'
```

---

lecture

```
nest g mi logger

! надо подключить к модулю

let - переменная может изменять свое значение в ходе программы ( стараемся избегать, потому что правило хорошого тона )
const - постоянная

const test: number[] = [1, 2, 3, 4, 5]; - массив мразота наша
const last = test
any: bad practice - хуярим по рукам

type data = {id: Number; name: String}
let body: unknown;
class BodyValidator {
    validate(x: any): x is data{ - ЕДИНСТВЕННОЕ НАХУЙ МЕСТО ГДЕ АНУ ДОЗВОЛИТЕЛЬНО!
    if (x.id != undefined && x.name != undefined) {
        return true
    } else {
        return false;
    }
}}
let isData = {id : 1, name : "bebebe"};
new BodyValidator().validate(idData);
![alt text](image.png)
```

---

### 1. created init app (/users)

create user

```
curl.exe -X POST "http://localhost:3000/users"
 -H "Content-Type: application/json"
 -d '{\"name\": \"mahmud hto\"}'
```

get user/:id

```
http://localhost:3000/users/1
```

del usera - i ne bude usera

```
curl.exe -X DELETE "http://localhost:3000/users"
 -H "Content-Type: application/json"
 -d '{\"id\": 1}'
```

get vsex

```
http://localhost:3000/users/all
```

vse.
