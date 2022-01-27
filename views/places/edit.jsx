const React = require('react')
const Def = require('../default')

function edit_form(data){
    return(
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method='POST' action={`/places/${data.id}?_method=PUT`} style={{textAlign: 'center'}}>
                    <div className='row' style={{marginTop: '3vh'}}>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Place Name</label>
                            <input className='form-control' id='name' name='name' value={data.place.name} required/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='pic'>Place Picture</label>
                            <input className='form-control' type={'url'} id='pic' name='pic' value={data.place.pic}/>
                        </div>
                    </div>
                    <div className='row' style={{marginTop: '3vh'}}>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='city'>City</label>
                            <input className='form-control' id='city' name='city' value={data.place.city}/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='state'>State</label>
                            <select className='form-control' id="state"  value={data.place.state} name="state"><option value="Select a State">Select a State</option><option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="CM">CM</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VA">VA</option><option value="VI">VI</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option></select>
                        </div>
                    </div>
                    <div className='row' style={{marginTop: '3vh'}}>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='cuisines'>Cuisines</label>
                            <input className='form-control' id='cuisines' name='cuisines' value={data.place.cuisines} required/>
                        </div>
                        <div className='form-group col-sm-6'>
                                <label htmlFor='city'>Website</label>
                                <input className='form-control' type={'url'} id='website' name='website' value={data.place.website}/>
                        </div>
                    </div>
                    <div style={{display: 'flex', margin: 'auto', justifyContent: 'center', marginTop: '3vh'}} >
                    <span className="input-group-text" id="basic-addon1" style={{marginRight: '-2vw', zIndex: '4', background: 'none', border: 'none', color: 'white', pointerEvents: 'none'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16" data-darkreader-inline-fill="" >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                        </svg>
						</span>
					    <input className='btn btn-primary' type={'submit'} value={'Edit Place'} style={{paddingLeft: '2vw'}} />
                    </div>
				</form>
            </main>
        </Def>
    )
}

module.exports = edit_form