function GetMod(val) {
    var calc
    if (val < 10) {
        calc = -1;
    }
    else {
        calc = 1;
    }
    return calc * Math.floor(Math.abs((val - 10)) / 2, 1)
}

function InfoViewModel() {
    //Info
    this.charName = ko.observable();
    this.playerName = ko.observable();
    this.race = ko.observable();
    this.religion = ko.observable();
    this.alignment = ko.observable();
    this.experience = ko.observable();
    this.classList = ko.observableArray();
    this.chosenClasses = ko.observableArray();
    this.addClass = function (event, ui) {
        for (var i = 0; i < this.classList().length; i++)
        {
            if (this.classList()[i].Class.text === ui.item[0].innerText) {
                this.chosenClasses.push(this.classList()[i]);
                return;
            }

        }
    }
    this.featList = ko.observableArray();
    this.chosenFeats = ko.observableArray();
    this.addFeat = function (event, ui) {
        for (var i = 0; i < this.featList().length; i++) {
            if (this.featList()[i].Feat.text === ui.item[0].innerText) {
                this.chosenFeats.push(this.featList()[i]);
                return;
            }

        }
    }
    this.bab = ko.observable();
    this.totalHp = ko.observable();
    this.damageTaken = ko.observable();
    this.level = ko.computed(function () {
        for (level in xpTable) {
            if (xpTable[level] > this.experience())
                return level
        };
    }, this);
    this.hp = ko.computed(function () {
        return this.totalHp() - this.damageTaken()
    }, this);
    this.size = ko.observableArray([
        "tiny",
        "small",
        "medium",
        "large",
        "huge",
        "collosal"
    ]);
    this.sizeclass = ko.observable();
}

var ivm = new InfoViewModel();

function StatsViewModel() {
    //Stats
    this.str = ko.observable();
    this.strmod = ko.computed(function () {
        return GetMod(this.str());
    }, this);
    this.dex = ko.observable();
    this.dexmod = ko.computed(function () {
        return GetMod(this.dex());
    }, this);
    this.con = ko.observable();
    this.conmod = ko.computed(function () {
        return GetMod(this.con());
    }, this);
    this.int = ko.observable();
    this.intmod = ko.computed(function () {
        return GetMod(this.int());
    }, this);
    this.wis = ko.observable();
    this.wismod = ko.computed(function () {
        return GetMod(this.wis());
    }, this);
    this.cha = ko.observable();
    this.chamod = ko.computed(function () {
        return GetMod(this.cha());
    }, this);
    this.grapple = ko.computed(function () {
        return this.strmod() + ivm.bab()
    }, this);
}
var stvm = new StatsViewModel()

function SavesViewModel() {
    //Saves
    this.reflexSaveBase = ko.observable();
    this.reflexSaveTmod = ko.observable();
    this.reflexSaveMmod = ko.observable();
    this.fortitudeSaveBase = ko.observable();
    this.fortitudeSaveTmod = ko.observable();
    this.fortitudeSaveMmod = ko.observable();
    this.willSaveBase = ko.observable();
    this.willSaveTmod = ko.observable();
    this.willSaveMmod = ko.observable();

    this.reflexSave = ko.computed(function () {
        return this.reflexSaveTmod() + this.reflexSaveMmod() + this.reflexSaveBase();
    }, this);
    this.fortitudeSave = ko.computed(function () {
        return this.fortitudeSaveTmod() + this.fortitudeSaveMmod() + this.fortitudeSaveBase();
    }, this);
    this.willSave = ko.computed(function () {
        return this.willSaveTmod() + this.willSaveMmod() + this.willSaveBase();
    }, this);
}
var svm = new SavesViewModel();

function SkillsViewModel() {
    this.Appraise = ko.observable();
    this.Balance = ko.observable();
    this.Bluff = ko.observable();
    this.Climb = ko.observable();
    this.Concentration = ko.observable();
    this.Craft = ko.observableArray();
    this.DecipherScript = ko.observable();
    this.Diplomacy = ko.observable();
    this.DisableDevice = ko.observable();
    this.Disguise = ko.observable();
    this.EscapeArtist = ko.observable();
    this.Forgery = ko.observable();
    this.GatherInfo = ko.observable();
    this.HandleAnimal = ko.observable();
    this.Heal = ko.observable();
    this.Hide = ko.observable();
    this.Intimidate = ko.observable();
    this.Jump = ko.observable();
    this.Knowledge = ko.observableArray();
    this.Listen = ko.observable();
    this.MoveSilently = ko.observable();
    this.OpenLock = ko.observable();
    this.Perform = ko.observableArray();
    this.Profession = ko.observableArray();
    this.Ride = ko.observable();
    this.Search = ko.observable();
    this.SenseMotive = ko.observable();
    this.SleightofHand = ko.observable();
    this.Spellcraft = ko.observable();
    this.Spot = ko.observable();
    this.Survival = ko.observable();
    this.Swim = ko.observable();
    this.Tumble = ko.observable();
    this.UseMagicDev = ko.observable();
    this.UseRope = ko.observable();
}

var skvm = new SkillsViewModel();