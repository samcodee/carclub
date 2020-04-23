async function parseWikiPage(pageTitle) {
     console.log("entered async function.....");
     const url = "https://en.wikipedia.org/w/api.php?" +
        new URLSearchParams({
            origin: "*",
            action: "parse",
            page: pageTitle,
            format: "json",
        });

    try {
        console.log("about to make api call"); 
        const req = await fetch(url);
        const json = await req.json();
        console.log(json.parse.text["*"]);
        parsedText = json.parse.text["*"];
        console.log("finished api call..... Returning contents....");
        document.getElementById("wikiContents").innerHTML = parsedText;     
        return parsedText;
    } catch (e) {
        console.error(e);
    }   
}
                                     
function loadWiki(pageName) {
    console.log("Entered....");   
    var contents = parseWikiPage(pageName);
    console.log("Called....");  
    //document.getElementById("wikiContents").innerHTML = parsedText; 
    console.log("Finished......");  
                                     
}
