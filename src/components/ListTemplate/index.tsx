import "./styles.css"
import React from "react";

export type templateType = {
    name:string;
    nowPrice:string;
    state:string;
    update:boolean;
}


const ListTemplate = ({name,nowPrice,state,update}:templateType) =>{
    const [testData,setTestData] = React.useState(false);


    setTestData(update)


    return(
        <div className="listWrapper">
            <div className="listTitle">{name}</div>
            <div className="listSubTitle">
                <span className="listSubTitleText">{nowPrice}</span>
                <span className="listSubTitleText">{testData}</span>
                <span className="listSubTitleText">{state}</span>
            </div>
        </div>
    )
}

export default ListTemplate
