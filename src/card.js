const BASE_URL = 'http://localhost:3005/api/courses'

var data = []


const getcourses = async () => {
    console.log("then I came")
    try{
        console.log("here")
        const response = await fetch(`${BASE_URL}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const myJson = await response.json(); //extract JSON from the http response
            console.log("then I came2")

        console.log(myJson)
        data = myJson.data
        createCard(data)
        // console.log(data)
    }catch (error){
        console.log(error)
    }
}

 function  createCard(courses){
    var holder =""
    for(var i in courses){
        holder +=
        `<div class="card1  max-w-sm bg-stone-100 border rounded shadow-md ">
            <img class=" mx-auto" src="${courses[i].img}" alt="">
            <div class="">
                <h3 class="text-center font-bold pt-3">${courses[i].courses}</h3>
                <p class="pb-[10%] text-center mt-[5%] w-[80%] mx-auto">
                ${courses[i].coursedesc}
                </p>
            </div>
   
        </div>`
        document.getElementById("card").innerHTML = holder
    }
 }


getcourses()
createCard()