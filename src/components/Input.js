const Input = ({type, idprop, label}) => {
	return ( 
		<div className="input">
			<label htmlFor={idprop}>{label}</label>
			<input type={type} id={idprop} name={idprop} required/>
		</div>
	 );
}
 
export default Input;