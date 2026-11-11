# nesquik-app ( nestjs app )

---

### 2. AOP - middleware

hmw

create user

```
curl.exe -X POST "http://localhost:3000/users" `
 -H "Content-Type: application/json" `
 -d '{\"name\": \"mahmud hto\", \"password\": \"axe atacks\"}'
```

http://localhost:3000/users/1 - check usera
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
