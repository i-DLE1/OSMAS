


function toggleDropdown(event) {
    console.log("toggleDropdown() 함수가 실행되었습니다.");
    
    var dropdown = document.getElementById("dropdownContent");
    var leftMenu = document.getElementById("left");
    var mainContent = document.getElementById("main");
  
    dropdown.classList.toggle("slide-open");
    leftMenu.style.width = dropdown.classList.contains("slide-open") ? "250px" : "0";
    mainContent.style.marginLeft = dropdown.classList.contains("slide-open") ? "250px" : "0"; /* 추가 */
  }
  // 클릭 이벤트가 발생한 영역 밖을 클릭하면 슬라이드가 닫히도록 설정
  window.addEventListener("click", function (event) {
    var dropdown = document.getElementById("dropdownContent");
    var targetElement = event.target;

    if (!targetElement.closest(".gugu") && !targetElement.closest(".slide-content")) {
      dropdown.classList.remove("slide-open");
    }
  });
