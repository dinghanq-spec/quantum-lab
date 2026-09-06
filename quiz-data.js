export const quantumQuizBank = [
  {
    id: 1,
    category: "theory",
    question: "根據玻爾的互補原理，為什麼波動性與粒子性不能在同一個實驗中同時被清楚觀察？",
    options: [
      "A. 電子在物理上只能選擇一種身分",
      "B. 不同的測量安排會呈現不同面貌，一次只能看見一面",
      "C. 波與粒子在微觀世界永遠不會同時存在",
      "D. 波動性只是測量儀器造成的錯覺"
    ],
    answer: 1,
    explanation: "互補原理指出，波動性與粒子性都是量子的真實面貌，但實驗裝置決定了哪一面能被呈現。"
  },
  {
    id: 2,
    category: "theory",
    question: "在雙狹縫實驗中，單粒子逐一發射後仍能形成干涉圖樣，最能說明什麼？",
    options: [
      "A. 每個粒子都會和另一個粒子碰撞",
      "B. 粒子的量子態能同時包含通過兩條路徑的可能性",
      "C. 偵測器會自動製造條紋",
      "D. 粒子一定以經典波的形式傳播"
    ],
    answer: 1,
    explanation: "即使粒子逐一到達，許多次事件的統計分布仍會出現干涉，反映量子振幅的疊加。"
  },
  {
    id: 3,
    category: "theory",
    question: "海森堡不確定性原理的標準形式是哪一個？",
    options: [
      "A. Δx + Δp = ℏ",
      "B. ΔxΔp ≥ ℏ/2",
      "C. Δx/Δp = 0",
      "D. ΔxΔp = 1/ℏ"
    ],
    answer: 1,
    explanation: "位置與動量的不確定度乘積有下限：ΔxΔp ≥ ℏ/2。這是量子態的基本限制，不只是儀器不夠精密。"
  },
  {
    id: 4,
    category: "theory",
    question: "不確定性原理主要表示什麼？",
    options: [
      "A. 所有測量儀器都有相同的誤差",
      "B. 位置與動量不能同時具有任意精確的數值",
      "C. 粒子的速度永遠無法測量",
      "D. 量子力學不允許任何預測"
    ],
    answer: 1,
    explanation: "量子力學仍能精確預測機率分布，但某些共軛物理量不能同時被準備成任意精確。"
  },
  {
    id: 5,
    category: "theory",
    question: "薛丁格的貓思想實驗主要是為了指出什麼問題？",
    options: [
      "A. 貓比電子更容易被觀察",
      "B. 將量子疊加直接套用到日常宏觀物體會產生概念困難",
      "C. 放射性物質不會衰變",
      "D. 量子力學只能研究生物"
    ],
    answer: 1,
    explanation: "思想實驗把微觀疊加延伸到宏觀世界，凸顯測量、疊加與日常確定經驗之間的問題。"
  },
  {
    id: 6,
    category: "theory",
    question: "在理想的薛丁格貓設定中，盒子尚未打開時，最恰當的描述是什麼？",
    options: [
      "A. 貓已經確定死亡，只是我們不知道",
      "B. 貓已經確定存活，只是我們不知道",
      "C. 整個系統由存活與死亡的疊加態描述",
      "D. 貓同時以兩隻個體存在"
    ],
    answer: 2,
    explanation: "在思想實驗的理想量子描述中，貓與放射性事件糾纏，整個系統由兩種結果的疊加描述。"
  },
  {
    id: 7,
    category: "theory",
    question: "量子疊加最適合用哪一句話描述？",
    options: [
      "A. 粒子同時複製成許多個粒子",
      "B. 量子態是多個基底態振幅的線性組合",
      "C. 粒子快速在兩個位置間移動",
      "D. 測量結果永遠是平均值"
    ],
    answer: 1,
    explanation: "疊加是狀態向量的線性組合；測量後才會得到某個觀測值，機率由振幅決定。"
  },
  {
    id: 8,
    category: "theory",
    question: "波函數的絕對值平方通常代表什麼？",
    options: [
      "A. 粒子的質量",
      "B. 粒子的速度",
      "C. 在某位置或結果被測得的機率密度",
      "D. 波函數的相位"
    ],
    answer: 2,
    explanation: "玻恩規則指出，|ψ|² 給出在位置或特定測量結果附近找到粒子的機率密度。"
  },
  {
    id: 9,
    category: "theory",
    question: "量子糾纏是指什麼？",
    options: [
      "A. 兩個粒子永遠位於同一位置",
      "B. 兩個系統的聯合量子態不能拆成各自獨立狀態的乘積",
      "C. 粒子之間以超光速傳送訊息",
      "D. 兩個粒子具有完全相同的質量"
    ],
    answer: 1,
    explanation: "糾纏是聯合狀態的不可分解性；它造成強關聯，但不能用來傳送超光速可控訊息。"
  },
  {
    id: 10,
    category: "theory",
    question: "EPR 悖論對量子力學提出的核心質疑是什麼？",
    options: [
      "A. 量子力學的計算速度太慢",
      "B. 遠距糾纏關聯是否暗示理論不完備或存在局域隱變量",
      "C. 光速可能大於真空光速",
      "D. 電子沒有自旋"
    ],
    answer: 1,
    explanation: "EPR 認為量子理論可能缺少描述物理實在的變量，並質疑遠距關聯的意義。"
  },
  {
    id: 11,
    category: "theory",
    question: "貝爾不等式的實驗違反通常排除了哪一類理論？",
    options: [
      "A. 所有統計理論",
      "B. 同時滿足局域性與實在論的局域隱變量理論",
      "C. 所有經典力學",
      "D. 所有使用機率的理論"
    ],
    answer: 1,
    explanation: "貝爾實驗顯示自然界的關聯不能由同時具備局域性與預存實在性的隱變量模型完整解釋。"
  },
  {
    id: 12,
    category: "theory",
    question: "本體論問題主要在追問什麼？",
    options: [
      "A. 我們如何設計更快的電腦",
      "B. 世界中究竟什麼是真實存在的",
      "C. 如何提高測量的解析度",
      "D. 如何將單位換算成 SI 制"
    ],
    answer: 1,
    explanation: "本體論討論存在與實在的性質；量子力學中的本體論會追問波函數、粒子與測量結果的地位。"
  },
  {
    id: 13,
    category: "theory",
    question: "認識論觀點在量子力學中較關心哪件事？",
    options: [
      "A. 我們如何取得、表示與預測物理知識",
      "B. 電子的精確半徑是多少",
      "C. 真空是否有顏色",
      "D. 原子核由幾何圓組成嗎"
    ],
    answer: 0,
    explanation: "認識論聚焦於知識、觀測與描述的條件，而不是直接宣稱世界的終極構成。"
  },
  {
    id: 14,
    category: "theory",
    question: "量子測量的投影後，為何同一次測量的重複結果會穩定？",
    options: [
      "A. 測量會將系統投影到對應觀測量的本徵態",
      "B. 測量會刪除所有物理定律",
      "C. 每個粒子都被替換成經典粒子",
      "D. 偵測器只會回傳平均值"
    ],
    answer: 0,
    explanation: "理想投影測量後，系統進入該結果對應的本徵態，再次測量同一觀測量會得到相同結果。"
  },
  {
    id: 15,
    category: "theory",
    question: "量子退相干通常會造成什麼效果？",
    options: [
      "A. 增強所有干涉條紋",
      "B. 系統與環境互動，使相干相位資訊逐漸散失",
      "C. 讓粒子獲得無限能量",
      "D. 將所有機率變成零"
    ],
    answer: 1,
    explanation: "環境耦合會把相位資訊分散到環境中，讓不同分支之間的可觀察干涉逐漸消失。"
  },
  {
    id: 16,
    category: "theory",
    question: "德布羅意關係 λ = h/p 表示什麼？",
    options: [
      "A. 動量越大，物質波波長通常越短",
      "B. 動量越大，波長一定越長",
      "C. 所有粒子波長都相同",
      "D. 波長與普朗克常數無關"
    ],
    answer: 0,
    explanation: "物質波波長與動量成反比，因此高動量粒子的德布羅意波長通常較短。"
  },
  {
    id: 17,
    category: "theory",
    question: "量子穿隧效應描述哪種現象？",
    options: [
      "A. 粒子能以非零機率出現在經典能量不足以通過的障礙另一側",
      "B. 粒子完全不受能量守恆限制",
      "C. 粒子必定穿過任何厚度的牆",
      "D. 粒子只能在真空中移動"
    ],
    answer: 0,
    explanation: "量子波函數可滲入有限勢壘，使粒子在障礙另一側具有非零機率，但機率會隨障礙增厚而降低。"
  },
  {
    id: 18,
    category: "theory",
    question: "在量子力學中，觀測量通常以什麼數學物件表示？",
    options: [
      "A. 隨機硬幣",
      "B. 厄米算符",
      "C. 純量常數",
      "D. 圓周率表"
    ],
    answer: 1,
    explanation: "可觀測量由厄米算符表示，其本徵值為可能的測量結果，並保證結果為實數。"
  },
  {
    id: 19,
    category: "simulation",
    question: "雙狹縫實驗中，若加入可以判斷粒子通過哪一條狹縫的偵測器，通常會發生什麼？",
    options: [
      "A. 干涉條紋更清楚",
      "B. 路徑資訊使干涉可見度降低或消失",
      "C. 粒子全部停在狹縫前",
      "D. 螢幕上的粒子數變成零"
    ],
    answer: 1,
    explanation: "可取得的路徑資訊會破壞兩條路徑振幅間的相干性，因此干涉條紋會減弱。"
  },
  {
    id: 20,
    category: "simulation",
    question: "雙狹縫干涉圖樣中的亮紋，代表什麼？",
    options: [
      "A. 兩條路徑的量子振幅建設性干涉",
      "B. 粒子速度變成光速",
      "C. 偵測器故障",
      "D. 所有粒子都走同一條路"
    ],
    answer: 0,
    explanation: "在亮紋位置，兩條路徑的振幅相位相容，合成後的機率較高。"
  },
  {
    id: 21,
    category: "simulation",
    question: "一個量子位元的計算基底狀態通常寫成哪兩個？",
    options: [
      "A. |0⟩ 與 |1⟩",
      "B. |x⟩ 與 |y⟩",
      "C. |+⟩ 與 |-⟩ 永遠是唯一基底",
      "D. |A⟩ 與 |B⟩"
    ],
    answer: 0,
    explanation: "單量子位元的計算基底是 |0⟩ 和 |1⟩；其他正交基底也可使用，但不是題目指定的計算基底。"
  },
  {
    id: 22,
    category: "simulation",
    question: "一般單量子位元狀態 α|0⟩ + β|1⟩ 必須滿足哪個正規化條件？",
    options: [
      "A. α + β = 1",
      "B. |α|² + |β|² = 1",
      "C. αβ = 1",
      "D. |α| + |β| = 0"
    ],
    answer: 1,
    explanation: "測量機率是 |α|² 與 |β|²，所有結果機率總和必須為 1。"
  },
  {
    id: 23,
    category: "simulation",
    question: "將 |0⟩ 狀態套用 X 閘後，結果是什麼？",
    options: [
      "A. |0⟩",
      "B. |1⟩",
      "C. (|0⟩ + |1⟩)/√2",
      "D. -i|0⟩"
    ],
    answer: 1,
    explanation: "X 閘是量子位元的位元翻轉，會將 |0⟩ 與 |1⟩ 互換。"
  },
  {
    id: 24,
    category: "simulation",
    question: "X 閘連續作用兩次的結果為何？",
    options: [
      "A. 等同於 Z 閘",
      "B. 等同於 H 閘",
      "C. 等同於恆等閘 I",
      "D. 會讓量子位元消失"
    ],
    answer: 2,
    explanation: "X² = I，因此連續翻轉兩次會回到原本的量子態。"
  },
  {
    id: 25,
    category: "simulation",
    question: "將 |0⟩ 套用 H 閘後，理想狀態是什麼？",
    options: [
      "A. |1⟩",
      "B. (|0⟩ + |1⟩)/√2",
      "C. (|0⟩ - |1⟩)/√2",
      "D. i|0⟩"
    ],
    answer: 1,
    explanation: "H|0⟩ = (|0⟩ + |1⟩)/√2，因此在計算基底測量時得到 0 與 1 各半的機率。"
  },
  {
    id: 26,
    category: "simulation",
    question: "H 閘的關鍵作用通常是什麼？",
    options: [
      "A. 將基底態轉成等幅疊加並改變相位結構",
      "B. 直接測量量子位元",
      "C. 讓所有機率變成 1",
      "D. 只改變粒子的質量"
    ],
    answer: 0,
    explanation: "Hadamard 閘在計算基底與 X 基底間轉換，常用來建立疊加並讀取相位差。"
  },
  {
    id: 27,
    category: "simulation",
    question: "Z 閘對 |0⟩ 與 |1⟩ 的作用是什麼？",
    options: [
      "A. 分別變成 |1⟩ 與 |0⟩",
      "B. |0⟩ 不變，|1⟩ 取得負號",
      "C. 兩者都取得負號",
      "D. 兩者都變成疊加態"
    ],
    answer: 1,
    explanation: "Z|0⟩ = |0⟩，Z|1⟩ = -|1⟩；因此 Z 閘是相位翻轉，不是位元翻轉。"
  },
  {
    id: 28,
    category: "simulation",
    question: "全域相位與相對相位的差別是什麼？",
    options: [
      "A. 全域相位通常不影響測量機率，相對相位可影響干涉",
      "B. 兩者都一定會改變所有測量機率",
      "C. 相對相位永遠無法觀察",
      "D. 全域相位會改變粒子數量"
    ],
    answer: 0,
    explanation: "整個狀態乘上一個共同相位不改變可觀測機率，但分量間的相對相位會影響干涉結果。"
  },
  {
    id: 29,
    category: "simulation",
    question: "布洛赫球的北極與南極通常分別代表哪兩個狀態？",
    options: [
      "A. |0⟩ 與 |1⟩",
      "B. |+⟩ 與 |-⟩ 永遠固定為南北極",
      "C. |x⟩ 與 |y⟩",
      "D. 真空與光子"
    ],
    answer: 0,
    explanation: "慣例上布洛赫球北極是 |0⟩，南極是 |1⟩；球面其他位置表示它們的純態疊加。"
  },
  {
    id: 30,
    category: "simulation",
    question: "布洛赫球表面上的純單量子位元狀態與球內狀態有何不同？",
    options: [
      "A. 球面代表純態，球內通常代表混合態",
      "B. 球面代表混合態，球心代表純態",
      "C. 所有位置都代表同一狀態",
      "D. 球內位置不可能有物理意義"
    ],
    answer: 0,
    explanation: "純態的布洛赫向量長度為 1，位於球面；混合態向量長度小於 1，位於球內。"
  },
  {
    id: 31,
    category: "simulation",
    question: "在布洛赫球上，X 閘可視為繞哪一條軸旋轉 π？",
    options: [
      "A. X 軸",
      "B. Y 軸",
      "C. Z 軸",
      "D. 沒有幾何意義"
    ],
    answer: 0,
    explanation: "X 閘對布洛赫向量相當於繞 X 軸旋轉 π；Z 閘則對應繞 Z 軸旋轉 π。"
  },
  {
    id: 32,
    category: "simulation",
    question: "在布洛赫球上，Z 閘主要改變哪一項？",
    options: [
      "A. 線性偏振的質量",
      "B. 疊加分量間的相對相位",
      "C. 量子位元的維度",
      "D. 測量儀器的溫度"
    ],
    answer: 1,
    explanation: "Z 閘不交換 |0⟩ 與 |1⟩，而是讓其中一個分量多出負號，改變相對相位。"
  },
  {
    id: 33,
    category: "simulation",
    question: "若對 |+⟩ = (|0⟩ + |1⟩)/√2 套用 Z 閘，結果是什麼？",
    options: [
      "A. |+⟩",
      "B. |-⟩ = (|0⟩ - |1⟩)/√2",
      "C. |1⟩",
      "D. |0⟩"
    ],
    answer: 1,
    explanation: "Z 會讓 |1⟩ 分量變號，因此 Z|+⟩ = (|0⟩ - |1⟩)/√2 = |−⟩。"
  },
  {
    id: 34,
    category: "simulation",
    question: "量子電路中的測量通常會造成什麼？",
    options: [
      "A. 將量子態投影到測量基底的某個結果並產生經典輸出",
      "B. 讓量子位元變成任意數量的量子位元",
      "C. 自動套用 H 閘",
      "D. 永遠輸出 0"
    ],
    answer: 0,
    explanation: "測量把量子態投影到某個結果，並將結果以經典位元輸出；結果依量子機率隨機產生。"
  },
  {
    id: 35,
    category: "simulation",
    question: "CNOT 閘在控制位元為 |1⟩ 時，會對目標位元做什麼？",
    options: [
      "A. 對目標套用 X 閘",
      "B. 對控制位元套用 Z 閘",
      "C. 測量兩個位元",
      "D. 將目標刪除"
    ],
    answer: 0,
    explanation: "CNOT 是受控 X 閘：控制位元為 1 時翻轉目標，控制位元為 0 時保持目標不變。"
  },
  {
    id: 36,
    category: "algorithms",
    question: "Deutsch-Jozsa 演算法要判斷黑箱函數屬於哪兩類？",
    options: [
      "A. 素數或合數",
      "B. 常數或平衡",
      "C. 線性或非線性速度",
      "D. 糾纏或未糾纏"
    ],
    answer: 1,
    explanation: "承諾函數不是常數就是平衡；Deutsch-Jozsa 演算法可用一次函數查詢判斷類別。"
  },
  {
    id: 37,
    category: "algorithms",
    question: "Deutsch-Jozsa 演算法相對於經典確定性方法的主要優勢是什麼？",
    options: [
      "A. 在承諾問題上由指數級查詢降為一次查詢",
      "B. 不需要任何量子閘",
      "C. 可以破解所有密碼",
      "D. 保證所有問題都只需一次查詢"
    ],
    answer: 0,
    explanation: "對 n 位元輸入，經典確定性最壞情況需要 2^(n-1)+1 次查詢，而量子版本只需一次。"
  },
  {
    id: 38,
    category: "algorithms",
    question: "Deutsch-Jozsa 電路中，Hadamard 閘的核心用途之一是什麼？",
    options: [
      "A. 建立輸入疊加並讓函數相位資訊能干涉",
      "B. 直接把函數答案寫入所有經典位元",
      "C. 移除所有相位",
      "D. 將黑箱函數改成常數函數"
    ],
    answer: 0,
    explanation: "H 閘建立均勻疊加，函數透過相位回饋編碼，最後的 H 閘讓常數與平衡情形產生不同干涉結果。"
  },
  {
    id: 39,
    category: "algorithms",
    question: "Grover 演算法主要解決哪一類問題？",
    options: [
      "A. 無結構資料庫中的目標搜尋",
      "B. 連續流體力學模擬",
      "C. 量子態的永久儲存",
      "D. 將所有整數排序"
    ],
    answer: 0,
    explanation: "Grover 演算法用振幅放大搜尋未排序資料庫中的標記目標，查詢複雜度約為 O(√N)。"
  },
  {
    id: 40,
    category: "algorithms",
    question: "Grover 演算法相對於經典無結構搜尋的理想查詢複雜度為何？",
    options: [
      "A. O(N²)",
      "B. O(N)",
      "C. O(√N)",
      "D. O(log log N)"
    ],
    answer: 2,
    explanation: "Grover 將經典平均約 O(N) 的搜尋降為約 O(√N) 次 oracle 查詢，提供平方級加速。"
  },
  {
    id: 41,
    category: "algorithms",
    question: "Grover 演算法中的 oracle 通常負責什麼？",
    options: [
      "A. 將目標狀態標記一個相位",
      "B. 直接測量並回傳目標索引",
      "C. 讓所有狀態振幅歸零",
      "D. 產生一個新的資料庫"
    ],
    answer: 0,
    explanation: "oracle 對符合條件的狀態施加相位翻轉，提供搜尋條件的量子標記，但不直接揭露答案。"
  },
  {
    id: 42,
    category: "algorithms",
    question: "Grover 的擴散算子主要做什麼？",
    options: [
      "A. 反射並放大相對於平均振幅較大的標記狀態",
      "B. 將所有狀態隨機刪除",
      "C. 把量子電路變成經典迴圈",
      "D. 只測量第一個量子位元"
    ],
    answer: 0,
    explanation: "oracle 之後的擴散步驟是關於平均值的反射，讓標記狀態振幅逐步增加。"
  },
  {
    id: 43,
    category: "algorithms",
    question: "Grover 迭代次數太多可能造成什麼問題？",
    options: [
      "A. 振幅會在目標與非目標狀態間旋轉，目標機率反而下降",
      "B. 量子位元數量自動增加",
      "C. oracle 變成常數函數",
      "D. 測量會變成完全確定的 0"
    ],
    answer: 0,
    explanation: "振幅放大是週期性旋轉，最佳迭代次數約為 π√N/4；超過最佳點後成功率會下降。"
  },
  {
    id: 44,
    category: "algorithms",
    question: "Shor 演算法的主要目標是什麼？",
    options: [
      "A. 對大整數進行質因數分解",
      "B. 搜尋未排序的單一資料項",
      "C. 判斷函數是否平衡",
      "D. 產生隨機量子態"
    ],
    answer: 0,
    explanation: "Shor 將整數分解轉化為週期尋找，量子部分用量子傅立葉變換高效率找出週期。"
  },
  {
    id: 45,
    category: "algorithms",
    question: "Shor 演算法中的週期尋找通常針對哪種函數？",
    options: [
      "A. f(x) = a^x mod N",
      "B. f(x) = x + N",
      "C. f(x) = sin(x) 且沒有模運算",
      "D. f(x) = 0 對所有 x"
    ],
    answer: 0,
    explanation: "選擇與 N 互質的 a，研究 a^x mod N 的週期 r，週期資訊可用來推導 N 的因數。"
  },
  {
    id: 46,
    category: "algorithms",
    question: "量子傅立葉變換在 Shor 演算法中扮演什麼角色？",
    options: [
      "A. 從相位週期的疊加中提取週期相關資訊",
      "B. 直接將 N 寫成兩個質數的乘積",
      "C. 取代所有經典算術",
      "D. 讓所有測量結果相同"
    ],
    answer: 0,
    explanation: "QFT 將週期結構轉成可由測量推估的頻率資訊，再配合連分數等經典後處理找出週期。"
  },
  {
    id: 47,
    category: "algorithms",
    question: "Shor 演算法為什麼會威脅 RSA？",
    options: [
      "A. RSA 的安全性與大整數分解困難有關，而 Shor 可對其提供多項式時間量子演算法",
      "B. Shor 能讀取所有密碼的明文記憶體",
      "C. RSA 只使用量子位元",
      "D. Shor 會讓所有隨機數失效"
    ],
    answer: 0,
    explanation: "足夠大型且容錯的量子電腦可用 Shor 高效率分解 RSA 模數，因此能推導私鑰。"
  },
  {
    id: 48,
    category: "algorithms",
    question: "在 Shor 的週期 r 已找到後，為何常計算 gcd(a^(r/2) ± 1, N)？",
    options: [
      "A. 這些最大公因數可能提供 N 的非平凡因數",
      "B. 用來測量量子位元的溫度",
      "C. 用來建立 Hadamard 閘",
      "D. 用來刪除週期資訊"
    ],
    answer: 0,
    explanation: "若條件合適，a^r ≡ 1 mod N 可導出 (a^(r/2)-1)(a^(r/2)+1) 與 N 的因數關係。"
  },
  {
    id: 49,
    category: "algorithms",
    question: "量子演算法所說的加速，通常比較的是什麼？",
    options: [
      "A. 查詢或時間複雜度的漸近成長，而不是每一步的執行速度",
      "B. 電腦螢幕更新率",
      "C. 量子位元的物理尺寸",
      "D. 程式碼的字元數量"
    ],
    answer: 0,
    explanation: "量子優勢通常以複雜度表示，關注輸入規模變大時所需資源如何成長。"
  },
  {
    id: 50,
    category: "algorithms",
    question: "下列哪一項最準確地描述量子演算法的限制？",
    options: [
      "A. 所有問題都能獲得指數級加速",
      "B. 量子加速只對具有特定結構的問題有效，且仍需處理測量與錯誤",
      "C. 量子演算法不需要任何經典電腦",
      "D. 量子演算法可以繞過物理定律"
    ],
    answer: 1,
    explanation: "量子演算法必須利用問題結構，例如干涉、週期或振幅放大；它不是所有問題的通用指數級加速器。"
  }
];
