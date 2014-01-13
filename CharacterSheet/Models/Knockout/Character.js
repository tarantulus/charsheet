function GetMod(val) {
    var calc
    if(val<10)
    {
        calc = -1;
    }
    else
    {
        calc = 1;
    }
    return calc * Math.floor(Math.abs((val-10)) / 2, 1)
}

function InfoViewModel() {
    //Info
    this.charName = ko.observable("Ross");
    this.playerName = ko.observable("Norbert");
    this.race = ko.observable("Norbert");
    this.religion = ko.observable("Norbert");
    this.alignment = ko.observable("Norbert");
    this.experience = ko.observable(6000);
    this.classList = ko.observable("Wizard 3");
    this.bab = ko.observable(2);
    this.totalHp = ko.observable(23);
    this.damageTaken = ko.observable(0);
    this.level = ko.computed(function () {
        for (level in xpTable) {
            if (xpTable[level] > this.experience())
                return level
        };
    }, this);
    this.hp = ko.computed(function () {
        return this.totalHp() - this.damageTaken()        
    }, this);
}

var ivm = new InfoViewModel();

function StatsViewModel() {
    //Stats
    this.str = ko.observable(18);
    this.strmod = ko.computed(function () {
        return GetMod(this.str());
    }, this);
    this.dex = ko.observable(18);
    this.dexmod = ko.computed(function () {
        return GetMod(this.dex());
    }, this);
    this.con = ko.observable(18);
    this.conmod = ko.computed(function () {
        return GetMod(this.con());
    }, this);
    this.int = ko.observable(18);
    this.intmod = ko.computed(function () {
        return GetMod(this.int());
    }, this);
    this.wis = ko.observable(18);
    this.wismod = ko.computed(function () {
        return GetMod(this.wis());
    }, this);
    this.cha = ko.observable(18);
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
    this.reflexSaveBase = ko.observable(0);
    this.reflexSaveTmod = ko.observable(0);
    this.reflexSaveMmod = ko.observable(0);
    this.fortitudeSaveBase = ko.observable(0);
    this.fortitudeSaveTmod = ko.observable(0);
    this.fortitudeSaveMmod = ko.observable(0);
    this.willSaveBase = ko.observable(0);
    this.willSaveTmod = ko.observable(0);
    this.willSaveMmod = ko.observable(0);

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

// Activates knockout.js
ko.applyBindings({
    info: ivm,
    stats: stvm,
    saves: svm
});