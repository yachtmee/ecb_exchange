/**
 * @module      ecb_exchange
 * @author      Created by nestor <nestor@yachtmee.com> on 26/05/19.
 * @link        https://yachtmee.com
 * @copyright   ©Yachtmee
 *
 * @description
 *      Fetch Euro foreign exchange reference rates into Javascript Map
 *      https://fr.wikipedia.org/wiki/ISO_4217
 *
 * @version     1.0.1
 */

import { mapc } from "./currencies.ts";

interface IntEcbCurrencie {
  code: string;
  description: string;
  symbol: string;
  rate: string;
  dec?: string;
  hex?: string;
  date?: Date;
}

type EcbCollection = Map<string, IntEcbCurrencie> | null | undefined;

const settings = {
  urlBank: "http://www.ecb.int/stats/eurofxref/eurofxref-daily.xml",
};

/**
 * Retourne la date de la derniere cotation
 * 
 * @param {string} str 
 * @returns {Date | null}
 */
function dateEcbrate(str: string): Date | null {
  const isDate = function (date?: any): boolean {
    return (date instanceof Date && !isNaN(date.valueOf()));
  };

  const regexdate = /<Cube time='(\w+-\w+-\w+)'>/;
  const m: RegExpExecArray | null = regexdate.exec(str);
  let dateEcb = (m?.length === 2) ? new Date(m[1]) : null;
  if (isDate(dateEcb)) {
    return dateEcb;
  }
  return null;
}

/**
  * Parse doc XML from Bce, return Map datas 
  * 
  * https://regex101.com/r/dC1rZy/2 
  * 
  * @param {string} str
  * @returns {Map<string, IntEcbCurrencie> | null | undefined} 
  */
function parseEcb( str: string ): EcbCollection {
  const dateDatas = dateEcbrate(str);

  if (!dateDatas) {
    return null;
  }

  const regex = /currency='(\w{0,3})'\srate='(\d+.\d+)'/g;
  let m;
  const defMap = new Map();
  let tmp: IntEcbCurrencie;
  let value = "";

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    value = "";

    tmp = {
      code: "",
      description: "",
      rate: "",
      symbol: "",
      dec: "",
      hex: "",
      date: dateDatas,
    };

    m.forEach((match, groupIndex) => {
      value = `${match}`;
      if (groupIndex == 1) {
        tmp.code = value;
      }
      if (groupIndex == 2) {
        tmp.rate = value;
      }
    });

    if (tmp.code) {
      if (mapc.has(tmp.code)) {
        let el = Object.assign(tmp, mapc.get(tmp.code));
        defMap.set(tmp.code, el);
      }
    }
    // On rempli le tableau Map
  }
  return defMap;
  // return defMap;
}

export default class Ecb {

  public static async fetchdatas(): Promise<EcbCollection> {

    const mapdata = await fetch(settings.urlBank).then((response) => {
      return response.text();
    }).then((textData) => {
      return parseEcb(textData);
    }).catch(function (error) {
      console.error(error.message);
      return null;
    });

    return mapdata;
  }

}

export { Ecb, EcbCollection };
