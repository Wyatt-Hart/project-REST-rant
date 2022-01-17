const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry. We can't find this page!</p>
                <img src='https://http.cat/404' style={{width: '80vw'}}></img>
            </main>
        </Def>
    )
}

module.exports = error404