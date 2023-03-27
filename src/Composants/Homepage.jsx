import { useState,useEffect } from "react";
import {createContext, useContext} from "react";
import  UseObject  from "../hooks/UseObject";
import Test from "./Test";

export  const Context = createContext("");    

export const Homepage = ({children}) => {


    const [button, setButton] = useState("");
    const [suggestion, setSuggestion] = useState("");
    const [Listsuggestion,setListSuggestion] = useState([""]);
    const [test,setTest] = useState("");
    const [likeid,setLikeid] = useState("");
    const [likenum,setLikenum] = useState("");
    let like = 0;


window.addEventListener('click', e => {if((e.target.name=="select")){setButton(e.target.value)}});

window.addEventListener('click', e => {if(e.target.value=="suggestion"){setSuggestion(e.target.value)}});

window.addEventListener('click', e => {if(e.target.type=="submit"){setLikeid(e.target.innerHTML.trim());setLikenum(e.target.name.trim());console.log(likenum,likeid,typeof likenum, typeof likeid);}});

window.addEventListener('click', e => {setTest((e.target),
    console.log(e.target.innerHTML.trim(),e.target.name.trim(),typeof e.target.name,typeof e.target.innerHTML,e.target.type)
    )});



const [data, setData] = useState("");
const [response, setResponse] = useState([""]);
const [result, setResult] = useState([""]);

let url = "";
let dat={};
const list = document.querySelector('.lists');


const fetchu = (ef) =>

    {   

        switch(button) {

        case "fr": url = "http://localhost:4000/words/";  break;

        case "eng": url = "http://localhost:5000/words/";  break;

        case "jp": url = "http://localhost:3010/words/";  break;

        }


        let temp = fetch(url)
        .then(response => ((response.json())))
        
        temp
        .then(f => f.filter(e => e.name.toLowerCase().match(ef.toLowerCase()))) 
        .then(z => setResponse(z))

        // console.log(result,result[0].like);


    };



    const handleChange = (e) =>

    {

       setData(e);
       fetchu(e);
       list.innerHTML=null;


    };


    
       document.addEventListener('keydown', (e) =>

        {
            if(e.key ==="Enter"){setResult(response);document.getElementById("opi").focus()}

        });

        
        // console.log(result,suggestion);



        
    
        const submit = () => {

            switch(button) {

                case "fr": url = "http://localhost:4500/words/";  break;
        
                case "eng": url = "http://localhost:5500/words/";  break;
        
                case "jp": url = "http://localhost:3510/words/";  break;
        
                }

                console.log(result);

               let test=result[0].name;
               let like = 0;

                dat = {test,suggestion,like};


            if((button!="")&&(suggestion!=""))
            
                {

                fetch

                (
                        url,{
                        method: 'POST',
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(dat)}

                )}

            // console.log(url,dat);


        }


  useEffect(() => {


        switch(button) {

        case "fr": url = "http://localhost:4500/words/";  break;

        case "eng": url = "http://localhost:5500/words/";  break;

        case "jp": url = "http://localhost:3510/words/";  break;

        }


    fetch(url)
    .then(response =>  response.json())

    .then(e =>  e.filter(p => p.test==result[result.length-1].name))


    .then(e=> e.forEach(f =>{const html =
        
        `
         <li class="list-group-item d-flex justify-content-between align-items-center">
           <a>
            ${f.suggestion} is suggestion for ${result[result.length-1].name} and add ${f.like} likes from id ${f.id}  

           </a>


           <button name=${f.like} type="submit"> 
           ${f.id}
           </button>
           
    
              </li>
              `
            //   ;console.log(e,f);
            //       ;console.log(like);
                list.innerHTML += html;
                console.log(list.innerHTML);
            
            }))

    .then(e=> {setListSuggestion(e);})

    

    // console.log(datas,datas.at(0),datas.at(0).name);
    // console.log(Listsuggestion);



  }, [response])




  useEffect(() => {

  

        // console.log("inside sub",console.log(likeid,likenum));

      switch(button) {

          case "fr": url = ("http://localhost:4500/words/"+likeid.trim());  break;
  
          case "eng": url = ("http://localhost:5500/words/"+likeid.trim());  break;
  
          case "jp": url = ("http://localhost:3510/words/"+likeid.trim());  break;
  
          }

           like = (parseInt(likenum)+1);

          dat = {like};

        //   console.log(dat);

          fetch

          (
                  url,{
                  method: 'PATCH',
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(dat)}

          )

    //   console.log(url,dat,button);
                    

    
    }, [like,likeid,submit,test])

    



return (


    <div>
    
    <label for="opinion"> Select your language, (actually {button}) </label><br /> 
    <button  name="select" type="button" value="fr"> 
    français
    </button>
    
    <button name="select" type="button" value="eng" > 
    english 
    </button>
    
    <button  name="select" type="button" value="jp" > 
    日本語 
    </button>
    
    

    <label for="opinion"> Search bar:(please press enter)</label><br /> 
  <textarea id="opi" rows="3" cols="80" value={data} onChange={e=>handleChange(e.target.value)} ></textarea>

  <br /> <br /> 
  <label for="opinion"> Fetched Datas: </label><br /> 
  <textarea id="opinion" rows="3" cols="80" value={response.map(e=>e.name)} disabled="true"></textarea>
  <br /> <br /> 
  <label for="opinion"> Your request: </label><br /> 
  <textarea id="opinion" rows="4" cols="80" value={JSON.stringify(result)} disabled="true"></textarea>
  <br /> <br /> 



    <button  onClick={submit} name="6" type="button" value="Suggestion"> 
    Click here to add suggestion for the selected word
    </button>

    <label for="suggestion">  </label><br /> 
  <textarea id="suggestion" rows="12" cols="80" value={suggestion} onChange={e => {setSuggestion(e.target.value)}} ></textarea>
  <br /> 


  <label for="suggestion">  </label>
  <textarea id="suggestion" rows="1" cols="80" disabled="true" value={JSON.stringify(Listsuggestion)} ></textarea>

  <br /> 
  <label for="opinion"> Click on the button on the right of an suggestion to add one like//Suggestions are updates at each new modification of the search bar form</label><br />
  <label for="opinion"> Can take 2-3 sec to update for long list</label><br /> 
  <ul class="lists">

</ul>

<template id="template">
    <li class="template-list">
        <p class="template-city"></p>
        <p class="template-country"></p>
    </li>
</template>


 
  <Context.Provider value={[button, setButton]}>
     <Test/> 
     {/* <UseObject/> */}
     {/* {children} */}
     </Context.Provider>

    </div>



    )

   

}


// export const useUserId = () => useContext(UserIdContext);

// export function useUserId  () 

//             {
                
//                 const context = useContext(Homepage);
//                 return (context,console.log(context))
                
//             }



// export function useUserId() {
//     return (
//       <UserIdContext.Consumer>
//         {value => console.log(value)} 
//         {/* prints: Reed */}
//       </UserIdContext.Consumer>
//     )
//   }


