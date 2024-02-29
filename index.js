// 引用 ethers 模塊
const { ethers }= require("ethers");

// 導入助記詞
const mnemonic =
"symbol either purity level tissue involve expand later viable hour range core";

//生成首 100 個地址和私鑰
for(let i=0;i<100;i++){
// 從助記詞生成錢包
const wallet =ethers.HDNodeWallet.fromPhrase(mnemonic,
null,
"m/44'/60'/0'/0/"+ i
);

console.log(`Address ${i}：${wallet.address}`);
console.log(`Private Key ${i}: ${wallet.privateKey}`);
}