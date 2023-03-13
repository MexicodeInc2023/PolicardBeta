import { customerEmail, customerUserName, customerPassword, customerPersonalname, customerLastnames, customerMatricula, customerDate, customerGroup, customerAlergy, customerAlergyextra, customerContactemergency, customerPhoneEmergency, customerPhoneEmergency2, customerBloodType, customerCarreer } from "./components/sharedState";

/* const BaseUrl = "https://policard-api.onrender.com/api/"
 */

const BaseUrl = "http://localhost:3000/api/"
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
let alergy = "";
let allergy2 = "";

let personalName = "";
let lastname = "";
let license = "";
let birthday = "";
let grade = "";
let id_careers = "";



export const sendRegisterData = async () => {
    customerEmail.subscribe((value) => { email = value; });
    customerUserName.subscribe((value) => { username = value; });
    customerPassword.subscribe((value) => { password = value; });

    customerContactemergency.subscribe((value) => { emergency_name = value; });
    customerPhoneEmergency.subscribe((value) => { emergency_phone = value; });
    customerPhoneEmergency2.subscribe((value) => { emergency_phone2 = value; });
    customerBloodType.subscribe((value) => { blood_type = value; });
    customerAlergy.subscribe((value) => { alergy = value; });
    customerAlergyextra.subscribe((value) => { allergy2 = value; });

    customerPersonalname.subscribe((value) => { personalName = value; });
    customerLastnames.subscribe((value) => { lastname = value; });
    customerMatricula.subscribe((value) => { license = value; });
    customerDate.subscribe((value) => { birthday = value; });
    customerGroup.subscribe((value) => { grade = value; });
    customerCarreer.subscribe((value) => { id_careers = value; });

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
        alergy: alergy,
        allergy2: allergy2,
    });
    console.log(emergencyRequestBody);

    const studentRequestBody = JSON.stringify({
        personalName: personalName,
        lastname: lastname,
        license: license,
        birthday: birthday,
        grade: grade,
        city: 'Tapachula',
        id_careers: id_careers,
    });
    console.log(studentRequestBody);

    try {
        // Enviamos los datos de registro
        const response = await fetch(`${BaseUrl}register/`, {
            method: 'POST',
            headers: headersList,
            body: registerRequestBody
        });
        const data = await response.json();
        const DataUser = data.data;

        // Enviamos los datos de emergencia
        const response2 = await fetch(`${BaseUrl}emergency/`, {
            method: 'POST',
            headers: headersList,
            body: emergencyRequestBody
        });
        const data2 = await response2.json();
        const DataEmergency = data2.data;

        // Añadimos a studentRequestBody el id de emergencia y el id de usuario
        const requestBodyWithIds = JSON.stringify({
            ...JSON.parse(studentRequestBody),
            user: DataUser.id,
            id_emInfo: DataEmergency.id_emInfo,
        });
        const response3 = await fetch(`${BaseUrl}student/`, {
            method: 'POST',
            headers: headersList,
            body: requestBodyWithIds,
        });
        const data3 = await response3.json();
        const DataStudent = data3.data;
        console.log(DataStudent);

    } catch (error) {
        console.log(error);
    }

}
