import { checkUrl } from './urlChecker.js';

const updateUI = (data) => {
    document.getElementById('score').innerHTML = 'Polarity (P: positive/NEU: neutral/N: negative): ' + data.score_tag
    document.getElementById('agreement').innerHTML = 'Agreement: ' + data.agreement
    document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + data.subjectivity
    document.getElementById('confidence').innerHTML = 'Confidence: ' + data.confidence
    document.getElementById('irony').innerHTML = 'Irony: ' + data.irony
    document.getElementById('text-snippet').innerHTML = 'Text snippet from the article: ' + data.sentence_list[100].text
}

const clearUI = () => {
    document.getElementById('score').innerHTML = ''
    document.getElementById('agreement').innerHTML = ''
    document.getElementById('subjectivity').innerHTML = ''
    document.getElementById('confidence').innerHTML = ''
    document.getElementById('irony').innerHTML = ''
    document.getElementById('text-snippet').innerHTML = ''
}

function handleSubmit(event) {
    event.preventDefault()
    clearUI();

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (checkUrl(formText)) {

        // POST request to express server.
        fetch('/analyzeTxt', {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: formText}),
        })
        .then(res => res.json())
        .then((res) => {
            updateUI(res);
        })
    } else {
        alert('Please enter a valid URL.')
    }
}

// Add event listner to the button.
document.getElementById('button').addEventListener('click', handleSubmit);