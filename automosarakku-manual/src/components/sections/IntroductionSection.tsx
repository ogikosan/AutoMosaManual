import Image from "next/image";

const features = [
  {
    icon: "fas fa-brain",
    title: "AI による自動検出とモザイク処理",
    description: "高精度なAIモデルで自動検出"
  },
  {
    icon: "fas fa-images",
    title: "アニメ画像とリアル画像の両方に対応",
    description: "専用モデルで最適な処理"
  },
  {
    icon: "fas fa-palette",
    title: "複数の出力形式",
    description: "モザイク、黒塗り、白塗り、ぼかし"
  },
  {
    icon: "fas fa-sliders-h",
    title: "詳細な設定カスタマイズ",
    description: "細かい調整が可能"
  },
  {
    icon: "fas fa-user-cog",
    title: "プロファイル機能による設定管理",
    description: "用途別設定の保存・切替"
  },
  {
    icon: "fas fa-hand-pointer",
    title: "手動処理モードによる細かい調整",
    description: "精密な手動編集機能"
  },
  {
    icon: "fas fa-eye",
    title: "プレビュー機能による処理前確認",
    description: "結果を事前に確認"
  }
];

export function IntroductionSection() {
  return (
    <section id="introduction" className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-800 border-b-3 border-blue-500 pb-2 mb-6">
        <i className="fas fa-info-circle mr-2"></i>はじめに
      </h2>
      
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        オートモザラックは、AI技術を使って画像の特定部分を自動で検出し、モザイクやぼかし処理を行うツールです。高性能なAIモデルによりアニメ画像とリアル画像の両方で精度の高い検出を実現し、GPU環境では1枚あたり約0.2秒（GeForce RTX 4070 Ti使用時）、CPU環境でも約1秒程度の高速処理が可能です。
      </p>

      <h3 className="text-2xl font-semibold text-gray-700 border-l-4 border-green-500 pl-4 mb-6 mt-8">
        主な機能
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
            <i className={`${feature.icon} text-green-600 text-xl mt-1`}></i>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-gray-700 border-l-4 border-green-500 pl-4 mb-6 mt-8">
        重要な注意事項
      </h3>
      
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 border-l-5 border-yellow-500 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-lg mb-3">
          <i className="fas fa-exclamation-triangle mr-2 text-yellow-600"></i>使用上の注意
        </h4>
        <ul className="space-y-2">
          <li className="flex items-start">
            <i className="fas fa-check mr-2 text-green-600 mt-1"></i>
            <span>このツールは適切な目的での使用を前提としています</span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check mr-2 text-green-600 mt-1"></i>
            <span>著作権や肖像権に十分注意してご利用ください</span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check mr-2 text-green-600 mt-1"></i>
            <span>起動時にはDiscord認証が必要です</span>
          </li>
        </ul>
      </div>

      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
        <h4 className="text-xl font-bold text-red-800 mb-4">
          <i className="fas fa-exclamation-circle mr-2"></i>
          最初に必ず確認してください（重要！）
        </h4>
        
        <div className="bg-white p-4 rounded-lg border border-red-200">
          <h5 className="font-semibold text-red-700 mb-3">ツールの置き場所:</h5>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <i className="fas fa-times-circle text-red-500 mt-1"></i>
              <div>
                <strong className="text-red-700">避けるべき場所：</strong>
                <p className="text-sm mt-1">
                  OneDriveのようなクラウド同期フォルダや、特別な権限が必要なフォルダ
                  （例: <code className="bg-gray-200 px-1 rounded">C:\Program Files</code>, 
                  <code className="bg-gray-200 px-1 rounded">C:\Windows</code> など）には置かないでください。
                  予期せぬエラーや動作不良の原因となります。
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <i className="fas fa-check-circle text-green-500 mt-1"></i>
              <div>
                <strong className="text-green-700">推奨場所：</strong>
                <p className="text-sm mt-1">
                  <code className="bg-gray-200 px-1 rounded">C:\</code> ドライブ直下や、
                  ご自身で作成した <code className="bg-gray-200 px-1 rounded">D:\Tools</code> 
                  のような簡単なパスのフォルダに置いてください。
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <i className="fas fa-info-circle text-blue-500 mt-1"></i>
              <div>
                <strong className="text-blue-700">移動時の注意：</strong>
                <p className="text-sm mt-1">
                  ツールは、実行ファイルと同じ場所にある設定ファイルや関連フォルダと一緒に使う必要があります。
                  ツールを移動する場合は、これらの関連ファイルやフォルダも必ず一緒に移動してください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}