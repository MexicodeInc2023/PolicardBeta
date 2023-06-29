import { customerEmail, customerUserName, customerPassword, customerPersonalname, customerLastnames, customerMatricula, customerDate, customerGroup, customerAlergy, customerAlergyextra, customerContactemergency, customerPhoneEmergency, customerPhoneEmergency2, customerBloodType, customerCarreer } from "./components/sharedState";

import { BaseUrl } from "../../stores/apiUrl";
const headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json"
}
let email = "";
let username = "";
let password = "";

let emergency_name = "";
let emergency_phone = "";
let emergency_phone2 = "";
let blood_type = "";
let allergy = "";
let allergy2 = "";

let personalName = "";
let lastname = "";
let license = "";
let birthday = "";
let grade = "";
let id_careers = 0;



export const sendRegisterData = async () => {

    customerEmail.subscribe((value) => { email = value; });
    customerUserName.subscribe((value) => { username = value; });
    customerPassword.subscribe((value) => { password = value; });

    customerContactemergency.subscribe((value) => { emergency_name = value; });
    customerPhoneEmergency.subscribe((value) => { emergency_phone = value; });
    customerPhoneEmergency2.subscribe((value) => { emergency_phone2 = value; });
    customerBloodType.subscribe((value) => { blood_type = value; });
    customerAlergy.subscribe((value) => { allergy = value; });
    customerAlergyextra.subscribe((value) => { allergy2 = value; });

    customerPersonalname.subscribe((value) => { personalName = value; });
    customerLastnames.subscribe((value) => { lastname = value; });
    customerMatricula.subscribe((value) => { license = value; });
    customerDate.subscribe((value) => { birthday = value; });
    customerGroup.subscribe((value) => { grade = value; });
    customerCarreer.subscribe((value) => { id_careers = value; });

    id_careers = parseInt(id_careers);
    console.log(id_careers);

    const registerRequestBody = JSON.stringify({
        email: email,
        name: username,
        password: password,
    });
    console.log(registerRequestBody);

    const emergencyRequestBody = JSON.stringify({
        emergency_name: emergency_name,
        emergency_phone: emergency_phone,
        emergency_phone2: emergency_phone2,
        blood_type: blood_type,
        status: "en uso",
        allergy: allergy,
        allergy2: allergy2,
    });
    console.log(emergencyRequestBody);

    // Convertimos licence en un string
    license = license.toString();
    console.log(license);

    const studentRequestBody = JSON.stringify({
        personalName: personalName,
        lastname: lastname,
        license: license,
        birthday: birthday,
        grade: grade,
        city: 'Tapachula',
        status: "estudiante",
        id_careers: id_careers,
    });
    console.log(studentRequestBody);

    try {
        // Enviamos los datos de registro

        const response = await fetch(`${BaseUrl}api/register/`, {
            method: 'POST',
            headers: headersList,
            body: registerRequestBody
        });
        if (!response.ok) {
            throw new Error("Error en la petición" + response.status);
        }
        const data = await response.json();
        const DataUser = data;

        // Enviamos los datos de emergencia
        const response2 = await fetch(`${BaseUrl}api/emergency_info/`, {
            method: 'POST',
            headers: headersList,
            body: emergencyRequestBody
        });
        if (!response2.ok) {
            throw new Error("Error en la petición" + response2.status);
        }
        const data2 = await response2.json();
        const DataEmergency = data2.data;
        console.log("Emergencia Info", DataEmergency, "User", DataUser);
        // Añadimos a studentRequestBody el id de emergencia y el id de usuario
        const requestBodyWithIds = JSON.stringify({
            ...JSON.parse(studentRequestBody),
            user: DataUser.id,
            id_emInfo: DataEmergency.id,
        });
        console.log(requestBodyWithIds);
        const response3 = await fetch(`${BaseUrl}api/student/`, {
            method: 'POST',
            headers: headersList,
            body: requestBodyWithIds,
        });
        if (!response3.ok) {
            throw new Error("Error en la petición" + response3.status);
        }
        const data3 = await response3.json();
        const DataStudent = data3.data;
        console.log(DataStudent);

    } catch (error) {
        console.log(error);
    }

}
