function registrationQueue(queue){
    let currentUser = 0;
    while(currentUser<(queue.length)){
   let currentUser = queue.shift();
   console.log({currentUser});
    }
}
let queue = ["Jacky","Jack","Berissa","Saloi"]
registrationQueue(queue)
