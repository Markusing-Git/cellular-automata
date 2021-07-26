# cellular-automata
A Cellular Automata visualizer created by Markus Ingemarsson.

## Background
Fascinated by the complex and captivating patterns a few simple rules can create. I decided to make a fun little project, visualizing Elementary cellular automatons. Cellular automata is made possible by determining a set of rules to define the state of the next generation of cells. A cell can hold two possible states, either dead or alive (0 or 1). By iteratively creating new generations of cells, a specific pattern governed by the pre-defined rules emerges. The visualizer has two different modes, starting with one alive cell or starting with a row of cells with random states. Cells initiated with random states are referred to as wolfram classes, named after the physicist Stephen Wolfram. The project was created using the Javascript library React, html and css.

## Setup
Install and try out this visualizer in 3 easy steps. 

1. Clone the repository to your local machine.
2. Make sure you have npm and yarn installed.
3. Open terminal/cmd and navigate to the folder and type. ` yarn install ` and then ` yarn start `.

Webpack will run the client on http://localhost:8008
## User Guide!

### Starting with one pixel  

Define the rules by activating or deactivating cells. A binary based counter will show what rule you have chosen.  
When the rules are decided, click generate to watch the magic happen! :sparkles:  

![Alt Text](https://github.com/Markusing-Git/cellular-automata/blob/main/resources/static.gif)

### Starting with a random initial state  

To generate cells from a random state, switch over to the other tab named "wolfram classes"  

![Alt Text](https://github.com/Markusing-Git/cellular-automata/blob/main/resources/wolfram.gif)
