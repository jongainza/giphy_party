const userImput = document.querySelector("#imp");
const board = document.querySelector('#results');
const form = document.querySelector('form');



async function getData(){
   if(userImput.value){
    const param = {params: 
        {q:userImput.value,
        api_key:"gKJEoaZD6DtRLW5XbIK2VUhI4o96SYu0"}}
    const res = await axios.get('http://api.giphy.com/v1/gifs/search',param)
        console.log(res);
        console.log(res.data.data[0])
    
   const newImage = document.createElement("img");
    let ind = Math.floor(Math.random() * res.data.data.length)
    newImage.src =res.data.data[ind].images.original.url ;
    board.appendChild(newImage)
}
}

form.addEventListener('submit',function(event){
    event.preventDefault()
    getData()
});
// const add =document.querySelector("#add");
const del = document.querySelector('#rem');

// //add.addEventListener('click',function(){
//  //   console.log("you pussed it")
// //})

del.addEventListener("click", function(){
    while (board.firstChild){
        board.firstChild.remove()
    }
})