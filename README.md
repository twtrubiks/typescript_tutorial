# typescript tutorial 開發環境

使用 vscode 以及 dev containers

本篇文章主要是為了練習 typescript 📝

範例 code 都在 [src/demo.ts](src/demo.ts)

## 使用方法

安裝 dev-containers, `>Dev Containers: Rebuild and Reopen in Container`

安裝 package, `npm install --include=dev`

執行 Task, 為了自動 watch 編譯, `>Tasks: Run Task`

開始在 [src/demo.ts](src/demo.ts) 練習寫 code, 會自動編譯到 [dist](dist) 裡面,

如果想要中斷點, 一樣直接在 [src/demo.ts](src/demo.ts) 下中斷即可.

## 教學說明

### dev-containers

使用 vscode 的 Dev Containers 建立環境, 如果不熟悉請參考 [Vscode Dev Containers 教學](https://github.com/twtrubiks/vscode_python_note?tab=readme-ov-file#vscode-dev-containers-%E6%95%99%E5%AD%B8)

### Node.js

相關設定可參考 [package.json](package.json)

也可以使用 `npm init` 自己初始化.

如果想安裝其他的模組可使用 `npm i --save-dev typescript`

### typescript

相關設定可參考 [tsconfig.json](tsconfig.json)

也可以使用 `tsc --init --sourceMap --rootDir src --outDir dist` 自己初始化

查看 typescript 版本

```cmd
tsc --version
```

正常執行 typescript 的流程, 先編譯後, 再執行.

```cmd
tsc src/demo.ts
node dist/demo.js
```

[tsconfig.json](tsconfig.json) 裡面的東西很重要, 因為關係到怎麼編譯,

如果這邊你沒設定, 就需要另外去指定, 例如,

```cmd
tsc src/demo.ts --target es2016 && node dist/demo.js
```

### vscode tasks

因為 typescript 是需要透過編譯後才可以執行, 這邊使用了 vscode 的 task 幫我們自動 watch 編譯.

相關設定可參考 [.vscode/tasks.json](.vscode/tasks.json)

如果你不想編譯後再執行, 可以考慮改成使用 [ts-node](https://www.npmjs.com/package/ts-node) 之類的.

### dprint

使用 [dprint](https://marketplace.visualstudio.com/items?itemName=dprint.dprint) 作為格式化工具, 保存後就會自動排版.

dprint 相關的設定可參考 [dprint.json](dprint.json)

## 結論

我發現 node.js 和 typescript 的環境相比 python 複雜多了, 好多東西要設定.

## Donation

文章都是我自己研究內化後原創，如果有幫助到您，也想鼓勵我的話，歡迎請我喝一杯咖啡:laughing:

![alt tag](https://i.imgur.com/LRct9xa.png)

[贊助者付款](https://payment.opay.tw/Broadcaster/Donate/9E47FDEF85ABE383A0F5FC6A218606F8)

## License

MIT license
