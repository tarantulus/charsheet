$(function () {
    function characterSheet() {
        this.hub = $.connection.characterHub;
        this.sheet = ko.observable();
        var sheet = this.sheet;

        this.init = function() {
            this.hub.server.loadCharacter();
        };

        this.hub.client.update = function(char) {
            ivm.charName(char.charName);
            ivm.playerName(char.playerName);
            ivm.race(char.race);
            ivm.classList(char.classList);
            ivm.religion(char.religion);
            ivm.alignment(char.alignment);
            ivm.experience(char.experience);
            $.getJSON('/Scripts/classList.js', function(data) {
                ivm.classList(data);
            });
            ivm.bab(char.bab);
            ivm.totalHp(char.totalHp);
            ivm.damageTaken(char.damageTaken);

            svm.reflexSaveBase(char.reflexSaveBase);
            svm.reflexSaveTmod(char.reflexSaveTmod);
            svm.reflexSaveMmod(char.reflexSaveMmod);
            svm.fortitudeSaveBase(char.fortitudeSaveBase);
            svm.fortitudeSaveTmod(char.fortitudeSaveTmod);
            svm.fortitudeSaveMmod(char.fortitudeSaveMmod);
            svm.willSaveBase(char.willSaveBase);
            svm.willSaveTmod(char.willSaveTmod);
            svm.willSaveMmod(char.willSaveMmod);

            stvm.str(char.strength);
            stvm.dex(char.dexterity);
            stvm.con(char.constitution);
            stvm.int(char.intelligence);
            stvm.wis(char.wisdom);
            stvm.cha(char.charisma);
        };
    }

  
    ivm.renderHandler = function(elements, data) {
        if (elements[1].parentNode.children.length === ko.toJS(ivm.classList).length) {
            console.log("loaded");
            $("#sortable").sortable({
                revert: true
            });
            $(elements[1].parentNode).children().draggable({
                connectToSortable: "#sortable",
                helper: "clone",
                revert: "invalid"
            });
            listFilter($(elements[1].parentNode), $(elements[1].parentNode));            

        }
    };
    var charSheet = new characterSheet();
    $.connection.hub.start().done(
        function() {
            charSheet.init();
            ko.applyBindings({
                info: ivm,
                stats: stvm,
                saves: svm
            });
            $('.save').click(function() {
                $.connection.characterHub.server.saveCharacter(ivm, stvm, svm);
            });
        });


});