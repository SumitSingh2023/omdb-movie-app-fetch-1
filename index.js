let search=document.getElementById("search")
let output=document.getElementById("display")
let input=document.getElementById("searchBar")
//let apiKey="6716a948"



search.addEventListener("click",async()=>{
    let movieName=input.value
    let url=`http://www.omdbapi.com/?i=tt3896198&apikey=6716a948&t=${movieName}`

    
    try{
        let raw=await fetch(url)
        let data=await raw.json()
        output.innerHTML=`
          <h2>Movie Name : ${data.Title}</h2><br>
          <p>Released Date : ${data.Year}</p><br>
          <p>Rating : ${data.imdbRating
          }</p><br>
          <p>${data.Actors}</p><br>
          <p>About Movie : ${data.Plot}</p>
        `
        console.log(data)
        return data
    }catch(error){
        output.innerHTML="Network failed!"
        console.log("error in fetching data!",error)

    }

    
})

