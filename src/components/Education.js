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

		newEduList(newList)
	}

	const deleteHandler = (id) => {
		const newList = eduList.filter(edu => edu.id !== id)
		for ( let i=0; i<newList.length; i++) {
			newList[i].id = i
		}
		newEduList(newList)
	}

	let currentEdit = 0

	const editHandler = (id) => {
		const listItem = eduList[id]
		const form = document.getElementById('eduForm')

		form[0].value = listItem.schoolName
		form[1].value = listItem.studyField
		form[2].value = listItem.studiedFrom
		form[3].value = listItem.studiedTil

		currentEdit = id
		
	}

	const editEduData = (id) => {
		const newList = [...eduList]
		const form = document.getElementById('eduForm')

		newList[id].schoolName = form[0].value
		newList[id].studyField = form[1].value
		newList[id].studiedFrom = form[2].value
		newList[id].studiedTil = form[3].value

		newEduList(newList)
	}

	const addToggler = () => {
		const eduPopup = document.querySelector('.eduPopup')
		const getEduData = document.getElementById('getEduData')
		const editEduData = document.getElementById('editEduData')

		eduPopup.classList.toggle('active')
		getEduData.classList.toggle('active')
		editEduData.classList.toggle('inactive')
	}

	const editToggler = () => {
		const eduPopup = document.querySelector('.eduPopup')
		const getEduData = document.getElementById('getEduData')
		const editEduData = document.getElementById('editEduData')

		eduPopup.classList.toggle('active')
		getEduData.classList.toggle('inactive')
		editEduData.classList.toggle('active')
	}

	const classRemover = () => {
		const eduPopup = document.querySelector('.eduPopup')
		const getEduData = document.getElementById('getEduData')
		const editEduData = document.getElementById('editEduData')

		eduPopup.classList.toggle('active')
		getEduData.classList = ''
		editEduData.classList = ''
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
					<button onClick={() => {editHandler(education.id); editToggler()}}>Edit</button>
				</div>
			))}
			
			<button onClick={() => addToggler()}className="newdeg">+</button>

			<div className="eduPopup">
				<div className="eduFormContainer">
					<EducationForm />
					<button onClick={() => {formDataHandler(); addToggler()}} id="getEduData" type="button" className="">Submit</button>
					<button onClick={() => {editEduData(currentEdit); editToggler()}} id="editEduData" className="">Edit</button>
					<button onClick={() => classRemover()}>X</button>
				</div>
			</div>
		</div>
	 );
}
 
export default Education;