import { BsFillLockFill } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'
import { FaUserSecret } from 'react-icons/fa'

const cardData = [
  {
    id: '1',
    title: "Where your reputation lives",
    info: 'Secure, own and control your reputation from any service.',
    icon: BsFillLockFill,
  },
  {
    id: '2',
    title: "Trust and interact with confidence",
    info: 'Verify you can trust a stranger, in any interaction, online or face to face.',
    icon: TiTick,
  },
  {
    id: '3',
    title: "Anonymous yet trusted",
    info: 'Prove to others you are trustworthy (e.g. when applying for a job, home rental or loan), without giving them access to your profiles.',
    icon: FaUserSecret,
  },
];

export { cardData };