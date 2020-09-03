function checkUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);
    if(inputText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null) {
        return true;
    } else {
        return false;
    }
}

export { checkUrl };
