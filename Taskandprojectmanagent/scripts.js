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
              title.textContent = `${item.type.toUpperCase()}: ${item.title}`;
              
              const description = document.createElement('p');
              description.textContent = item.description;
              
              const category = document.createElement('p');
              category.textContent = `Category: ${item.category}`;
              
              const priority = document.createElement('p');
              priority.textContent = `Priority: ${item.priority}`;
              
              const deadline = document.createElement('p');
              deadline.textContent = `Deadline: ${item.deadline}`;
              
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
              taskProjectItem.appendChild(description);
              taskProjectItem.appendChild(category);
              taskProjectItem.appendChild(priority);
              taskProjectItem.appendChild(deadline);
              taskProjectItem.appendChild(actions);
              
              taskProjectContainer.appendChild(taskProjectItem);
            });
          }
        
          // Handle form submission
          taskProjectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const taskProject = {
              title: document.getElementById('taskProjectTitle').value,
              description: document.getElementById('taskProjectDescription').value,
              type: document.getElementById('taskProjectType').value,
              category: document.getElementById('taskProjectCategory').value,
              priority: document.getElementById('taskProjectPriority').value,
              deadline: document.getElementById('taskProjectDeadline').value
            };
        
            taskProjectList.push(taskProject);
            renderTaskProjectList();
            taskProjectForm.reset();
          });
        
          // Edit task or project
          function editTaskProject(index) {
            const taskProject = taskProjectList[index];
            document.getElementById('taskProjectTitle').value = taskProject.title;
            document.getElementById('taskProjectDescription').value = taskProject.description;
            document.getElementById('taskProjectType').value = taskProject.type;
            document.getElementById('taskProjectCategory').value = taskProject.category;
            document.getElementById('taskProjectPriority').value = taskProject.priority;
            document.getElementById('taskProjectDeadline').value = taskProject.deadline;
        
            taskProjectForm.removeEventListener('submit', handleCreate);
            taskProjectForm.addEventListener('submit', handleUpdate);
        
            function handleUpdate(e) {
              e.preventDefault();
        
              taskProjectList[index] = {
                title: document.getElementById('taskProjectTitle').value,
                description: document.getElementById('taskProjectDescription').value,
                type: document.getElementById('taskProjectType').value,
                category: document.getElementById('taskProjectCategory').value,
                priority: document.getElementById('taskProjectPriority').value,
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
          function handleCreate(e) {
            e.preventDefault();
        
            const taskProject = {
              title: document.getElementById('taskProjectTitle').value,
              description: document.getElementById('taskProjectDescription').value,
              type: document.getElementById('taskProjectType').value,
              category: document.getElementById('taskProjectCategory').value,
              priority: document.getElementById('taskProjectPriority').value,
              deadline: document.getElementById('taskProjectDeadline').value
            };
        
            taskProjectList.push(taskProject);
            renderTaskProjectList();
            taskProjectForm.reset();
          }
        
          taskProjectForm.addEventListener('submit', handleCreate);
        });
        