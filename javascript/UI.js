(function() {

  function addToDo(text) {
      var addLi = document.createElement('li');
      var addArticle = document.createElement('article');
      var addButton = document.createElement('button');
      addButton.classList.add('check');
      addArticle.appendChild(addButton);
      var addP = document.createElement('p');
      addP.innerText = text;
      addArticle.appendChild(addP);
      var addXButton = document.createElement('button');
      addXButton.classList.add('delete');
      addXButton.innerText = 'X';
      addArticle.appendChild(addXButton);
      addLi.appendChild(addArticle)
      document.querySelector('ul').appendChild(addLi);
  }


    document
        .querySelector('form')
        .addEventListener('submit', function submit(eventObj) {
            eventObj.preventDefault();

            var toDoSubmission = document.querySelector('.new-todo').value;

            var toDoList = {
                text: toDoSubmission,
                time: Date.now()
            };
            toDoArray.push(toDoList);
            console.log(toDoArray);
            addToDo(toDoSubmission);
        });

        document
        .querySelector('article')
        .addEventListener('click', function complete(eventObj) {
            console.log('in complete');
            eventObj.target.classList.add('completed');

        });
  window.todo = window.todo || {};
})();
