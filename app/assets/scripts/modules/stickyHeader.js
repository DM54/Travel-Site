import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class stickyHeader{
	 constructor(){
	 	this.lazyImages = $(".lazyload");
	 	this.siteHeader = $(".site-header");
	 	this.headerTriggerElement = $(".large-hero__title");
	 	this.createHeaderWaypoint();
	 	this.pageSections = $(".page-section");
	 	this.headerLinks = $(".primary-nav a");
	 	this.createPageSectionWaypoint();
	 	this.addSmoothScrolling();
	 	this.refreshWaypoints();
	 }

	 refreshWaypoints(){
	 	this.lazyImages.on('load', function(){
	 		Waypoint.resfreshAll();
	 	});
	 }

	 addSmoothScrolling(){
	 	this.headerLinks.smoothScroll();
	 }

	 createHeaderWaypoint() {
    var that = this;
    new Waypoint({
        element: this.headerTriggerElement[0],
        handler: function(direction) {
            that.siteHeader.toggleClass("site-header--dark");
            that.headerLinks.removeClass("is-current-link");
        }
    });    
}

	 /*createHeaderWaypoint(){
	 	var that = this;
	 	new Waypoint({
	 		element: this.headerTriggerElement[0],
	 		handler: function(direction){
	 			if(direction === "down"){
	 				that.siteHeader.addClass("site-header--dark");
	 			}else{
	 				that.siteHeader.removeClass("site-header--dark");
	 			}
	 		}
	 	});
	 }*/

	 createPageSectionWaypoint(){
	 	var that = this;
	 	this.pageSections.each(function(){
	 		var currentPageSections = this;
	 		new Waypoint({
	 			element: currentPageSections,
	 			handler: function(direction){
	 				if(direction === "down"){
	 					var matchingheaderlink = currentPageSections.getAttribute("data-matching-link");
	 				that.headerLinks.removeClass("is-current-link");
	 				$(matchingheaderlink).addClass("is-current-link");
	 			}
	 		},
	 			offset: "18%"
	 			
	 		});

	 		new Waypoint({
	 			element: currentPageSections,
	 			handler: function(direction){
	 				if(direction === "up"){
	 					var matchingheaderlink = currentPageSections.getAttribute("data-matching-link");
	 				that.headerLinks.removeClass("is-current-link");
	 				$(matchingheaderlink).addClass("is-current-link");
	 			}
	 		},
	 			offset: "-40%"
	 			
	 		});
	 	});
	 }
}

export default stickyHeader;