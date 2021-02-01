function solve() {
    const taskElement = document.getElementById('task');
    const descriptionElement = document.getElementById('description');
    const dateElement = document.getElementById('date');
    const addButton = document.getElementById('add');
 
    const sections = document.getElementsByTagName('section');
    const openSection = sections[1].children[1];
    const progressSection = sections[2].children[1];
    const doneSection = sections[3].children[1];
 
    addButton.addEventListener('click', function (event) {
        event.preventDefault();
 
        const task = taskElement.value;
        taskElement.value = '';
        const description = descriptionElement.value;
        descriptionElement.value = '';
        const date = dateElement.value;
        dateElement.value = '';
 
        if(!task || !description || !date) {
            return;
        }
 
        let headerElement = document.createElement('h3');
        headerElement.textContent = task;
 
        let paragraphElement = document.createElement('p');
        paragraphElement.textContent = `Description: ${description}`;
 
        let dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Due Date: ${date}`;
 
        let startButton = document.createElement('button');
        startButton.classList.add('green');
        startButton.textContent = 'Start';
        startButton.addEventListener('click', () =>{
            progressSection.appendChild(articleElement);
 
            let finishButton = document.createElement('button');
            finishButton.textContent = 'Finish';
            finishButton.classList.add('orange');
            finishButton.addEventListener('click', () => {
                divElement.remove();
                doneSection.appendChild(articleElement);
            });
 
            divElement.appendChild(finishButton);
            startButton.remove();
        });
 
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            articleElement.remove();
        });
 
        let divElement = document.createElement('div');
        divElement.classList.add('flex');
        divElement.appendChild(startButton);
        divElement.appendChild(deleteButton);
 
        let articleElement = document.createElement('article');
        articleElement.appendChild(headerElement);
        articleElement.appendChild(paragraphElement);
        articleElement.appendChild(dateParagraph);
        articleElement.appendChild(divElement);
 
        openSection.appendChild(articleElement);
    });
}