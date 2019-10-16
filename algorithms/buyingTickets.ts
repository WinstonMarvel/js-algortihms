/* Alex is waiting in a line to buy tickets. Each man can buy only one. Find the time it will take to buy tickets */


// function waitingTime(tickets, p) {
//     // Write your code here
//     let n = tickets.length;
//     let time = 0;

//     loop1:
//     while( true ) {
//         for(let i = 0; i < tickets.length; i++) {
//             if(tickets[p] == 0){
//                 break loop1;
//             } else if (tickets[i] > 0) {
//                 tickets[i]--;
//                 time++;
//             } else {

//             }
//         }
//     }
//     return time;
// }


function waitingTime(tickets, p) {
    // Write your code here
    let n = tickets.length;
    let time = tickets[p];

    for(let i = 0; i < tickets.length; i++) {
        if(i < p){
            tickets[i] > tickets[p] ? (time += tickets[p]) : (time += tickets[i]);
        } else if(i > p){
            tickets[i] >= tickets[p] ? (time += tickets[p] - 1) : (time += tickets[i]);
        }
    }
    return time;
}


// let res = waitingTime([1,2,5], 1);
let res = waitingTime([1, 1, 1, 1], 0);

console.log(res);
