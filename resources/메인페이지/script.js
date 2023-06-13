var currentPath = window.location.pathname;
var targetFolder = '/OSMAS/resources/메인페이지/'; // 특정 폴더 경로
var relativePath = '';
var currentPathArray = currentPath.split('/');
var targetPathArray = targetFolder.split('/');

// 공통 부분까지의 경로 인덱스를 찾습니다.
var commonIndex = 0;
while (currentPathArray[commonIndex] === targetPathArray[commonIndex]) {
  commonIndex++;
}

// 현재 경로에서 공통 부분 이전 경로를 추가합니다.
for (var i = commonIndex; i < currentPathArray.length - 1; i++) {
  relativePath += '../';
}

// 특정 폴더까지의 경로를 추가합니다.
for (var j = commonIndex; j < targetPathArray.length - 1; j++) {
  relativePath += targetPathArray[j] + '/';
}

var headerPath = relativePath + '/' + 'header.html';
var footerPath = relativePath+ '/' + 'footer.html';
var cssPath = relativePath+ '/' + '메인 페이지.css';

var logopath = relativePath + '/'+  'resources' + '/' + '로고.PNG';

// 헤더 로드
fetch(headerPath)
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

  // 푸터 로드
fetch(footerPath)
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });


  var element = document.getElementById('element');

  // CSS 파일 경로를 동적으로 설정
  var cssId = 'custom-style';
  var cssPath = cssPath; // 치환할 CSS 파일 경로
  var link = document.getElementById(cssId);
  

  if (!link) {
    // CSS 파일을 로드하기 위한 link 요소 생성
    link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  link.href = cssPath;

  // 요소에 클래스 추가
  element.classList.add('shared-style');