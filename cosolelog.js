import chalk from 'chalk';
import cowsay from 'cowsay';

export default function coolsolelog(message) {
    const cowMessage = cowsay.say({
        text: chalk.blue(message),
        e: "oO",
        T: "U "
    });
    console.log(cowMessage);
}