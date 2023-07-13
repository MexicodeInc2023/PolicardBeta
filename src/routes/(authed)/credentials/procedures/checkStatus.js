import {
    statusCredentials,
    procedureTrue,
    statusProcedures
} from '../../../../stores/states';

import { BaseUrl } from '../../../../stores/apiUrl';

let statusPro = null;

export const checkStatus = async (id_req) => {
    try {
        if (!id_req) {
            console.log('No se ha podido obtener el id de la solicitud');
            return;
        }
        console.log('id_req', id_req);
        const responseStatus = await fetch(BaseUrl + 'api/request_reason/' + id_req, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const dataStatus = await responseStatus.json();
        const dataSt = await dataStatus.data;
        console.log('dataSt', dataSt);
        statusPro = dataSt.status;
        toString(statusPro);

        if (statusPro != undefined || statusPro != null || statusPro != 'undefined') {
            statusProcedures.set(statusPro);
            console.log('statusPro', statusPro);
            statusCredentials.set(statusPro);
            procedureTrue.set(true);
        }
        console.log('statusPro', statusPro);
    } catch (error) {
        console.error(error);
    }
};