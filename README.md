
# Angular 2 Click-To-Edit
##Click on a data-binding to make it an input field, and save the changes!

## This Version Has:

- Easy to implement component to wrap your bindings.
- onSave event that calls your own save method.
- Nice looking css style(inspired by Jira)
- Canceling method when choosing to cancel or when clicking outside.

## TODO:

- Easy permission enabling/disabling edit functionality.
- Easy to attach Field-Validation. 


## Installation
```
    npm install angular2-click-to-edit
```

# How To Use:  

## Adding package to SystemJS:
systemjs.config.js
```
 var map = {
	'angular2-click-to-edit': 'node_modules/angular2-click-to-edit',
	}
```
```
 var packages = {
	'angular2-click-to-edit': { main: 'index' }  
 }
```

## Step 1:
component.ts
```
 // Import the component to the component where you want to implement the click-to-edit.
 import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';

 // Include it in the Component directives
 @Component({
 	 directives: [NDV_DIRECTIVES]
 })

```

## Step 2:
page.html  
```
<!- Wrap your binding like this: ->

<!- This is your uneditible regular binding: ->
<p>{{user.firstName}}</p>

<!- This is your EDITABLE binding: ->
<p><ndv-edit title=["'firstName'"] [placeholder]='user.firstName' (onSave)='yourSaveMethod($event)'></ndv-edit></p>

```
# Important Notes!

```
 As you can see there are few parameters passed:
	*[title] - this is the name of the field you want to send back to the server. i.e: "email".

	*[placeholder] - this is the text that will be displayed by default(before editing)
					 so we would probably like to bind out data to it.

	*(onSave) - this one takes the function you give it and 
				call it when the user saved his edited info!

#### VERY IMPORTANT TO NOTICE ####
	$event - is the object containing the information based on the [title]!!! 
	**for instance: [title]="firstName"*
	then $event = { firstName: 'the user edited text' }.
```