const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive' style={{fontSize: '1.5rem'}}>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return(
                <div className='border col-sm-6 col-md-4 col-lg-3' key={c.id}>
                    <h3 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h3>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong style={{fontSize: '1.5rem'}}>-{c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <a href={ data.place.website }>
                    <h1>{ data.place.name }</h1>
                </a>
                <div style={ {width: '40vw', display: 'inline-block'} }>
                    <img src={data.place.pic} alt={data.place.name}/>
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
                <div style={ {width: '50vw', top: '-2vw', position: 'relative', display: 'inline-block'} }>
                <h2>Rating</h2>
                    <p>Not Rated</p>
                    <h2>
                        Description
                    </h2>
                    <h3 style={{fontSize: '1.2rem'}}>
                        {data.place.showEstablished()}
                    </h3>
                    <h4 style={{fontSize: '1rem'}}>
                        Serving { data.place.cuisines }
                    </h4>
                    <a href={`/places/${data.place.id}/edit`} className='btn btn-warning' style={ {display: 'inline-block', marginRight: '5vw'} }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg> | Edit
                    </a>
                    <form method='POST' action={`/places/${data.place.id}?_method=DELETE`} style={ {display: 'inline-block'} }>
                        <button type='submit' className='btn btn-danger'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg> | Delete
                        </button>
                    </form>
                </div>
                <h2>Comments</h2>
                <div className='row' style={{ justifyContent: 'space-around', margin: 'auto' }}>
                    {comments}
                </div>
                <form style={{justifyContent: 'space-around'}} method='POST' action={`/places/${data.place.id}/comment`}>
                    <label htmlFor='content'>Comment</label>
                    <textarea id='content' className='form-control' style={{maxWidth: '75vw', margin: "auto"}} rows='3' type='text' name='content'/>

                    <span style={{display: 'inline-block'}} className='form-group col-sm-6 col-md-4 col-lg-3'>
                        <label style={{marginRight: '0.5 vw'}}  htmlFor='author'>Author</label>
                        <input id='author' type='text' name='author'/>
                    </span>

                    <span style={{display: 'inline-block'}} className='form-group col-sm-6 col-md-4 col-lg-3'>
                        <label className='form-group col-sm-6 col-md-4 col-lg-3' htmlFor='stars' className='form-label'>Star Rating</label>
                        <input id='stars' type='range' className='form-range' min='0.5' max='5' step='0.5' style={{height: '100%', width: '10vw'}} name='stars'/>
                    </span>
                    
                    <span style={{display: 'inline-block'}} className='form-group col-sm-6 col-md-4 col-lg-3'>
                        <label htmlFor='rant'>Rant</label>
                        <input style={{transform: "scale(1.5)",margin: "1vw"}} id='rant' type='checkbox' name='rant'/>
                    </span>
					<input className='btn btn-primary' style={{display: 'block', margin: 'auto'}} type={'submit'} value={'Comment'} />
                </form>
            </main>
        </Def>
    )
}

module.exports = show