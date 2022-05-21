const TextInput = ({idprop, label}) => {
	return ( 
		<div className="textinput">
			<label htmlFor={idprop}>{label}</label>
			<input type="text" id={idprop} name={idprop}/>
		</div>
	 );
}
 
export default TextInput;