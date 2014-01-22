using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using CharacterSheet.Models;

namespace CharacterSheet.Hubs
{
    public class CharacterHub : Hub
    {
        public void LoadCharacter()
        {
            CharacterModel Char = new CharacterModel()
            {
                //info
                charName = "Dar'Rashad",
                playerName = "Ross",
                race = "Half-Elf",
                religion = "Dispater",
                alignment = "Chaotic Evil",
                experience = 6000,
                classList = "",
                bab = 1,
                totalHp = 1,
                damageTaken = 1,

                //ability stats
                strength = 1,
                dexterity = 1,
                constitution = 1,
                intelligence = 1,
                wisdom = 1,
                charisma = 1,

                //saves
                reflexSaveBase = 1,
                reflexSaveTmod = 1,
                reflexSaveMmod = 1,
                fortitudeSaveBase = 1,
                fortitudeSaveTmod = 1,
                fortitudeSaveMmod = 1,
                willSaveBase = 1,
                willSaveTmod = 1,
                willSaveMmod = 1,
            };

            Clients.Caller.update(Char);
        }
        public void SaveCharacter(string info, string stats, string saves)
        {
            var barry = info + stats + saves;
        }
    }
}