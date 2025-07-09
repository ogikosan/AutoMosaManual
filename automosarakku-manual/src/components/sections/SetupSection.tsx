import Image from "next/image";

const setupSteps = [
  {
    title: "セットアップの実行",
    items: [
      "Setup.batをダブルクリックして実行します",
      "必要なプログラムが自動でダウンロードされます（約5-10分）",
      "インターネット接続が必要です",
      "完了まで待機してください"
    ]
  }
];

const startupSteps = [
  {
    title: "ツールの起動",
    items: [
      "オートモザラック.batをダブルクリックして実行します",
      "ツールの起動まで数秒かかりますので、しばらくお待ちください",
      "セットアップが完了していない場合は、先にSetup.batを実行してください"
    ]
  },
  {
    title: "Discord認証",
    items: [
      "初回起動時、Discord認証画面が表示されます",
      "指示に従ってDiscordアカウントでログインしてください",
      "認証が完了すると、メイン画面が表示されます",
      "認証には有効期限があり、期限が切れた場合は再度認証が必要になります"
    ]
  }
];

export function SetupSection() {
  return (
    <section id="setup" className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-800 border-b-3 border-blue-500 pb-2 mb-6">
        <i className="fas fa-rocket mr-2"></i>初回起動と認証
      </h2>

      <h3 className="text-2xl font-semibold text-gray-700 border-l-4 border-green-500 pl-4 mb-6">
        初回セットアップ（初回のみ）
      </h3>
      
      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6 relative">
        <div className="absolute -top-3 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          1
        </div>
        <h4 className="font-semibold text-lg mb-4 mt-2">セットアップの実行</h4>
        <ul className="space-y-3">
          {setupSteps[0].items.map((item, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-arrow-right text-blue-500 mr-3 mt-1"></i>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/`([^`]+)`/g, '<code class="bg-gray-200 px-2 py-1 rounded text-sm">$1</code>') }} />
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <Image
            src="/img/IEd4HqgBaN.png"
            alt="セットアップ画面1"
            width={500}
            height={300}
            className="w-full max-w-md mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
          />
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <Image
            src="/img/bEOsMD3i27.png"
            alt="セットアップ画面2"
            width={500}
            height={300}
            className="w-full max-w-md mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
          />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-gray-700 border-l-4 border-green-500 pl-4 mb-6">
        通常の起動方法
      </h3>
      
      {startupSteps.map((step, stepIndex) => (
        <div key={stepIndex} className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6 relative">
          <div className="absolute -top-3 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {stepIndex + 1}
          </div>
          <h4 className="font-semibold text-lg mb-4 mt-2">{step.title}</h4>
          <ul className="space-y-3">
            {step.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <i className="fas fa-arrow-right text-blue-500 mr-3 mt-1"></i>
                <span dangerouslySetInnerHTML={{ __html: item.replace(/`([^`]+)`/g, '<code class="bg-gray-200 px-2 py-1 rounded text-sm">$1</code>') }} />
              </li>
            ))}
          </ul>
          
          {stepIndex === 0 && (
            <div className="text-center mt-6 p-4 bg-gray-50 rounded-lg">
              <Image
                src="/img/lqPpqjIca1.png"
                alt="起動画面"
                width={500}
                height={300}
                className="w-full max-w-md mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
          )}
          
          {stepIndex === 1 && (
            <div className="text-center mt-6 p-4 bg-gray-50 rounded-lg">
              <Image
                src="/img/LIqM6mb0a4.png"
                alt="Discord認証画面"
                width={500}
                height={300}
                className="w-full max-w-md mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}