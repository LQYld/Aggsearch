interface stylesType {
  [key: string]: string
}
declare module '*.css' {
  const css: stylesType
  export default css
}
declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
