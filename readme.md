# Clapperdown 
A project based on markdown where you can write screenplays and such on this language to be rendered later.
Write your plays anywhere, on any text editor, then bring it here.

Disclaimer - I've discovered you can already do this kind of thing with LaTeX, take a look:

https://www.youtube.com/watch?v=oXXfqKV4yhU

Thing is, LaTeX is a VERY powerfull tool, and as someone once said, "with great power comes great responsibilities"


The idea now is that with less power com lesses responsabilities. Average people should just write without worrying so much and without the software getting in the way, that's what I think.

https://user-images.githubusercontent.com/43701418/210643429-3786d25a-29d4-42f4-b893-c83dac50b3b1.mp4

## Documentation

### Titlepage
&type typeofplaytorender

&t title

&a author

&c contact information

\&br bottomright info

### Actual writing

P.S: number of # are based on how much it's used, usually.

\#### transition

\### EXT. PLACE - DAY

\## Description of actions, for example.

\# Actor name

This is a character speaking.

### Autocompletions

\#e = same as ### EXT.

\#i = same as ### INT.

\###e = same as ### EXT.

\###i = same as ### INT.

\#1 = same as # Actor name in order of appearence

\#02 = # this many times (zero is important!)

### Effects

\~underlined text~

\*\*bold text**

\_\_bold text__

\*italic text*

\_italic text_

---

#### TODOS - A lot.

TODO - scroll should follow caret

TODO - title page should have a multiplication or something on the scroll

TODO - type should render the pages differently

TODO - count pages (it should be more or less 55 lines per page on a screenplay)

TODO - CONTINUE mark when it needs to (again, for that I'll need to count the pages, also I'll need to see if the renderer is wrapping or not, maybe?)

TODO - parenthesis should be centered.

##### TODO - autocompletion, here's what I've thought:

<s>\###ed a place = EXT - A PLACE - DAY</s>

<s>\###in a place = INT - A PLACE - NIGHT</s>

<s>\#1 = Actor by appearence, example:</s>

<s>\# Joe</s>

<s>\# Maria</s>

<s>\#1 = Joe</s>

<s>\#2 = Maria</s>

#### DONES

DONE - Autocompletion for places (couldn't set time of day yet, though)

DONE - Autocompletion for actors by numbering their appearence.

DONE - hashtag multiplier.

DONE - Autocompletion for places simplified.
