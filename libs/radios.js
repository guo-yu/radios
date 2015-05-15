import colors from 'colors/safe'
import Player from 'player'

const radios = {
  'swiss-pop': {
    'name': 'Radio Swiss Pop',
    'stream': 'http://stream.srg-ssr.ch/m/rsp/mp3_128'
  }
}

const templates = {
  'not_found': `
    Please input your favorite radio's name: 

    ${colors.green('$ radios swiss-pop')}
  `,
  'not_support': (name) => {
    return `
      Radio ${colors.red(name)} is not supported now :(
    `
  },
  'playing': (radio) => {
    return `
      Now playing:

      ${colors.green(radio.name)} ${colors.grey(radio.stream)}
    `
  },
  'error': (err) => {
    return `
      Opps! something wrong:

      ${err}
    `
  }
}

export default function cli() {
  let name = process.argv[2]
  let radio = radios[name]

  if (!name)
    return console.log(templates.not_found)
  if (!radio)
    return console.log(templates.not_support(name))

  new Player(radio.stream)
    .enable('stream')
    .on('playing', () => 
      console.log(templates.playing(radio)))
    .on('error', err => 
      console.log(templates.error(err)))
    .play()
}
