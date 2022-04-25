// Store the wallet amount to your local storage with key "amount"

 var price = JSON.parse(localStorage.getItem("amount")) || []

   

 document.querySelector("#wallet").innerHTML =`${price}` ;


 
// console.log(price,"amt")

function BookMovies(){
    window.location.href="movies.html"
}

function addWallet(){
    event.preventDefault()
 var money =   document.getElementById("amount").value ;

 console.log(money,"money")
    var rupees = localStorage.setItem("amount",JSON.stringify(Number(money)))

    


           window.location.reload()

}

