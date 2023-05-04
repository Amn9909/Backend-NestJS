"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const feature1_module_1 = require("./feature1.module");
const feature2_module_1 = require("./feature2.module");
let OrderModule = class OrderModule {
    constructor() {
        console.log("OrdersModule is running ");
    }
};
OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [feature1_module_1.Feature1module, feature2_module_1.Feature2module],
        controllers: [],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=Order.module.js.map