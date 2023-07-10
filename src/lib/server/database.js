const db = new Map();

export function setSession(data) {
    const sessionData = db.get('session') || {};
    Object.assign(sessionData, {
        id: data.id,
        user: data.name,
        emailUser: data.email,
        jwt: data.tokens.access,
        status: data.statuscredential,
    });
    db.set('session', sessionData);
    console.log('Se ha guardado la sesión en el local', db.get('session'));
}

export function getSession() {
    return db.get('session') || {};
}

export function clearSession() {
    db.delete('session');
    return true;
}