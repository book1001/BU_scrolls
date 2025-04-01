// 슬라이더 드래그 중 컬러 변경
document.getElementById('door-top-scroll').addEventListener('input', function(event) {
  let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  let sliderValue = event.target.value;

  // 슬라이더 값에 맞게 스크롤을 이동시킴
  let scrollPosition = (sliderValue / 100) * maxScroll;
  window.scrollTo(0, scrollPosition);

  // 슬라이더 드래그 중 컬러 변경
  event.target.style.setProperty('--slider-thumb-color', '#898989');
});

// 슬라이더 드래그가 끝난 후 원래 스타일로 복원
document.getElementById('door-top-scroll').addEventListener('mouseup', function(event) {
  event.target.style.setProperty('--slider-thumb-color', ''); // 원래 색상으로 복원
});




// 같은 방식으로 bottom-slider에 대해서도 적용
document.getElementById('door-bottom-scroll').addEventListener('input', function(event) {
  let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  let sliderValue = event.target.value;

  // 슬라이더 값에 맞게 스크롤을 이동시킴
  let scrollPosition = (sliderValue / 100) * maxScroll;
  window.scrollTo(0, scrollPosition);

  // 슬라이더 드래그 중 컬러 변경
  event.target.style.setProperty('--slider-thumb-color', '#898989');
});

// 슬라이더 드래그가 끝난 후 원래 스타일로 복원
document.getElementById('door-bottom-scroll').addEventListener('mouseup', function(event) {
  event.target.style.setProperty('--slider-thumb-color', ''); // 원래 색상으로 복원
});





// ======================================================================
window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  let viewportHeight = window.innerHeight;
  let maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // 범위 관리 함수로 모든 범위 정의
  let ranges = getScrollRanges(viewportHeight, maxScroll);

  updateDoorTransform(scrollPosition, ranges.door);
  updateDoorTransform2(scrollPosition, ranges.door2);
  updateDoorTransform3(scrollPosition, ranges.door3);
  updateDoorTransform4(scrollPosition, ranges.door4);
  subheaderTransform(scrollPosition, ranges.subheader);
  updateDoorSlider(scrollPosition, ranges.slider);
  updateMainTransform(scrollPosition, ranges.main);
  updateContentTransform(scrollPosition, ranges.content);

  // 마지막 스크롤 위치에 도달하면 스크롤을 맨 위로 올리기
  if (scrollPosition >= maxScroll) {
    scrollToPosition(viewportHeight);
    // window.scrollTo(0, 0);
  }
});
// ======================================================================



// 🔹 스크롤 위치를 특정 위치로 이동시키는 함수
function scrollToPosition(viewportHeight) {
  window.scrollTo(0, 1 * viewportHeight);  // 1 * viewportHeight 위치로 이동
}

// ======================================================================
// 🔹 스크롤 범위 관리 함수 (각각의 범위를 정의)
function getScrollRanges(viewportHeight, maxScroll) {
  return {
    door: { start: 0, end: 0.2 * viewportHeight },
    door2: { start: 0.2 * viewportHeight, end: 2 * viewportHeight },
    door3: { start: 2 * viewportHeight, end: 2.5 * viewportHeight },
    door4: { start: 8 * viewportHeight, end: 9 * viewportHeight },
    subheader: { start: 4 * viewportHeight, end: 5 * viewportHeight },
    slider: { start: 0, end: maxScroll },
    main: { start: 0.2 * viewportHeight, end: 5 * viewportHeight },
    content: { start: 4 * viewportHeight, end: 9 * viewportHeight },
  };
}

// 🔹 스크롤 범위 관리 함수 (각각의 범위를 정의)
// function getScrollRanges(viewportHeight, maxScroll) {
//   return {
//     door: { start: 0, end: 1 * viewportHeight },  // 0~1 구간
//     door2: { start: 1 * viewportHeight, end: 3 * viewportHeight }, // 2~3 구간
//     door3: { start: 4 * viewportHeight, end: 6 * viewportHeight }, // 2~3 구간
//     slider: { start: 0, end: maxScroll },
//     main: { start: 1 * viewportHeight, end: 5 * viewportHeight },
//     content: { start: 7 * viewportHeight, end: 8 * viewportHeight },
//   };
// }

// ======================================================================
// 🔹 도어(#door-top, #door-bottom) 움직임 관리
function updateDoorTransform(scrollPosition, range) {
  if (scrollPosition >= range.start && scrollPosition < range.end) {
    let doorTranslate = Math.min((scrollPosition / range.end) * 20, 20);
    
    document.getElementById('door-top').style.transform = `translateY(${-doorTranslate}%)`;
    document.getElementById('door-bottom').style.transform = `translateY(${doorTranslate}%)`;
    document.getElementById('door-header').style.transform = `translateY(0%)`;
    document.getElementById('door-footer').style.transform = `translateY(0%)`;
  }
}

