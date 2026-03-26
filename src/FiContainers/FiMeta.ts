import { FiNumber } from "../core/FiNumber";
import { FiString } from "../core/FiString";

export class FiMeta {

  ftTxKey?: string; //fimTxKey?: string;
  ftTxValue?: string;
  ftLnKey?: number;

  // Static Methods
  static create(txKey: string): FiMeta {
    let fiMeta = new FiMeta();
    fiMeta.ftTxKey = txKey;
    return fiMeta;
  }

  // Getters

  public getTxKeyNtn(): string {
    return FiString.orEmpty(this.ftTxKey);
  }

  public getTxValueNtn(): string {
    return FiString.orEmpty(this.ftTxValue);
  }

  public getLnKeyOrMinusOne(): number {
    return FiNumber.orMinusOne(this.ftLnKey);
  }

  public getLnKey(): number {
    return this.ftLnKey;
  }

}
