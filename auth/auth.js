// Discord認証チェック用スクリプト
(function() {
    'use strict';
    
    // 認証チェック関数
    async function checkAuth() {
        try {
            const response = await fetch('/api/auth/verify', {
                method: 'GET',
                credentials: 'include'
            });
            
            if (response.ok) {
                const data = await response.json();
                if (data.authenticated) {
                    // 認証成功 - ページを表示
                    document.body.style.display = 'block';
                    return true;
                }
            }
            
            // 認証失敗 - ログインページにリダイレクト
            window.location.href = '/auth/login.html';
            return false;
        } catch (error) {
            console.error('認証チェック中にエラーが発生しました:', error);
            // エラーが発生した場合もログインページにリダイレクト
            window.location.href = '/auth/login.html';
            return false;
        }
    }
    
    // ログアウト関数
    function logout() {
        document.cookie = 'auth_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location.href = '/auth/login.html';
    }
    
    // ページロード時に認証チェック
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // DOMロード後にbodyを非表示にする
            document.body.style.display = 'none';
            checkAuth();
        });
    } else {
        // 既にロード済みの場合
        if (document.body) {
            document.body.style.display = 'none';
        }
        checkAuth();
    }
    
    // グローバルにログアウト関数を公開
    window.logout = logout;
})();