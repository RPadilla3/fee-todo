(function() {

    window.todo = window.todo || {};

    function addToDo(text) {

        var addLi = document.createElement('li');
        addLi.innerText = text
        addLi.classList.add('.new-to-do');
        document.querySelector('ul').appendChild(addLi);

        var addArticle = document.createElement('article');
        document.querySelector('li').appendChild(addArticle);

        var addButton = document.createElement('button');
        addButton.classList.add('.check');
        document.querySelector('article').appendChild(addButton);

        var addP = document.createElement('p');
        document.querySelector('article').appendChild(addP);

        var addXButton = document.createElement('button');
        addXButton.classList.add('.delete');
        document.querySelector('article').appendChild(addXButton);


    }
    

})();
