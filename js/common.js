// common.js: 공통 스크립트

document.addEventListener("DOMContentLoaded", function () {

     AOS.init();
     
  const btnTop = document.querySelector(".btn-top");
  if (!btnTop) return;

  // 스크롤 시 active 클래스 토글
  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY || window.pageYOffset;
    const half = window.innerHeight / 2;
    if (scrollY > half) {
      btnTop.classList.add("active");
    } else {
      btnTop.classList.remove("active");
    }
  });

  // btn-top 클릭 시 페이지 상단으로 부드럽게 이동
  btnTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // document.querySelector(".sec-title").classList.add("shake-horizontal");
});


 function handleClick(buttonText) {
            alert(`${buttonText} 뭘 봐!!!!!!!!!!!!!`);
        }