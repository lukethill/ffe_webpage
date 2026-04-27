function initalizeAccordion(className) {
    var acc = document.getElementsByClassName(className);
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            panel.style.display = (panel.style.display === "block") ? "none" : "block";
        });
    }
}
initalizeAccordion("accordion");

const characters = [
    {
        name: "Alear",
        imgSrc: "images/lythos/Alear_Profile.jpg",
        imgAlt: "Both Alears",
        home: "Elyos",
        background: "Alear is an Avatar(character with player-defined traits), as well as the main character of Engage. <br>They are forced to be used on every main story map, and their death causes a game over.</br> <br>In Chapter 11, Alear must be brought to the escape point.</br> 1,000 years before the events of Engage, Alear, a divine dragon, fell into a deep slumber after the defeat of the Fell Dragon. <br>They wake up after 1,000 years to find the seal on the Fell Dragon weakening, with its reawakening imminent.</br>",
        personality: "Alear's memory is hazy due to having amnesia but they retains a spirit of positivity and courteousness.<br>Polite as one can expect of a Divine Dragon, Alear warmly greets and interacts with the members of their army and the people of Elyos. </br> <br>Though they lost their memories of Lumera, Alear quickly bonds with her and adopts many of their mother's mannerisms. </br><br>Their journey tests their convictions, and even when near death, Alear refuses to give up and finds rather unorthodox solutions using the powers of their allies.</br>Despite their status as a Divine Dragon, Alear does not force people to address them with formalities and their title, preferring that they simply refer to them by name if they want to.<br>At times they are uncomfortable being the object of worship, especially when done in their presence. </br><br>Nonetheless, they are touched by the people's faith in them and fiercely protective of Elyos itself and its denizens.</br>",
        personalskillname: "Divinely Inspiring",
        personalskill: "Adjacent Allies deal +3 damage and take 1 less damage.",
        pros: "Alear is a strong character even in the first few chapters, it is very hard to take their hit points down to zero. <br>Their Dragon child class is the “Lord” class that every protagonist in the Fire Emblem games has and in regular fashion with their regular deployment makes them the highest level character.</br> <br>-Alear has a good enough mix of dexterity and speed that allows them to do follow-up attacks each time they initiate combat which gives their average strength a chance to capitalize on the multiple attacks they can do in a turn.</br> <br>-With their battle style of Dragon, they can pretty much wield any Emblem with every little drawback except taking it from another unit that might need it more and giving the engage skills/attacks a consistent addition effect or effects depending on the Emblem.</br> <br>-When they advance to their advanced class Divine Dragon which gives the ability to wield the Marshel Arts covering their low resistance stat and giving them an advantage against bows, tomes, and staves.</br>",
        cons: "Just because they are the main character, does not mean they are the perfect unit and they do have some flaws that can be exploited by the enemies. <br>-Their resistance is low enough that you would have to be worried about them being surrounded by magic users, especially with their low weapon range until Chapter 25 when they get the Wille Glanz but that’s two chapters away from the end of the game.</br> <br>-Even though they don’t use their magic stat with their classes, with how low it gets it does keep him from using emblems that focus on the magic stat.</br> <br>-His attack stat is average which leaves his attacks bouncing off of armored units in the earlier chapters without an Armorslayer.</br>",
        howtomakegood: "As they stand, the most that you as the player can do for their stats is to give them a few tailsmen and maybe an energy drop for some extra strength, along with keeping a set of resistance tonics on hand if needed. <br>On the other hand, for their emblems, there are a lot of options to pick from so I will sum it down to the two that will help him survive the longest.</br> <b>Marth:</b> This is the basic answer with his increases to Avoid and the Sword Agility skills gained from bond levels, along with Unyielding that restores hp when they go below a certain percentage and Break Defenses that give an extra attack after inflicting Break. <br>This is a strong choice especially when paired with skills like Ike’s Resolve which boosts defense and resistance if their HP stays under 75 percent, and Roy’s Hold out which allows the unit to survive with 1 HP if they have a certain HP at the start of combat, and or Lyn’s Alacrity which allows them to do their follow up attack before the foe can counter attack. And if you have access to the Emblem Bracelets then look at skills like weapon sync from the triplets or Brute force from Chrom & Robin.</br> <b>Corrin:</b> This is my personal choice with her increases in HP and the Quality time skill that restores HP to adjacent allies creating an interesting synergy with their Personal skill Divinvely Inspiring, along with being able to access all the dragon veins that she has available that give special effects to the terrain and Draconic Hex that lowers all the foes stats by 4 shrinking by 1 each turn. <br>This gives them a large HP pool to take hits from even magic users and can be made stronger when paired with skills like Marth’s Perception which gives a boost to Avoid when the unit starts combat and increases with higher speed stats, Ike’s Resolve which boosts defense and resistance if their HP stays under 75 percent, Roy’s Hold out which allows the unit to survive with 1 HP if they have a certain HP at the start of combat, and or Lyn’s Alacrity which allows them to do their follow up attack before the foe can counter attack.</br> <br>And if you have access to the Emblem Bracelets then look at skills like weapon sync from the triplets, Brute force from Chrom & Robin, or Geosphere/Lifesphere/Lightsphere from Tiki if you want to boost the synergy with Quality Time and their Personal skill.</br>"
    },
    {
        name: "Vander",
        imgSrc: "images/lythos/FEE_Vander_portrait.png",
        imgAlt: "Vanders portrait",
        home: "Elyos",
        background: "Vander is a 32nd-generation, Steward of the Dragon, protector of the Divine Dragon at the Land of Lythos. <br>Honored by his duty, Vander is Alear's primary caretaker, however due to his advancing age, he personally selected Clanne and Framme as his successors.</br> <br>Throughout the Divine Dragon's journey across Elyos, Vander provides them with protection and counsel.</br> <br>Following Sombron's defeat, Vander cedes his role as Steward to Clanne and Framme and becomes a knight of the Somniel.</br>",
        personality: "Vander takes great pride in his role as the Steward of the Dragon and as such approaches his care with Queen Lumera and Alear with the highest of decorum. <br>His highest priority is the protection of Alear and often does mundane chores for them so they can focus more on their leadership duties.</br> <br>After Alear expresses a desire to be a little more independent and not require Vander to do all of their less important tasks, he respects their request, but nonetheless proves to be a stalwart ally and still earnestly acts as an advisor throughout their journey.</br>",
        personalskillname: "Alabaster Duty",
        personalskill: "If this unit is adjacent to the Divine Dragon, grants Crit+5 during combat to both Vander and the Divine Dragon.",
        pros: "Vander is a good character to have at the start of the game being given in his advanced class and being able to boost Alear just by being near him on the map. <br>He can deal some damage to enemies, softening them up for the weaker units at the beginning of the story to gain some easier experience points, and is the first axe user in the game.</br>",
        cons: "Vander is considered a Jagen Archytype, being a strong starting advanced class with slightly higher starting stats making him a valuable damage soaker for some of the initial maps. <br>With that said, he suffers from the archetype's greatest flaw of having some of the lowest growths in the game, with his starting growths for Speed and Defense having Growth Rates of 35 and are his highest aside from a Growth Rate of 60 for HP.</br> <br>As such, Vander quickly falls off, and with only 19 levels to work with before he hits the natural cap and requiring a Second Seal to continue forward, he also becomes something of a EXP sponge, giving him far less returns on kills for the maps where he is one of the stronger units base wise and has greater difficulty keeping up with other units who, when invested into, give more consistent returns in the later game.</br>",
        howtomakegood: "The best thing to do for him is keep him for 10 levels in Paladin then use a second seal to move to Great Knight to capitalize on his other stats while giving him an extra weapon to fight with, and if you have access to Tiki’s Emblem Bracelet from the DLC let him get at least 5 levels with it equipped so he can gain the benefits of Starsphere which grants the unit enhanced stat growth when leveling up. <br>As for skills, he needs skills that will make sure that he can survive like Ike’s Resolve which boosts defense and resistance if their HP stays under 75 percent, Roy’s Hold out which allows the unit to survive with 1 HP if they have a certain HP at the start of combat, and or Eirika’s Lunar Brace that deals more damage equal to a certain percentage of the foe's defense.</br> <br>And if you have access to the DLC skills from Hector like Heavy Attack (when making a physical attack, if an equipped weapon's weight exceeds the unit's Build, adds excess as damage to a max of 5) or Adaptability (When hit by a foe's attack, grants Def+2 for a physical attack or Res+2 for a magical attack after combat. Lasts until the end of the battle, or until activated again).</br> <br>The best Emblem for Vander is the one that will help his miserable ability to hit, especially with his heavy weapons so emblems like Sigurd who gives increases to hit as bond level increases, if you have the DLC Chrom & Robin to give an increase in Dexterity and Speed, or Hector to give strength when he uses his heavier weapons.</br>"
    },
    {
        name: "Clanne",
        imgSrc: "images/lythos/ClanneFE17Portrait.jpg",
        imgAlt: "Clanne portrait",
        home: "Elyos",
        background: "Clanne is a 33rd-generation Steward of the Dragon alongside his twin sister Framme, protecting the Divine Dragon in the Holy Land of Lythos. <br>He is currently being trained by his predecessor, Vander.</br>",
        personality: "Clanne is a gentle boy who is honored by his role as a steward for Alear. <br>He shares his devotion to the Divine Dragon with his twin sister Framme, being the self-appointed co-president of the Divine Dragon Club.</br> <br>Clanne is often starstruck by the littlest things that Alear does.</br> <br>Gentle and modest, he keeps a much more polite front when expressing his excitement and pride in his role as their steward compared to Framme.</br> <br>Despite his prestigious position, Clanne is often frustrated by the seemingly mundane tasks he is given by Vander.</br> <br>However, after a heart-to-heart with him about the importance of such tasks as well as his faith in Clanne, Clanne redoubles his efforts and takes such assignments with much more importance and eagerness.</br>",
        personalskillname: "Verdant Faith",
        personalskill: "If this unit is adjacent to the Divine Dragon, grants Hit+10 during combat to both of them.",
        pros: "Clanne is a great character at the start of the game due to him being the first mage class you get in the game, allowing him to deal huge amounts of damage to armored units from a distance. <br>His dex and speed allow him to make follow-up attacks against most others.</br>",
        cons: "He is quickly outclassed by other magic users, such as Céline, Citrinne, and potentially Anna if she is reclassed. <br>Despite his initial class, however, his growth rates do not suggest long-term prospects in a magic-based role, as his poor 10% Magic growth means he must rely on regular double-attacks and high might tomes to deal major damage.</br>",
        howtomakegood: "So how can we improve upon him? The easy answer would be to advance him into Mage Knight to get the most out of his decent magic stat and the other stats that would make him a good sword fighter. <br>This will give him something else to do with minimal investment, along with allowing him to traverse great distances on the field to help other units or move away from enemies when too injured. If you have the DLC classes, he has potential as a Mage Cannoneer. With his decent Dex and Magic stat, he would be able to use both types of cannons consistently.</br> <br>As for skills, the most consistent one to use in most situations is Vantage from Lief, which gives him the first attack during the enemy's phase.</br> <br>After that, it’s where you want his power; you could give him the increase to attack from Roy, increase to magic from Celica, or if you have the DLC and want to up defense Adaptability from Hector would be a great choice. If you decide to take him down the path of Sage, you have to give him Silence Ward from Micaiah to keep him from being useless when a silence staff is on the field.</br> <br>For emblems or bond rings, you want to focus on magic-based ones, like Celica, who will help with his low magic stat and increase the damage of his tomes, or Soren from the DLC, which will increase both his magic and dex, so his build can increase with his magic. Past that, I would mostly use bond rings for him.</br>"
    },
    {
        name: "Framme",
        imgSrc: "images/lythos/FrammeFE17Portrait.jpg",
        imgAlt: "Framme portrait",
        home: "Elyos",
        background: "Born to a family of priests, Framme is a 33rd-generation Steward of the Dragon, protecting the Divine Dragon in the Holy Land of Lythos. <br>Since a young age, she has lived away from her parents and hometown, being in and out of the Somniel to watch over the slumbering Alear.</br> <br>As a steward, she has been tasked to defend them together with her predecessor, Vander, and her older twin brother, Clanne.</br>",
        personality: "Framme is a high-spirited young girl who worships Alear with a passion. <br>While eager to please the Divine Dragon, she is often starstruck by the littlest things they do and freely expresses her amazement at them doing something as mundane as drinking water.</br> <br>Nonetheless, her devotion is true, and she has stated that she would frequently talk to Alear while they slept, not knowing if they would wake up during her time.</br> <br>She has a strong relationship with her twin brother, and the two are the self-appointed presidents of the Divine Dragon Club.</br> <br>On the battlefield, she is usually the one cheering on the Divine Dragon the hardest and encourages other people devoted to Alear to give similar energy.</br> <br>For all her cheer and passion, Framme is careless with her duties at times and, by her own admission, is scatter-brained.</br> <br>She feels insecure in her position as a result and is downtrodden whenever she makes mistakes.</br> <br>Likewise, she feels bad when told her cheering distracts Alear during their training.</br> <br>Nonetheless, she takes advice to heart and strives to meet Vander's expectations of her and become a proper steward for the Divine Dragon.</br>",
        personalskillname: "Crimson Cheer",
        personalskill: "If the unit is adjacent to the Divine Dragon, it grants Avo+10 during combat to both of them.",
        pros: "She is the first “healer” you recruit in the game. <br>Along with being able to use the Arts, she fills the role to heal and defend against magic users who can take out the MC and armored units.</br> <br>Her chain guard is very useful to keep the weaker units from dying after the first hit, and gives them a chance to counterattack even if it doesn’t do anything.<br/> <br>Her Personal Skill, Crimson Cheer, also encourages this supporting role by giving her and Alear +10 Avoid during combat when the two are adjacent, always a useful bonus.</br>",
        cons: "She, unfortunately, gets outclassed very quickly with units like Jeanne or Hortensia in later chapters. <br>Her Strength and magic are pretty low for a start, which means that her attacks very regularly do 0 damage until she gets a stronger scroll, and while you don’t need a lot of healing in the beginning, High Priest is probably not the path for her future.</br> <br>Her acceptable growths in Dexterity and especially Speed mean she can somewhat scale, but even this is offset by her atrocious starting Build and the growth of it at 0%.</br> <br>Dealing damage with Framme will be problematic without considerable investment, which means that exp will be hard to grind.</br>",
        howtomakegood: "So how do we keep Framme useful throughout the story? <br>Starting with her class, the easy non-DLC option is Material Master, which will advance her to S-rank in Arts and keep Staves on her for minimal investment. This class does turn her into a wonderful abuser of the best part of the Arts, the inherent brave effect and light weight, even into the high-ranked scrolls. Potentially, this can create a single target force of nature that can take most units, save for armored ones. Now her magic stat does mean she will not be the healer of choice, but this does mean she is the perfect vessel for the non-healing staves like wrap or obstruct to support in other ways than healing(of course, she’ll have a mend or physic for when it is needed).</br> <br>For this build, you can give her the Ring of the Dawn Maiden to give her a stronger healing and the skill Healing Light to get a little bit of healing back, along with tomes while engaged to tackle the armored units that she would normally have problems with. Or the Ring of the Azure Twins for a more interesting offensive combo, allowing extra damage from Bravery and giving more chances for Solar Brace to trigger with the brave effect of the Arts. But you are more likely to put those rings on other units, so a budget option would be Deirdre bond ring, and if you get it to S-rank, you can abuse the healing of Renewal while Chain guarding.</br> <br>As for skills, it kinda depends on what ring you give Framme. If you go down the Ring of the Dawn Maiden path, the Bravery from the twins is a great way of increasing your damage output. If you go down the Ring of the Azure Twins path, the Staff Mastery + from Micaiah will help with the support/healing staves. If you go for a budget option like Deirdre, where you want to chain guard more, a skill like Quality Time from Corrin to heal the people who are being guarded.</br> <br>Now, if you have the DLC and have access to the Enchanter class, Framme is one of the best picks for it. She still has access to the nukes-for-fists, but she gets access to knives for a longer distance damage and poison application for chip damage. She also gains the Convoy ability (which is normally granted to only the MC), pairing well with the class being a Qi adept and the access to chain guarding to protect any that get items from her. While she does lose access to staves, which isn’t a huge loss, you could give her the Ring of the Dawn Maiden to heal through Item Surge, apply buffs through Weapon Surge, leverage the various uses of staves such as Fracture and Entrap, all whilst allowing her to attack with tomes. Pairing this with Quality Time from Corrin and Geosphere from Tiki keeps things supportive. If you want to swap to something for attack help, grab Bravery from the twins in place of Geosphere.</br> "
    },
    {
        name: "Alfred",
        imgSrc: "images/firene/FEE_Alfred_portrait.png",
        imgAlt: "Alfred portrait",
        home: "Firene",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Céline",
        imgSrc: "images/firene/C%3Fline_Heroes.jpg",
        imgAlt: "Céline portrait",
        home: "Firene",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Chloé",
        imgSrc: "images/firene/Chlo%3F_Heroes.jpg",
        imgAlt: "Chloé portrait",
        home: "Firene",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Boucheron",
        imgSrc: "images/firene/BoucheronFE17Portrait.jpg",
        imgAlt: "Boucheron portrait",
        home: "Firene",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Diamant",
        imgSrc: "images/brodia/DiamantFE17Artwork.jpg",
        imgAlt: "Diamant portrait",
        home: "Brodia",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Alcryst",
        imgSrc: "images/brodia/Alcryst_Heroes.jpg",
        imgAlt: "Alcryst portrait",
        home: "Brodia",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Amber",
        imgSrc: "images/brodia/AmberFE17Portrait.jpg",
        imgAlt: "Amber portrait",
        home: "Brodia",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Citrinne",
        imgSrc: "images/brodia/FEE_Citrinne_portrait.png",
        imgAlt: "Citrinne portrait",
        home: "Brodia",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Ivy",
        imgSrc: "images/elusia/IvyFE17Portrait.jpg",
        imgAlt: "Ivy portrait",
        home: "Elusia",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Hortensia",
        imgSrc: "images/elusia/FEE_Hortensia_portrait.png",
        imgAlt: "Hortensia portrait",
        home: "Elusia",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Zelkov",
        imgSrc: "images/elusia/ZelkovFE17Portrait.jpg",
        imgAlt: "Zelkov portrait",
        home: "Elusia",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Anna",
        imgSrc: "images/elusia/FEE_Anna_portrait.png",
        imgAlt: "Anna portrait",
        home: "Elusia",
        background: "Anna is a recurring character in the Fire Emblem series. She has made an appearance in every single Fire Emblem game to date save Fire Emblem Gaiden and its remake, Fire Emblem Echoes: Shadows of Valentia. Anna primarily serves as a whimsical shopkeeper or some form of an NPC in her earliest appearances in the franchise. Starting from Fire Emblem Awakening forward, Anna has been a playable character, most notably as an important story character in Fire Emblem Heroes. The Anna encountered in each appearance is not the same person, but rather an entire family of women who bear the same appearance and name. Another version of Anna appears in Engage as a playable character. Unlike her previous iterations, Elyos Anna is notably much younger, being an adolescent girl rather than a young woman. While looking for treasure, she found herself in the middle of a bandit base. When she is nearly caught, she decides to hide in a chest only to be discovered shortly after by the bandits. As luck would have it, Anna would be found by the Divine Dragon Alear and their forces. After teaming up with them and dispatching the bandits, Alear offers her to join their army. Part of Anna's motivation to join Alear is to locate her family. Originally from a village in Elusia, she was separated from her relatives and has been forced to live on her own as she searches for them. In the aftermath of the war, it seems that she is able to reunite with her family who bears an uncanny resemblance to herself.",
        personality: "Despite being separate individuals, each Anna that appears shares many traits among each other. Most notably are their jovial nature and whimsical approach to conducting their business. Later appearances tend to focus more on her business acumen and a strong desire to acquire wealth, but maintain a lighthearted approach to her business models. The Anna of Engage is notably much younger than her previous incarnations and thus has a childish enthusiasm in her work. Due to being more of a fledgling merchant in this iteration, she is eager to test her skills and in most of her interactions with her allies, she is trying to broaden her horizons in terms of the goods she can sell from across Elyos. Anna dislikes when she is treated as a child, thus she projects a more mature demeanor and demands that others refer to her as Lady Anna for an unknown reason. Anna misses her family and worries she may never see them again, sometimes crying over this fear.",
        personalskillname: "Making a Killing",
        personalskill: "May obtain 500G when this unit defeats a foe. Trigger %=Lck.",
        pros: "Just like her relatives in the other games, Anna has great speed, dexterity, and most importantly Luck base stats. Anna has a speed stat that rivals that of Alear and her magic grows extremely high which makes her a powerful Sage or High priest depending on what you see fit. With her high luck stat, she can activate her Personal Skill at least once every battle which makes for a great way to make additional money to fund the refining of weapons and buying new staves.",
        cons: "Unfortunately, when she joins Alear she is an Axe fighter which does not suit her low strength growth and her high magic growth. And since she is a child, her HP and defensive stats are extremely low making her very susceptible to physical attackers.",
        howtomakegood: "The best way to keep Anna alive and get the most out of her stats is to reclass her into a Material Monk and then advance her into High Priest to get the highest cap on her luck, along with using her magic with Tomes and staves. Giving her some Seraph Robes to get her HP to livable levels and a Draco shield to give her defense a needed buff. Anna has speed stats that make her faster than Alear and makes great use of Lyn’s Alacrity which allows them to do their follow-up attack before the foe can counterattack, Marth’s Perception which gives a boost to Avoid when the unit starts combat and increases with higher speed stats, and or if you want something more offensive Celica’s Resonance which when equipped with a tome if unit's HP is 2 or more, the unit loses 1 HP at the start of combat and deals +3 damage during combat. If you have access to the DLC, Soren’s Anima Focus which when using tomes, the unit inflicts Def-3 with fire, Hit-20 with thunder, or Mov-2 with wind magic for 1 turn. One of the best rings to give Anna is Celica to boost her overall magic damage with tomes. Another good Emblem would be Micaiah which gives her stronger healing with Staves and gives nice utility."
    },
    {
        name: "Timerra",
        imgSrc: "images/solm/TimerraFE17Artwork.jpg",
        imgAlt: "Timerra portrait",
        home: "Solm",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Fogado",
        imgSrc: "images/solm/FEE_Fogado_portrait.png",
        imgAlt: "Fogado portrait",
        home: "Solm",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Seadall",
        imgSrc: "images/solm/SeadallFE17Portrait.jpg",
        imgAlt: "Seadall portrait",
        home: "Solm",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Panette",
        imgSrc: "images/solm/FEE_Panette_portrait.png",
        imgAlt: "Panette portrait",
        home: "Solm",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Veyle",
        imgSrc: "images/gradion/Veyle_cover_art.jpg",
        imgAlt: "Veyle",
        home: "Gradion",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Mauvier",
        imgSrc: "images/gradion/FEE_Mauvier_portrait.png",
        imgAlt: "Mauvier portrait",
        home: "Gradion",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Nel",
        imgSrc: "images/fell/Artwork_Nel.jpg",
        imgAlt: "Nel portrait",
        home: "Fell",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Rafal",
        imgSrc: "images/fell/FEE_Nil.png",
        imgAlt: "Nil portrait",
        home: "Fell",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Gregory",
        imgSrc: "images/fell/GregoryFE17Portrait.jpg",
        imgAlt: "Gregory portrait",
        home: "Fell",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    },
    {
        name: "Madeline",
        imgSrc: "images/fell/MadelineFE17Portrait.jpg",
        imgAlt: "Madeline portrait",
        home: "Fell",
        background: "",
        personality: "",
        personalskillname: "",
        personalskill: "",
        pros: "",
        cons: "",
        howtomakegood: ""
    }
]

