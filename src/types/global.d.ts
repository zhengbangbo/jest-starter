declare namespace globalThis {
  var jsdom: any;
}
// 为了解决 .less 文件引入问题
declare module "*.less" {
  const content: any;
  export default content;
}
