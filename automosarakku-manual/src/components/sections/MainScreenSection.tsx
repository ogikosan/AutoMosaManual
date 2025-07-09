import Image from "next/image";

export function MainScreenSection() {
  return (
    <section id="main-screen" className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-800 border-b-3 border-blue-500 pb-2 mb-6">
        <i className="fas fa-desktop mr-2"></i>メイン画面の詳細な使い方
      </h2>

      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        メイン画面は左側に設定パネル、右側にプレビューエリアの2つのエリアで構成されています。
      </p>

      <div className="text-center p-6 bg-gray-50 rounded-lg mb-8">
        <Image
          src="/img/0yQMdcPIea.png"
          alt="メイン画面全体"
          width={800}
          height={500}
          className="w-full max-w-4xl mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        />
      </div>

      <h3 className="text-2xl font-semibold text-gray-700 border-l-4 border-green-500 pl-4 mb-6">
        左側：設定パネル
      </h3>
      <p className="mb-6 text-gray-700">設定パネルは上から順に以下の構成になっています。</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <Image
            src="/img/ibs9mAKtlc.png"
            alt="設定パネル上部"
            width={400}
            height={300}
            className="w-full max-w-sm mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
          />
          <p className="mt-2 text-sm text-gray-600">設定パネル上部</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <Image
            src="/img/fLaBUUKtvx.png"
            alt="設定パネル下部"
            width={400}
            height={300}
            className="w-full max-w-sm mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
          />
          <p className="mt-2 text-sm text-gray-600">設定パネル下部</p>
        </div>
      </div>

      {/* Profile Management Section */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4 text-gray-800 border-l-4 border-blue-500 pl-4">
          1. プロファイル管理
        </h4>
        <p className="mb-4 text-gray-700">画面最上部にあるプロファイル管理セクションでは、設定の保存と管理ができます。</p>

        <div className="text-center p-6 bg-gray-50 rounded-lg mb-6">
          <Image
            src="/img/72iDW2pFDl.png"
            alt="プロファイル管理"
            width={600}
            height={200}
            className="w-full max-w-2xl mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "プロファイル選択ドロップダウン",
              items: [
                "現在利用可能なプロファイルが一覧表示されます",
                "「SNS投稿用」「配信用」「カスタム」の3つが標準で用意されています",
                "ドロップダウンをクリックして目的に応じたプロファイルを選択してください"
              ]
            },
            {
              title: "新規ボタン",
              items: [
                "クリックすると新しいプロファイル作成のダイアログが表示されます",
                "プロファイル名を入力して「OK」をクリックすると、現在の設定内容で新しいプロファイルが作成されます",
                "英数字とひらがな、カタカナ、漢字が使用できます"
              ]
            },
            {
              title: "リネームボタン",
              items: [
                "現在選択中のプロファイルの名前を変更できます",
                "クリックすると名前変更ダイアログが表示されます",
                "新しい名前を入力して「OK」をクリックすると名前が変更されます"
              ]
            },
            {
              title: "コピーボタン",
              items: [
                "現在選択中のプロファイルを複製します",
                "クリックすると複製プロファイル名の入力ダイアログが表示されます",
                "名前を入力して「OK」をクリックすると、同じ設定内容の新しいプロファイルが作成されます"
              ]
            }
          ].map((section, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h5 className="font-semibold mb-3 text-blue-600">{section.title}</h5>
              <ul className="text-sm space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mode Selection Section */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold mb-4 text-gray-800 border-l-4 border-purple-500 pl-4">
          モード選択（新規モード・修正モード）
        </h4>
        <p className="mb-6 text-gray-700">手動処理モードには2つのモードがあります：</p>

        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
            <h5 className="font-semibold mb-3 text-blue-600">新規モード</h5>
            <ul className="text-sm space-y-2 mb-4">
              <li>• 未処理の画像に対して新たに処理を行うモード</li>
              <li>• 入力フォルダの画像を読み込み、ゼロから処理を開始</li>
              <li>• 自動処理を使わずに最初から手動で処理したい場合に使用</li>
            </ul>
            <div className="text-center p-4 bg-white rounded-lg">
              <Image
                src="/img/KGObVrWCrv.png"
                alt="新規モード"
                width={400}
                height={250}
                className="w-full max-w-sm mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
            <h5 className="font-semibold mb-3 text-green-600">修正モード</h5>
            <ul className="text-sm space-y-2 mb-4">
              <li>• 自動処理済みの画像を修正するモード</li>
              <li>• 出力フォルダの処理済み画像を読み込み、既存の処理結果を維持しながら修正</li>
              <li>• 自動処理後の微調整や誤検出の修正に最適</li>
              <li>• <strong>重要</strong>: 修正モードでは元画像（入力フォルダ）も参照するため、入力フォルダの設定が必要</li>
            </ul>
            <div className="text-center p-4 bg-white rounded-lg">
              <Image
                src="/img/JhnazKjgUh.png"
                alt="修正モード"
                width={400}
                height={250}
                className="w-full max-w-sm mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}