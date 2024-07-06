// script.js

document.addEventListener('DOMContentLoaded', () => {
          const taskCompletionList = document.getElementById('taskCompletionList');
          const studySessionList = document.getElementById('studySessionList');
          const progressReportDetails = document.getElementById('progressReportDetails');
          const studyTimeList = document.getElementById('studyTimeList');
      
          const tasks = [
              { id: 1, title: 'Math Homework', completed: true },
              { id: 2, title: 'Science Project', completed: false },
              { id: 3, title: 'English Essay', completed: true },
          ];
      
          const studySessions = [
              { id: 1, subject: 'Math', duration: '1 hour' },
              { id: 2, subject: 'Science', duration: '2 hours' },
              { id: 3, subject: 'English', duration: '30 minutes' },
          ];
      
          const userProgress = {
              tasksCompleted: 5,
              totalTasks: 10,
              studyTime: '10 hours',
          };
      
          const studyTime = [
              { date: '2023-07-01', duration: '2 hours' },
              { date: '2023-07-02', duration: '3 hours' },
              { date: '2023-07-03', duration: '1 hour' },
          ];
      
          const updateTaskCompletionStats = () => {
              taskCompletionList.innerHTML = '';
              tasks.forEach(task => {
                  const listItem = document.createElement('li');
                  listItem.textContent = `${task.title} - ${task.completed ? 'Completed' : 'Incomplete'}`;
                  taskCompletionList.appendChild(listItem);
              });
          };
      
          const updateStudySessionStats = () => {
              studySessionList.innerHTML = '';
              studySessions.forEach(session => {
                  const listItem = document.createElement('li');
                  listItem.textContent = `${session.subject} - ${session.duration}`;
                  studySessionList.appendChild(listItem);
              });
          };
      
          const updateUserProgressReports = () => {
              progressReportDetails.innerHTML = `
                  <p>Tasks Completed: ${userProgress.tasksCompleted} / ${userProgress.totalTasks}</p>
                  <p>Total Study Time: ${userProgress.studyTime}</p>
              `;
          };
      
          const updateStudyTimeTracking = () => {
              studyTimeList.innerHTML = '';
              studyTime.forEach(time => {
                  const listItem = document.createElement('li');
                  listItem.textContent = `${time.date} - ${time.duration}`;
                  studyTimeList.appendChild(listItem);
              });
          };
      
          updateTaskCompletionStats();
          updateStudySessionStats();
          updateUserProgressReports();
          updateStudyTimeTracking();
      });
      