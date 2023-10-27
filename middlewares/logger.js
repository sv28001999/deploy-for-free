const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const logTime = convertEpochToIST(("" + new Date().getTime()).slice(0, 10));
    console.log(logTime + "       " + method + "       " + url);
    next();
}

function convertEpochToIST(epochTimestamp) {
    const date = new Date(epochTimestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
    const options = {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    return date.toLocaleString('en-US', options);
}

module.exports = logger;