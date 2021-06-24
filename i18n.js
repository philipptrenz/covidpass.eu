import yaml from 'js-yaml'
import fs from 'fs'

function load(filepath) {
  return yaml.load(fs.readFileSync(filepath, 'utf8'))
}

const en = load('./locales/en.yml')
const de = load('./locales/de.yml')

export default {
  locale: 'en',
  fallbackLocale: 'en',
  messages: { 
    en, 
    de 
  }
}