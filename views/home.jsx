const React = require('react')
const Def = require('./default')

function Home(){
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div style={{textAlign: 'center', margin: 'auto'}}>
                    <img src='/images/chia-fruit-drink.jpg' alt='Chia Fruit Shake' style={{width: '80vw'}}/>
                    <div>
                        Photo by <a href='https://unsplash.com/@cravethebenefits'>Brenda Godinez</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                    </div>
                </div>
                <div style={{textAlign: 'center'}}>
                    <a href='/places' style={{fontSize: '2rem'}}>
                        <button className='btn-primary'>Places Page</button>
                    </a>
                </div>
            </main>
        </Def>
    )
}

module.exports = Home