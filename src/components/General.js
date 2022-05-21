import TextInput from "./TextInput";

const General = () => {
	return ( 
		<div className="general">
			<h2>General Information</h2>
			<form action="get" id="generalForm">
				<TextInput idprop={'fullName'} label={'Full Name'} />
			</form>
		</div>
	 );
}
 
export default General;