/// <reference path="../../references.d.ts" />
var DirectoryTree = require('../../parts/directory-tree/DirectoryTree');
var AppsPage = (function () {
    function AppsPage() {
        this.title = "Apps";
        this.icon = "bookmark-o";
        this.dir = new DirectoryTree("/", "", [
            new DirectoryTree("public", "Public Web Dir", [
                new DirectoryTree("api", "Stub Response Service", [
                    { name: "resources.json", description: "Stub Server Status Response" }
                ]),
                new DirectoryTree("css", "Application CSS Files", [
                    { name: "style.css", description: "Common CSS File" }
                ]),
                new DirectoryTree("js", "Application JavaScript Files", [
                    { name: "bundle.js", description: "(Application and Library) Generated by WebPack" }
                ]),
                new DirectoryTree("lib", "Dependence library (without Webpack)", [
                ]),
                { name: "index.html", description: "Common SPA base page." }
            ]),
            new DirectoryTree("src", "Application Build Src", [
                new DirectoryTree("node_modules", "Build and dependent library", [
                ]),
                new DirectoryTree("page", "Contents of SPA", [
                    new DirectoryTree("foo", "Some page component", [
                        { name: "FooPage.html", description: "HTML of Page" },
                        { name: "FooPage.less", description: "Style of Page (option)" },
                        { name: "FooPage.ts", description: "Script of Page (ViewModel(implements IPage) , component register , style append)" },
                    ]),
                    new DirectoryTree("bar", "Some page component", [
                        { name: "BarPage.html", description: "HTML of Page" },
                        { name: "BarPage.ts", description: "Script of Page (ViewModel(implements IPage) , component register , style append)" },
                    ]),
                    { name: "IPage.d.ts", description: "Page interface define" },
                ]),
                new DirectoryTree("parts", "Custom element component", [
                    new DirectoryTree("baz", "Some component", [
                        { name: "Baz.html", description: "Component Template" },
                        { name: "Baz.less", description: "Style of Component (option)" },
                        { name: "Baz.ts", description: "Script of Component (ViewModel , component register , style append)" },
                    ]),
                ]),
                new DirectoryTree("typings", "Typescript Definitely Typed(by tsd)", [
                ]),
                { name: "Application.ts", description: "Application Main" },
                { name: "package.json", description: "npm package meta" },
                { name: "references.d.ts", description: "Typescript Definitely Reference" },
                { name: "tsd.json", description: "Typescript Definitely Typed meta" },
                { name: "webpack.config.js", description: "WebPack build config" }
            ])
        ]);
        ko.track(this);
    }
    return AppsPage;
})();
/*
$("head").append(
    $("<style>").html(require('./AppsPage.less'))
);
*/
ko.components.register('apps-page', {
    template: require('./AppsPage.html'),
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params instanceof AppsPage ? params : params.option;
        }
    }
});
module.exports = AppsPage;
