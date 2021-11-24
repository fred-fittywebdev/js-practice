let tasks = ['faire mon ticket jira', ' apprendre gulp', 'préparer ma soutenance', 'faire a manger', 'faire les courses']
let progress = ['done', 'in progress', 'todo']

console.log(tasks[(tasks.length -1)])

// let question1 = prompt('witch tasks? 1-' + tasks.length + '?')
// let question2 = prompt('status: \n1 - done \n2 - in progress \n3 - todo')
// console.log('today i will do ' + tasks[(question1 - 1)] + ' with the status: ' + progress[(question2 - 1)] )

let animals = ["cat", "dog", "cow", "bear", "fish"]
let randomIndex = Math.floor(Math.random() * animals.length)
let randomAnimal = animals[randomIndex]

let message = prompt('Wich index value is ' + randomAnimal)
var response = (message == randomIndex) ? "yes !" : "No ! it was " + randomIndex
alert(response)