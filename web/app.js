/**
 *
 * @author Lukasz Krawczyk
 */

var app = angular.module('Problem2App', ['ngRoute']);

// Route provider start
app.config(function ($routeProvider) {
    $routeProvider
            .when("/home", {
                templateUrl: "views/home.html",
                controller: "PersonsController"
            })
            .when("/AllPersons", {
                templateUrl: "views/allPersons.html",
                controller: "PersonsController"
            })
            .when("/details/:id", {
                templateUrl: "views/details.html",
                controller: "PersonsController"
            })
            .when("/NewPerson", {
                templateUrl: "views/newPerson.html",
                controller: "PersonsController"
            })
            .otherwise({
                redirectTo: '/home'
            });
});
// Route provider end

var persons = [
    {id: 1, name: "Jens", age: 18}
    , {id: 2, name: "Peter", age: 23}
    , {id: 3, name: "Hanne", age: 23}
];

app.controller('PersonsController', ["$routeParams", function ($routeParams) {
        var self = this;

        self.title = "Persons";
        self.persons = persons;
        console.log(self.persons)

        var startId = 4;

        if (angular.isDefined($routeParams.id)) {
            var y = $routeParams.id;
            for (var i in self.persons) {
                if (self.persons[i].id == y) {
                    self.detailPerson = self.persons[i];
                }
            }
        }

        // Add person
        self.add = function (newPerson) {
            if (self.newPerson.id == null) {
                self.newPerson.id = startId;
                startId++;
                persons.push(self.newPerson);
            } else {
                for (var i in self.persons) {
                    if (self.person[i].id === self.newPerson.id) {
                        self.person[i] = self.newPerson;
                    }
                }
            }
            self.newPerson = {};
        };
    }]);