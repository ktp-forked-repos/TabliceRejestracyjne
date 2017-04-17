webpackJsonp([1,4],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = "<h1>\n  Tablice Rejestracyjne\n</h1>\n<app-lista></app-lista>\n"

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label for=\"fraza\">Szukaj:</label>\n    <input type=\"text\" class=\"form-control\" id=\"fraza\" name=\"fraza\" placeholder=\"Szukaj...\" [(ngModel)]=\"fraza\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"woj\">Województwo:</label>\n      <select class=\"form-control\" name=\"woj\" id=\"woj\" [(ngModel)]=\"woj\">\n        <option value=\"\">Wszystkie</option>\n        <option value=\"D\">Dolnośląskie</option>\n        <option value=\"C\">Kujawsko-Pomorskie</option>\n        <option value=\"L\">Lubelskie</option>\n        <option value=\"F\">Lubuskie</option>\n        <option value=\"E\">Łódzkie</option>\n        <option value=\"K\">Małopolskie</option>\n        <option value=\"W\">Mazowieckie</option>\n        <option value=\"O\">Opolskie</option>\n        <option value=\"R\">Podkarpackie</option>\n        <option value=\"B\">Podlaskie</option>\n        <option value=\"G\">Pomorskie</option>\n        <option value=\"S\">Śląskie</option>\n        <option value=\"T\">Świętkorzyskie</option>\n        <option value=\"N\">Warmińskio-Mazurskie</option>\n        <option value=\"P\">Wielkopolskie</option>\n        <option value=\"Z\">Zachodnio-pomorskie</option>\n        <option value=\"HP\">Policja</option>\n  </select>\n</div>\n</form>\n<div class=\"col-xs-3\" *ngFor=\"let tab of tabs | filter: fraza | wojewodztwo: woj\">\n  <div class=\"info\" [ngClass]=\"tab.skrot.substring(0,1)\">\n    <h3 [ngClass]=\"tab.skrot.substring(0,1)\">{{tab.skrot}}</h3>\n    <p>{{tab.nazwa}}</p>\n  </div>\n</div>\n<!-- <table class=\"table table-striped\">\n  <tr><th>Skrót</th><th>Nazwa</th></tr>\n  <tr *ngFor=\"let tab of tabs | filter: fraza | wojewodztwo: woj\">\n    <td>{{tab.skrot}}</td>\n    <td>{{tab.nazwa}}</td>\n  </tr>\n</table> -->\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabliceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabliceService = (function () {
    function TabliceService() {
        this.tabs = [
            { skrot: "BAU", nazwa: "Augustów" },
            { skrot: "BBI", nazwa: "Bielsk Podlaski" },
            { skrot: "BGR", nazwa: "Grajewo" },
            { skrot: "BHA", nazwa: "Hajnówka" },
            { skrot: "BI", nazwa: "Białystok (miasto)" },
            { skrot: "BIA", nazwa: "Białystok (powiat)" },
            { skrot: "BKL", nazwa: "Kolno" },
            { skrot: "BL", nazwa: "Łomża (miasto)" },
            { skrot: "BLM", nazwa: "Łomża (powiat)" },
            { skrot: "BMN", nazwa: "Mońki" },
            { skrot: "BS", nazwa: "Suwałki" },
            { skrot: "BSE", nazwa: "Sejny" },
            { skrot: "BSI", nazwa: "Siemiatycze" },
            { skrot: "BSK", nazwa: "Sokółka" },
            { skrot: "BSU", nazwa: "Suwałki" },
            { skrot: "BWM", nazwa: "Wysokie Mazowieckie" },
            { skrot: "BZA", nazwa: "Zambrów" },
            { skrot: "CAL", nazwa: "Aleksandrów Kujawski" },
            { skrot: "CB", nazwa: "Bydgoszcz (miasto)" },
            { skrot: "CBR", nazwa: "Brodnica" },
            { skrot: "CBY", nazwa: "Bydgoszcz (powiat)" },
            { skrot: "CCH", nazwa: "Chełmno" },
            { skrot: "CG", nazwa: "Grudziądz" },
            { skrot: "CGD", nazwa: "Golub Dobrzyń" },
            { skrot: "CIN", nazwa: "Inowrocław" },
            { skrot: "CLI", nazwa: "Lipno" },
            { skrot: "CMG", nazwa: "Mogilno" },
            { skrot: "CNA", nazwa: "Nakło nad Notecią" },
            { skrot: "CRA", nazwa: "Radziejów" },
            { skrot: "CRY", nazwa: "Rypin" },
            { skrot: "CS", nazwa: "Świecie" },
            { skrot: "CSE", nazwa: "Sępólno Krajeńskie" },
            { skrot: "CT", nazwa: "Toruń (miasto)" },
            { skrot: "CTR", nazwa: "Toruń (powiat)" },
            { skrot: "CTU", nazwa: "Tuchola" },
            { skrot: "CWA", nazwa: "Wąbrzeźno" },
            { skrot: "CW", nazwa: "Włocławek (miasto)" },
            { skrot: "CWL", nazwa: "Włocławek (powiat)" },
            { skrot: "CZN", nazwa: "Żnin" },
            { skrot: "DB", nazwa: "Wałbrzych (miasto)" },
            { skrot: "DBA", nazwa: "Wałbrzych (powiat)" },
            { skrot: "DBL", nazwa: "Bolesławiec" },
            { skrot: "DDZ", nazwa: "Dzierżoniów" },
            { skrot: "DGL", nazwa: "Głogów" },
            { skrot: "DGR", nazwa: "Góra" },
            { skrot: "DJ", nazwa: "Jelenia Góra (miasto)" },
            { skrot: "DJA", nazwa: "Jawor" },
            { skrot: "DJE", nazwa: "Jelenia Góra (powiat)" },
            { skrot: "DKA", nazwa: "Kamienna Góra" },
            { skrot: "DKL", nazwa: "Kłodzko" },
            { skrot: "DL", nazwa: "Legnica (miasto)" },
            { skrot: "DLB", nazwa: "Lubań" },
            { skrot: "DLE", nazwa: "Legnica (powiat)" },
            { skrot: "DLU", nazwa: "Lubin" },
            { skrot: "DLW", nazwa: "Lwówek Śląski" },
            { skrot: "DMI", nazwa: "Milicz" },
            { skrot: "DOA", nazwa: "Oława" },
            { skrot: "DOL", nazwa: "Oleśnica" },
            { skrot: "DPL", nazwa: "Polkowice" },
            { skrot: "DSR", nazwa: "Środa Śląska" },
            { skrot: "DST", nazwa: "Strzelin" },
            { skrot: "DSW", nazwa: "Świdnica" },
            { skrot: "DTR", nazwa: "Trzebnica" },
            { skrot: "DW", nazwa: "Wrocław (miasto)" },
            { skrot: "DWL", nazwa: "Wołów" },
            { skrot: "DWR", nazwa: "Wrocław (powiat)" },
            { skrot: "DZA", nazwa: "Ząbkowice Ślaskie" },
            { skrot: "DZG", nazwa: "Zgorzelec" },
            { skrot: "DZL", nazwa: "Złotoryja" },
            { skrot: "EBE", nazwa: "Bełchatów" },
            { skrot: "EBR", nazwa: "Brzeziny" },
            { skrot: "EKU", nazwa: "Kutno" },
            { skrot: "EL", nazwa: "Łódź (miasto)" },
            { skrot: "ELA", nazwa: "Łask" },
            { skrot: "ELC", nazwa: "Łowicz" },
            { skrot: "ELE", nazwa: "Łęczyca" },
            { skrot: "ELW", nazwa: "Łódź Wschód" },
            { skrot: "EOP", nazwa: "Opoczno" },
            { skrot: "EP", nazwa: "Piotrków Trybunalski (miasto)" },
            { skrot: "EPA", nazwa: "Pabianice" },
            { skrot: "EPD", nazwa: "Poddębice" },
            { skrot: "EPI", nazwa: "Piotrków Trybunalski (powiat)" },
            { skrot: "EPJ", nazwa: "Pajęczno" },
            { skrot: "ERA", nazwa: "Radomsko" },
            { skrot: "ERW", nazwa: "Rawa Mazowoecka" },
            { skrot: "ES", nazwa: "Skierniewice" },
            { skrot: "ESI", nazwa: "Sieradz" },
            { skrot: "ESK", nazwa: "Skierniewice" },
            { skrot: "ETM", nazwa: "Tomaszów Mazowiecki" },
            { skrot: "EWE", nazwa: "Wieruszów" },
            { skrot: "EWI", nazwa: "Wieluń" },
            { skrot: "EZD", nazwa: "Zduńska Wola" },
            { skrot: "EZG", nazwa: "Zgierz" },
            { skrot: "FG", nazwa: "Gorzów Wielkopolski (miasto)" },
            { skrot: "FGW", nazwa: "Gorzów Wielkopolski (powiat)" },
            { skrot: "FKR", nazwa: "Krosno Odrzańskie" },
            { skrot: "FMI", nazwa: "Międzyrzecz" },
            { skrot: "FNW", nazwa: "Nowa Sól" },
            { skrot: "FSD", nazwa: "Strzelce Krajeńskie" },
            { skrot: "FSL", nazwa: "Słubice" },
            { skrot: "FSU", nazwa: "Sulęcin" },
            { skrot: "FSW", nazwa: "Świebodzin" },
            { skrot: "FWS", nazwa: "Wschowa" },
            { skrot: "FZ", nazwa: "Zielona Góra (miasto)" },
            { skrot: "FZA", nazwa: "Żary" },
            { skrot: "FZG", nazwa: "Żagań" },
            { skrot: "FZI", nazwa: "Zielona Góra (powiat)" },
            { skrot: "GA", nazwa: "Gdynia" },
            { skrot: "GBY", nazwa: "Bytów" },
            { skrot: "GCH", nazwa: "Chojnice" },
            { skrot: "GCZ", nazwa: "Człuchów" },
            { skrot: "GD", nazwa: "Gdańsk (miasto)" },
            { skrot: "GDA", nazwa: "Gdańsk (powiat — Pruszcz Gdański)" },
            { skrot: "GKA", nazwa: "Kartuzy" },
            { skrot: "GKS", nazwa: "Kościerzyna" },
            { skrot: "GKW", nazwa: "Kwidzyn" },
            { skrot: "GLE", nazwa: "Lębork" },
            { skrot: "GMB", nazwa: "Malbork" },
            { skrot: "GND", nazwa: "Nowy Dwór Gdański" },
            { skrot: "GPU", nazwa: "Puck" },
            { skrot: "GS", nazwa: "Słupsk (miasto)" },
            { skrot: "GSL", nazwa: "Słupsk (powiat)" },
            { skrot: "GSP", nazwa: "Sopot" },
            { skrot: "GST", nazwa: "Starogard Gdański" },
            { skrot: "GSZ", nazwa: "Sztum" },
            { skrot: "GTC", nazwa: "Tczew" },
            { skrot: "GWE", nazwa: "Wejherowo" },
            { skrot: "KBC", nazwa: "Bochnia" },
            { skrot: "KBR", nazwa: "Brzesko" },
            { skrot: "KCH", nazwa: "Chrzanów" },
            { skrot: "KDA", nazwa: "Dąbrowa Tarnowska" },
            { skrot: "KGR", nazwa: "Gorlice" },
            { skrot: "KLI", nazwa: "Limanowa" },
            { skrot: "KMI", nazwa: "Miechów" },
            { skrot: "KMY", nazwa: "Myślenice" },
            { skrot: "KN", nazwa: "Nowy Sącz (miasto)" },
            { skrot: "KNS", nazwa: "Nowy Sącz (powiat)" },
            { skrot: "KNT", nazwa: "Nowy Targ" },
            { skrot: "KOL", nazwa: "Olkusz" },
            { skrot: "KOS", nazwa: "Oświęcim" },
            { skrot: "KPR", nazwa: "Proszowice" },
            { skrot: "KR", nazwa: "Kraków (miasto)" },
            { skrot: "KRA", nazwa: "Kraków (powiat)" },
            { skrot: "KSU", nazwa: "Sucha Beskidzka" },
            { skrot: "KT", nazwa: "Tarnów (miasto)" },
            { skrot: "KTA", nazwa: "Tarnów (powiat)" },
            { skrot: "KTT", nazwa: "Zakopane" },
            { skrot: "KWA", nazwa: "Wadowice" },
            { skrot: "KWI", nazwa: "Wieliczka" },
            { skrot: "LB", nazwa: "Biała Podlaska (miasto)" },
            { skrot: "LBI", nazwa: "Biała Podlaska (powiat)" },
            { skrot: "LBL", nazwa: "Biłgoraj" },
            { skrot: "LC", nazwa: "Chełm (miasto)" },
            { skrot: "LCH", nazwa: "Chełm (powiat)" },
            { skrot: "LHR", nazwa: "Hrubieszów" },
            { skrot: "LJA", nazwa: "Janów Lubelski" },
            { skrot: "LKR", nazwa: "Kraśnik" },
            { skrot: "LKS", nazwa: "Krasnystaw" },
            { skrot: "LLB", nazwa: "Lubartów" },
            { skrot: "LLE", nazwa: "Łęczna" },
            { skrot: "LLU", nazwa: "Łuków" },
            { skrot: "LOP", nazwa: "Opole Lubelskie" },
            { skrot: "LPA", nazwa: "Parczew" },
            { skrot: "LPU", nazwa: "Puławy" },
            { skrot: "LRA", nazwa: "Radzyń Podlaski" },
            { skrot: "LRY", nazwa: "Ryki" },
            { skrot: "LSW", nazwa: "Świdnik" },
            { skrot: "LTM", nazwa: "Tomaszów Lubelski" },
            { skrot: "LU", nazwa: "Lublin (miasto)" },
            { skrot: "LUB", nazwa: "Lublin (powiat)" },
            { skrot: "LWL", nazwa: "Włodawa" },
            { skrot: "LZ", nazwa: "Zamość (miasto)" },
            { skrot: "LZA", nazwa: "Zamość (powiat)" },
            { skrot: "NBA", nazwa: "Bartoszyce" },
            { skrot: "NBR", nazwa: "Braniewo" },
            { skrot: "NDZ", nazwa: "Działdowo" },
            { skrot: "NE", nazwa: "Elbląg (miasto)" },
            { skrot: "NEB", nazwa: "Elbląg (powiat)" },
            { skrot: "NEL", nazwa: "Ełk" },
            { skrot: "NGI", nazwa: "Giżycko" },
            { skrot: "NGO", nazwa: "Gołdap" },
            { skrot: "NIL", nazwa: "Iława" },
            { skrot: "NKE", nazwa: "Kętrzyn" },
            { skrot: "NLI", nazwa: "Lidzbark Warmiński" },
            { skrot: "NMR", nazwa: "Mrągowo" },
            { skrot: "NNI", nazwa: "Nidzica" },
            { skrot: "NNM", nazwa: "Nowe Miasto Lubawskie" },
            { skrot: "NO", nazwa: "Olsztyn (miasto)" },
            { skrot: "NOE", nazwa: "Olecko (od 2002r.)" },
            { skrot: "NOG", nazwa: "Olecko (do 2002r.)" },
            { skrot: "NOL", nazwa: "Olsztyn (powiat)" },
            { skrot: "NOS", nazwa: "Ostróda" },
            { skrot: "NPI", nazwa: "Pisz" },
            { skrot: "NSZ", nazwa: "Szczytno" },
            { skrot: "NWE", nazwa: "Węgorzewo" },
            { skrot: "OB", nazwa: "Brzeg" },
            { skrot: "OGL", nazwa: "Głubczyce" },
            { skrot: "OK", nazwa: "Kędzierzyn — Koźle" },
            { skrot: "OKL", nazwa: "Kluczbork" },
            { skrot: "OKR", nazwa: "Krapkowice" },
            { skrot: "ONA", nazwa: "Namysłów" },
            { skrot: "ONY", nazwa: "Nysa" },
            { skrot: "OOL", nazwa: "Olesno" },
            { skrot: "OP", nazwa: "Opole (miasto)" },
            { skrot: "OPO", nazwa: "Opole (powiat)" },
            { skrot: "OPR", nazwa: "Prudnik" },
            { skrot: "OST", nazwa: "Strzelce Opolskie" },
            { skrot: "PCH", nazwa: "Chodzież" },
            { skrot: "PCT", nazwa: "Czarnków" },
            { skrot: "PGN", nazwa: "Gniezno" },
            { skrot: "PGO", nazwa: "Grodzisk Wielkopolski" },
            { skrot: "PGS", nazwa: "Gostyń" },
            { skrot: "PJA", nazwa: "Jarocin" },
            { skrot: "PK", nazwa: "Kalisz (miasto)" },
            { skrot: "PKA", nazwa: "Kalisz (powiat)" },
            { skrot: "PKE", nazwa: "Kępno" },
            { skrot: "PKL", nazwa: "Koło" },
            { skrot: "PKN", nazwa: "Konin (powiat)" },
            { skrot: "PKO", nazwa: "Konin (miasto do 2002r.)" },
            { skrot: "PKR", nazwa: "Krotoszyn" },
            { skrot: "PKS", nazwa: "Kościan" },
            { skrot: "PL", nazwa: "Leszno (miasto)" },
            { skrot: "PLE", nazwa: "Leszno (powiat)" },
            { skrot: "PMI", nazwa: "Międzychód" },
            { skrot: "PN", nazwa: "Konin (miasto od 2002r.)" },
            { skrot: "PNT", nazwa: "Nowy Tomyśl" },
            { skrot: "PO", nazwa: "Poznań (miasto)" },
            { skrot: "POB", nazwa: "Oborniki" },
            { skrot: "POS", nazwa: "Ostrów Wielkopolski" },
            { skrot: "Pot", nazwa: "Ostrzeszów" },
            { skrot: "POZ", nazwa: "Poznań (powiat do 2002r.)" },
            { skrot: "PP", nazwa: "Piła" },
            { skrot: "PPL", nazwa: "Pleszew" },
            { skrot: "PRA", nazwa: "Rawicz" },
            { skrot: "PSE", nazwa: "Śrem" },
            { skrot: "PSL", nazwa: "Słupca" },
            { skrot: "PSR", nazwa: "Środa Wielkopolska" },
            { skrot: "PSZ", nazwa: "Szamotuły" },
            { skrot: "PTU", nazwa: "Turek" },
            { skrot: "PWA", nazwa: "Wągrowiec" },
            { skrot: "PWL", nazwa: "Wolsztyn" },
            { skrot: "PWR", nazwa: "Września" },
            { skrot: "PZ", nazwa: "Poznań (powiat od 2002r.)" },
            { skrot: "PZL", nazwa: "Złotów" },
            { skrot: "RBI", nazwa: "Ustrzyki Dolne" },
            { skrot: "RBR", nazwa: "Brzozów" },
            { skrot: "RDE", nazwa: "Dębica" },
            { skrot: "RJA", nazwa: "Jarosław" },
            { skrot: "RJS", nazwa: "Jasło" },
            { skrot: "RK", nazwa: "Krosno (miasto)" },
            { skrot: "RKL", nazwa: "Kolbuszowa" },
            { skrot: "RKR", nazwa: "Krosno (powiat)" },
            { skrot: "RLA", nazwa: "Łańcut" },
            { skrot: "RLE", nazwa: "Leżajsk" },
            { skrot: "RLS", nazwa: "Lesko" },
            { skrot: "RLU", nazwa: "Lubaczów" },
            { skrot: "RMI", nazwa: "Mielec" },
            { skrot: "RNI", nazwa: "Nisko" },
            { skrot: "RP", nazwa: "Przemyśl (miasto)" },
            { skrot: "RPR", nazwa: "Przemyśl (powiat)" },
            { skrot: "RPZ", nazwa: "Przeworsk" },
            { skrot: "RRS", nazwa: "Ropczyce" },
            { skrot: "RSA", nazwa: "Sanok" },
            { skrot: "RSR", nazwa: "Strzyżów" },
            { skrot: "RST", nazwa: "Stalowa Wola" },
            { skrot: "RT", nazwa: "Tarnobrzeg (miasto)" },
            { skrot: "RTA", nazwa: "Tarnobrzeg (powiat)" },
            { skrot: "RZ", nazwa: "Rzeszów (miasto)" },
            { skrot: "RZE", nazwa: "Rzeszów (powiat)" },
            { skrot: "SB", nazwa: "Bielsko-Biała (miasto)" },
            { skrot: "SBE", nazwa: "Będzin" },
            { skrot: "SBI", nazwa: "Bielsko-Biała (powiat)" },
            { skrot: "SBL", nazwa: "Tychu (powiat — Bieruń od 2002r.)" },
            { skrot: "SC", nazwa: "Częstochowa (miasto)" },
            { skrot: "SCI", nazwa: "Cieszyn" },
            { skrot: "SCZ", nazwa: "Częstochowa (powiat)" },
            { skrot: "SD", nazwa: "Dąbrowa Górnicza" },
            { skrot: "SG", nazwa: "Gliwice (miasto)" },
            { skrot: "SGL", nazwa: "Gliwice (powiat)" },
            { skrot: "SH", nazwa: "Chorzów" },
            { skrot: "SI", nazwa: "Siemianowice Śląskie" },
            { skrot: "SJ", nazwa: "Jaworzno" },
            { skrot: "SJZ", nazwa: "Jastrzębie Zdrój" },
            { skrot: "SK", nazwa: "Katowice" },
            { skrot: "SKL", nazwa: "Kłobuck" },
            { skrot: "SL", nazwa: "Ruda Śląska (od 2002r.)" },
            { skrot: "SLU", nazwa: "Lubliniec" },
            { skrot: "SM", nazwa: "Mysłowice" },
            { skrot: "SMI", nazwa: "Mikołów" },
            { skrot: "SMY", nazwa: "Myszków" },
            { skrot: "SO", nazwa: "Sosnowiec" },
            { skrot: "SPI", nazwa: "Piekary Śląskie" },
            { skrot: "SPS", nazwa: "Pszczyna" },
            { skrot: "SR", nazwa: "Rybnik (miasto)" },
            { skrot: "SRB", nazwa: "Rybnik (powiat)" },
            { skrot: "SRC", nazwa: "Racibórz" },
            { skrot: "SRS", nazwa: "Ruda Śląska (do 2002r.)" },
            { skrot: "ST", nazwa: "Tychy" },
            { skrot: "STA", nazwa: "Tarnowskie Góry" },
            { skrot: "STY", nazwa: "Tychy (powiat do 2002r.)" },
            { skrot: "SW", nazwa: "Świętochłowice" },
            { skrot: "SWD", nazwa: "Wodzisław Śląski" },
            { skrot: "SY", nazwa: "Bytom" },
            { skrot: "SZ", nazwa: "Zabrze" },
            { skrot: "SZA", nazwa: "Zawiercie" },
            { skrot: "SZO", nazwa: "Żory" },
            { skrot: "SZY", nazwa: "Żywiec" },
            { skrot: "TBU", nazwa: "Busko Zdrój" },
            { skrot: "TJE", nazwa: "Jędrzejów" },
            { skrot: "TK", nazwa: "Kielce (miasto)" },
            { skrot: "TKA", nazwa: "Kazimierza Wielka" },
            { skrot: "TKI", nazwa: "Kielce (powiat)" },
            { skrot: "TKN", nazwa: "Końskie" },
            { skrot: "TLW", nazwa: "Włoszczowa" },
            { skrot: "TOP", nazwa: "Opatów" },
            { skrot: "TOS", nazwa: "Ostrowiec Świętokrzyski" },
            { skrot: "TPI", nazwa: "Pińczów" },
            { skrot: "TSA", nazwa: "Sandomierz" },
            { skrot: "TSK", nazwa: "Skarżysko-Kamienna" },
            { skrot: "TST", nazwa: "Starachowice" },
            { skrot: "TSZ", nazwa: "Staszów" },
            { skrot: "WA", nazwa: "Warszawa" },
            { skrot: "WB", nazwa: "Warszawa" },
            { skrot: "WBR", nazwa: "Białobrzegi" },
            { skrot: "WCI", nazwa: "Ciechanów" },
            { skrot: "WD", nazwa: "Warszawa" },
            { skrot: "WE", nazwa: "Warszawa" },
            { skrot: "WF", nazwa: "Warszawa" },
            { skrot: "WG", nazwa: "Garwolin" },
            { skrot: "WGM", nazwa: "Grodzisk Mazowiecki" },
            { skrot: "WGR", nazwa: "Grójec" },
            { skrot: "WGS", nazwa: "Gostynin" },
            { skrot: "WH", nazwa: "Warszawa" },
            { skrot: "WI", nazwa: "Warszawa" },
            { skrot: "WJ", nazwa: "Warszawa" },
            { skrot: "WK", nazwa: "Warszawa" },
            { skrot: "WKZ", nazwa: "Kozienice" },
            { skrot: "WL", nazwa: "Legionowo" },
            { skrot: "WLI", nazwa: "Lipsko" },
            { skrot: "WLS", nazwa: "Łosice" },
            { skrot: "WM", nazwa: "Mińsk Mazowiecki" },
            { skrot: "WMA", nazwa: "Maków Mazowiecki" },
            { skrot: "WML", nazwa: "Mława" },
            { skrot: "WN", nazwa: "Warszawa" },
            { skrot: "WND", nazwa: "Nowy Dwór Mazowiecki" },
            { skrot: "WO", nazwa: "Ostrołęka (miasto)" },
            { skrot: "WOR", nazwa: "Ostrów Mazowiecki" },
            { skrot: "WOS", nazwa: "Ostrołęka (powiat)" },
            { skrot: "WOT", nazwa: "Otwock" },
            { skrot: "WP", nazwa: "Płock (miasto)" },
            { skrot: "WPI", nazwa: "Piaseczno" },
            { skrot: "WPL", nazwa: "Płock (powiat)" },
            { skrot: "WPN", nazwa: "Płońsk" },
            { skrot: "WPR", nazwa: "Pruszków" },
            { skrot: "WPU", nazwa: "Pułtusk" },
            { skrot: "WPY", nazwa: "Przysucha" },
            { skrot: "WPZ", nazwa: "Przasnysz" },
            { skrot: "WR", nazwa: "Radom (miasto)" },
            { skrot: "WRA", nazwa: "Radom (powiat)" },
            { skrot: "WS", nazwa: "Siedlce (miasto)" },
            { skrot: "WSC", nazwa: "Sochaczew" },
            { skrot: "WSE", nazwa: "Sierpc" },
            { skrot: "WSK", nazwa: "Sokołów Podlaski" },
            { skrot: "WSI", nazwa: "Siedlce (powiat)" },
            { skrot: "WSZ", nazwa: "Szydłowiec" },
            { skrot: "WT", nazwa: "Warszawa" },
            { skrot: "WU", nazwa: "Warszawa" },
            { skrot: "WV", nazwa: "Wołomin (od 2003r. — jeszcze nie wykorzystywane)" },
            { skrot: "WW", nazwa: "Warszawa" },
            { skrot: "WWE", nazwa: "Węgrów" },
            { skrot: "WWL", nazwa: "Wołomin" },
            { skrot: "WWY", nazwa: "Wyszków" },
            { skrot: "WX", nazwa: "Warszawa" },
            { skrot: "WY", nazwa: "Warszawa" },
            { skrot: "WZ", nazwa: "Warszawa Zachód" },
            { skrot: "WA", nazwa: "Białołęka" },
            { skrot: "WB", nazwa: "Bemowo" },
            { skrot: "WD", nazwa: "Bielany" },
            { skrot: "WE", nazwa: "Mokotów" },
            { skrot: "WF", nazwa: "Praga Południe" },
            { skrot: "WH", nazwa: "Praga Północ" },
            { skrot: "WI", nazwa: "Śródmieście" },
            { skrot: "WJ", nazwa: "Targówek" },
            { skrot: "WK", nazwa: "Ursus" },
            { skrot: "WN", nazwa: "Ursynów" },
            { skrot: "WT", nazwa: "Wawer" },
            { skrot: "WU", nazwa: "Ochota" },
            { skrot: "WZU", nazwa: "Żuromin" },
            { skrot: "WZW", nazwa: "Zwoleń" },
            { skrot: "WZY", nazwa: "Żyrardów" },
            { skrot: "ZBI", nazwa: "Białogard" },
            { skrot: "ZCH", nazwa: "Choszczno" },
            { skrot: "ZDR", nazwa: "Drawsko Pomorskie" },
            { skrot: "ZGL", nazwa: "Goleniów" },
            { skrot: "ZGR", nazwa: "Gryfino" },
            { skrot: "ZGY", nazwa: "Gryfice" },
            { skrot: "ZK", nazwa: "Koszalin (miasto)" },
            { skrot: "ZKA", nazwa: "Kamień Pomorski" },
            { skrot: "ZKL", nazwa: "Kołobrzeg" },
            { skrot: "ZKO", nazwa: "Koszalin (powiat)" },
            { skrot: "ZLO", nazwa: "Łobez" },
            { skrot: "ZMY", nazwa: "Myślibórz" },
            { skrot: "ZPL", nazwa: "Police" },
            { skrot: "ZPY", nazwa: "Pyrzyce" },
            { skrot: "ZS", nazwa: "Szczecin" },
            { skrot: "ZSD", nazwa: "Świdwin" },
            { skrot: "ZSL", nazwa: "Sławno" },
            { skrot: "ZST", nazwa: "Stargard Szczeciński" },
            { skrot: "ZSW", nazwa: "Świnoujście" },
            { skrot: "ZSZ", nazwa: "Szczecinek" },
            { skrot: "ZWA", nazwa: "Wałcz" },
            { skrot: "HPA", nazwa: "Komenda Główna" },
            { skrot: "HPB", nazwa: "Dolnośląska Komenda Wojewódzka" },
            { skrot: "HPC", nazwa: "Kujawsko-Pomorska Komenda Wojewódzka" },
            { skrot: "HPD", nazwa: "Lubelska Komenda Wojewódzka" },
            { skrot: "HPE", nazwa: "Lubuska Komenda Wojewódzka" },
            { skrot: "HPF", nazwa: "Łódzka Komenda Wojewódzka" },
            { skrot: "HPG", nazwa: "Małopolska Komenda Wojewódzka" },
            { skrot: "HPH", nazwa: "Mazowiecka Komenda Wojewódzka" },
            { skrot: "HPJ", nazwa: "Opolska Komenda Wojewódzka" },
            { skrot: "HPK", nazwa: "Podkarpacka Komenda Wojewódzka" },
            { skrot: "HPL A001-C999", nazwa: "Wyższa Szkoła Policji w Szczytnie" },
            { skrot: "HPL 01AA-99CZ", nazwa: "Wyższa Szkoła Policji w Szczytnie" },
            { skrot: "HPL D001-E999", nazwa: "Szkoła Policji w Pile" },
            { skrot: "HPL 01DA-99EZ", nazwa: "Szkoła Policji w Pile" },
            { skrot: "HPL F001-G999", nazwa: "Szkoła Policji w Słupsku" },
            { skrot: "HPL 01FA-99GZ", nazwa: "Szkoła Policji w Słupsku" },
            { skrot: "HPL H001-J999", nazwa: "Centrum Szkolenia Policji w Legionowie" },
            { skrot: "HPL 01HA-99JZ", nazwa: "Centrum Szkolenia Policji w Legionowie" },
            { skrot: "HPL K001-L999", nazwa: "Szkoła Policji w Katowicach" },
            { skrot: "HPL 01KA-99LZ", nazwa: "Szkoła Policji w Katowicach" },
            { skrot: "HPM", nazwa: "Podlaska Komenda Wojewódzka" },
            { skrot: "HPN", nazwa: "Pomorska Komenda Wojewódzka" },
            { skrot: "HPP", nazwa: "Śląska Komenda Wojewódzka" },
            { skrot: "HPS", nazwa: "Świętokrzyska Komenda Wojewódzka" },
            { skrot: "HPT", nazwa: "Warmińsko-Mazurska Komenda Wojewódzka" },
            { skrot: "HPU", nazwa: "Wielkopolska Komenda Wojewódzka" },
            { skrot: "HPW", nazwa: "Zachodniopomorska Komenda Wojewódzka" },
            { skrot: "HPZ", nazwa: "Komenda Stołeczna Policji" },
            { skrot: "HB", nazwa: "wojska MSWiA (do 2003r.)" },
            { skrot: "HB", nazwa: "Biuro Ochrony Rządu (od 2003r.)" },
            { skrot: "HC", nazwa: "Izba Celna" },
            { skrot: "HK", nazwa: "Agencja Bezpieczeństwa Wewnętrznego i Agencja Wywiadu" },
            { skrot: "HM", nazwa: "Służba Wywiadu Wojskowego i Służba Kontrwywiadu Wojskowego" },
            { skrot: "HS", nazwa: "Kontrola Skarbowa" },
            { skrot: "HW", nazwa: "Straż Graniczna" },
        ];
    }
    TabliceService.prototype.getTablice = function () {
        return this.tabs;
    };
    return TabliceService;
}());
TabliceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TabliceService);

