const requirements = [
  {
    icon: "fas fa-laptop",
    title: "対応OS",
    content: "Windows 10/11専用",
    note: "Mac版は2025年7月中に対応予定",
    color: "blue"
  },
  {
    icon: "fas fa-memory",
    title: "メモリ",
    content: "8GB以上推奨",
    note: "より多くのメモリがあると快適に動作",
    color: "blue"
  },
  {
    icon: "fas fa-hdd",
    title: "ディスク容量",
    content: "6GB以上の空き容量",
    note: "AIモデルとプログラム用",
    color: "blue"
  },
  {
    icon: "fas fa-microchip",
    title: "GPU",
    content: "NVIDIA GeForce推奨",
    note: null,
    color: "blue",
    details: [
      "RTX 4070 Tiで約0.2秒/枚の高速処理",
      "AMD RadeonやIntel Arcには非対応",
      "NVIDIA GeForce以外ではCPU処理（約1秒/枚）"
    ]
  }
];

export function RequirementsSection() {
  return (
    <section id="requirements" className="mb-12 scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-800 border-b-3 border-blue-500 pb-2 mb-6">
        <i className="fas fa-desktop mr-2"></i>必要なもの
      </h2>

      <h3 className="text-2xl font-semibold text-gray-700 border-l-4 border-green-500 pl-4 mb-6">
        システム要件
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {requirements.map((req, index) => (
          <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-lg mb-3 text-blue-600 flex items-center">
              <i className={`${req.icon} mr-2`}></i>
              {req.title}
            </h4>
            <p className="font-medium mb-2">{req.content}</p>
            {req.note && (
              <p className="text-sm text-gray-600 mb-2">{req.note}</p>
            )}
            {req.details && (
              <div className="text-sm text-gray-600 space-y-1">
                {req.details.map((detail, i) => (
                  <p key={i}>• {detail}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h4 className="font-semibold text-lg mb-3 text-blue-600 flex items-center">
          <i className="fas fa-wifi mr-2"></i>
          インターネット接続
        </h4>
        <p className="font-medium mb-2">セットアップ時と起動時（認証）に必要</p>
        <p className="text-sm text-gray-600">安定したネットワーク環境を推奨</p>
      </div>
    </section>
  );
}