//using selectors inside the element

const question = document.querySelectorAll('.question');

// question.forEach(function (e) {
//   const btn = e.querySelector('.question-btn');
//   btn.addEventListener('click', function () {
//     question.forEach(function (questions) {
//       if (e !== questions) {
//         questions.classList.remove('show-text');
//       }
//     });
//     e.classList.toggle('show-text');
//   });
// });

// traversing the dom (run only one method at a time from these two)

const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const questions = e.currentTarget.parentElement.parentElement;
    question.forEach(function (questionOnly) {
      if (questions !== questionOnly) {
        questionOnly.classList.remove('show-text');
      }
    });
    questions.classList.toggle('show-text');
  });
});
