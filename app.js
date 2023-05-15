const userImput = document.querySelector("#imp");
const board = document.querySelector('results');



async function getData(){
   
    const param = {params: 
        {q:userImput.value,
        api_key:"gKJEoaZD6DtRLW5XbIK2VUhI4o96SYu0"}}
    const res = await axios.get('http://api.giphy.com/v1/gifs/search',param)
        console.log(res.data);
        console.log(res.data[0])
    
    const newImage = document.createElement("img");
    //let ind = Math.floor(Math.random() * res.data.length)
    //newImage.src =res.data[3].images.original.url ;
    board.appendChild(newImage)

}
