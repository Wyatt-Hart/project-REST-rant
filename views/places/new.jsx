const React = require('react')
const Def = require('../default')

function new_form(data){
	let message = ''
	if (data.message){
		message = (
			<h4 className='alert-danger'>
				{ data.message }
			</h4>
		)
	}
	
	let place = {
		name : '',
		pic : '',
		city : '',
		state : null,
		cuisines : '',
		website : ''}
		
	if (data.place){
		place = data.place
	}
	return(	
		<Def>
			<main>
				<h1>Add a New Place</h1>
				{message}
				<form method='POST' action='/places' style={{textAlign: 'center'}}>
				<div className='row' style={{margin: '2vw', marginTop: '3vh'}}>
					<div className='form-group col-sm-6 col-md-4 col-lg-3'style={{marginTop: '3vh'}}>
						<label htmlFor='name'>Place Name</label>
						<input className='form-control' id='name' name='name' defaultValue={place.name} required/>
					</div>
					<div className='form-group col-sm-6 col-md-4 col-lg-3'style={{marginTop: '3vh'}}>
						<label htmlFor='pic'>Place Picture</label>
						<input className='form-control' type={'url'} id='pic' name='pic' defaultValue={place.pic}/>
					</div>
					<div className='form-group col-sm-6 col-md-4 col-lg-3'style={{marginTop: '3vh'}}>
						<label htmlFor='city'>City</label>
						<input className='form-control' id='city' name='city' defaultValue={place.city}/>
					</div>
					<div className='form-group col-sm-6 col-md-4 col-lg-3'style={{marginTop: '3vh'}}>
						<label htmlFor='state'>State</label>
						<select className='form-control' id="state" name="state"  defaultValue={place.state} required>
							<option selected='true' disabled>Select a State</option>
								<option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="CM">CM</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VA">VA</option><option value="VI">VI</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>
						</select>
					</div>
					<div className='form-group col-sm-6 col-md-4 col-lg-3'style={{marginTop: '3vh'}}>
							<label htmlFor='cuisines'>Cuisines</label>
							<input className='form-control' id='cuisines' name='cuisines' defaultValue={place.cuisines} required/>
					</div>
					<div className='form-group col-sm-6 col-md-4 col-lg-3'style={{marginTop: '3vh'}}>
							<label htmlFor='city'>Website</label>
							<input className='form-control' type={'url'} id='website' name='website' defaultValue={place.website}/>
					</div>
					<div className='form-group col-sm-6 col-md-4 col-lg-3'style={{marginTop: '3vh'}}>
						<label htmlFor='founded'>Founded Year</label>
						<input className='form-control' id='founded' name='founded' defaultValue={new Date().getFullYear()} />
					</div>
				</div>
				<div style={{display: 'flex', margin: 'auto', justifyContent: 'center', marginTop: '3vh'}} >
					<span className="input-group-text" id="basic-addon1" style={{marginRight: '-2vw', zIndex: '4', background: 'none', border: 'none', color: 'white', pointerEvents: 'none'}}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
					<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
					</svg>
					</span>
					<input className='btn btn-primary' type={'submit'} value={'Add Place'} style={{paddingLeft: '2vw'}}/>
				</div>
				</form>
			</main>
		</Def>
	)
}

module.exports = new_form
