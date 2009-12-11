/*
---
script: nuTabs.js
decription: nuTabs - MooTools-based, transitionified switcherification
license: MIT-style license.
authors:
 - Oskar Krawczyk (http://nouincolor.com/)
requires:
  core:1.2.3:
  - Class.Extras
  - Element.Event
  - Element.Style
  - Element.Dimensions
  - Fx.Tween
  - Fx.Morph
  - String
  - Array
  more:1.2.3.2:
  - Element.Measure
provides: [nuTabs]
...
*/
 
var nuTabs = new Class({
    Implements: [Events, Options],

    options: {
        // transition: $empty,
        navActiveClass: 'selected'
    },
    
    initialize: function(tabsNav, tabsBody, options){
        this.setOptions(options);
        this.tNav = tabsNav;
        this.tBody = tabsBody;
 
        this.attach();
    },
 
    attach: function(){
        this.tNav.each(function(tab, index){
            tab.addEvent('click', this.resize.bindWithEvent(this, index));
        }, this);
    },
 
    alteredHeight: function(index){
        // expose to measurement
        return this.tBody[index].measure(function(){
            return this.getSize().y;
        });
    },
 
    resize: function(e, index){
        e.stop();
        
        this.tBodyCont = this.tBody.getParent();
        this.tNavCont = this.tNav.getParent();
        
        // set transitions if needed
        this.tBodyCont.set('tween', {
            transition: $pick(this.options.transition, 'sine:out')
        });
        
        // alter the wrappers's height
        this.tBodyCont.tween('height', this.alteredHeight(index));    
 
        // absolutize and hide the content items
        this.tBody.set('styles', {
            'position': 'absolute',
            'top': 0,
            'opacity': 0
        }).fade('out');
 
        // show the active content item
        this.tBody[index].set('styles', {
            'display': 'block',
            'opacity': 0
        }).fade('in');
        
        // add class to the active tab
        this.tNavCont.removeClass(this.options.navActiveClass);
        this.tNavCont[index].addClass(this.options.navActiveClass);
    }
});

Elements.implement({
    tabify: function(options){
        this.tabNav = this.slice(0, this.length/2);
        this.tabBody = this.slice(3, this.length);
        new nuTabs($$(this.tabNav), $$(this.tabBody), $pick(options, {}));
    }
});