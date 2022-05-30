// Add the coffee to local storage with key "coffee"

 async function orderfood(){ 
     console.log("inside")
    let url=`https://masai-mock-api.herokuapp.com/coffee/menu`
    console.log(url)
    let res= await fetch(url)
    let item=await res.json();

    let box=document.createElement("div")
    let p1=document.createElement("p")
    p1.innerText=item.menu.data.price;
    console.log(p1)
    let p2=document.createElement("p")
    p2.innerText=item.menu.number;
    let img=document.createElement("img")
    img.src=item.menu.data.image;
    let btn=document.createElement("button")
    btn.innerText="add product"
    btn.setAttribute("id","btn")
    console.log(p1,p2)
    box.append(p1,p2,img,btn)
    document.getElementById("main").append(box)
    
    
       
      

}



      


