# User Story
  For this project, the task was to create a planner that stored important events for an employee with a busy schedule. The HTML and CSS files were given. My task was the following;
```m
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

# Aceptance Criteria
  For this week's project, the challenge was to create the functions in the Js document. First I created a variable to gather the current time information to display on the top of the app for the user to see. The next step was to create function to generate slots for each hour of the day where the user can write notes/important information. To simplify my coding, I create a variable that had the HTML template in template literal. With the help of a for loop function, I injected a hour variable in the template literal to generate each input section with a given time. The biggest challenge in this project was to create color block for past, present, and future events. I used an If, Else state to inject the past, present, future attribute to the html based on the current time. This section of the code will be updated once I get some help from one of my instructors. The last function in the js file is to store the input from the user in local storage and the pull that info to ensure when the refresh button is clicked the input is still displayed.
  
  
# Assets

Bellow is the link to the deployed page. 

