export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">
            <i className="fas fa-robot mr-3"></i>
            AutoMosaRakku 完全マニュアル
          </h1>
          <p className="text-xl text-blue-100">自動モザイクツール - 使用ガイド</p>
          <div className="mt-4 flex justify-center items-center space-x-4 text-sm flex-wrap">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
              <i className="fas fa-magic mr-1"></i>AI自動検出
            </span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
              <i className="fas fa-bolt mr-1"></i>高速処理
            </span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
              <i className="fas fa-cogs mr-1"></i>詳細設定
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}