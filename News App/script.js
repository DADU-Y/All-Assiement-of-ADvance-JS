let showData = document.getElementById("showData");

let input = document.getElementById("inputData");


let giveNews = async () => {
    try {
            let data = await fetch(`https://newsapi.org/v2/everything?q=${input.value}&from=2025-05-15&sortBy=publishedAt&apiKey=85e6057c59d44558a94879aa8cb3552b`);

    let response = await data.json();


      response.articles.forEach((e, i) => {
        showData.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${e.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${e.title}</h5>
            <p class="card-text">${e.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>  
            </div>
            </div>`;
      });
      
    } catch (error) {
        console.log(error);
    }


};