const characterContent = document.querySelector('#character_content');

function renderCharacter(character){
    return `<button class="character_accordion">${character.name}</button>
            <div class="panel">
                img class="character" src="${character.imgSrc}" alt="${character.imgAlt}">
                <h2>Who is ${character.name}?</h2>
                <h3>Background</h3>
                <p>
                    ${character.background}    
                </p>
                <p>Homeland: ${character.home}</p>
                <hr>
                <h3>Personality</h3>
                <p>
                    ${character.personality}    
                </p>
                <hr>
                <h3>Personal skill: ${character.personalskillname}</h3>
                <p>
                    ${character.personalskill}
                </p>
                <hr>
                <h2>Pros</h2>
                <p>
                   ${character.pros}     
                </p>
                <hr>
                <h2>Cons</h2>
                <p>
                    ${character.cons}
                </p>
                <hr>
                <h2>How to make good?</h2>
                <p>
                    ${character.howtomakegood}    
                </p>
            </div>
            <hr>`; 
}
characterContent.innerHTML = characters.map(renderCharacter).join("");
initalizeAccordion("character_accordion");

function search_character() {
    let input = document.getElementById("searchInput").value
    input = input.toLowerCase();
    let x = document.getElementsByClassName("character_accordion");
    
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = characterContent;
        }
    }
}