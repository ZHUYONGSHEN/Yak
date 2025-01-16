/// <reference types="vite/client" />
declare interface Window {
  baseServerURL: string;
  baseServerConfig: Record<string, string | number | null>;
  parent: Window;
}