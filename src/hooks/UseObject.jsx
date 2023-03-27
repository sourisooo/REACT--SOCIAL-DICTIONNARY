import { useState,useEffect, useContext } from "react";
import {Homepage} from "../Composants/Homepage";

import { Context } from "../Composants/Homepage";

export default function UseObject () {

    const [object, setObject] = useState("");
    const  [button, setButton]  = useContext(Context);
   

    console.log(button);

  //   let url = "";

  // useEffect(() => {


  //       switch(button) {

  //       case "fr": url = "http://localhost:4000/words/";  break;

  //       case "eng": url = "http://localhost:5000/words/";  break;

  //       case "jp": url = "http://localhost:3010/words/";  break;

  //       }

  //      console.log(url); 

  //   fetch(url)
  //   .then(response =>  response.json())
  //   // .then(e => console.log(e) )
  //   .then(e=> {setObject(e);console.log(object)})

  //   // console.log(datas,datas.at(0),datas.at(0).name);
  //   console.log(object);


  // }, [button])

  //   return {object}

    
}