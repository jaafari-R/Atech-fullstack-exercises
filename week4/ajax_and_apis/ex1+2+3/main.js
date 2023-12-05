const BOOKS_API = "https://www.googleapis.com/books/v1";

const getBookByISBN = (isbn) => {
    $.ajax({
        method: "GET",
        url: BOOKS_API + "/volumes?q=isbn:" + isbn,
        success: (volume) => {
            console.log(volume);
        }
    });
}


const getBookQuery = (queryType, queryValue) => {
    $.ajax({
        method: "GET",
        url: BOOKS_API + "/volumes?q=" + queryType + ":" + queryValue,
        success: (volume) => {
            console.log(volume);
        }
    });
}


const getBookInfo = (queryType, queryValue) => {
    $.ajax({
        method: "GET",
        url: BOOKS_API + "/volumes?q=" + queryType + queryValue,
        success: (volume) => {
            // title author isbn
            console.log(volume)
            volume.items.forEach(item => console.log(`
                Book Title: ${item.volumeInfo.title}, 
                Book Authors: ${item.volumeInfo.authors}, 
                ISBN: ${JSON.stringify(item.volumeInfo.industryIdentifiers)}
            `));
            console.log(volume);
        }
    });
}


/* ex1 */
// getBookByISBN(9780575087057);


/* ex2 */
// getBookQuery("title", "The Wise Man's Fears");


/* ex3 */
getBookInfo("title", "The Wise Man's Fears");