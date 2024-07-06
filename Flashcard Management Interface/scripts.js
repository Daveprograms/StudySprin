document.addEventListener('DOMContentLoaded', () => {
          const flashcardForm = document.getElementById('flashcardForm');
          const flashcardContainer = document.getElementById('flashcardContainer');
          const startReviewButton = document.getElementById('startReview');
          const reviewContainer = document.getElementById('reviewContainer');
          const reviewQuestion = document.getElementById('reviewQuestion');
          const reviewAnswer = document.getElementById('reviewAnswer');
          const showAnswerButton = document.getElementById('showAnswer');
          const nextFlashcardButton = document.getElementById('nextFlashcard');
          const generateAIButton = document.getElementById('generateAI');
        
          let flashcardList = [];
          let currentReviewIndex = 0;
        
          // Render flashcards
          function renderFlashcardList() {
            flashcardContainer.innerHTML = '';
            flashcardList.forEach((item, index) => {
              const flashcardItem = document.createElement('div');
              flashcardItem.classList.add('flashcard-item');
              
              const question = document.createElement('h4');
              question.textContent = `Question: ${item.question}`;
              
              const answer = document.createElement('p');
              answer.textContent = `Answer: ${item.answer}`;
              
              const category = document.createElement('p');
              category.textContent = `Category/Subject: ${item.category}`;
              
              const actions = document.createElement('div');
              actions.classList.add('flashcard-actions');
              
              const editButton = document.createElement('button');
              editButton.textContent = 'Edit';
              editButton.classList.add('btn', 'edit');
              editButton.addEventListener('click', () => editFlashcard(index));
              
              const deleteButton = document.createElement('button');
              deleteButton.textContent = 'Delete';
              deleteButton.classList.add('btn', 'delete');
              deleteButton.addEventListener('click', () => deleteFlashcard(index));
              
              actions.appendChild(editButton);
              actions.appendChild(deleteButton);
              
              flashcardItem.appendChild(question);
              flashcardItem.appendChild(answer);
              flashcardItem.appendChild(category);
              flashcardItem.appendChild(actions);
              
              flashcardContainer.appendChild(flashcardItem);
            });
          }
        
          // Handle form submission for creating new flashcard
          function handleCreate(e) {
            e.preventDefault();
        
            const flashcard = {
              question: document.getElementById('flashcardQuestion').value,
              answer: document.getElementById('flashcardAnswer').value,
              category: document.getElementById('flashcardCategory').value
            };
        
            flashcardList.push(flashcard);
            renderFlashcardList();
            flashcardForm.reset();
          }
        
          // Edit flashcard
          function editFlashcard(index) {
            const flashcard = flashcardList[index];
            document.getElementById('flashcardQuestion').value = flashcard.question;
            document.getElementById('flashcardAnswer').value = flashcard.answer;
            document.getElementById('flashcardCategory').value = flashcard.category;
        
            flashcardForm.removeEventListener('submit', handleCreate);
            flashcardForm.addEventListener('submit', handleUpdate);
        
            function handleUpdate(e) {
              e.preventDefault();
        
              flashcardList[index] = {
                question: document.getElementById('flashcardQuestion').value,
                answer: document.getElementById('flashcardAnswer').value,
                category: document.getElementById('flashcardCategory').value
              };
        
              renderFlashcardList();
              flashcardForm.reset();
              flashcardForm.removeEventListener('submit', handleUpdate);
              flashcardForm.addEventListener('submit', handleCreate);
            }
          }
        
          // Delete flashcard
          function deleteFlashcard(index) {
            flashcardList.splice(index, 1);
            renderFlashcardList();
          }
        
          // Review flashcards
          function startReview() {
            if (flashcardList.length === 0) {
              alert('No flashcards to review!');
              return;
            }
        
            currentReviewIndex = 0;
            reviewContainer.style.display = 'block';
            reviewAnswer.style.display = 'none';
            showAnswerButton.style.display = 'block';
            nextFlashcardButton.style.display = 'none';
            reviewQuestion.textContent = flashcardList[currentReviewIndex].question;
            reviewAnswer.textContent = flashcardList[currentReviewIndex].answer;
          }
        
          function showAnswer() {
            reviewAnswer.style.display = 'block';
            showAnswerButton.style.display = 'none';
            nextFlashcardButton.style.display = 'block';
          }
        
          function nextFlashcard() {
            currentReviewIndex++;
            if (currentReviewIndex >= flashcardList.length) {
              reviewContainer.style.display = 'none';
              alert('Review completed!');
            } else {
              reviewAnswer.style.display = 'none';
              showAnswerButton.style.display = 'block';
              nextFlashcardButton.style.display = 'none';
              reviewQuestion.textContent = flashcardList[currentReviewIndex].question;
              reviewAnswer.textContent = flashcardList[currentReviewIndex].answer;
            }
          }
        
          // AI Flashcard Generation
          function generateAIFlashcards() {
            const selectedTask = prompt('Select the task for which you want to generate flashcards (e.g., Homework, Test):');
            if (!selectedTask) {
              alert('No task selected!');
              return;
            }
        
            // Simulate AI flashcard generation based on the selected task
            const aiFlashcards = [
              { question: 'Sample AI Question 1 for ' + selectedTask, answer: 'Sample AI Answer 1', category: selectedTask },
              { question: 'Sample AI Question 2 for ' + selectedTask, answer: 'Sample AI Answer 2', category: selectedTask },
              // Add more sample flashcards
            ];
        
            flashcardList = flashcardList.concat(aiFlashcards);
            renderFlashcardList();
            alert('AI-generated flashcards added!');
          }
        
          flashcardForm.addEventListener('submit', handleCreate);
          startReviewButton.addEventListener('click', startReview);
          showAnswerButton.addEventListener('click', showAnswer);
          nextFlashcardButton.addEventListener('click', nextFlashcard);
          generateAIButton.addEventListener('click', generateAIFlashcards);
        
          renderFlashcardList();
        });

        