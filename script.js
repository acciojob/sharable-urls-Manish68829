// your code here
function updateUrl(){
        var name=document.getElementById("name").value;
        var year=document.getElementById("year").value;
        var btn=document.getElementById("button");
        var url=document.getElementById("url");
        var nestedUrl="";
        if(name&&year){
            nestedUrl+=`?name=${name}&year=${year}`;}
            else if(name){
                nestedUrl+=`?name=${name}`;
                
            }
            else{
                nestedUrl+=`?year=${year}`;
            }
            url.textContent=url.textContent+nestedUrl;

      }
