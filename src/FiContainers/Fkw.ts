import {FiMeta} from "./FiMeta";
import {FiString} from "../FiCores/FiString";

export class Fkw {

  objValue?: Record<string, any>;

  constructor(objValue: Record<string, any>) {
    this.objValue = objValue;
  }

  getFimVal(fim: FiMeta): any {
    if (!fim.ftTxKey || FiString.isEmpty(fim.ftTxKey)) return null;
    return this.objValue ? this.objValue[fim.ftTxKey] : null;
  }

}