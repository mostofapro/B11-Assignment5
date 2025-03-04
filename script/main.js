
// Random Color Change
document.getElementById("theme-btn").addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// Date Area
function currentDate() {
  const date = new Date();
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
  const formatted = date.toLocaleDateString('en-US', options).replace(',', '');

  const [weekday, month, day, year] = formatted.split(" ");

  document.getElementById("day").innerText = `${weekday},`;
  document.getElementById("fullDate").innerText = `${month} ${day} ${year}`;
}

currentDate();

// To the Blog Page function
document.getElementById('discover-new').addEventListener("click", function(event){
  event.preventDefault();
  window.location.href = "./blog.html"
})


// Get all "Completed" buttons
const completeButtons = document.querySelectorAll('.complete-btn');

// Get the numbers in the header and task assigned section
const headerNumber = document.querySelector('.header-number');
const taskAssignedNumber = document.querySelector('.task-number');

// Get the Activity Log container and Clear History button
const activityLogEntries = document.getElementById('activity-log-entries');
const clearHistoryButton = document.querySelector('.clear-history');

// Store initial values
const initialHeaderNumber = headerNumber.textContent;
const initialTaskAssignedNumber = taskAssignedNumber.textContent;
for(const complete of completeButtons){
  complete.addEventListener("click", function(){
       alert('Task Completed successfully');

       // Disable the button
       this.disabled = true;
       this.textContent = "Completed";
       this.style.backgroundColor = "#cccccc";
   
       // Increment the number
       let currentHeaderNumber = parseInt(headerNumber.textContent);
       headerNumber.textContent = currentHeaderNumber + 1;
   
       // Decrement the number
       let currentTaskAssignedNumber = parseInt(taskAssignedNumber.textContent);
       taskAssignedNumber.textContent = currentTaskAssignedNumber - 1;
   
       // Get the card title
       const cardTitle = this.closest('.card-list').querySelector('h2').textContent;
   
       // Get the current time
       const currentTime = new Date().toLocaleTimeString();
   
       // Create a new activity log entry
       const activityLogEntry = document.createElement('div');
       activityLogEntry.innerHTML = `
         <p>You have completed the task: ${cardTitle}</p>
         <p class="text-sm text-gray-600">${currentTime}</p>
       `;
   
       // Append the new entry to the Activity Log container
       activityLogEntries.appendChild(activityLogEntry);
   
       // Check if this is the last "Completed" button
       const remainingButtons = document.querySelectorAll('.complete-btn:not(:disabled)');
       if (remainingButtons.length === 0) {
         alert('All tasks have been completed!');
       }
  })
}

// Clear History functionality
clearHistoryButton.addEventListener("click", function() {
  activityLogEntries.innerHTML = '';
});