let tasks = ['faire mon ticket jira', ' apprendre gulp', 'préparer ma soutenance']
let progress = ['done', 'in progress', 'todo']

let question1 = prompt('witch tasks? 1_4')
let question2 = prompt('status: \n1 - done \n2 - in progress \n3 - todo')
console.log('today i will do ' + tasks[(question1 - 1)] + ' with the status: ' + progress[(question2 - 1)] )