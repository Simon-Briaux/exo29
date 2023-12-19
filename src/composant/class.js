import React, {useState } from 'react';
let login ={
    login : "loginClass",
    mdp : "class",
};

const FunctionalClass = ({ classes }) => {    
    return(
        <div>
            Nom d'utilisateur: {login.login}
            <br></br>
            Mot de passe: {login.mdp}
            
        </div>
    );
};

export default FunctionalClass;