import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader'

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
// var revealOnScroll = new RevealOnScroll();









// var $ = require('jquery');
//
// import Person from './modules/Person';
//
//
// class Adult extends Person{
//   payTaxes() {
//     console.log(this.name + " pays taxes");
//   }
// }
// alert(" 1234");
//
//
// var john = new Person("John Doe", "blue");
// john.greet();
//
// var jane = new Adult("Jane Smith", "blue");
// jane.greet();
// jane.payTaxes();
//
