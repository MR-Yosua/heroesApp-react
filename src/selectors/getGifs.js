//api key 76DCxFXAZzZiUCs7OxOr8cF0ln0mbaga

// api.giphy.com/v1/gifs/search?api_key=76DCxFXAZzZiUCs7OxOr8cF0ln0mbaga&q=Spiderman

export const getGifs = async(hero) =>{
    const apiKey = `76DCxFXAZzZiUCs7OxOr8cF0ln0mbaga`;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(hero)}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    // console.log(data[0].images.original.url);
    const url_resp = data[0]; //data[0].images.original.url;
    // console.log(url_resp);
    return url_resp;
}