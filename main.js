// main.js
console.log("ゲームのプログラムがモジュールとして読み込まれました！");

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 試しに四角形を描画してみる
ctx.fillStyle = 'blue';
ctx.fillRect(150, 150, 100, 100);