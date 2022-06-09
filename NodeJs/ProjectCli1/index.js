const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const storeconfig = {
    ispause: false,
};

const storefunction = {
    sureexit: function () {
        if (!storeconfig.ispause) {
            storeconfig.ispause = true;
            rl.question('Are you sure you want to exit? ', {signal}, (answer) => {
                if (answer.match(/^y(es)?$/i)) {
                    rl.pause()
                } else {
                    storeconfig.ispause = false;
                    console.clear();
                };
            });
        };
    }
};

// realtime input 
rl.on('SIGINT', () => {
    storefunction.sureexit();
});
rl.on('SIGTSTP', () => {
    storefunction.sureexit();
});