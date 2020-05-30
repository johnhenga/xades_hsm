export interface CryptoEx extends Crypto {
    name: string;
}
export declare class Application {
    /**
     * Sets crypto engine for the current Application
     * @param  {string} name
     * @param  {Crypto} crypto
     * @returns void
     */
    static setEngine(name: string, crypto: Crypto): void;
    /**
     * Gets the crypto module from the Application
     */
    static get crypto(): CryptoEx;
    static isNodePlugin(): boolean;
}
