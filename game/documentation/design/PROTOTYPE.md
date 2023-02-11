# PROTOTYPE DESIGN

## V1
Text based game to set up how the player's data changes. 

"What happens to the player's data when: ", is the mantra.

What happens when pet becomes:
- [ ] wounded
- [ ] hunger
- [ ] happy
- [ ] tired
- [ ] wakes
- [ ] sad

Hunger:
	lobopod:
		- hunger > 0
		- if hunger > 3, health -1 at a specific rate determined by hunger level

### Schema

Player data schema:
```
// MYSQL style
player {
	inventory_slots= NUM;
}
inventory_item {
	player_id = player.id;
	desc = LONG TXT;
	label = txt;
}
quest {
	player_id = player.id;
	lobopod_id = lobopod.id;
	desc = LONG TXT;
}
dialogue {
	// how is the dialogue tree set up in MYSQL?
	next_id = next.id;?
	quest_id = quest.id;
	dialogue = LONG TXT;
}
dialogue_option {
	dialogue_id = dialogue.id;
	option = LONG TXT;
	label = LONG TXT;
}
lobopd {
	terrerium_id = terrerium.id;
	player_id = player.id;
	sprite_id = sprite.id;
	outfit_id = outfit.id;
	emtional_scale = NUM;
	hunger = NUM;
	heath = NUM;
}

// Mongo style
player {
	terreriums = [];
	invetnroy = [];
	lobopods = [
		lobopod {
			terrerium = terrerium.id;
			outfit = outfit.id;
			sprite = sprite.id;
			emtional_scale = NUM;
			hunger = NUM;
			heath = NUM;
		}
	];
	quests = [
		quest {
			dialogue = [
				dialogue{
					value = text;
					options = [options{
						next = dialogue node;
						value = text;
					}];
			}];
			loot = [inventory_items];
		}
	];
}
```

Example of setting the player's journal:
```
setPlayerJournal(playerId){
	inventory = getPlayerInventory(playerId);
	lobopods = getPlayerLobopods(playerId);
	player = getPlayerData(playerId);
}
getPlayerInventory(playerId) {
	outfits = getPlayerLobopodOutfits(playerId);
	ingriedents = getIngriedents(playerId);
	balance = getBalance(playerId);
}
```

Notifications happen based on the lobopod's, player's, and session's state.

### V2
- no animations
- focus the most basic game mechanics, updating the player's game data
	- Feed
	- dress
	- chat
		- triggering quests
	- Adding items to inventroy
		- ingredients
			- turning ingredients into potions
		- lobopods
		- outfits
		- tools
	- quests
		- tracking all quests
		- tracking progress

1. Feed, ( at a minimal interavl, waste becomes more likely as game time goes on)
2. Animations are simple color and position changes
3. Feed by clicking and dragging food icon on to the crafting canvas
4. Quest dialogue activates by asking pet
5. Outfits are changed by dragging a hat icon onto the main canvas

```
_________________
|bell icon
|
|  MAIN CANVAS
|_______________
icon ---------- icon
icon | craft  | icon
icon | canvas | icon
icon ---------- icon

```
