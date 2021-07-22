function ageInDays() {
    var birthYear = prompt("What year were you born");
    var ageInDays = (2021 - birthYear) * 365;
    var h3 = document.createElement('h3');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');
    h3.setAttribute('id', 'ageInDays');
    h3.appendChild(textAnswer);
    document.getElementById('resultGoesHere').appendChild(h3);
}

function reset() {
    document.getElementById('ageInDays').remove();
}