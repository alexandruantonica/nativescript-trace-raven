export declare class TraceRaven {
  constructor(dsn: string, environment?: string, enableAppBreadcrumbs?: boolean);
  write(message: string, category: string, type?: number): void;
}
