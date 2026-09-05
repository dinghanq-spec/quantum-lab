const chapters = [
  { number: '01', title: '量子世界<br><em>初探</em>', intro: '在微小到不可思議的世界裡，直覺不一定可靠。讓我們從光開始，重新認識粒子與波。', heading: '量子，究竟是什麼？', breadcrumb: 'QUANTUM 101' },
  { number: '02', title: '波粒<br><em>二象性</em>', intro: '光和電子可以展現波與粒子的特徵，端看我們如何觀察。', heading: '同一個量子，兩種面貌', breadcrumb: 'WAVE-PARTICLE DUALITY' },
  { number: '03', title: '薛丁格的<br><em>貓</em>', intro: '在被觀察以前，量子可以處於多個可能狀態的疊加。', heading: '一隻貓可以同時醒著嗎？', breadcrumb: 'SUPERPOSITION' },
  { number: '04', title: '量子<br><em>穿隧</em>', intro: '量子粒子偶爾能穿過經典物理認為不可能通過的能量障礙。', heading: '穿過牆壁的機率', breadcrumb: 'QUANTUM TUNNELING' }
];

const chapterLinks = document.querySelectorAll('.chapter-link[data-chapter]');
const chapterNumber = document.querySelector('#chapterNumber');
const chapterTitle = document.querySelector('#chapterTitle');
const chapterIntro = document.querySelector('#chapterIntro');
const conceptHeading = document.querySelector('#conceptHeading');
const breadcrumbTitle = document.querySelector('#breadcrumbTitle');
const progressBar = document.querySelector('#progressBar');
const progressText = document.querySelector('#progressText');
const sidebar = document.querySelector('#sidebar');
const menuToggle = document.querySelector('#menuToggle');

if (typeof renderMathInElement === 'function') renderMathInElement(document.body, {
  delimiters: [{ left: '\\[', right: '\\]', display: true }, { left: '\\(', right: '\\)', display: false }, { left: '$', right: '$', display: false }],
  throwOnError: false
});

function selectChapter(index) {
  const chapter = chapters[index];
  chapterLinks.forEach((link, linkIndex) => link.classList.toggle('active', linkIndex === index));
  chapterNumber.textContent = chapter.number;
  chapterTitle.innerHTML = chapter.title;
  chapterIntro.textContent = chapter.intro;
  conceptHeading.textContent = chapter.heading;
  breadcrumbTitle.textContent = chapter.breadcrumb;
  progressBar.style.width = `${(index + 1) * 25}%`;
  progressText.textContent = `${(index + 1) * 25}%`;
  sidebar.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}
chapterLinks.forEach((link) => link.addEventListener('click', () => selectChapter(Number(link.dataset.chapter))));
menuToggle?.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

const worldviewData = {
  ontology: { kicker: 'EINSTEIN / REALISM', quote: '月亮不會因為我們沒有看它，就停止存在。', heading: '物理學是在描述一個獨立存在的真實世界。', description: '愛因斯坦相信，科學的任務是找出不依賴觀察者的物理本質。就算沒有人抬頭看，月亮依然在那裡；電子也應該有它「真的」狀態。', exampleLabel: '生活想像', example: '你轉身時，房間裡的書仍然放在桌上。', footer: '關鍵字：獨立實在・客觀真相・可被發現' },
  epistemology: { kicker: 'BOHR + HEISENBERG / OBSERVATION', quote: '我們談論的，是我們如何了解自然。', heading: '客觀世界不再是與觀察無關的固定劇本。', description: '玻爾與海森堡認為，量子物理描述的是我們如何透過測量取得答案。測量會和量子系統互動，讓某個結果成為現實。', exampleLabel: '量子想像', example: '像問硬幣正面還是反面：測量的方式參與了最後的答案。', footer: '關鍵字：測量互動・可能性・結果被創造' }
};
const worldviewTabs = document.querySelectorAll('.worldview-tab');
function selectWorldview(view) {
  const content = worldviewData[view];
  worldviewTabs.forEach((tab) => { const active = tab.dataset.view === view; tab.classList.toggle('active', active); tab.setAttribute('aria-selected', String(active)); });
  document.querySelector('#worldviewKicker').textContent = content.kicker;
  document.querySelector('#worldviewQuote').textContent = content.quote;
  document.querySelector('#worldviewHeading').textContent = content.heading;
  document.querySelector('#worldviewDescription').textContent = content.description;
  document.querySelector('#worldviewExampleLabel').textContent = content.exampleLabel;
  document.querySelector('#worldviewExample').textContent = content.example;
  document.querySelector('#worldviewFooter').textContent = content.footer;
}
worldviewTabs.forEach((tab) => tab.addEventListener('click', () => selectWorldview(tab.dataset.view)));

