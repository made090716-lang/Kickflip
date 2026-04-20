$(document).ready(function() {
  
  // 1. 스티커를 클릭했을 때 영상 띄우기
  $('.sticker').on('click', function() {
    // 클릭한 스티커의 data-video-id 값을 가져옵니다.
    var videoId = $(this).attr('data-video-id');
    
    // 만약 data-video-id 값이 비어있지 않다면 실행
    if (videoId) {
      // 유튜브 임베드 주소 생성 (자동재생 옵션 ?autoplay=1 추가)
      var videoUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';
      
      // HTML에 만들어둔 iframe의 src 속성에 주소를 넣습니다.
      $('#youtubePlayer').attr('src', videoUrl);
      
      // 모달창에 'active' 클래스를 추가해서 화면에 보이게 합니다. (CSS에 설정해두심)
      $('#videoModal').addClass('active');
    }
  });

  // 2. 닫기 버튼(X)이나 검은색 모달 배경을 클릭했을 때 영상 끄기
  $('.close-btn, #videoModal').on('click', function(e) {
    // 영상 영역(iframe) 자체를 클릭했을 때는 꺼지지 않도록 방지
    if (e.target !== this) return;

    // 모달창 숨기기
    $('#videoModal').removeClass('active');
    
    // iframe의 src 주소를 텅 비워서 백그라운드에서 들리던 영상 소리를 확실하게 끕니다.
    $('#youtubePlayer').attr('src', '');
  });

});