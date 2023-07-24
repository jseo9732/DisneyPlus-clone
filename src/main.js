const container = document.querySelector('.items');
const prevBtn = document.querySelector('.btn__prev');
const nextBtn = document.querySelector('.btn__next');
const wrapper = document.querySelector('.wrapper');

let loopInterval = setInterval(() => {
  translateContainer(-1); // 다음 슬라이드를 보여주는 함수
}, 3000);
wrapper.addEventListener('mouseout', () => {
  loopInterval = setInterval(() => {
    translateContainer(-1); // 다음 슬라이드를 보여주는 함수
  }, 3000);
});
wrapper.addEventListener('mouseover', () => {
  clearInterval(loopInterval);
});
//자동으로 슬라이드를 움직이게 하는 함수
// 이 기능으로 인해 js를 사용
(function addEvent() {
  prevBtn.addEventListener('click', translateContainer.bind(this, 1));
  nextBtn.addEventListener('click', translateContainer.bind(this, -1));
})();

function translateContainer(direction) {
  console.log(container.lastElementChild);
  const selectedBtn = direction === 1 ? 'prev' : 'next';
  container.style.transitionDuration = '500ms';
  if (direction === -1) {
    container.style.transform = `translateX(-1620px)`;
  } else {
    container.style.transform = `translateX(560px)`;
  }
  //5초동안 gap + 이미지 크기 + 이미지 절반 크기인 1620px만큼 움직임
  container.ontransitionend = () => reorganizeEl(selectedBtn);
}

function reorganizeEl(selectedBtn) {
  container.removeAttribute('style');
  selectedBtn === 'prev'
    ? container.insertBefore(
        container.lastElementChild,
        container.firstElementChild
      )
    : container.appendChild(container.firstElementChild);
}
