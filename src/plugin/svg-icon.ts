import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { Plugin } from 'vite'
import { resolve } from 'path'

export function svgIcon(): Plugin {
  return createSvgIconsPlugin({
    iconDirs: [resolve(process.cwd(), 'src/asset/svg')],
    symbolId: 'icon-[dir]-[name]',
    inject: 'body-last',
    customDomId: '__svg__icons__dom__',
  })
}
