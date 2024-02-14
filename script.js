function typeWriter(text, elementId, delay, onComplete) {
    let index = 0;
    function type() {
      if (index < text.length) {
        document.getElementById(elementId).innerHTML += text.charAt(index);
        index++;
        setTimeout(type, delay);
      } else if (onComplete) {
        onComplete(); // 타이핑이 끝나면 onComplete 콜백 함수 실행
      }
    }
    type();
  }
  
  // 첫 번째 문장 타이핑 후 두 번째 문장 타이핑 시작
  typeWriter("당신 근처의 ", "typing1", 150, function() {
    typeWriter("동네 마트 커뮤니티", "typing2", 150);
  });
  