# Step 1 : PRE-REQUSITE
## Install Node.JS:
- Check install
```
		node -v
```
## Setup sublime3:
- Goto:Tool>build system>new build system >
- Replace all with below
		
- [Following says the sublime which compiler to use]
```
		{
		 "cmd": ["C:/Program Files/nodejs/node","$file"],
		 "selector":"source.js"
		}
```
- Save as:
```
		 nodecompile.sublime-build
```	
## Install ember:
```
		npm install -g ember-cli
```
---
# Step 2 : CREATE TEMPLATE
## Create an application
```
  $ ember new <ember-quickstart>
```
## Start ember server
```
  $ ember serve
```
## View it on browser:
```
	http://localhost:4200/
```
---
# Step 3 DEFINE ROUTE
- Open new git bash 
```
  $ ember generate route <scientists>
	
```
Output:
```
	installing route
	  create app\routes\scientists.js
	  create app\templates\scientists.hbs
	updating router
	  add route scientists
	installing route-test
	  create tests\unit\routes\scientists-test.js
```
---
# Step 4 : CREATE UI COMPONENT
- Note: Component name must have a '-' character
	
```
	$ ember generate component <people-list>
```
- Output :
	installing component
	  create app\components\people-list.js
	  create app\templates\components\people-list.hbs
	installing component-test
	  create tests\integration\components\people-list-test.js
	
- Navigate to "app/templates/components/people-list.hbs" and add
	
```
	<h2>{{title}}</h2>
	<ul>
  {{#each people as |person|}}
    <li>{{person}}</li>
  {{/each}}
</ul>
	
```
- Create a generic code:
- Replace following code in  "app/templates/scientists.hbs" with "{{people-list title="List of Scientists" people=model}}"
	
```
	//Replace:
	
	<h2>List of Scientists</h2>
<ul>
  {{#each model as |scientist|}}
    <li>{{scientist}}</li>
  {{/each}}
</ul>
	
	
	//With:
	
	{{people-list title="List of Scientists" people=model}}
```
	
	
	
	
	
---
# Step 5: CLICK EVENTS
- Navigate to "app/templates/components/people-list.hbs"
	
```
//Replace:
<li>{{person}}</li>

//With:
        <li {{action "showPerson" person}}>{{person}}</li>

```
- Navigate to "app/components/people-list.js"
- Add
```
	  actions: {
    showPerson(person) {
      alert(person);
    }
  }
	
```
	
Example:
```
	
	import Component from '@ember/component';
	export default Component.extend({
  actions: {
    showPerson(person) {
      alert(person);
    }
  }
});
```
