document.addEventListener("DOMContentLoaded", function () {
  const topInput = document.querySelector("#door-top-scroll");
  const bottomInput = document.querySelector("#door-bottom-scroll");

  const doorTop = document.querySelector("#door-top");
  const doorBottom = document.querySelector("#door-bottom");

  const mainUps = document.querySelectorAll(".main-up");
  const mainDowns = document.querySelectorAll(".main-down");

  if (topInput && bottomInput && doorTop && doorBottom && mainUps.length && mainDowns.length) {
    // 페이지 로딩 시 슬라이더 값을 모두 0으로 설정
    topInput.value = 0;
    bottomInput.value = 0;

    // 슬라이더 값에 따라 translateY 값을 계산하고 적용하는 함수
    function updateTranslateY(sliderValue, targetElement, isTop) {
      let translateValue = 0;

      if (sliderValue >= 0 && sliderValue <= 10) {
        translateValue = (sliderValue / 10) * 20;
        translateValue = isTop ? -translateValue : translateValue; // top은 음수, bottom은 양수
      } else if (sliderValue >= 11 && sliderValue <= 14) {
        translateValue = isTop ? -20 : 20;
      } else if (sliderValue >= 15 && sliderValue <= 20) {
        translateValue = ((sliderValue - 10) / 10) * 87;
        translateValue = isTop ? -translateValue : translateValue;
      } else if (sliderValue >= 21 && sliderValue <= 99) {
        translateValue = isTop ? -87 : 87;
      } else if (sliderValue >= 100) {
        topInput.value = 0;
        bottomInput.value = 0;
        document.querySelector("#content").style.transform = `translateX(0px)`;
        window.scrollTo(0, 0);
      }

      targetElement.style.transform = `translateY(${translateValue}%)`;
    }

    // main-up과 main-down에 대해 transform을 업데이트하는 함수
    function updateMainBackgroundPosition(sliderValue) {
      if (sliderValue >= 5 && sliderValue <= 30) {
        let mainDownTransformValue = -10000 + (sliderValue - 5) * 200;
        let mainUpTransformValue = (sliderValue - 5) * -200;

        mainDowns.forEach(mainDown => {
          mainDown.style.transform = `translateX(0px) translateY(${mainDownTransformValue}px)`;
        });

        mainUps.forEach(mainUp => {
          mainUp.style.transform = `translateX(0px) translateY(${mainUpTransformValue}px)`;
        });
      }
    }

    // content의 translateX를 업데이트하는 함수
    function updateContentPosition(sliderValue) {
      if (sliderValue >= 21 && sliderValue <= 100) {
        let translateXValue = ((sliderValue - 21) / (100 - 21)) * 10500;
        document.querySelector("#content").style.transform = `translateX(-${translateXValue}px)`;
      } else {
        document.querySelector("#content").style.transform = `translateX(0px)`;
      }
    }

    // 슬라이더 값 변경 시 동기화하는 함수
    function syncSliderValue(event) {
      if (event.target === bottomInput) {
        topInput.value = bottomInput.value;
        updateTranslateY(bottomInput.value, doorBottom, false);
        updateTranslateY(topInput.value, doorTop, true);
        updateMainBackgroundPosition(bottomInput.value);
        updateContentPosition(bottomInput.value);
        scrollToPosition(bottomInput.value);
      } else if (event.target === topInput) {
        bottomInput.value = topInput.value;
        updateTranslateY(topInput.value, doorTop, true);
        updateTranslateY(bottomInput.value, doorBottom, false);
        updateMainBackgroundPosition(topInput.value);
        updateContentPosition(topInput.value);
        scrollToPosition(topInput.value);
      }
    }

    // 슬라이더 값에 맞춰 스크롤 위치를 설정하는 함수
    function scrollToPosition(sliderValue) {
      const bodyHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = (sliderValue / 100) * bodyHeight;
      window.scrollTo(0, scrollPosition);
    }

    // 슬라이더 이벤트 리스너 추가
    bottomInput.addEventListener("input", syncSliderValue);
    topInput.addEventListener("input", syncSliderValue);

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
      const bodyHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / bodyHeight) * 100;

      topInput.value = scrollPercentage;
      bottomInput.value = scrollPercentage;

      if (scrollPercentage >= 100) {
        topInput.value = 0;
        bottomInput.value = 0;
        document.querySelector("#content").style.transform = `translateX(0px)`;
        window.scrollTo(0, 0);
      }

      updateTranslateY(topInput.value, doorTop, true);
      updateTranslateY(bottomInput.value, doorBottom, false);
      updateMainBackgroundPosition(topInput.value);
      updateMainBackgroundPosition(bottomInput.value);
      updateContentPosition(scrollPercentage);
    });
  }
});
