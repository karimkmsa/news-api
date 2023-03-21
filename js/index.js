var myHttp = new XMLHttpRequest()
var list=[];
var mylist = document.querySelectorAll("ul li")


for( var i=0 ;i<mylist.length;i++){


    mylist[i].addEventListener('click',function(e){
            var targetCode =(e.target.getAttribute("data-code"))
            getNews(targetCode)

    })
}




function display(){
var cartona =``;

for( var i=0 ; i<list.length;i++){
cartona+=`
    <div class="col-md-4">
    <img class="w-100" src="${list[i].urlToImage ? list[i].urlToImage :'images/project-6.jpg'}">
    <h2>${list[i].title}</h2>
    <p>${list[i].description}</p>
</div>`
    
}
document.getElementById("myData").innerHTML=cartona


}


function getNews(countryCode){

    myHttp.open("GET",`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=business&apiKey=22c6939655ab465b9d418502a16b5d2c`)
    myHttp.send()
    console.log(myHttp.readyState)
    myHttp.addEventListener("readystatechange",function(){
    
    console.log(myHttp.readyState)
    if(myHttp.readyState==4 && myHttp.status ==200){
        list= JSON.parse(myHttp.response).articles;
        console.log(list)
        display()
    }
})



}
