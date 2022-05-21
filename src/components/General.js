import Input from "./Input";

const General = () => {
	return ( 
		<div className="general">
			<h2>General Information</h2>
			<form action="get" id="generalForm">
				<Input type={'text'} idprop={'fullName'} label={'Full Name'} />
				<Input type={'email'} idprop={'mail'} label={'E-Mail Address'} />
				<Input type={'tel'} idprop={'num'} label={'Phone Number'} />
			</form>
		</div>
	 );
}
 
export default General;