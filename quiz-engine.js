import { quantumQuizBank } from './quiz-data.js';

const QUIZ_SIZE = 5;
const categoryNames = {
  theory: '理論探索',
  simulation: '實驗與模擬',
  algorithms: '量子演算法'
};

const quizForm = document.querySelector('#quizForm');
const refreshButton = document.querySelector('#refreshQuizButton');
const submitButton = document.querySelector('#submitQuizButton');
const quizStatus = document.querySelector('#quizStatus');
const quizScore = document.querySelector('#quizScore');
const quizProgress = document.querySelector('#quizProgress');
let currentQuestions = [];
let usedQuestionIds = new Set();
let hasSubmitted = false;

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderQuestions() {
  quizForm.innerHTML = currentQuestions.map((question, questionIndex) => `
    <fieldset class="quiz-question" data-question-id="${question.id}">
      <legend><span class="quiz-question-number">${String(questionIndex + 1).padStart(2, '0')}</span><span>${escapeHTML(question.question)}</span></legend>
      <div class="quiz-category">${escapeHTML(categoryNames[question.category])} / 題號 ${question.id}</div>
      <div class="quiz-options">
        ${question.options.map((option, optionIndex) => `
          <label class="quiz-option">
            <input type="radio" name="question-${question.id}" value="${optionIndex}">
            <span>${escapeHTML(option)}</span>
          </label>
        `).join('')}
      </div>
      <div class="quiz-explanation" hidden></div>
    </fieldset>
  `).join('');
  quizScore.textContent = '尚未提交';
  submitButton.disabled = false;
  hasSubmitted = false;
}

function updateProgress() {
  const completed = usedQuestionIds.size;
  quizProgress.textContent = `${completed} / ${quantumQuizBank.length} 題已抽取`;
}

function drawNextQuestions() {
  if (usedQuestionIds.size === quantumQuizBank.length) {
    usedQuestionIds.clear();
    quizStatus.textContent = '上一輪 50 題已完成，已自動開始新的題庫循環。';
  } else {
    quizStatus.textContent = '已載入 5 道新題，選完答案後提交即可查看解析。';
  }

  const availableQuestions = quantumQuizBank.filter((question) => !usedQuestionIds.has(question.id));
  currentQuestions = shuffle(availableQuestions).slice(0, QUIZ_SIZE);
  currentQuestions.forEach((question) => usedQuestionIds.add(question.id));
  renderQuestions();
  updateProgress();
  quizForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function submitAnswers() {
  if (hasSubmitted) return;

  let score = 0;
  let answeredCount = 0;
  currentQuestions.forEach((question) => {
    const fieldset = quizForm.querySelector(`[data-question-id="${question.id}"]`);
    const selected = fieldset.querySelector(`input[name="question-${question.id}"]:checked`);
    const explanation = fieldset.querySelector('.quiz-explanation');
    const options = fieldset.querySelectorAll('.quiz-option');

    if (selected) {
      answeredCount += 1;
      const selectedIndex = Number(selected.value);
      if (selectedIndex === question.answer) score += 1;
      options[selectedIndex].classList.add(selectedIndex === question.answer ? 'is-correct' : 'is-wrong');
    }
    options[question.answer].classList.add('is-answer');
    explanation.innerHTML = `<strong>${selected && Number(selected.value) === question.answer ? '答對' : '正確答案：' + escapeHTML(question.options[question.answer])}</strong><p>${escapeHTML(question.explanation)}</p>`;
    explanation.hidden = false;
    fieldset.classList.add('is-graded');
  });

  const unansweredCount = currentQuestions.length - answeredCount;
  quizScore.textContent = `${score} / ${currentQuestions.length} 分`;
  quizStatus.textContent = unansweredCount > 0
    ? `本次得分 ${score} 分，還有 ${unansweredCount} 題未作答。`
    : `本次得分 ${score} 分，已完成這一回合。`;
  submitButton.disabled = true;
  hasSubmitted = true;
}

refreshButton.addEventListener('click', drawNextQuestions);
submitButton.addEventListener('click', submitAnswers);
drawNextQuestions();

export { drawNextQuestions, submitAnswers };
