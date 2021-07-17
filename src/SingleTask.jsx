import React, { useState } from 'react';

const SingleTask = (props) =>{

    let inicolor = "";
    let inistyle = {
        color: inicolor,
    };

    const [styler,changeStyler] = useState(inistyle);

    
    const RemoverActivator = () =>{
        props.tap(props.id)
    }

    const SimpleDisabler = () =>{
        if(inicolor === "#dfdbdb"){
            inicolor = "";
            let finalstyle = {
                color: inicolor,
            };
            changeStyler(finalstyle);
        }else{
            inicolor = "#dfdbdb";
            let finalstyle = {
                color: inicolor,
            };
            changeStyler(finalstyle);
        }
    };
    
    const SimpleEnabler = () =>{
        inicolor = "";
        let finalstyle = {
            color: inicolor,
        };
        changeStyler(finalstyle);
    };

    return(
        <React.Fragment>
        <div>
        <div className="SingleTask" style={styler} onDoubleClick={RemoverActivator}>
            {props.input}
            </div>
        </div>
        </React.Fragment>
    );
};

export default SingleTask;