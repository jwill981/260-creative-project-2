const url1 = "https://spaceflightnewsapi.net/api/v2/articles";
fetch(url1)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        let results = "";


        for (let i = 0; i < json.length; ++i) {
            results += "<div class=\"container\">";
            results += "<div class=\"row\">";
            results += "<div class=\'col\'>";
            results += "<img class=\"article-img\" src=\"" + json[i].imageUrl + "\"/>"
            results += "<h2> <a href=\"" + json[i].url + "\">" + json[i].title + "</a></h2>";
            results += "<p> Article from: " + json[i].newsSite + "</p>";
            results += "<p>" + json[i].summary + "</p>";
            results += '</div>';
            results += '</div>';
            results += '</div>';
        }
        
      
        document.getElementById("articles").innerHTML = results;
    });