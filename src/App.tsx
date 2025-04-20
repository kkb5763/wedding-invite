import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-center p-8">
      <h1 className="text-3xl font-bold mb-4">저희 결혼합니다</h1>
      <p className="text-lg mb-2">
        2025년 12월 1일 (월)<br />
        범계역 인근 예식장
      </p>
      <img
        src="/images/wedding.png"
        alt="결혼사진"
        className="mx-auto my-4 rounded-xl shadow-md max-w-xs"
      />
      <p className="text-base leading-relaxed">
        서로가 마주 보던 두 사람이<br />
        이제 함께 같은 곳을 바라보며<br />
        새로운 시작을 하려 합니다.<br /><br />
        바쁘시더라도 오셔서<br />
        따뜻한 격려와 축복을 부탁드립니다.
      </p>

      <div className="mt-6">
        <p>신랑 ○○○ & 신부 ○○○</p>
      </div>
    </div>
  );
}

export default App;
