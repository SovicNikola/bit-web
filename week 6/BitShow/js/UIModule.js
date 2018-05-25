var UIModule = (function () {

    var UISelectors = {
        searchField: "#searchInput",
        searchButton: '#button'
    }

    function displayData(data) {
        console.log(data);


        for (var i = 0; i < 50; i++) {
            var imgUrl = data[i].image.medium;
            var title = data[i].name;
            var divCard = $('<div>').addClass('card');
            var newimg = $('<img src="' + imgUrl + '">').addClass('card-img-top');
            $(divCard).append(newimg);

            var cardBody = $('<div>');
            $(cardBody).addClass('card-body');
            var paragrafTitle = $('<p>').addClass('card-text');
            paragrafTitle.text(title);
            $(cardBody).prepend(paragrafTitle);
            $(newimg).after(cardBody);
            $('#main').append(divCard);
        }
    }

    return {
        UISelectors: UISelectors,
        displayData: displayData
    }
})();