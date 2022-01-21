const React = require('react')

function Def (html){
    return(
        <html>
            <head>
                <title>Title</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'></link>
                <link rel='stylesheet' href='/CSS/style.css'></link>
            </head>
            <nav style={{textAlign: 'left', position: 'fixed', width: '100vw', top: '0vh'}}>
                    <h2 style={{display: 'inline-block', color: 'white'}}>REST-Rant  |</h2>
                    <ul style={{display: 'inline-block'}}>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/places'>Places</a></li>
                        <li><a href='/places/new'>Add Places</a></li>
                    </ul>
                </nav>
            <body style={{paddingTop: '6vh'}}>
                
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def