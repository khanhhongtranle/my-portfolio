import {IconButton, Menu, MenuButton, MenuItem, MenuList, Portal, useColorModeValue} from '@chakra-ui/react'
import {useTranslation} from "next-i18next";
import { IoEarth } from 'react-icons/io5'

const LanguageToggleButton = () => {
    const { t } = useTranslation('home');
    const changeLanguage = (language) => {
        window.location.replace("/" + language);
    }
  return (
    <Menu>
      <MenuButton>
                  <MenuButton
                      as={IconButton}
                      icon={<IoEarth />}
                      variant="outline"
                      aria-label="Options"
                  />
      </MenuButton>
      <Portal>
        <MenuList>
          <MenuItem onClick={()=> changeLanguage('en')}>{t('ENGLISH')}</MenuItem>
          <MenuItem onClick={()=> changeLanguage('vn')}>{t('VIETNAMESE')}</MenuItem>
          <MenuItem onClick={()=> changeLanguage('cn')}>{t('CHINESE')}</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  )
}
export default LanguageToggleButton
