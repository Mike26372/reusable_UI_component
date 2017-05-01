# Exercise: DOM Tree as a File System

This exercise is to build something that represents the DOM tree of a website as a file and folder explorer.

Your implementation will be evaluated technically, but also by a designer, so CSS fidelity is important.

You can use any tools or libraries you'd like. Except an off-the-shelf tree control :)

## Running the application

First, pleaes fork and clone the repository onto your local machine

Next, please all dependencies by navigating to the root folder of the repository and running: 
```
npm install
```
Once all dependencies have been installed (may take a minute to install all React dependencies), please run:
```
npm start
```
The site should now be running at localhost:3000.


## Requirements

### Application
* You will create a new file `tree.html` that renders the DOM tree provided in `index.html` according to the graphical guidelines below.
* Provided code should be runnable by a static web server without needing to run a build step
* Some hardcoding is okay. Your solution doesn't need to handle rendering a general `.html` file, but your code should be reusable enough that it requires relatively little effort to render a completely separate DOM tree.

### Graphical Guidelines
* Represent all the nodes in a DOM tree starting with `head` and `body` at the top level.
* Do not include comment tags in the output, only text nodes and elements

#### Appearance
* What you build should look like a modal (Doesn't need to function like one. eg: open/close and dragging it around are not necessary)
* Visually has the same colors, alignment, sizing, and shading as `mockup.png`
* Make the folder represented by the `head` tag "private", with a red icon appearance.

#### Interaction
* Implement some sort of basic selection appearance, but complex single-select or multi-select rules aren't required.
* Both files and folders should be selectable.

#### Folders
* DOM element nodes should be represented as "folders"
* Display the DOM element tag name next to folders
* Folders can be expanded and collapsed by clicking

#### Files
* Text nodes should be represented as "files"
* Display a single line of text content next to "files"
* Text truncates with ellipsis if too wide

## Example

For clarity, here's an example DOM section:

```html
<body>
  <p>
    Some Text
    <!-- A Comment -->
    More Text
  </p>
</body>
```

This section of the DOM should be represented in the tree like this:

* body
  * p
    * Some Text
    * More Text

The two text nodes are represented as files, comments are not shown, and containing elements are represented as folders.

## Evaluation Criteria (all equally important)
1. Functional Requirements
2. DRY, reusable, well-thought-out code
3. Pixel-perfectness of CSS matching `mockup.png` in Chrome
