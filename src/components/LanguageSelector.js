import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'uk', value: 'uk', flag: 'uk', text: 'English' },
  { key: 'ua', value: 'ua', flag: 'ua', text: 'Ukrainian' },
  { key: 'ru', value: 'ru', flag: 'ru', text: 'Russian' },
  { key: 'fr', value: 'fr', flag: 'fr', text: 'French' },
  { key: 'de', value: 'de', flag: 'de', text: 'German' },
]

const LanguageSelector = () => (
  <Dropdown
    placeholder='Select Language'
    fluid
    search
    selection
    options={countryOptions}
  />
)

export default LanguageSelector;
