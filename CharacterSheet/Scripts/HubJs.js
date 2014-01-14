$(function () {
    function characterSheet() {
        this.hub = $.connection.characterHub;
        this.sheet = ko.observable();
        var sheet = this.sheet;

        this.init = function () {
            this.hub.server.loadCharacter();
        }

        this.hub.client.update = function (char) {
            ivm.charName(char.charName);
            ivm.playerName(char.playerName);
            ivm.race(char.race);
            ivm.religion(char.religion);
            ivm.alignment(char.alignment);
            ivm.experience(char.experience);
            ivm.classList(char.classlist);
            ivm.bab(char.bab);
            ivm.totalHp(char.totalHp);
            ivm.damageTaken(char.damageTaken);

            svm.reflexSaveBase(char.reflexSaveBase );
            svm.reflexSaveTmod(char.reflexSaveTmod );
            svm.reflexSaveMmod(char.reflexSaveMmod );
            svm.fortitudeSaveBase(char.fortitudeSaveBase );
            svm.fortitudeSaveTmod(char.fortitudeSaveTmod );
            svm.fortitudeSaveMmod(char.fortitudeSaveMmod );
            svm.willSaveBase(char.willSaveBase );
            svm.willSaveTmod(char.willSaveTmod );
            svm.willSaveMmod(char.willSaveMmod);

            stvm.str(char.strength);
            stvm.dex(char.dexterity);
            stvm.con(char.constitution);
            stvm.int(char.intelligence);
            stvm.wis(char.wisdom);
            stvm.cha(char.charisma);
        }
    }
    var characterSheet = new characterSheet();
    $.connection.hub.start().done(
        function () {
            characterSheet.init();
            ko.applyBindings({
                info: ivm,
                stats: stvm,
                saves: svm
            });
            $('.save').click(function () {
                $.connection.characterHub.server.saveCharacter(ivm, stvm, svm);
            });
        })
        


    

});