import axios from "axios";
import { useState } from "react";



function Show() {

    const [res,setRes] = useState(null);

    if (res == null) { 
    axios.get('http://localhost:8081/showall' ,{
    }).then((resp)=>{
        console.log(resp.data);
        setRes(resp.data);
   
        

    })

    }
    return(
        <div className="size">
            {JSON.stringify(res)}

        </div>
    );
    
}    


export default Show;