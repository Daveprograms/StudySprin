document.addEventListener('DOMContentLoaded', () => {
          const taskProjectForm = document.getElementById('taskProjectForm');
          const taskProjectContainer = document.getElementById('taskProjectContainer');
        
          let taskProjectList = [];
        
          // Render tasks and projects
          function renderTaskProjectList() {
            taskProjectContainer.innerHTML = '';
            taskProjectList.forEach((item, index) => {
              const taskProjectItem = document.createElement('div');
              taskProjectItem.classList.add('task-project-item');
              
              const title = document.createElement('h4');
              title.textContent = `Title: ${item.title}`;
              
              const subject = document.createElement('p');
              subject.textContent = `Subject: ${item.subject}`;
              
              const description = document.createElement('p');
              description.textContent = `Description: ${item.description}`;
              
              const priority = document.createElement('p');
              priority.textContent = `Priority: ${item.priority}`;
              
              const gradeGoal = document.createElement('p');
              gradeGoal.textContent = `Grade Goal: ${item.gradeGoal}%`;
              
              const deadline = document.createElement('p');
              deadline.textContent = `Deadline: ${item.deadline}`;
              
              const feasibility = document.createElement('p');
              feasibility.textContent = `Feasibility: ${calculateFeasibility(item.gradeGoal)}`;
              
              const plan = document.createElement('p');
              plan.textContent = `Suggested Plan: ${generatePlan(item.priority, item.gradeGoal)}`;
              
              const actions = document.createElement('div');
              actions.classList.add('task-project-actions');
              
              const editButton = document.createElement('button');
              editButton.textContent = 'Edit';
              editButton.classList.add('btn', 'edit');
              editButton.addEventListener('click', () => editTaskProject(index));
              
              const deleteButton = document.createElement('button');
              deleteButton.textContent = 'Delete';
              deleteButton.classList.add('btn', 'delete');
              deleteButton.addEventListener('click', () => deleteTaskProject(index));
              
              actions.appendChild(editButton);
              actions.appendChild(deleteButton);
              
              taskProjectItem.appendChild(title);
              taskProjectItem.appendChild(subject);
              taskProjectItem.appendChild(description);
              taskProjectItem.appendChild(priority);
              taskProjectItem.appendChild(gradeGoal);
              taskProjectItem.appendChild(deadline);
              taskProjectItem.appendChild(feasibility);
              taskProjectItem.appendChild(plan);
              taskProjectItem.appendChild(actions);
              
              taskProjectContainer.appendChild(taskProjectItem);
            });
          }
        
          // Calculate feasibility of achieving the grade goal
          function calculateFeasibility(gradeGoal) {
            if (gradeGoal > 90) {
              return "Very Possible";
            } else if (gradeGoal > 75) {
              return "Possible";
            } else if (gradeGoal > 50) {
              return "Challenging";
            } else {
              return "Improbable";
            }
          }
        
          // Generate a study plan based on priority and grade goal
          function generatePlan(priority, gradeGoal) {
            if (priority === 'homework') {
              return `Complete daily homework assignments. Focus on understanding the basics.`;
            } else if (priority === 'practice') {
              return `Practice regularly. Use practice problems to reinforce concepts.`;
            } else if (priority === 'test') {
              return `Review notes and past tests. Take practice tests. Focus on weak areas.`;
            } else if (priority === 'exam') {
              return `Create a detailed study schedule. Review all materials. Take mock exams. Focus on high-yield topics.`;
            }
          }
        
          // Handle form submission for creating new task/project
          function handleCreate(e) {
            e.preventDefault();
        
            const taskProject = {
              title: document.getElementById('taskProjectTitle').value,
              subject: document.getElementById('taskProjectSubject').value,
              description: document.getElementById('taskProjectDescription').value,
              priority: document.getElementById('taskProjectPriority').value,
              gradeGoal: document.getElementById('taskProjectGradeGoal').value,
              deadline: document.getElementById('taskProjectDeadline').value
            };
        
            taskProjectList.push(taskProject);
            renderTaskProjectList();
            taskProjectForm.reset();
          }
        
          // Edit task or project
          function editTaskProject(index) {
            const taskProject = taskProjectList[index];
            document.getElementById('taskProjectTitle').value = taskProject.title;
            document.getElementById('taskProjectSubject').value = taskProject.subject;
            document.getElementById('taskProjectDescription').value = taskProject.description;
            document.getElementById('taskProjectPriority').value = taskProject.priority;
            document.getElementById('taskProjectGradeGoal').value = taskProject.gradeGoal;
            document.getElementById('taskProjectDeadline').value = taskProject.deadline;
        
            taskProjectForm.removeEventListener('submit', handleCreate);
            taskProjectForm.addEventListener('submit', handleUpdate);
        
            function handleUpdate(e) {
              e.preventDefault();
        
              taskProjectList[index] = {
                title: document.getElementById('taskProjectTitle').value,
                subject: document.getElementById('taskProjectSubject').value,
                description: document.getElementById('taskProjectDescription').value,
                priority: document.getElementById('taskProjectPriority').value,
                gradeGoal: document.getElementById('taskProjectGradeGoal').value,
                deadline: document.getElementById('taskProjectDeadline').value
              };
        
              renderTaskProjectList();
              taskProjectForm.reset();
              taskProjectForm.removeEventListener('submit', handleUpdate);
              taskProjectForm.addEventListener('submit', handleCreate);
            }
          }
        
          // Delete task or project
          function deleteTaskProject(index) {
            taskProjectList.splice(index, 1);
            renderTaskProjectList();
          }
        
          // Initialize the form to create mode
          taskProjectForm.addEventListener('submit', handleCreate);
        });
        