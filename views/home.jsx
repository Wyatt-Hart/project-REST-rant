const React = require('react')
const Def = require('./default')

function Home(){
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src='/images/chia-fruit-drink.jpg' style={{width: '80vw'}}></img>
                    <div>
                        Photo by <a href='https://unsplash.com/@cravethebenefits'>Brenda Godinez</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                    </div>
                </div>
                <a href='/places'>
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = Home