//1. A user has 3 attempts to log in. Simulate failed login attempts using while. After 3, show "Account locked".

function handleLoginAttempts(){
    let loginAttemptCount = 0;
    while(loginAttemptCount <= 3){
        console.log(`Login attempt ${loginAttemptCount}`)
        loginAttemptCount++
    }
    while(loginAttemptCount>3){
        console.log("Account locked");
        break;
    }
}
handleLoginAttempts();
// 2. Users are voting on a feature. Use do...while to log each vote from an array until all votes are processed.

function voteFeature(votes){
    let currentVote = 0;
    do{
        console.log(votes[currentVote]);
        currentVote++
    }while(currentVote < votes.length);
}

voteFeature(["No","Yes","Yes","No","Yes"]);


//3. Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.

const dayNames = (numbers) =>{
    numbers.forEach(num => {
        switch(num){
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
            default:
                console.log("The day does not exist");
                break;
        }

    })
}
dayNames([1,2,3,4,5,6,7,8]);


//4. Given an array of password strings, use if...else to: log "Strong" if length >= 8, and "Weak" otherwise.

function checkPassword(password){
    password.forEach(password =>
    {
        if(password.length >=8){
            console.log(`${password} is a Strong password`);
        }else{
            console.log(`${password} is a weak password`);
        }
    }
    )
}
checkPassword(["Kumany1@","jacky"]);

//5. You're building a multilingual site. Use a switch to show greetings based on language codes. I.e "en" → "Hello", "fr" → "Bonjour", "sw" → "Habari".

function greetingBasedOnLanguage(languages){
    languages.forEach(language => {
        switch(language){
            case "en":
                console.log("Hello");
                break;
            case "fr":
                console.log("Bonjour");
                break;
            case "sw":
                console.log("Habari");
                break;
            default:
                console.log("No greeting");
                break;
        }
    })
}
greetingBasedOnLanguage(["en","fr","sw","Mwaramutse"]);

//6. You're building a weather dashboard. Loop through an array of temperatures and: If above 30, 
// log "High heat alert!", else if below 15, log "Cold alert!", else, log "Normal conditions"

function checkTemperature(temperatures){
    temperatures.forEach(temperature => {
        if(temperature > 30){
            console.log("High heat alert!");
        }else if(temperature < 15){
            console.log("Cold alert!");
        }else{
            console.log("Normal conditions");
        }
    })
}
checkTemperature([15,14,3,30,31]);

//7. Users are queued to register. Use a while loop to remove and print each name until the queue is empty.
// function 


function registrationQueue(queue){
    let currentUser = 0;
    while(currentUser<queue.length){
   let currentUser = queue.shift();
   console.log({currentUser});
   currentUser++
    }
}
registrationQueue(["Jacky","Jack","Berissa","Saloi"]);


//8. Students retake a test until they score 50 or more. Use do...while to simulate attempts, 
// increasing the score by 10 each time until it's >= 50.

function testRetake(scores){
    for(let i=0;i<scores.length;i++){
        let attempt = 0;
        let score = scores[i];
        do{
            console.log(`Attempt ${attempt}: Score = ${score}`);
            score +=10;
            attempt++;
        }while(score<=50);
    }
}
testRetake([20,30,60,70,50]);