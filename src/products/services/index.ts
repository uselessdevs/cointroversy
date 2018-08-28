import { Web3Service } from './web3.service';
import { PanelsService } from "./panels.service";

export const services: any[] = [
  Web3Service,
  PanelsService,
];

export * from './web3.service';
export * from './panels.service';
