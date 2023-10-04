// 타입 스크립트에게 타입에 대해서 설명하는 파일

interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
