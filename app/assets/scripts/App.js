import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll'; 
import $ from 'jquery';
import stickyHeader from './modules/stickyHeader';

var mobileMenu = new MobileMenu();
//var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var StickyHeader = new stickyHeader();