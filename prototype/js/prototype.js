const tasks = document.querySelectorAll('div.task');
const lists = document.querySelectorAll('div.list');
console.log(lists);

for (let task of tasks) {
    task.addEventListener('dragstart', (e) => console.log("Start dragging!"));
    // task.addEventListener('dragover', (e) => console.log("Drags over!"));
    // task.addEventListener('drop', (e) => console.log("Payload drop!"));
}

for (let list of lists) {
    //task.addEventListener('dragstart', (e) => console.log("Start dragging!"));
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("over A LIST!")
    });
    list.addEventListener('drop', (e) => {
        e.preventDefault();
        console.log("payload droped");
    });
}