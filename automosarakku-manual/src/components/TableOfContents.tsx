"use client";

import { useState } from "react";

const tocItems = [
  { id: "introduction", title: "1. はじめに" },
  { id: "requirements", title: "2. 必要なもの" },
  { id: "setup", title: "3. 初回起動と認証" },
  { id: "main-screen", title: "4. メイン画面の詳細な使い方" },
  { id: "basic-usage", title: "5. 基本的な使い方の流れ" },
  { id: "advanced-features", title: "6. 高度な機能" },
  { id: "troubleshooting", title: "7. トラブルシューティング" },
  { id: "glossary", title: "8. 用語集" },
  { id: "faq", title: "9. FAQ（よくある質問）" },
  { id: "contact", title: "10. お問い合わせ" }
];

export function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-700">
            <i className="fas fa-list mr-2"></i>目次
          </h2>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
        
        <div className={`${isOpen ? "block" : "hidden"} md:block mt-3`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 text-sm">
            {tocItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block px-3 py-2 text-blue-600 hover:bg-blue-50 hover:text-blue-800 rounded transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}