const buttona = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');
buttona.addEventListener('click', function () {
    if (input.value.div class="topic"im() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.appendChild(deleteButton);
    list.appendChild(li);
    input.focus();
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });
}
});