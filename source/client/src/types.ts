export interface ICreateStoreArgs {
    serverURI: string,
    key: string,
    token: string,
    config: {
        upgradeToBackgroundSync: boolean,
    }
}