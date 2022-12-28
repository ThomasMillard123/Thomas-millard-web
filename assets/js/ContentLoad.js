async function populate() {

    
    const requestURL = 'https://ThomasMillard123.github.io/assets/content.json';
   
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroesText = await response.text();

   

    const superHeroes = JSON.parse(superHeroesText);
    populateHeader(superHeroes);
    populateHeroes(superHeroes);

}
function populateHeader(obj) {
    const header = document.querySelector('#current_Work');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.PageTitle;
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = obj.PageDes;
    header.appendChild(myPara);
}

function populateHeroes(obj) {
    const section = document.querySelector('#current_Work');
    const heroes = obj.Content;

    for (const hero of heroes) {
        const myArticle = document.createElement('section');
        const myH2 = document.createElement('h2');

        //img
        const span1 = document.createElement('span');
        const img1 = document.createElement('img');
        span1.className = "image main";
        span1.appendChild(img1);

        //des
        const Desc1 = document.createElement('p');
        Desc1.textContent = hero.Description1;
        const Desc2 = document.createElement('p');
        Desc2.textContent = hero.Description2;
        const Desc3 = document.createElement('p');
        Desc3.textContent = hero.Description3;
        myH2.textContent = hero.name;
        img1.src = `images/${hero.HeadImg}`;
       
        //things
        const myList = document.createElement('ul');
        const List = hero.Featuers;
        for (const itmes of List) {
            const listItem = document.createElement('li');
            listItem.textContent = itmes;
            myList.appendChild(listItem);
        }

        //tags
        const tag = document.createElement('p');
        const List2 = hero.Tags;
        for (const itmes of List2) {
            tag.textContent += "|"+ itmes;
           
        }
        tag.textContent += "|";

        myArticle.appendChild(myH2);
        myArticle.appendChild(span1);
        myArticle.appendChild(Desc1);
        myArticle.appendChild(myList);
        myArticle.appendChild(Desc2);
        myArticle.appendChild(Desc3);
        myArticle.appendChild(tag);


        section.appendChild(myArticle);
    }
}