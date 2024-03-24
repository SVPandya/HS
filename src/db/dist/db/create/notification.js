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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotification = void 0;
var connect_1 = require("../connect");
var user_1 = require("../update/user");
var meetup_1 = require("../read/meetup");
function createNotification(notification) {
    return __awaiter(this, void 0, void 0, function () {
        var notifications, _a, meetup_2, meetup2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    notifications = connect_1.db.collection('notifications');
                    _a = notification.type;
                    switch (_a) {
                        case 1: return [3 /*break*/, 1];
                        case 2: return [3 /*break*/, 1];
                        case 3: return [3 /*break*/, 1];
                        case 4: return [3 /*break*/, 1];
                        case 5: return [3 /*break*/, 1];
                        case 6: return [3 /*break*/, 1];
                        case 7: return [3 /*break*/, 3];
                        case 8: return [3 /*break*/, 3];
                        case 9: return [3 /*break*/, 3];
                        case 10: return [3 /*break*/, 3];
                        case 11: return [3 /*break*/, 5];
                        case 12: return [3 /*break*/, 5];
                        case 13: return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 7];
                case 1: return [4 /*yield*/, (0, user_1.updateUser)(notification.receiver, { "$push": { "notifications": notification._id } })];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 3: return [4 /*yield*/, (0, meetup_1.getMeetup)(notification.meetup)];
                case 4:
                    meetup_2 = _b.sent();
                    if (!meetup_2)
                        throw new Error("Meetup not found");
                    meetup_2.attendees.forEach(function (attendee) {
                        if (attendee == meetup_2.creator)
                            return;
                        (0, user_1.updateUser)(attendee, { "$push": { "notifications": notification._id } });
                    });
                    return [3 /*break*/, 8];
                case 5: return [4 /*yield*/, (0, meetup_1.getMeetup)(notification.meetup)];
                case 6:
                    meetup2 = _b.sent();
                    if (!meetup2)
                        throw new Error("Meetup not found");
                    meetup2.attendees.forEach(function (attendee) {
                        (0, user_1.updateUser)(attendee, { "$push": { "notifications": notification._id } });
                    });
                    return [3 /*break*/, 8];
                case 7: return [3 /*break*/, 8];
                case 8: return [4 /*yield*/, notifications.insertOne(notification.toJSON())];
                case 9: return [2 /*return*/, _b.sent()];
            }
        });
    });
}
exports.createNotification = createNotification;
