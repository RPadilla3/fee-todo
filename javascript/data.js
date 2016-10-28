(function() {

    window.todo = window.todo || {};

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

        addToDo('Whats up');
})();
