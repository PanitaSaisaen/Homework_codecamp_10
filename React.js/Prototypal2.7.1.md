### 2.7.1 ในแต่ละบรรทัดจะให้ค่าออกมาเป็นอะไร
#### โจทย์ :
``` 
let animal = {
    jumps : null
};

let rabbit = {
    __proto__ : animal,
    jumps : true
};
```
---
คำถาม :
```
alert(rabbit.jumps);
```
ตอบ : true
```
delete rabbit.jumps;
```
```
alert(rabbit.jumps);
```
ตอบ : null
```
deleteanimal.jumps;
```
```
alert(rabbit.jumps);
```
ตอบ : undefined