const bellSteps = [
  { kicker: '1935 / EINSTEIN · PODOLSKY · ROSEN', label: 'HISTORICAL QUESTION', heading: '量子力學是不是漏掉了某些「真實存在」的資訊？', description: 'EPR 悖論想像兩個糾纏粒子分開很遠後，測量其中一個卻能立刻知道另一個的結果。三位科學家認為，遠方粒子應該早就擁有自己的性質；如果不是，量子力學就可能是不完備的。', takeawayLabel: '核心主張', takeaway: '「鬼魅般的遠距作用」不應該是真實物理。' },
  { kicker: '1964 / JOHN BELL', label: 'A TESTABLE BOUNDARY', heading: '貝爾把哲學爭論變成可測量的數字。', description: '只要世界遵守局域性與局部隱藏答案，不同測量結果的關聯就有一道上限，這就是貝爾不等式。量子力學預測的關聯可以超過這個上限。', takeawayLabel: '關鍵轉折', takeaway: '不用先決定哲學誰正確，直接做實驗比較關聯強度。' },
  { kicker: '1982 → TODAY / EXPERIMENTAL VERDICT', label: 'THE VERDICT', heading: '實驗一次次站在量子力學這邊。', description: '阿斯佩等人的實驗與後來的無漏洞實驗，都觀察到違反貝爾不等式的量子關聯。這排除了愛因斯坦式的局域隱變數方案，但不代表所有本體論都被排除。', takeawayLabel: '今日理解', takeaway: '受挫的是局域本體論；自然確實展現非局域關聯。' }
];
const bellTabs = document.querySelectorAll('.bell-tab');
function selectBellStep(index) {
  const step = bellSteps[index];
  bellTabs.forEach((tab, tabIndex) => { const active = tabIndex === index; tab.classList.toggle('active', active); tab.setAttribute('aria-selected', String(active)); });
  document.querySelector('#bellKicker').textContent = step.kicker;
  document.querySelector('#bellStepLabel').textContent = step.label;
  document.querySelector('#bellHeading').textContent = step.heading;
  document.querySelector('#bellDescription').textContent = step.description;
  document.querySelector('#bellTakeaway').innerHTML = `<span>${step.takeawayLabel}</span><strong>${step.takeaway}</strong>`;
  document.querySelector('#bellProgress').textContent = `STEP 0${index + 1} / 03`;
}
bellTabs.forEach((tab) => tab.addEventListener('click', () => selectBellStep(Number(tab.dataset.bellStep))));

const catButton = document.querySelector('#measureCatButton');
catButton?.addEventListener('click', () => {
  const alive = Math.random() >= .5;
  const result = alive ? '活貓' : '死貓';
  const resultBox = document.querySelector('#catResult');
  resultBox.className = `cat-result ${alive ? 'is-alive' : 'is-dead'}`;
  resultBox.innerHTML = `<strong>測量結果：${result}</strong>波函數已塌縮，盒子裡的狀態現在可以被描述。`;
  const explanation = document.querySelector('#catExplanation');
  explanation.innerHTML = '測量前，貓與放射性物質、毒氣瓶糾纏在一起，處於「又死又活」的疊加態。<em>打開盒子</em>代表觀測或宏觀相互作用介入，讓其中一個結果成為我們看見的現實。';
  explanation.classList.add('visible');
});

