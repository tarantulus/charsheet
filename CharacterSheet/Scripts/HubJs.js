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
            ivm.featList([]);
            ivm.religion(char.religion);
            ivm.alignment(char.alignment);
            ivm.experience(char.experience);
            $.getJSON('/Scripts/classList.js', function(data) {
                ivm.classList(data);
            });
            $.getJSON('/Scripts/featsList.js', function (data) {
                ivm.featList(data);
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

            skvm.Appraise(4);
            skvm.Appraise (4);
            skvm.Balance (4);
            skvm.Bluff (4);
            skvm.Climb (4);
            skvm.Concentration (4);
            skvm.Craft ({
                "Craft": {
                    "text": "Pottery",
                    "value": 4,
                    "mod": stvm.intmod
                }
            });
            skvm.DecipherScript (4);
            skvm.Diplomacy (4);
            skvm.DisableDevice (4);
            skvm.Disguise (4);
            skvm.EscapeArtist (4);
            skvm.Forgery (4);
            skvm.GatherInfo (4);
            skvm.HandleAnimal (4);
            skvm.Heal (4);
            skvm.Hide (4);
            skvm.Intimidate (4);
            skvm.Jump (4);
            skvm.Knowledge ([{
                "Knowledge": {
                    "text": "Arcana",
                    "value": 4,
                    "mod": stvm.intmod
                },
                "Knowledge": {
                    "text": "Nature",
                    "value": 4,
                    "mod": stvm.intmod
                }
            }]);
            skvm.Listen (4);
            skvm.MoveSilently (4);
            skvm.OpenLock (4);
            skvm.Perform ([{
                "Perform": {
                    "text": "Dance",
                    "value": 4,
                    "mod": stvm.chamod
                },
                "Perform": {
                    "text": "Sing",
                    "value": 4,
                    "mod": stvm.chamod
                }
            }]);
            skvm.Profession([{
                "Profession": {
                    "text": "Butcher",
                    "value": 4,
                    "mod": stvm.wismod
                },
                "Profession": {
                    "text": "Luthier",
                    "value": 4,
                    "mod": stvm.wismod
                }
            }]);
            skvm.Ride (4);
            skvm.Search (4);
            skvm.SenseMotive (4);
            skvm.SleightofHand (4);
            skvm.Spellcraft (4);
            skvm.Spot (4);
            skvm.Survival (4);
            skvm.Swim (4);
            skvm.Tumble (4);
            skvm.UseMagicDev (4);
            skvm.UseRope (4);
        };
    }

  
    ivm.renderHandler = function(elements, data) {
        if (elements[1].parentNode.children.length === ivm.classList().length) {
            console.log("loaded");                      
            $(elements[1]).multiselect();
        }
    };
    var charSheet = new characterSheet();
    $.connection.hub.start().done(
        function() {
            charSheet.init();
            ko.applyBindings({
                info: ivm,
                stats: stvm,
                saves: svm,
                skills: skvm
            });
            $('.save').click(function() {
                charSheet.hub.server.saveCharacter(ivm, stvm, svm);
            });
        });


});