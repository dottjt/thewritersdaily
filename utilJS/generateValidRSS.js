"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { EpisodeData, Segment } from './types/data';
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var modifyRSS = function (text) {
    // replace the logo with something higher res, not sure if it's necessary.
    // regex = ~r/https:\/\/s3.castbox.fm(\/*[a-zA-Z0-9])*.png/
    // # does_match = Regex.match?(regex, "https://s3.castbox.fm/89/8f/d7/ab55544abb81506d8240808921.png") |> IO.inspect
    // new_xml =
    //   Regex.replace(
    //     regex,
    //     response.body,
    //     "https://neverfapdeluxe.com/images/logo_podcast.png",
    //     global: true
    //   )
    //
    var newText = text
        .replace('http://rss.castbox.fm/everest/3f65d126b7e5499a8957e515501bb203.xml', 'https://thewritersdaily.juliusreade.com/thewritersdaily_podcast.xml')
        .replace('<guid', '<guid isPermaLink="false"')
        .replace('<author/>', '<author>Julius Reade<author/>')
        .replace('<author_picture/>', '')
        .replace('copy;', '#169');
    // .replace();
    // https://validator.w3.org/feed/
    return newText;
};
exports.generateValidRSS = function () { return __awaiter(void 0, void 0, void 0, function () {
    var TWD_RSS_URL, response, text, newText, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                TWD_RSS_URL = "http://rss.castbox.fm/everest/3f65d126b7e5499a8957e515501bb203.xml";
                return [4 /*yield*/, node_fetch_1.default(TWD_RSS_URL)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.text()];
            case 2:
                text = _a.sent();
                newText = modifyRSS(text);
                fs_extra_1.default.outputFileSync(path_1.default.join(__dirname, '..', 'themes', 'reade', 'static', 'thewritersdaily_podcast.xml'), newText);
                console.log('create podcast.xml');
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                throw new Error("generateValidRSS - " + error_1);
            case 4: return [2 /*return*/];
        }
    });
}); };
