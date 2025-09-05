export type IOrgKeyVal  = [string, string]; // Org.id, Org.auth.publicKey
export interface IOrg {
    id: string, // uuid
    auth: {
        publicKey: string
    },
}