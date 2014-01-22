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
    this.charName = ko.observable();
    this.playerName = ko.observable();
    this.race = ko.observable();
    this.religion = ko.observable();
    this.alignment = ko.observable();
    this.experience = ko.observable();
    this.classList = ko.observableArray();
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