const quizForm = document.querySelector('#quizForm');
const quizExplanations = { q1: '互補原理表示不同實驗安排會讓其中一種特性清楚呈現。', q2: '不確定性來自測量與系統的互動，不只是儀器不夠精密。' };
quizForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  let score = 0;
  quizForm.querySelectorAll('.quiz-question').forEach((question) => {
    const selected = question.querySelector('input:checked');
    const answer = question.dataset.answer;
    const feedback = question.querySelector('.quiz-feedback');
    question.classList.remove('is-correct', 'is-wrong');
    question.querySelectorAll('label').forEach((label) => label.classList.remove('correct-option', 'selected-option'));
    if (selected) {
      selected.closest('label').classList.add('selected-option');
      const correct = selected.value === answer;
      score += correct ? 1 : 0;
      question.classList.add(correct ? 'is-correct' : 'is-wrong');
      feedback.textContent = `${correct ? '答對了！' : `再想想：正解是 ${answer.toUpperCase()}。`}${quizExplanations[selected.name]}`;
    } else {
      question.classList.add('is-wrong');
      feedback.textContent = `尚未作答：正解是 ${answer.toUpperCase()}。${quizExplanations[question.querySelector('input').name]}`;
    }
    question.querySelector(`input[value="${answer}"]`).closest('label').classList.add('correct-option');
  });
  document.querySelector('#quizScore').textContent = `${score} / 2`;
});

const answers = { '什麼是量子？': '量子可以想成能量的最小包裹。能量在微觀世界常以一份一份的方式出現。', '什麼是波粒二象性？': '同一個電子有時像小球，有時像擴散的波；量子本來就有這兩種特性。', '量子世界為什麼只能談機率？': '我們不能預言單次結果，但能準確預測大量實驗的機率分布。', '用生活例子解釋量子': '旋轉中的硬幣落桌前有多種可能；量子的疊加則是實際的物理狀態。', '量子力學難嗎？': '先掌握波粒二象性、疊加與機率三個關鍵字，就能逐步建立直覺。', '推薦我先學什麼': '建議先學光和電子，再理解雙狹縫、疊加與測量，最後挑戰穿隧效應。', 'Grover 為什麼是平方根加速？': 'Grover 透過 Oracle 標記目標，再用平均值反轉讓目標振幅逐步放大，因此只需約 O(√N) 次迭代。', '什麼是相位回踢？': 'Oracle 將函數值寫入相位：輸出為 1 的路徑多一個負號，最後透過干涉把資訊轉成可測量的差異。', '為什麼 Shor 演算法會威脅 RSA 密碼？': 'RSA 的安全性依賴大數因數分解很難；Shor 用量子傅立葉變換高效率找模冪函數週期，再把週期轉成因數，因此可能破解傳統 RSA。' };
const chatMessages = document.querySelector('#chatMessages');
const chatInput = document.querySelector('#chatInput');
function askQuestion(question) { if (!question.trim()) return; addMessage(question, true); window.setTimeout(() => addMessage(answers[question] || '這是一個好問題！可以試著問我「什麼是波粒二象性？」。'), 300); }
function addMessage(text, user = false) { const message = document.createElement('div'); message.className = `message ${user ? 'user-message' : 'bot-message'}`; message.innerHTML = `<span class="message-avatar">${user ? '你' : 'Q'}</span><p>${text}</p>`; chatMessages.appendChild(message); chatMessages.scrollTop = chatMessages.scrollHeight; }
document.querySelectorAll('[data-question]').forEach((button) => button.addEventListener('click', () => askQuestion(button.dataset.question)));
document.querySelector('#chatForm')?.addEventListener('submit', (event) => { event.preventDefault(); askQuestion(chatInput.value); chatInput.value = ''; });
