var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//*Form Submit Event
form.addEventListener('submit', addItems);

//* Add items
function addItems(e) {
  e.preventDefault();

  //Add new input
  var newItem = document.getElementById('item').value;

  //*Creating new element
  var li = document.createElement('li');

  //*Add className
  li.className = 'list-group-item';
  //console.log(li);
  li.appendChild(document.createTextNode(newItem));

  //*create delete button
  var deleteBtn = document.createElement('button');

  //*add className
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  //*Add text node
  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

//*Remove Item
itemList.addEventListener('click', removeItem);

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//*Search Item

var filter = document.getElementById('filter');

filter.addEventListener('keyup', filterItem);

function filterItem(e) {
  //?Convert text to lower Case
  var text = e.target.value.toLowerCase();
  //? Get item list
  var items = itemList.getElementsByTagName('li');
  //?convert ot an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

//********************************************The real code*************************************** */
/*var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}  */

/************************************MIne**************** */
/* var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItems);

function addItems(e) {
  e.preventDefault();

  var newItem = document.getElementById('item').value;

  //*Add new item
  var li = document.createElement('li');

  li.className = 'list-group-item';

  li.appendChild(document.createTextNode(newItem));

  itemList.appendChild(li);

  //*Create Button
  var deleteBtn = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);
}

//*Remove element

itemList.addEventListener('click', removeItem);

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
   */
