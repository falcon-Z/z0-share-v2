import Gun from "gun"; 

export const db = Gun()

export const user = db.user().recall({sessionStorage: true})    