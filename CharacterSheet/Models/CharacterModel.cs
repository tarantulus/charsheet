using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CharacterSheet.Models
{
    public class CharacterModel
    {
        //info
        public string charName;
        public string playerName;
        public string race;
        public string religion;
        public string alignment;
        public int experience;
        public string classList;
        public int bab;
        public int totalHp;
        public int damageTaken;

        //ability stats
        public int strength;
        public int dexterity;
        public int constitution;
        public int intelligence;
        public int wisdom;
        public int charisma;

        //saves
        public int reflexSaveBase;
        public int reflexSaveTmod;
        public int reflexSaveMmod;
        public int fortitudeSaveBase;
        public int fortitudeSaveTmod;
        public int fortitudeSaveMmod;
        public int willSaveBase;
        public int willSaveTmod;
        public int willSaveMmod;
    }
}