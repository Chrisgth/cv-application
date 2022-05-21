import EducationForm from "./EducationForm";
import { useState, useEffect } from "react";

const Education = () => {

	const [eduList, newEduList] = useState([])

	const formDataHandler = () => {
		const form = document.getElementById('eduForm')
		const formValues = []

		for (let i=0; i<form.length; i++) {
			formValues.push(form[i].value)
			form[i].value = ''
		}

		const newList = [...eduList]

		const formOutput = {
			id: eduList.length,
			schoolName: formValues[0],
			studyField: formValues[1],
			studiedFrom: formValues[2],
			studiedTil: formValues[3],
		}

		newList.push(formOutput)

		console.log(newList)

		newEduList(newList)
	}

	const deleteHandler = (id) => {
		const newList = eduList.filter(edu => edu.id !== id)
		for ( let i=0; i<newList.length; i++) {
			newList[i].id = i
		}
		newEduList(newList)
	}

	const editHandler = (id) => {
		const listItem = eduList[id]
		const form = document.getElementById('eduForm')
		console.log(listItem[0])

		form[0].value = listItem.schoolName
		form[1].value = listItem.studyField
		form[2].value = listItem.studiedFrom
		form[3].value = listItem.studiedTil

	}


	return ( 
		<div className="education">
			<h2>Education</h2>
			{eduList.map((education) => (
				<div id={'edu' + education.id} key={education.id}>
					<p>School/University Name: {education.schoolName}</p>
					<p>Study Field/High School: {education.studyField}</p>
					<p>Studied From: {education.studiedFrom}</p>
					<p>Studied Til: {education.studiedTil}</p>
					<button onClick={() => deleteHandler(education.id)}>X</button>
					<button onClick={() => editHandler(education.id)}>Edit</button>
				</div>
			))}
			<button className="newdeg">+</button>
			<EducationForm />
			<button onClick={() => formDataHandler()}id="getEduData" type="button">Submit</button>
		</div>
	 );
}
 
export default Education;