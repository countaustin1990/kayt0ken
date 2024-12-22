'use client';
"use strict";
exports.__esModule = true;
exports.Navbar = void 0;
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var utils_1 = require("@/lib/utils");
var navigation = [
    { name: 'Dashboard', href: '/' },
    { name: 'Markets', href: '/markets' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'News', href: '/news' },
];
function Navbar() {
    return (React.createElement("nav", { className: "flex items-center space-x-6" },
        React.createElement(link_1["default"], { href: "/", className: "flex items-center space-x-2 font-bold text-xl mx-20" },
            React.createElement(lucide_react_1.Coins, { className: "h-6 w-6" }),
            React.createElement("span", null, "KayT0ken")),
        React.createElement("div", { className: "hidden md:flex items-center space-x-4" }, navigation.map(function (item) { return (React.createElement(link_1["default"], { key: item.name, href: item.href, className: utils_1.cn('text-sm font-medium transition-colors hover:text-primary', 'text-muted-foreground') }, item.name)); }))));
}
exports.Navbar = Navbar;
