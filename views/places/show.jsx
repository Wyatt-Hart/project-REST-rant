const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <div style={ {width: '40vw', display: 'inline-block'} }>
                    <img src={data.place.pic} alt={data.place.name}/>
                </div>
                <div style={ {width: '50vw', display: 'inline-block'} }>
                <h2>Rating</h2>
                    <p>Not Rated</p>
                    <h2>Description</h2>
                    <p>{ data.place.cuisines } located in { data.place.city }, { data.place.state }</p>
                    <a href={`/places/${data.id}/edit`} className='btn btn-warning' style={ {display: 'inline-block', marginRight: '5vw'} }>
                        Edit
                    </a>
                    <form method='POST' action={`/places/${data.id}?_method=DELETE`} style={ {display: 'inline-block'} }>
                        <button type='submit' className='btn btn-danger'>
                            Delete
                        </button>
                    </form>
                </div>
                <h2>Comments</h2>
                <p>No comments yet!</p>
            </main>
        </Def>
    )
}

module.exports = show