
$(document).ready(function () {
    populate();
    $('.single-item-rtl').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

   
})


function Set0(Content) {
    $(Content).slick('slickGoTo',0);
}

async function populate() {

    
    const requestURL = 'https://ThomasMillard123.github.io/assets/content.json';
   
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroesText = await response.text();

   

    const superHeroes = JSON.parse(superHeroesText);
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
   
    $('.single-item').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        initialSlide: 1,
       
        responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
    });

    $('.single-item').on('afterChange', function (event, slick, currentSlide) { LoadContent(superHeroes, currentSlide)});



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
    const Content = obj.Content;
    
    const caracel = document.createElement('div');
    caracel.classList = 'single-item';
   
    for (const hero of Content)
    {
        const Card = document.createElement('div');
        //Card.className = "card";
        const img1 = document.createElement('img');
        img1.src = `images/${hero.HeadImg}`;
        img1.style = "width:100%";
        Card.appendChild(img1);
        const myH2 = document.createElement('h4');
        const myb = document.createElement('b');
        myb.textContent = hero.name;
        myH2.appendChild(myb);
        Card.appendChild(myH2);
        
        caracel.appendChild(Card);
    }
  
    section.appendChild(caracel);


    const ContentInfo = document.createElement('div');
    ContentInfo.id = 'data';


    section.appendChild(ContentInfo);
}


function LoadContent(obj, NumberItem)
{

    
    const section = document.querySelector('#data');
    while (section.firstChild) {
        section.removeChild(section.lastChild);
    }

    const Content = obj.Content;
    console.log(Content[NumberItem].name);

    const myH2 = document.createElement('h2');
    myH2.textContent = Content[NumberItem].name;
    section.appendChild(myH2);
    const span1 = document.createElement('span');
    const img1 = document.createElement('img');
    span1.className = "image main";
    span1.appendChild(img1);
    img1.src = `images/${Content[NumberItem].HeadImg}`;
    section.appendChild(span1);
    
    const Desc1 = document.createElement('p');
    Desc1.textContent = Content[NumberItem].HeadDes;
    section.appendChild(Desc1);

    const myList = document.createElement('ul');
    const List = Content[NumberItem].Featuers;
        for (const itmes of List) {
            const list3 = document.createElement('li');
            list3.textContent = itmes;
            myList.appendChild(list3);
        }
    section.appendChild(myList);

    const divDes = document.createElement('div');
    const desList = Content[NumberItem].Des;
        for (const it of desList) {

            if (it.Tags.includes("List")) {
                const myList = document.createElement('ul');
                const List = it.text;
                for (const itmes of List) {
                    const list1 = document.createElement('li');
                    list1.textContent = itmes;
                    myList.appendChild(list1);
                }
                divDes.appendChild(myList);
                //continue;
            }
            else {
                const list2 = document.createElement('p');
                list2.textContent = it.text;
                divDes.appendChild(list2);
            }
        }
    section.appendChild(divDes);

  

    const imgcarr = document.createElement('div');
    imgcarr.classList = 'single-item-img';
    const myH3 = document.createElement('h3');
    myH3.textContent = "Content";
    section.appendChild(myH3);

    const VidList = Content[NumberItem].Vids;
       

    for (const itmes of VidList) {
        const thingdiv = document.createElement('div');
        const div = document.createElement('div');
        div.style = "padding:75% 0 0 0;position:relative;"
            const iframe = document.createElement('iframe');
            iframe.frameBorder = 0;
            iframe.style = "top:0;left:0;width:100%;height:100%;position:absolute;";
            iframe.title = itmes.Title;
            iframe.src = itmes.Link;

            if (itmes.isisYoutube) {
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope";
            }
            else {
                iframe.allow = "autoplay; fullscreen; picture-in-picture";
            }
        div.appendChild(iframe);
        thingdiv.appendChild(div);
        imgcarr.appendChild(thingdiv);
    }

    const imglist = Content[NumberItem].IMG;
    
 

    for (const itmes of imglist) {
        const div = document.createElement('div');
        const span1 = document.createElement('span');
        const img1 = document.createElement('img');
        span1.className = "image main";
        img1.style = "max-height:500px";
        span1.appendChild(img1);
        img1.src = `images/${itmes}`;
        div.appendChild(span1);
        imgcarr.appendChild(div);
       
    }

    section.appendChild(imgcarr);

    $('.single-item-img').slick({
        centerMode: true,
        centerPadding: '60px',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
         ]
    });



    const tag = document.createElement('p');
    const List2 = Content[NumberItem].Tags;
        for (const itmes of List2) {
            tag.textContent += "|" + itmes;

        }
        tag.textContent += "|";
    section.appendChild(tag);
}