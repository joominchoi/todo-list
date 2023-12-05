# The Odin Project: Todo List Project

**Course reference pages:** \
[Project: Todo List](https://www.theodinproject.com/lessons/node-path-javascript-todo-list)

## Thoughts

## Learnings
- I will need to confirm this with further testing but I have learnt that you can export and import a function
and gain access to any other functions that the imported function calls; like gaining access to a specific point
of a hierarchy tree and all its branches (I need to come up with a better way to explain this).
- **overflow-y: auto;** enables a vertical scrollbar when the content exceeds the specified height.
- **grid-template-rows: repeat(auto-fill, 6%);** sets the explicit rows to have a height of 6% and uses auto-fill to create as many rows as needed based on the content.
- **grid-auto-rows: 6%;** sets the height for any additional rows that are created implicitly (dynamically added) to also be 6%.
  - This way, both explicit and implicit rows will have a height of 6%. Adjust the values and other styles according to your specific layout requirements.
- Put **export** in front of function if I wish to reuse it in another module.
- The more I practice the single-responsility principle, the more naturally I am inclined to want to organise my code in an easy to read manner; whether that be the file structure or seperating functions in to seperate modules.
- I have organised files into folders that make sense to me but I think the main point is taking away the ability to separate functions and components into their modules. Folder structure I think is a matter of personal preference and I will need to adapt to the preference of future teammates.
- **./** refers to current directory
- **App.js** previously named **page-load** is the main entry point of your application where you compose your components and pages.
- When restructuring files and folders, make sure to double check imports and pathing to assets such as images
- Check that npx webpack --watch is running after restarting machine; I was wondering why my changes weren't being applied before realising this mistake.
- IDs shouldn't start with a digit or contain spaces or special characters (except for hyphens - and underscores _); I encountered an issue when I was trying to dynamically query an id using the textcontent of another element that began with a digit (I was using numbers as an example).

## Recapping
- Setting active and inactive elements by the addition and removal of a class name
- The (e) is an event parameter, commonly named e or event, and it represents the event object. The event object contains information about the event, such as the type of event, the target element, and other relevant details; can be omitted if the event object is not needed.

## WIP
- Refactor recent code
- Get the logic working for projects
- Adding notes function