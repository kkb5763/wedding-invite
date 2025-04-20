import './index.css';
import { useState } from 'react';

function App() {
  const [current, setCurrent] = useState(0);
  const images = [
    `${import.meta.env.BASE_URL}images/wedding-1.png`,
    `${import.meta.env.BASE_URL}images/wedding-2.png`,
    `${import.meta.env.BASE_URL}images/wedding-3.png`,
    `${import.meta.env.BASE_URL}images/wedding-4.png`,
    `${import.meta.env.BASE_URL}images/wedding-5.png`,
  ];

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-[#fffdf7] text-gray-800 font-serif flex items-center justify-center px-4 py-10">
      {/* 카드 전체 래퍼 */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden pb-10">
        {/* 이미지 */}
        <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/wedding.png)` }} />

        {/* 본문 */}
        <div className="px-6 pt-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-wide mb-3">저희 결혼합니다</h1>
          <p className="text-sm sm:text-base text-gray-600 mb-1">2025년 12월 1일 (월)</p>
          <p className="text-sm sm:text-base text-gray-500 mb-6">범계역 인근 예식장</p>

          <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line text-gray-700 mb-6">
            서로가 마주 보던 두 사람이
            이제 함께 같은 곳을 바라보며
            새로운 시작을 하려 합니다.
            바쁘시더라도 오셔서
            따뜻한 격려와 축복을 부탁드립니다.
          </p>

          <p className="text-base sm:text-lg font-medium mb-6">신랑 봉봉 & 신부 날랭</p>

          {/* 계좌 정보 */}
          <div className="bg-[#fdf2f8] border border-pink-200 p-4 rounded-xl text-left mb-6">
            <h2 className="text-base sm:text-lg font-semibold text-pink-600 mb-2">💌 마음 전하실 곳</h2>
            <p className="text-sm sm:text-base text-gray-700 mb-2">신랑 계좌: <span className="font-mono text-blue-700">100020003000</span></p>
            <p className="text-sm sm:text-base text-gray-700">신부 계좌: <span className="font-mono text-blue-700">200030004000</span></p>
          </div>

          {/* 오시는 길 - 이미지 클릭형 링크 */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">🗺 오시는 길</h2>
            <a href="https://map.kakao.com/link/map/웨딩홀,37.389555,126.951023" target="_blank" rel="noopener noreferrer">
              <img
                src={`${import.meta.env.BASE_URL}images/rocation.png`}
                alt="카카오지도 링크"
                className="w-full rounded-xl shadow mb-4 cursor-pointer hover:opacity-90"
              />
            </a>
          </div>

          {/* 갤러리 슬라이드 */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">📸 갤러리</h2>
            <div className="relative w-full overflow-hidden rounded-xl shadow">
              <img src={images[current]} alt={`갤러리 ${current + 1}`} className="w-full" />
              <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full px-2">◀</button>
              <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full px-2">▶</button>
            </div>
          </div>

          {/* 방명록 */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">💬 방명록</h2>
            <form className="text-left space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">이름</label>
                <input type="text" placeholder="이름을 입력해주세요" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">메시지</label>
                <textarea rows="3" placeholder="축하 메시지를 남겨주세요" className="w-full p-2 border border-gray-300 rounded"></textarea>
              </div>
              <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">
                남기기
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;