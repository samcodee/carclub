async function parseWikiPage(pageTitle) {
     const url = "https://en.wikipedia.org/w/api.php?" +
        new URLSearchParams({
            origin: "*",
            action: "parse",
            page: pageTitle,
            format: "json",
        });

    try {
        const req = await fetch(url);
        const json = await req.json();
        console.log(json.parse.text["*"]);
        parsedText = json.parse.text["*"];
        return parsedText;
    } catch (e) {
        console.error(e);
    }   
}
                                     
function loadWiki(pageName) {
    var contents = parseWikiPage(pageName);
    document.getElementById("wikiContents").innerHTML = contents;                              
                                     
}