//# sourceMappingURL=tablice.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(83);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tablice_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(139),
        providers: [__WEBPACK_IMPORTED_MODULE_1__tablice_service__["a" /* TabliceService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lista_lista_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter_pipe__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wojewodztwo_pipe__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__lista_lista_component__["a" /* ListaComponent */],
            __WEBPACK_IMPORTED_MODULE_6__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_7__wojewodztwo_pipe__["a" /* WojewodztwoPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (tabs, fraza) {
        if (fraza === undefined)
            return tabs;
        return tabs.filter(function (tab) {
            if (tab.skrot.toLowerCase().includes(fraza.toLowerCase()))
                return tab.skrot.toLowerCase().includes(fraza.toLowerCase());
            else
                return tab.nazwa.toLowerCase().includes(fraza.toLowerCase());
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tablice_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaComponent = (function () {
    function ListaComponent(tabliceService) {
        this.tabliceService = tabliceService;
        this.tabs = tabliceService.getTablice();
    }
    ListaComponent.prototype.ngOnInit = function () {
    };
    return ListaComponent;
}());
ListaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-lista',
        template: __webpack_require__(140),
        styles: [__webpack_require__(137)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__tablice_service__["a" /* TabliceService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tablice_service__["a" /* TabliceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tablice_service__["a" /* TabliceService */]) === "function" && _a || Object])
], ListaComponent);

var _a;
//# sourceMappingURL=lista.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WojewodztwoPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WojewodztwoPipe = (function () {
    function WojewodztwoPipe() {
    }
    WojewodztwoPipe.prototype.transform = function (tabs, woj) {
        if (woj === undefined)
            return tabs;
        return tabs.filter(function (tab) {
            if (woj.length == 1)
                return tab.skrot.substring(0, 1).includes(woj);
            return tab.skrot.substring(0, 2).includes(woj);
        });
    };
    return WojewodztwoPipe;
}());
WojewodztwoPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'wojewodztwo'
    })
], WojewodztwoPipe);

//# sourceMappingURL=wojewodztwo.pipe.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ })

},[165]);
//# sourceMappingURL=main.bundle.js.map