/**
 * @module      ecb-exchange.currencies
 * @author      Created by Jean-François TANGUY <jf.tanguy@yachtmee.com> on 26/05/19.
 * @link        https://yachtmee.com
 * @copyright   ©Yachtmee
 *
 * @description
 *      retourne les données
 *      https://fr.wikipedia.org/wiki/ISO_4217
 *
 * @version     1.0.0
 */

"use strict";

const mapc = new Map();

mapc.set("HRK", {
    description: "Croatian kuna",
    code: "ARS",
    symbol: "kn",
});
mapc.set("ARS", {
    description: "Argentine Peso",
    code: "ARS",
    symbol: "$",
    dec: "36",
    hex: "24",
});
mapc.set("AUD", {
    description: "Australian Dollar",
    code: "AUD",
    symbol: "$",
    dec: "36",
    hex: "24",
});
mapc.set("BBD", {
    description: "Barbadian Dollar",
    code: "BBD",
    symbol: "$",
    dec: "36",
    hex: "24",
});
mapc.set("BRL", {
    description: "Brazilian Real",
    code: "BRL",
    symbol: "R$",
    dec: "82, 36",
    hex: "52, 24",
});
mapc.set("BGN", {
    description: "Bulgarian Lev",
    code: "BGN",
    symbol: "лв",
});
mapc.set("GBP", {
    description: "British Pound",
    code: "GBP",
    symbol: "£",
    dec: "163",
    hex: "a3",
});
mapc.set("CAD", {
    description: "Canadian Dollar",
    code: "CAD",
    symbol: "$",
    dec: "36",
    hex: "24",
});
mapc.set("CLP", {
    description: "Chilean Peso",
    code: "CLP",
    symbol: "$",
    dec: "36",
    hex: "24",
});
mapc.set("CNY", {
    description: "Chinese Yuan",
    code: "CNY",
    symbol: "元",
    dec: "20803",
    hex: "5143",
});
mapc.set("CZK", {
    description: "Czech Koruna",
    code: "CZK",
    symbol: "Kč",
    dec: "75, 269",
    hex: "4b, 10d",
});
mapc.set("DKK", {
    description: "Danish Krone",
    code: "DKK",
    symbol: "kr",
    dec: "107, 114",
    hex: "6b, 72",
});
mapc.set("XCD", {
    description: "East Caribbean Dollar",
    code: "XCD",
    symbol: "$",
    dec: "36",
    hex: "24",
});
mapc.set("EGP", {
    description: "Egyptian Pound",
    code: "EGP",
    symbol: "£",
    dec: "163",
    hex: "a3",
});
mapc.set("EEK", {
    description: "Estonian Kroon",
    code: "EEK",
    symbol: "kr",
    dec: "107, 114",
    hex: "6b, 72",
});
mapc.set("EUR", {
    description: "Euro",
    code: "EUR",
    symbol: "€",
    dec: "8364",
    hex: "20ac",
});
mapc.set("HKD", {
    description: "Hong Kong Dollar",
    code: "HKD",
    symbol: "元",
    dec: "20803",
    hex: "5143",
});
mapc.set("HUF", {
    description: "Hungarian Forint",
    code: "HUF",
    symbol: "Ft",
    dec: "70, 116",
    hex: "46, 74",
});
mapc.set("ISK", {
    description: "Icelandic Krona",
    code: "ISK",
    symbol: "kr",
    dec: "107, 114",
    hex: "6b, 72",
});
mapc.set("INR", {
    description: "Indian Rupee",
    code: "INR",
    symbol: "₹",
    dec: "8377",
    hex: "x20b9",
});
mapc.set("IDR", {
    description: "Indonesian Rupiah",
    code: "IDR",
    symbol: "Rp",
    dec: "82, 112",
    hex: "52, 70",
});
mapc.set("ILS", {
    description: "Israeli Sheqel",
    code: "ILS",
    symbol: "₪",
    dec: "8362",
    hex: "20aa",
});
mapc.set("JMD", {
    description: "Jamaican Dollar",
    code: "JMD",
    symbol: "J$",
    dec: "74, 36",
    hex: "4a, 24",
});
mapc.set("JPY", {
    description: "Japanese Yen",
    code: "JPY",
    symbol: "¥",
    dec: "165",
    hex: "a5",
});
mapc.set("LVL", {
    description: "Latvian Lats",
    code: "LVL",
    symbol: "Ls",
    dec: "76, 115",
    hex: "4c, 73",
});
mapc.set("LBP", {
    description: "Lebanese Pound",
    code: "LBP",
    symbol: "£",
    dec: "163",
    hex: "a3",
});
mapc.set("LTL", {
    description: "Lithuanian Litas",
    code: "LTL",
    symbol: "Lt",
    dec: "76, 116",
    hex: "4c, 74",
});
mapc.set("MYR", {
    description: "Malaysian Ringgit",
    code: "MYR",
    symbol: "RM",
    dec: "82, 77",
    hex: "52, 4d",
});
mapc.set("MXN", {
    description: "Mexican Peso",
    code: "MXN",
    symbol: "$",
    dec: "36",
    hex: "24",
});
mapc.set("NAD", {
    description: "Namibian Dollar",
    code: "NAD",
    symbol: "$",
    dec: "36",
    hex: "24",
});
mapc.set("NPR", {
    description: "Nepalese Rupee",
    code: "NPR",
    symbol: "₨",
    dec: "8360",
    hex: "20a8",
});
mapc.set("NZD", {
    description: "New Zealand Dollar",
    code: "NZD",
    symbol: "$",
    dec: "36",
    hex: "24",
});
mapc.set("NOK", {
    description: "Norwegian Krone",
    code: "NOK",
    symbol: "kr",
    dec: "107, 114",
    hex: "6b, 72",
});
mapc.set("OMR", {
    description: "Omani Rial",
    code: "OMR",
    symbol: "﷼",
    dec: "65020",
    hex: "fdfc",
});
mapc.set("PKR", {
    description: "Pakistani Rupee",
    code: "PKR",
    symbol: "₨",
    dec: "8360",
    hex: "20a8",
});
mapc.set("PAB", {
    description: "Panamanian Balboa",
    code: "PAB",
    symbol: "B/.",
    dec: "66, 47, 46",
    hex: "42, 2f, 2e",
});
mapc.set("PHP", {
    description: "Philippine Peso",
    code: "PHP",
    symbol: "Ph",
    dec: "80, 104, 11",
    hex: "50, 68, 70",
});
mapc.set("PLN", {
    description: "Polish złoty",
    code: "PLN",
    symbol: "zł",
    dec: "122, 322",
    hex: "7a, 142",
});
mapc.set("QAR", {
    description: "Qatari Riyal",
    code: "QAR",
    symbol: "﷼",
    dec: "65020",
    hex: "fdfc",
});
mapc.set("RON", {
    description: "Romanian Leu",
    code: "RON",
    symbol: "le",
    dec: "108, 101, 1",
    hex: "6c, 65, 69",
});
mapc.set("RUB", {
    description: "Russian Rouble",
    code: "RUB",
    symbol: "\u20BD",
    dec: "1088, 1091,",
    hex: "440, 443, 4",
});
mapc.set("SAR", {
    description: "Saudi Riyal",
    code: "SAR",
    symbol: "﷼",
    dec: "65020",
    hex: "fdfc",
});
mapc.set("SGD", {
    description: "Singapore Dollar",
    code: "SGD",
    symbol: "$",
    dec: "36",
    hex: "24",
});
mapc.set("ZAR", {
    description: "South African Rand",
    code: "ZAR",
    symbol: "R",
    dec: "82",
    hex: "52",
});
mapc.set("KRW", {
    description: "South Korean Won",
    code: "KRW",
    symbol: "₩",
    dec: "8361",
    hex: "20a9",
});
mapc.set("LKR", {
    description: "Sri Lankan Rupee",
    code: "LKR",
    symbol: "₨",
    dec: "8360",
    hex: "20a8",
});
mapc.set("SEK", {
    description: "Swedish Krona",
    code: "SEK",
    symbol: "kr",
    dec: "107, 114",
    hex: "6b, 72",
});
mapc.set("CHF", {
    description: "Swiss Franc",
    code: "CHF",
    symbol: "CHF",
    dec: "67, 72, 70",
    hex: "43, 48, 46",
});
mapc.set("THB", {
    description: "Thai Baht",
    code: "THB",
    symbol: "฿",
    dec: "3647",
    hex: "e3f",
});
mapc.set("TRY", {
    description: "Turkish Lira",
    code: "TRY",
    symbol: "YTL",
    dec: "89, 84, 76",
    hex: "59, 54, 4c",
});
mapc.set("USD", {
    description: "US Dollar",
    code: "USD",
    symbol: "$",
    dec: "36",
    hex: "24",
});
mapc.set("VEF", {
    description: "Venezuelan bolivar",
    code: "VEF",
    symbol: "Bs",
    dec: "66, 115",
    hex: "42, 73",
});

export {mapc};
