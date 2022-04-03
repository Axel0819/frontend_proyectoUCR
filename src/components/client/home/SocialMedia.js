import classNames from 'classnames'
import { socialMedia } from '../../../data/socialMedia'
import { ItemSocialMedia } from './ItemSocialMedia'

export const SocialMedia = ({isLeft}) => {

    const classSocialMedia = classNames(
        'social__media',
        {
        'social__media__left': isLeft
    })

    return(
        <div className={ classSocialMedia }>

            {
                socialMedia.map( ({name, link}) => (
                    <ItemSocialMedia key={Math.random().toString(36).slice(2)} name={name} link={link}/>
                ))
            }

        </div>
    )
}