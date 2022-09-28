/* 주사위 보기*/
var n ;
const showGameView = () => {
  const bt1 = document.getElementById("bt1") ;
  const bt2 = document.getElementById("bt2") ;
  const inNum = document.getElementById("inNum") ;
  const dice = document.getElementById("dice") ;

  //주사위 이미지 숨기기
  dice.style.display = 'none' ;

  //주사위 버튼 숨기기
  bt1.style.display = 'none' ;

  //확인 버튼 보이기
  bt2.style.display = 'block';

  //번호 선택 보이기
  inNum.style.display = 'block';
}

const showGameOk = () => {
  const bt1 = document.getElementById("bt1") ;
  const bt2 = document.getElementById("bt2") ;
  const inNum = document.getElementById("inNum") ;
  const dice = document.getElementById("dice") ;

  //주사위 이미지 숨기기
  dice.style.display = 'block' ;
  
  //주사위 버튼 보이기
  bt1.style.display = 'block' ;

  //확인 버튼 숨기기
  bt2.style.display = 'none';

  //번호 선택 보이기
  inNum.style.display = 'none';
}

const showDice = () => {
  // 1 ~ 6까지 랜덤수 
  n = Math.floor(Math.random() * 6) + 1;
  console.log(n)
  
  //const htmlTag = `<img src='./images/${n}.png'>`
  //document.querySelector("#dice").innerHTML = htmlTag ;

  showGameView();
}

const showOk = () => {
  showGameOk();
  const radioBts = document.querySelectorAll("input[type=radio]");
  
  let myn ;
  for(let item of radioBts) {
    if (item.checked) {
      myn = item.value;
      break;
    }
  }
  console.log(myn);

  let htmlTag = `<img src='./images/${n}.png'>`

  if (myn == n) {
    htmlTag = `${htmlTag}<img src='./images/o.png'>`;
  }
  else {
    htmlTag = `${htmlTag}<img src='./images/x.png'>`;
  }

  document.querySelector("#dice").innerHTML = htmlTag ;

  //form 초기화
  const form1 = document.getElementById("form1") ;
  form1.reset() ;
}

//DOM이 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
  showGameOk();
})
