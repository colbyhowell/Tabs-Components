
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.linkElement = element
  
    // Get the custom data attribute on the Link
    this.linkData = this.linkElement.dataset.tab
    // Using the custom data attribute get the associated Item element
    this.linkContent = document.querySelector(`.tabs-item[data-tab="${this.linkData}"]`)
    // Using the Item element, create a new instance of the TabItem class
    this.linkItems = new TabItem(this.linkContent)
    
    // Add a click event listener on this instance, calling the select method on click
    this.linkElement.addEventListener('click', () => {
      this.select()
    })
  };

  select() {
    // Get all of the elements with the tabs-link class
    const tabLinks = document.querySelectorAll(".tabs-link")
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    tabLinks.forEach(item => {
      item.classList.remove('tabs-link-selected')
    })

    // Add a class named "tabs-link-selected" to this link
    this.linkElement.classList.add('tabs-links-selected')  
    
    // Call the select method on the item associated with this link
    this.linkItems.select()
  }
}

class TabItem {
  constructor(tabStuff) {
    // Assign this.element to the passed in element
    this.element = tabStuff
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll(".tabs-item")

    // Remove the class "tabs-item-selected" from each element
    items.forEach(tabItems => {
      tabItems.classList.remove('tabs-item-selected')
    })
    
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected')
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const links = document.querySelectorAll('.tabs-link');

links.forEach( (link) => {
  return new TabLink(link)
})