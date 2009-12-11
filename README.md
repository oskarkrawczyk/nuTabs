nuTabs
======

nuTabs - MooTools-based, transitionified switcherification!

![Screenshot](http://nouincolor.com/forge/banners/nuTabs.png)

How to use
----------

### JavaScript	
	
	$$('#tabs-nav a, #tabs-body li').tabify({
		transition: 'bounce:out'
	});

Or
   
	new nuTabs($$('#tabs-nav a'), $$('#tabs-body li'), {
		transition: 'bounce:out'
	});
	
### HTML

	<ul id="tabs-nav">
		<li class="selected"><a href="#">Tab 1</a></li>
		<li><a href="#">Tab 2</a></li>
		<li><a href="#">Tab 3</a></li>
	</ul>

	<ul id="tabs-body">
		<li class="active">Content 1</li>
		<li>Content 2</li>
		<li>Content 3</li>
	</ul>

Options
-------

All options have default values assigned, hence are optional.

### Version 1.0

* **transition**: (mixed) the object or string of a specific transition, ie. "bounce:out"
* **navActiveClass**: (str) active class name for the tabs