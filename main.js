// --- 1. 唯一の真実（データ構造） ---
const state = {
    cookies: 0,
    clickPower: 1,
    upgradeCost: 10
};

// --- 2. 画面更新の憲法（UI反映関数） ---
function updateUI() {
    // 値の更新
    document.getElementById('val-cookies').innerText = Math.floor(state.cookies);
    document.getElementById('val-power').innerText = state.clickPower;
    
    // ボタンの有効・無効管理
    const upgradeBtn = document.getElementById('btn-upgrade');
    upgradeBtn.innerText = `Buy Upgrade (Cost: ${state.upgradeCost})`;
    upgradeBtn.disabled = state.cookies < state.upgradeCost;
}

// --- 3. アクション（ロジック） ---
// 通常のクリック
document.getElementById('btn-click').onclick = () => {
    state.cookies += state.clickPower;
    updateUI();
};

// アップグレード購入
document.getElementById('btn-upgrade').onclick = () => {
    if (state.cookies >= state.upgradeCost) {
        state.cookies -= state.upgradeCost;
        state.clickPower += 1;
        state.upgradeCost = Math.floor(state.upgradeCost * 1.5); // 価格上昇
        updateUI();
    }
};

// デバッグ用チート
document.getElementById('btn-cheat').onclick = () => {
    state.cookies += 1000;
    updateUI();
};

// 起動時に一度実行
updateUI();