import React from 'react'

const Title = (props) => {
    return ( 
        <>
       <div className="jumbotron">
    <h1 className="display-3">{props.nombre}</h1>
    <p className="lead">Jumbo helper text</p>
    <hr className="my-2"/>
    <p>More info</p>
    <p className="lead">
        <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
    </p>
</div>
        </>
     );
}
 
export default Title;