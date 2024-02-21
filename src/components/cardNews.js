class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode : "open"});

       shadow.appendChild(this.build());
       shadow.appendChild(this.style());
    }
    build(){

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

            const cardLeft = document.createElement("div");
            cardLeft.setAttribute("class", "card_left");

                const autor = document.createElement("span");
                autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous")
                autor.setAttribute("class", "autor")

                const linkTitle = document.createElement("a");
                linkTitle.textContent = this.getAttribute("title");
                linkTitle.href = this.getAttribute("link-url")

                const newsContent = document.createElement("p")
                newsContent.textContent = this.getAttribute("content")

            cardLeft.appendChild(autor);
            cardLeft.appendChild(linkTitle);
            cardLeft.appendChild(newsContent);

            const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "card_right");

                const newsImage = document.createElement("img");
                newsImage.src = this.getAttribute("photo") || "https://placehold.co/350x200";
                newsImage.alt = this.getAttribute("desc") || "defauld"

            cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot
    }

    style(){
        const style = document.createElement("style")
        style.textContent = `
        .card{
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-inline:auto;
            margin-bottom: 50px;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }

        .card_left > span{
            text-transform: capitalize
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card_left > p {
            color: rgb(92, 90, 90);
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        .card_right > img{
            width: 350px;
            height: 100%;
        }
        `

        return style
    }
}

customElements.define("card-news", Cardnews)