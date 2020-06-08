import { useTranslation } from 'react-i18next'

const Translator = ({ path }) => {
  const { t } = useTranslation()

  return t(path)
}

export default Translator
