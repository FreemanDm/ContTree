var app = angular.module('TestApp', []);

app.controller('MainCtrl', function ($scope) {
    var contacts = [
        {
            id:1,
            name: "Friends",
            type: "Group",
            contacts: [
                {id:2, name: "Udi", type: "Contact"},
                {id:3, name: "Tommy", type: "Contact"},
                {
                    id:6,
                    name: "Old Friends",
                    type: "Group",
                    contacts: [
                        {id:7, name: "Itay", type: "Contact"},
                    ]
                },
            ]
        },
        {
            id:4,
            name: "Family",
            type: "Group",
            contacts: [
                {id:5, name: "Roni", type: "Contact"},
            ]
        },
        {id: 8, name: "Ori", type: "Contact"},
    ];


    $scope.contacts = contacts;

    $scope.groups = {};

    contacts.forEach(function (element) {
        if (element.type === "Group") {
            $scope.groups[element.name] = false
        }

        if (element.contacts){
            element.contacts.forEach(function (elem) {
                if (elem.type === "Group"){
                    $scope.groups[elem.name] = false
                }
            })
        }
    });

    console.log($scope.groups);

    $scope.isUnfold = function (group) {
        return $scope.groups[group]
    };

    $scope.unfold = function (group) {
        console.log("Unfold function: " + group);

        $scope.groups[group] = !$scope.groups[group]

    }
});