import React from 'react'
import {findIconDefinition, IconDefinition, IconLookup} from '@fortawesome/fontawesome-svg-core'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

library.add(fas)

const iconDefinition = (iconName: any, pref?: any): IconDefinition => {
   const prefix = pref ? pref : 'fas'
   const Lookup: IconLookup = {prefix: prefix, iconName: iconName}
   return findIconDefinition(Lookup)
}

// создаете новую иконку с именем из каталога https://fontawesome.com/icons (только free)
const trash = () => <FontAwesomeIcon icon={iconDefinition('trash')}/>
const cog = () => <FontAwesomeIcon icon={iconDefinition('cog')}/>
const edit = () => <FontAwesomeIcon icon={iconDefinition('edit')}/>
const user = () => <FontAwesomeIcon icon={iconDefinition('user')}/>
const phone = () => <FontAwesomeIcon icon={iconDefinition('phone-square-alt')}/>
const email = () => <FontAwesomeIcon icon={iconDefinition('envelope')}/>
const book = () => <FontAwesomeIcon icon={iconDefinition('book')}/>
const check = () => <FontAwesomeIcon icon={iconDefinition('check-circle')}/>
const error = () => <FontAwesomeIcon icon={iconDefinition('exclamation-circle')}/>

// добавляете в этот объект
const Icons = {
   trash,
   cog,
   edit,
   user,
   phone,
   email,
   book,
   check,
   error,
}

export default Icons
// в таком виде вставляете в разметку: { Icons.coffee() }
