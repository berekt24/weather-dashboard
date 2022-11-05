var searchHistory = document.getElementById('search-list');
var fetchButton = document.getElementById('button');

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={82.9988}&lon={39.9612}&appid={af62c7e824f77f1632ecc3bb04889cde}';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createList = document.createElement('ul');
        var createListItem = document.createElement('li');
        // var link = document.createElement('a');

        // Setting the text of link and the href of the link
        // link.textContent = data[i].html_url;
        // link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        // tableData.appendChild(link);
        createList.appendChild(createListItem);
        searchHistory.appendChild(createList);
      }
    });
}

fetchButton.addEventListener('click', getApi);