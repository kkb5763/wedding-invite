import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#fffdf9] text-center px-6 py-10 text-gray-800 font-serif">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-wide">
        저희 결혼합니다
      </h1>

      <p className="text-lg mb-1">2025년 12월 1일 (월)</p>
      <p className="text-md text-gray-600 mb-6">범계역 인근 예식장</p>

      <div className="flex justify-center mb-6">
        <img
          src={`${import.meta.env.BASE_URL}images/wedding.png`}
          alt="결혼사진"
          className="rounded-2xl shadow-xl max-w-[280px]"
        />
      </div>

      <p className="text-base leading-relaxed whitespace-pre-line max-w-md mx-auto text-gray-700">
        서로가 마주 보던 두 사람이{"\n"}
        이제 함께 같은 곳을 바라보며{"\n"}
        새로운 시작을 하려 합니다.{"\n\n"}
        바쁘시더라도 오셔서{"\n"}
        따뜻한 격려와 축복을 부탁드립니다.
      </p>

      <div className="mt-8">
        <p className="text-lg font-medium">신랑 ○○○ & 신부 ○○○</p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-pink-500 mb-2">💖 Tailwind 적용 성공!</h2>
        <p className="text-sm text-gray-500">이제 감성 스타일로 꾸밀 준비 완료 🎉</p>
      </div>
    </div>
  );
}

export default App;
