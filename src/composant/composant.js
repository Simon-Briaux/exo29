import React, {useState } from 'react';

const FunctionalComponent = ({ variables }) => {

    const login = "Simon";
    const mdp ="Secret";

    return (
        <div>
            login: {login}
            <br></br>
            Mot de passe: {mdp}
        </div>
    );
};
export default FunctionalComponent;
