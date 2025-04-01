// 슬라이더 드래그 중 .typo1 회전 (모든 .typo1에 대해 적용)
document.querySelector('.inter1').addEventListener('input', function(event) {
  let sliderValue = event.target.value;  // 슬라이더의 값 (0 ~ 100)

  // 슬라이더 값에 맞게 회전 각도를 계산 (0 ~ 360도 범위로 변환)
  let rotationDegree = (sliderValue / 100) * 360;

  // 모든 .typo1 요소에 회전 적용
  document.querySelectorAll('.typo1').forEach(function(typoElement) {
    typoElement.style.transform = `rotate(${rotationDegree}deg)`;
  });

  // 슬라이더 드래그 중 컬러 변경
  event.target.style.setProperty('--slider-thumb-color', '#898989');
});

// 슬라이더 드래그가 끝난 후 원래 스타일로 복원
document.querySelector('.inter1').addEventListener('mouseup', function(event) {
  event.target.style.setProperty('--slider-thumb-color', ''); // 원래 색상으로 복원
});





// 슬라이더 드래그 중 .typo2 회전 (모든 .typo2에 대해 적용)
document.querySelector('.inter2').addEventListener('input', function(event) {
  let sliderValue = event.target.value;  // 슬라이더의 값 (0 ~ 100)

  // 슬라이더 값에 맞게 회전 각도를 계산 (0 ~ 360도 범위로 변환)
  let rotationDegree = (sliderValue / 100) * 360;

  // 모든 .typo2 요소에 회전 적용
  document.querySelectorAll('.typo2').forEach(function(typoElement) {
    typoElement.style.transform = `rotate(${rotationDegree}deg)`;
  });

  // 슬라이더 드래그 중 컬러 변경
  event.target.style.setProperty('--slider-thumb-color', '#898989');
});

// 슬라이더 드래그가 끝난 후 원래 스타일로 복원
document.querySelector('.inter2').addEventListener('mouseup', function(event) {
  event.target.style.setProperty('--slider-thumb-color', ''); // 원래 색상으로 복원
});





// // 슬라이더 드래그 중 .typo1 내 모든 p 태그 안의 span 태그 회전 (회전값 랜덤)
// document.querySelector('.inter3').addEventListener('input', function(event) {
//   let sliderValue = event.target.value;  // 슬라이더의 값 (0 ~ 100)

//   // 슬라이더 값에 맞게 회전 각도를 계산 (0 ~ 360도 범위로 변환)
//   let rotationDegree = (sliderValue / 100) * 360;

//   // 모든 .typo1 요소 내 모든 p 태그 안의 span 태그에 랜덤 회전 적용
//   document.querySelectorAll('.typo1 p span').forEach(function(spanElement) {
//     // 랜덤 회전 각도 생성 (0 ~ 360도)
//     let randomRotation = Math.random() * 360;  // 0에서 360도 사이의 랜덤 값

//     // 랜덤 회전 각도 적용
//     spanElement.style.transform = `rotate(${randomRotation}deg)`;
//     spanElement.style.display = `inline-block`;
//   });

//   // 슬라이더 드래그 중 컬러 변경
//   event.target.style.setProperty('--slider-thumb-color', '#898989');
// });

// // 슬라이더 드래그가 끝난 후 원래 스타일로 복원
// document.querySelector('.inter3').addEventListener('mouseup', function(event) {
//   event.target.style.setProperty('--slider-thumb-color', ''); // 원래 색상으로 복원
// });


// 슬라이더 드래그 중 .typo1 내 모든 p 태그 안의 span 태그 회전
document.querySelector('.inter3').addEventListener('input', function(event) {
  let sliderValue = event.target.value;  // 슬라이더의 값 (0 ~ 100)

  // 슬라이더 값에 맞게 회전 각도를 계산 (0 ~ 360도 범위로 변환)
  let rotationDegree = (sliderValue / 100) * 360;

  // 모든 .typo1 요소 내 모든 p 태그 안의 span 태그에 회전 적용
  document.querySelectorAll('.typo1 p span').forEach(function(spanElement) {
    spanElement.style.transform = `rotate(${rotationDegree}deg)`;
    spanElement.style.display = `inline-block`;
  });

  // 슬라이더 드래그 중 컬러 변경
  event.target.style.setProperty('--slider-thumb-color', '#898989');
});

// 슬라이더 드래그가 끝난 후 원래 스타일로 복원
document.querySelector('.inter3').addEventListener('mouseup', function(event) {
  event.target.style.setProperty('--slider-thumb-color', ''); // 원래 색상으로 복원
});






