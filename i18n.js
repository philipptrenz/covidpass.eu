import yaml from 'js-yaml'
import fs from 'fs'

function load(filepath) {
  return yaml.load(fs.readFileSync(filepath, 'utf8'))
}

const en = load('./locales/en.yml')
const de = load('./locales/de.yml')
const fr = load('./locales/fr.yml')
const es = load('./locales/es.yml')
const it = load('./locales/it.yml')
const ru = load('./locales/ru.yml')
const tr = load('./locales/tr.yml')
const ar = load('./locales/ar.yml')
const sv = load('./locales/sv.yml')

export default {
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    de,
    fr,
    es,
    it,
    ru,
    tr,
    ar,
    sv
  }
}
