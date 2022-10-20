## FROM NOTE BOOK

9/21/22

### Description

A console or HUD style pet simulator

- Responsive design
- interactions w/ pets and NPCs
- Quest / Poem Puzzles
- Potion Crafting
  - ingredient gathering?
  - sovling poem puzzles
  - loot drops

## Poem puzzle = all possible answers are pleasing.

### Playloop

Basic Pattern:

1. interact w/ pet
   - take pics of
   - bake treats
   - craft food
   - dress up
   - cuddle
   - tricks
   - clean
   - feed
   - play
   - chat

Quality interactions:
	- Relatable dialogue choices.
	- engaging animations
		- everything feels great and interactions feel more substantial than a click or a press.
	- engaging animations

- Quest dialogue tress must complete w/in 3 steps.

- get tools
  - sell virtual your virtual organs
  - sometimes a pet will let you know they have extra organs to harvest and sell.
  - morter + pestol
  - vials
- get ingredients
  - random loot drops
  - interactions
    - w/ pets
    - w/ NPCs
    - w/ Scenes
  - rewards for satisfying stewardship

Game play pay off:
	- Dope screen saver
	- Collecting Lobopods
	- Gaining accerss to new:
		- maps/terreriums
		- reciepes
		- outfits
		- tools
	- The potion craft's individual potion's animation, and the individualized lobopod eating animation.
	- quest narration:
		- surprising
		- dark humor
		- bemusing
		- funny
		- krass

---

### Game Narration

The key mechanic. Think of it as the game's only NPC. Everything that happens is discribed by this lone actor.

Interactions with pets are described by this actor.

The player recieves all items via this actor describing it.
	- rewards
	- gifts
	- loot

new Quests/poem puzzles are added when this actor describes it.

consequences of selecting a course of action are described by this actor.

The drive of the narrative are the hijinx your pets get into when you are not arround.
	- quest are triggered:
		- on other pets while the player is tending to a pet.
		- when the player dialogues w/ pets.

---

### Journal

Want working with the journal to be easy and intuitive. I don't want the player to have spend much time there. and I want the time in there to be add to the player's experience.

playloop = journal + HUD + game narrative

Access pet and their home via specific pet's journal entry.

recieve notifcations about pet's needs in the Journal and in the HUD.

Completed tasks, quest, and chores, are automatically archived. Players can archive active items.

Access to:
	- game store
	- inventory
	- archive

Keeps track of:
	- entries by pet
	- player stats
	- inventory
	- pet stats
	- quest

---

### HUD, heads up display

Access to:
	- specific parts of inventory, like food
	- notifications of pet needs
	- dialogue options
	- active quest

Quick Access to:
	- pet most in need
	- inventory
	- store

---

### Quests

Completed when player reachs the end of a dialogue tree.

Leaving a quest dialogue does nothing. The player can continue where they left off or start the dialogue over. The dialogues spot is recorded in the journal.

#### ideas

---

## QUESTIONS

### What's the game's pacing?

Progession
- single pet
	- search for new pets
	- loot drops
	- quests
	- awards

- multiple pets
	- loot drops x N pets
	- more quests
	- more awards
	- add pets
	- lose pets

---

## IDEAS

As players progress they can acquire spells to take care of their pet chores.

Some spells can spawn items in inventory.

---

## UI IDEAS

players can use both keyboards and icons to play. the icon does a selected animation when pressed or the corrispoding key is pressed.

---

## PROTOTYPE DESIGN

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
