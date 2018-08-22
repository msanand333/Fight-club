var classApp = angular.module("myApp", []);

classApp.controller('controller_1', function ($scope) {
    $scope.topContent = {
        heading: "FIGHT CLUB",
        subheading1: "MISCHIEF MAYHEM",
        img_url: "https://cdn.vox-cdn.com/thumbor/bSCbIbiYnONUL2YpGn5jnprEvwI=/0x0:1019x679/1200x800/filters:focal(0x0:1019x679)/cdn.vox-cdn.com/uploads/chorus_image/image/45727620/fightclub_still_1020.0.0.jpg",
        subheading2: "Best Quotes",
        subheading3: "For more quotes",
        quotes_url: "https://www.rottentomatoes.com/m/fight_club/quotes/"

    };
    $scope.quotes = [{
            quote: "-We are consumers. We're the by-products of a lifestyle obsession."
        },
        {
            quote: "-The things you own end up owning you."
        },
        {
            quote: "-It's only after we've lost everything that we're free to do anything."
        }

    ];
});