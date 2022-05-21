import Input from "./Input";

const EducationForm = () => {
	return ( 
		<div className="educationForm">
			<form action="get" id="eduForm">
				<Input type={'text'} idprop={'schoolName'} label={'Name of School/University'} />
				<Input type={'text'} idprop={'eduDeg'} label={'Field of study/High School'} />
				<Input type={'date'} idprop={'studiedFrom'} label={'Studied from'} />
				<Input type={'date'} idprop={'studiedTil'} label={'Studied til'} />
			</form>
		</div>
	 );
}
 
export default EducationForm;