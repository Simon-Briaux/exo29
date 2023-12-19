import React, {useState } from 'react';

const FunctionalComponent = ({ variables }) => {

    const login = "LoginVariable";
    const mdp ="Variable";

    return (
        <div>
            login: {login}
            <br></br>
            Mot de passe: {mdp}
        </div>
    );
};
export default FunctionalComponent;
