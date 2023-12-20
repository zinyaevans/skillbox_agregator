$(function() {
    let api = 'api.php';

    let updateUsdCourse = function() {
        let request = {'url': 'https://cbr.ru/'};
        $.get(api, request, function(response) {
            let result = $(response).find('._dollar + div').text();
            $('#usd-course > .value').text(result);
        });
        //89,8926 ₽
    }

    let updateWeather = function() {
        let request = {'url' : 'https://pogoda.mail.ru/prognoz/chelyabinsk/'};
        $.get(api, request, function(response) {
            let result = $(response).find('.information__content__temperature').text();
            $('#weather > .value').text(result + 'C');
        });
        //-15&deg;C
    }

    let updateRuWikiArticlesCount = function() {
        let request = {'url' : 'https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'};
        $.get(api, request, function(response) {
            let result = $(response).find('[title="Служебная:Статистика"]').first().text();
            $('#ruwiki-articles-count > .value').text(result);
        });
        //1 952 395
    }

    let updateSiteStatus = function() {
        let request = {'url': 'http://o95147u6.beget.tech/'};
        $.get(api, request, function(response) {
            let result = response.indexOf('Агрегатор данных с сайтов') > 0 ? 'Работает' : 'Не работает';
            $('#site-status > .value').text(result);
        });
        //Работает
    }

    let updateAlldata = function() {
        updateUsdCourse();
        updateWeather();
        updateRuWikiArticlesCount();
        updateSiteStatus();
    }
    updateAlldata();
    setInterval(updateAlldata, 5000);
});