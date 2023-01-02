import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import chalkAnimation from "chalk-animation";
(async () => {
    await showBanner('TODO ', '');
})();
const todos = [];
let AddMore = true;
setTimeout(async () => {
    const rainbow = chalkAnimation.rainbow("Enter your todo's ");
    while (AddMore) {
        const answers = await inquirer
            .prompt([{
                type: 'string',
                name: 'todo',
                message: " "
            }, {
                type: 'confirm',
                name: 'addMore',
                message: 'Add more todos',
                default: false
            }
        ]);
        const { todo, addMore } = answers;
        AddMore = addMore;
        if (todos) {
            todos.push(todo);
        }
        else {
            console.log("kindly write any input");
        }
    }
    if (todos.length > 0) {
        console.log(chalk.blueBright('Your Todo List'));
        todos.forEach((t) => console.info(t));
    }
    else {
        console.info('No todos in the list');
    }
}, 1000) ();
