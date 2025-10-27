declare module "hls.js" {
  export class Hls {
    static Events: any;
    static ErrorTypes: any;
    static isSupported(): boolean;

    constructor(config?: any);
    loadSource(url: string): void;
    attachMedia(element: HTMLVideoElement): void;
    on(event: string, callback: (...args: any[]) => void): void;
    startLoad(): void;
    recoverMediaError(): void;
    destroy(): void;
  }
}

export {};

