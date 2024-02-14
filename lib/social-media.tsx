import { SocialMediaProps } from '@ircsignpost/signpost-base/dist/src/header-banner';

import facebookImage from '../public/facebook.svg';
import messengerImage from '../public/messenger.svg';
import whatsappImage from '../public/whatsapp.svg';

export interface SocialMediaLink {
  title: string;
  href: string;
}

export interface SocialMediaLinks {
  facebookLink: SocialMediaLink;
  whatsappLink: SocialMediaLink;
  messengerLink: SocialMediaLink;
}

export function getSocialMediaProps(
  socialMediaLinks: SocialMediaLinks
): SocialMediaProps[] {
  return [
    {
      ...socialMediaLinks.facebookLink,
      image: facebookImage,
    },
    {
      ...socialMediaLinks.whatsappLink,
      image: whatsappImage,
    },
    {
      ...socialMediaLinks.messengerLink,
      image: messengerImage,
    },
  ];
}
