const API_URL = 'localhost:3000/articles';

window.addEventListener('DOMContentLoaded', function () {

    document.getElementsByTagName('tr').addEventListener('click', function (e) {
        var Citation = getCitations(_id);

    });

    var citations = getCitations();

});


function fillTable(citations) {

    var tableBody = document.getElementsByTagName('tbody')[0];

    document.getElementsByTagName('tr').remove();

    for (let citation of citations) {
        var tr = document.createElement('tr');

        var id = document.createElement('td');
        id.textContent = citation.id;
        tr.appendChild(id);

        var author = document.createElement('td');
        name.textContent = citation.author;
        tr.appendChild(author);

        var chapter = document.createElement('td');
        name.textContent = citation.chapter;
        tr.appendChild(chapter);

        var episode = document.createElement('td');
        name.textContent = citation.episode;
        tr.appendChild(episode);

        var content = document.createElement('td');
        name.textContent = citation.content;
        tr.appendChild(content);

        var date = document.createElement('td');
        name.textContent = citation.date;
        tr.appendChild(date);

        var image = document.createElement('td');
        name.textContent = citation.image;
        tr.appendChild(image);

    }
}

function getCitations() {

    var req = new XMLHttpRequest();

    req.onreadystatechange = function (result) {
        if (result.readyState == XMLHttpRequest.DONE) {
            if (result.status == 200) {
                var data = result.responseText;
                var Citations = JSON.parse(data);
                fillTable(Citations);
            } else {
                alert('Error getting Citations list!');
            }
        }

    };
    req.open('GET', API_URL);
    req.send();

}

function getCitation(_id) {

    var req = new XMLHttpRequest();

    req.onreadystatechange = function (result) {
        if (result.readyState == XMLHttpRequest.DONE) {
            if (result.status == 200) {
                var data = result.responseText;
                var Citation = JSON.parse(data);
                fillTable(Citation);
            } else {
                alert('Error getting Citation list!');
            }
        }

    };
    req.open('GET', API_URL + "/" + _id);
    req.send();

}