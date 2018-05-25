(function (UIModule, dataModule) {

    function dataHandler(data) {
        UIModule.displayData(data)
    }



    dataModule.GetAllShows(dataHandler);

})(UIModule, dataModule)