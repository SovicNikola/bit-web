var dataModule = (function () {
    function GetAllShows(dataHandler) {
        $.get('http://api.tvmaze.com/shows').done(dataHandler)
    }



    return {
        GetAllShows: GetAllSh
        ows,
    }
})();


