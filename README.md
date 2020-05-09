# HTML

## 태그


### **h 태그**
h 태그는 제목을 나타내는 태그로 뒤에 숫자를 붙여 크기를 조절할 수 있다.  

```html
<h1> 제목1 </h1>
<h2> 제목2 </h2>
<h3> 제목3 </h3>
<h4> 제목4 </h4>
```

<h1> 제목1 </h1>
<h2> 제목2 </h2>
<h3> 제목3 </h3>
<h4> 제목4 </h4>  

---

### **p 태그**
p 태그는 문장을 나타내는 태그로 사용시 자동으로 한줄을 띄게된다.

```html
<p> 안녕하세요. </p>
```

<p> 안녕하세요. </p>

---

### **strong, b 태그**
strong과 b 태그는 글자를 bold체로 바꿔주는 태그이다.
```html
<p> 안녕하세요. <strong>정준원</strong>입니다. </p>
<p> 오늘 <b>날씨</b>가 좋다. </p>
```
<p> 안녕하세요. <strong>정준원</strong>입니다. </p>
<p> 오늘 <b>날씨</b>가 좋다. </p>

---

### **u 태그**
u 태그는 글자에 밑줄을 치는 태그이다.  
```html
<p> 이것은 <u>민트초코</u>이다. </p>
```
<p> 이것은 <u>민트초코</u>이다. </p>

---
### **em, i 태그**
em과 i 태그는 글자들을 기울이는 태그로 선택된 글자들을 기울인다.
```html
<p> <em> 글자가 기울여집니다. </em> </p>
<p> <i> 과제를 내일 아침까지 내세요 </i> </p>
```
<p> <em> 글자가 기울여집니다. </em> </p>
<p> <i> 과제를 내일 아침까지 내세요 </i> </p>

---

### **s 태그**
s 태그는 글자들을 취소선을 긋는다.
```html
<p> <s> 취소선을 긋습니다. </s> </p>
```
<p> <s>취소선을 긋습니다. </s> </p>

---

### **ol 태그**
ol 태그는 리스트를 나타내는 태그로써 뒤에 입력되는 리스트들을 순서대로 정리해준다.  

```html
<ol> 
    <li> 사과 </li>
    <li> 바나나</li>
    <li> 오이 </li>
</ol>
```
<ol> 
    <li> 사과 </li>
    <li> 바나나</li>
    <li> 오이 </li>
</ol>

---

### **ul 태그**
ul 태그는 리스트를 나타내는 태그로써 뒤에 입력되는 리스트들을 순서없이 정리해준다.

```html
<ul> 
    <li> 사과 </li>
    <li> 바나나</li>
    <li> 오이 </li>
</ul>
```

<ul> 
    <li> 사과 </li>
    <li> 바나나</li>
    <li> 오이 </li>
</ul>

---

### **a 태그**
a 태그는 속성을 이용하여 문서내의 특정 구간이나 다른 웹사이트로 이동하거나 파일, 이메일로 연결할 수 있도록 만들 수 있다.
```html
<p> <a href="https://www.naver.com"> naver </a> </p>
<p> <a href="mailto:example@example.com"> example에게 메일보내기 </a> </p>
<p> <a href="tel:+0123456789"> 전화걸기 </a> </p>
<p> <a href="#"> 문서의 젤 위로 이동 </a> </p>
```
<p> <a href="https://www.naver.com"> naver </a> </p>
<p> <a href="mailto:example@example.com"> example에게 메일보내기 </a> </p>
<p> <a href="tel:+0123456789"> 전화걸기 </a> </p>
<p> <a href="#"> 문서의 젤 위로 이동 </a> </p>

---

### **img 태그**
img 태그는 이미지를 html문서내에 삽입시켜주는 태그이다.
```html
<img src="https://image.shutterstock.com/image-photo/mountain-peak-everest-highest-world-600w-598924397.jpg">
```
<img src="https://image.shutterstock.com/image-photo/mountain-peak-everest-highest-world-600w-598924397.jpg">

---

# JavaScript

### **let**, **var**의 차이
let과 var는  JavaScript에서 변수를 선언해주는 키워드이다.
하지만 둘에게는 2가지의 차이점이 있다.  
1. Hoisting
2. 재선언 가능 여부

#### Hoisting
Hoist이란 '끌어올리다'라는 사전적 의미를 가지고 있는데 자바스크립트에서는 변수가 선언(Declartion)부분과 할당(Assignment)부분으로 나뉘어 선언부분이 함수의 최상위로 가는것을 말한다.  

```JavaScript
function test(){
    console.log(temp); //undefined
    var temp=40;
    console.log(temp); //40
}
```  
이 코드를 실행했을때 특이한 점이 있는데 처음 console.log(temp)로 출력한 값이 'Reference error : temp is not defined'가 아니라 undefined라고 뜨는 것이다.  

```JavaScript
function test(){
    var temp;
    console.log(temp); //undefined
    temp=40;
    console.log(temp); //40
}
```

이제 let과 var에서의 차이를 보면  
```JavaScript
test=40;
var = test; //에러 X

temp=30;
let temp; //Refrence error : temp is not defined
```
코드를 실행했을때 이와 같이 let은 참조에러가 뜨고 var는 실행이 되는것을 알 수 있다.  

#### 2. 재선언 가능 여부
var와 let의 차이점 2번째로는 변수를 이미 선언한 변수를 재선언 할 수 있냐 없냐이다.
```JavaScript
var test=10;
var test=100;

let temp=20;
let temp=30; //Uncaught SyntaxError: Identifier 'temp' has already been declared
```

---

### ***const***
const는 let, var처럼 변수를 선언할때 사용하는 키워드이다.
```JavaScript
const temp=10;
const temp=20; // Uncaught SyntaxError: Identifier 'temp' has already been declared
const test; //Missing initializer in const declaration
temp = 30; //Uncaught TypeError:Assignment to constant variable.
```

나머지 특징은 let과 비슷하지만 추가적인 특징으로 변수의 값을 변경할 수 없다는 특징을 가지고 있다.  

---

### 함수(Function)  
JavaScript에서 함수는 아래와 같은 형식으로 작성한다.
```JavaScript
function test(parameter){
    return parameter
}
```

또한 객체화 시키고 함수를 만들려면 아래와 같이 사용하면 된다.
```JavaScript
const test = {
    plus: function (a, b){
        return a+b
    }
}
```

함수를 사용할때는 아래와 같이 사용하면 된다.
```JavaScript
test('hello')
test.plus(3,5)
```