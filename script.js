const buttons=document.querySelectorAll('.button')
const body =document.querySelector("body")

//events:-browser pe koi v kaam
buttons.forEach(function(button){
  console.log(button);
  //event listner
  button.addEventListener('click' , function(e){
    console.log(e)
    //kis target se event aaya hai usko list karega e.target
    console.log(e.target)
    if(e.target.id==='grey')
    {
      body.style.backgroundColor= e.target.id
    }
    if(e.target.id==='white')
    {
      body.style.backgroundColor= e.target.id
    }
    if(e.target.id==='blue')
    {
      body.style.backgroundColor= e.target.id
    }
    if(e.target.id==='yellow')
    {
      body.style.backgroundColor= e.target.id
    }
    if(e.target.id==='purple')
    {
      body.style.backgroundColor= e.target.id
    }
    if(e.target.id==='red')
    {
      body.style.backgroundColor= e.target.id
    }

  })

});