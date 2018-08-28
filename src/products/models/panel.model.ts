import {Totem} from "./totem.model";

export interface Panel {
  id: string;
  tags: string[];
  name: string;
  description: string;
  owner: string;
  price: number;
  comments: number;
  totemsBalance: number[];
  totems: string[];
}

export const MOCKED_PANEL_LIST = [
  {
    id: '0xE1Dce73d82F1eaDbA4a13eADd602F6068BFd747b',
    tags: ['tag a', 'tag b'],
    name: 'Macri / Cristina',
    description: 'Opinion pública ¿de que lado estas?',
    owner:'0x04b163F6a298b6ab4aAEeDC8B7e01640951EFAf3',
    price: 0.94,
    comments: 16,
    totemsBalance: [8, 8],
    totems: ['0x281055afc982d96fab65b3a49cac8b878184cb16', '0x6f46cf5569aefa1acc1009290c8e043747172d89'],
  },
  {
    id: '0x53d284357ec70ce289d6d64134dfac8e511c8a3d',
    tags: ['tag a', 'tag b'],
    name: 'River / Boca',
    description: 'Opinion pública ¿de que lado estas?',
    owner:'0x742d35cc6634c0532925a3b844bc454e4438f44e',
    price: 0.7,
    comments: 9,
    totemsBalance: [2, 7],
    totems: ['0xfe9e8709d3215310075d67e3ed32a380ccf451c8', '0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e'],
  },
  {
    id: '0x61edcdf5bb737adffe5043706e7c5bb1f1a56eea',
    tags: ['tag a', 'tag b'],
    name: 'Los 3 chiflados',
    description: 'Opinion pública ¿de que lado estas?',
    owner:'0xe853c56864a2ebe4576a807d26fdc4a0ada51919',
    price: 1,
    comments: 20,
    totemsBalance: [12, 7, 1],
    totems: ['0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98', '0xdc76cd25977e0a5ae17155770273ad58648900d3', '0xfca70e67b3f93f679992cd36323eeb5a5370c8e4'],
  },
  {
    id: '0xf27daff52c38b2c373ad2b9392652ddf433303c4',
    tags: ['tag a', 'tag b'],
    name: 'Los 4 fantásticos',
    description: 'Opinion pública ¿de que lado estas?',
    owner:'0x3d2e397f94e415d7773e72e44d5b5338a99e77d9',
    price: 1.1,
    comments: 23,
    totemsBalance: [2, 9, 4, 8],
    totems: ['0xb8487eed31cf5c559bf3f4edd166b949553d0d11', '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae', '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', '0x1b3cb81e51011b549d78bf720b0d924ac763a7c2'],
  },
];
