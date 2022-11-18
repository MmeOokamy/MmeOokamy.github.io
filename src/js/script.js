// let api = "https://www.ookamy.fr/api/achievement_json"
let api = "https://www.ookamy.fr/api/achievement"
let api_pizza = "https://ookamypizzamamadjango.herokuapp.com/api/GetPizzas"

let api_local = "http://127.0.0.1:8000/api/achievements/?format=json"

function card_portfolio(achievement) {
    let card;
    card = '<div class="col-sm-12 col-md-6 col-lg-4  mb-5">' +
        '   <div class="card">' +
        '       <div class="card-header">' +
        achievement.title +
        '       </div>' +
        '           <img class="card-img-top" src="https://www.ookamy.fr/static/media/' + achievement.images[0].img + '" alt="' + achievement.images[0].title + '">' +
        '       <div class="card-body">' +
        '           <p class="card-text" >' + achievement.describe + '</p>' +
        '       </div>' +
        '       <div class="card-footer text-muted">' +
        achievement.subtitle +
        '       </div>' +
        '   </div>' +
        '</div>'

    return card;

};

function check_api() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", api);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {

            let dataApi = JSON.parse(this.responseText);
            console.log(dataApi);
            let portfolio_content = document.querySelector('#portfolio');
            let html = '';
            for (ac of dataApi) {
                html += card_portfolio(ac)
            }
            portfolio_content.innerHTML = html;


        }
    };
};




$(document).ready(function() {
    console.log('ready');
    check_api();

});