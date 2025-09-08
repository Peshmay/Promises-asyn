
const checkConditionAndFetch = (num: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            fetch('https://api.adviceslip.com/advice')
                .then(response => response.json())
                .then(data => {
                    resolve(data.slip.advice);
                })
                .catch(err => {
                    reject(new Error("Failed to fetch advice"));
                });
        } else {
            reject(new Error("Number is not greater than 10"));
        }
    });
};


//using promise
checkConditionAndFetch(15)
    .then(advice => console.log("Advice:", advice))
    .catch(err => console.log("Error:", err.message));

//using async/await
const fetchAdvice = async (num: number) => {
    try {
        const advice = await checkConditionAndFetch(num);
        console.log("Advice:", advice);
    } catch (error) {
        console.log("Error:", (error as Error).message);
    }
};


fetchAdvice(15);
