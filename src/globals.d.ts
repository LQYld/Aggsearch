interface stylesType {
  [key: string]: string
}
declare module '*.css' {
  const css: stylesType
  export default css
}
