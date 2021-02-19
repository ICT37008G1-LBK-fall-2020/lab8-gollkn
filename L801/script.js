const prm = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dateMinutes = new Date().getMinutes();
            if (dateMinutes % 2 === 0) {
                resolve(dateMinutes);
            } else {
                reject('ERR');
            }
        }, 10000);
    });
};

const displayDate = async () => {
    const startDate = new Date();
    console.log(startDate);
    try {
        const currentMinutes = await prm();
        console.log(currentMinutes);
    } catch (e) {
        console.log(e);
    }

};
displayDate();
