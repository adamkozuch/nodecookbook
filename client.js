let dns = require("dns")

function dnsFun(domain) { 
    return new Promise((resolve, reject) => {
        dns.resolveNs(domain, (err, message) => {
            return resolve(message);
        })
    })
}

function dnsFun1(domain) { 
    return new Promise((resolve, reject) => {
        dns.resolveNs(domain, (err, message) => {
            setTimeout(function () { 
                return resolve(message);
            }, 1000);
        })
    })
}


function doing(tasks) { 

    return tasks.reduce((promiseChain, currentTask) => { 
        return promiseChain.then((chainResults) => {
            return currentTask.then((currentResult) => {
                console.log(currentResult);
                return [ ...chainResults, currentResult ]
            })
        });
    }, Promise.resolve([])).then(arrayOfResults => { 
        //console.log(arrayOfResults);
    });
}

doing([dnsFun1("joga24.ru"), dnsFun("warsawonline.ru"), dnsFun("wp.pl")])

