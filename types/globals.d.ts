import Hls from "hls.js";
import dashjs from "dashjs";

declare global {
  interface Window {
    Hls: typeof Hls;
    dashjs: typeof dashjs;
  }
}

export {};

