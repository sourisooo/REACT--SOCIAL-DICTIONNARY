import { useEffect } from "react";
import { useObject } from "../hooks/UseObject"
import { useUserId } from "./Homepage";
import { useContext } from "react";
import { Context } from "./Homepage";
import { useState } from "react";


export default function Test(){

const  [button, setButton]  = useContext(Context);

const [test, setTest] = useState("");


let url = "";

//   useEffect(() => {


//         switch(button) {

//         case "fr": url = "http://localhost:4000/words/";  break;

//         case "eng": url = "http://localhost:5000/words/";  break;

//         case "jp": url = "http://localhost:3010/words/";  break;

//         }

//        console.log(url); 

//     fetch(url)
//     .then(response =>  response.json())
//     // .then(e => console.log(e) )
//     .then(e=> {setObject(e);console.log(object)})

//     // console.log(datas,datas.at(0),datas.at(0).name);
//     console.log(object);


//   }, [button])

//     useEffect(() => {

// useObject();
// // console.log(useUserId());
// console.log(button);





// },[select])



}

