import {socialMedia} from '../constants';

export const Socials = () => {
  return (
    <ul className="fixed bottom-20 right-20">
        <li>
            {socialMedia.map((social, index) => (
                <a href={social.link}>
                    <img src={social.icon} className="py-1"></img>
                </a>
            ))}
        </li>
    </ul>
  )
}
