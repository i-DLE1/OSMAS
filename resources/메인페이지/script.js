// 헤더 로드
fetch('../resources/메인페이지/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

// 푸터 로드
fetch('../resources/메인페이지/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });