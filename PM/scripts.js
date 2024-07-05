// Sample user data for demonstration
const userData = {
          name: 'John Doe',
          username: 'johndoe',
          email: 'johndoe@example.com',
          grade: '10',
          country: 'USA',
          city: 'New York',
          reason: 'Manage tasks and projects',
          points: 100,
          friends: ['alice', 'bob', 'charlie']
        };
        
        // Populate profile form with user data
        document.getElementById('profileName').value = userData.name;
        document.getElementById('profileUsername').value = userData.username;
        document.getElementById('profileEmail').value = userData.email;
        document.getElementById('profileGrade').value = userData.grade;
        document.getElementById('profileCountry').value = userData.country;
        document.getElementById('profileCity').value = userData.city;
        document.getElementById('profileReason').value = userData.reason;
        document.getElementById('pointsDisplay').textContent = userData.points;
        
        // Populate friends list
        function renderFriendsList() {
          const friendsList = document.getElementById('friendsList');
          friendsList.innerHTML = '';
          userData.friends.forEach(friend => {
            const friendItem = document.createElement('div');
            friendItem.classList.add('friend-item');
            friendItem.textContent = friend;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('btn', 'remove-friend');
            removeButton.addEventListener('click', () => {
              userData.friends = userData.friends.filter(f => f !== friend);
              renderFriendsList();
            });
            friendItem.appendChild(removeButton);
            friendsList.appendChild(friendItem);
          });
        }
        
        renderFriendsList();
        
        // Handle adding a friend
        document.getElementById('addFriendButton').addEventListener('click', function() {
          const friendUsername = document.getElementById('friendUsername').value;
          if (friendUsername && !userData.friends.includes(friendUsername)) {
            userData.friends.push(friendUsername);
            renderFriendsList();
            document.getElementById('friendUsername').value = '';
          }
        });
        
        // Handle sign out
        document.getElementById('signOutButton').addEventListener('click', function() {
          console.log('User signed out');
          // Implement your sign-out logic here
        });
        