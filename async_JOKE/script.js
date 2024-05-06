const api_url="https://icanhazdadjoke.com/";

const fetchData=async()=>{
 try{ const res=await fetch(api_url,{
    headers:{
      Accept:"application/json",
    }
  });
  console.log(res);
  const data=await res.json();
  console.log(data.joke);
  api_body.innerText=data.joke;
 
}
catch(error){
  api_body.innerText=error;
  console.log(error);
}
  }
  fetchData();


const api_body=document.querySelector('.api_body');
const getJokes=document.querySelector('.getJokes').addEventListener('click',fetchData);