//🔹 도어(#door-top, #door-bottom) 움직임 관리 (20%로 고정)
function updateDoorTransform2(scrollPosition, range) {
  if (scrollPosition >= range.start && scrollPosition < range.end) {
    let doorTranslate = 20; // 20%로 고정
    
    document.getElementById('door-top').style.transform = `translateY(${-doorTranslate}%)`;
    document.getElementById('door-bottom').style.transform = `translateY(${doorTranslate}%)`;
    document.getElementById('door-header').style.transform = `translateY(0%)`;
    document.getElementById('door-footer').style.transform = `translateY(0%)`;
  }
}

//🔹 도어(#door-top, #door-bottom) 움직임 관리
function updateDoorTransform3(scrollPosition, range) {
  if (scrollPosition >= range.start && scrollPosition < range.end) {
    let doorTranslate = Math.min((scrollPosition / range.end) * 87, 87);
    
    document.getElementById('door-top').style.transform = `translateY(${-doorTranslate}%)`;
    document.getElementById('door-bottom').style.transform = `translateY(${doorTranslate}%)`;
    document.getElementById('door-header').style.transform = `translateY(0%)`;
    document.getElementById('door-footer').style.transform = `translateY(0%)`;
    // // .subheader의 font-size가 스크롤에 따라 줄어들도록 설정
    // let maxFontSize = 72;  // 시작 font-size 
    // let minFontSize = 44;  // 최종 font-size 
    
    // // 현재 스크롤 위치에 맞게 font-size 계산
    // let fontSize = maxFontSize - ((scrollPosition - range.start) / (range.end - range.start)) * (maxFontSize - minFontSize);
    
    // // .subheader의 padding을 0에서 10px로 점진적으로 변경
    // let maxPadding = 10;  // 최대 padding
    // let minPadding = 0;   // 최소 padding
    
    // // 현재 스크롤 위치에 맞게 padding 계산
    // let padding = (scrollPosition - range.start) / (range.end - range.start) * maxPadding;
    
    // // .subheader에 font-size와 padding 적용
    // document.querySelectorAll('.subheader').forEach(element => {
    //   element.style.fontSize = `${Math.max(fontSize, minFontSize)}px`;
    //   element.style.padding = `${Math.min(padding, maxPadding)}px`;
    // });

  }
}

// 🔹 도어(#door-top, #door-bottom) 움직임 관리 End
function updateDoorTransform4(scrollPosition, range) {
  if (scrollPosition >= range.start && scrollPosition < range.end) {
    let doorTranslate = Math.min((scrollPosition / range.end) * 0, 0);
    
    document.getElementById('door-top').style.transform = `translateY(${-doorTranslate}%)`;
    document.getElementById('door-bottom').style.transform = `translateY(${doorTranslate}%)`;
    document.getElementById('door-header').style.transform = `translateY(0%)`;
    document.getElementById('door-footer').style.transform = `translateY(0%)`;
  }
}

function subheaderTransform(scrollPosition, range) {
  if (scrollPosition > range.start && scrollPosition <= range.end) {
    let contentMove = Math.min(((scrollPosition - range.start) / (range.end - range.start)) * 130, 130);
    
    document.getElementById('door-header').style.transform = `translateX(${-contentMove}%)`;
    document.getElementById('door-footer').style.transform = `translateX(${-contentMove}%)`;
  }

  // if (scrollPosition >= range.start && scrollPosition < range.end) {
  //   let doorTranslate = Math.min((scrollPosition / range.end) * 10, 10);
    
  //   document.getElementById('door-header').style.transform = `translateY(${-doorTranslate}%)`;
  //   document.getElementById('door-footer').style.transform = `translateY(${doorTranslate}%)`;
  // }
}


// 🔹 슬라이더 값 업데이트 (0~100 범위, 스크롤이 마지막에 도달하면 100)
function updateDoorSlider(scrollPosition, range) {
  let sliderValue = Math.min((scrollPosition / range.end) * 100, 100);
  
  if (scrollPosition >= range.end) {
    sliderValue = 0;
  }

  // if (scrollPosition >= range.end) {
  //   sliderValue = 100;
  // }


  document.getElementById('door-top-scroll').value = sliderValue;
  document.getElementById('door-bottom-scroll').value = sliderValue;
  document.getElementById('content').style.transform = 'translateX(0%)';
}


// ======================================================================
// 🔹 main-down과 main-up의 움직임 관리
function updateMainTransform(scrollPosition, range) {
  if (scrollPosition > range.start && scrollPosition <= range.end) {
    let moveAmount = Math.min(((scrollPosition - range.start) / (range.end - range.start)) * 2000, 2000);

    document.querySelectorAll('.main-down').forEach(element => {
      element.style.transform = `translateY(${moveAmount - 2000}px)`;
    });

    document.querySelectorAll('.main-up').forEach(element => {
      element.style.transform = `translateY(${-moveAmount - 2000}px)`;
    });

    document.getElementById('content').style.transform = 'translateX(0%)';
  }
}
// ======================================================================


// 🔹 content 이동 관리 (오른쪽 → 왼쪽)
function updateContentTransform(scrollPosition, range) {
  if (scrollPosition > range.start && scrollPosition <= range.end) {
    let contentMove = Math.min(((scrollPosition - range.start) / (range.end - range.start)) * 100, 100);
    
    document.getElementById('content').style.transform = `translateX(${-contentMove}%)`;
  }
}

