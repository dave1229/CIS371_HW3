/**
 * Created by Hans Dulimarta
 * TODO: Add your name below this line
 */

/**
 * Given the ID of a node {rootId}, find all its descendant elements having
 * its attribute id set and then change their class to {klazName}.
 * The function returns the number of such elements found.
 *
 * @param rootId    the ID of the "root" element to begin searching
 * @param klazName  the class to assign to each descendant whose id attrib 
 *                  is set.
 * @returns {number}
 */
function findElementsWithId(rootId, klazName) {
  /* complete this function */
  var elem = document.getElementById(rootId);
  var elemArr = elem.children;
  var count = 0;
  for (var i = 0; i < elemArr.length; i++) {
    if (elemArr[i].id.length >= 1) {
      elemArr[i].classList.add(klazName);
      count++;
    }

  }
  return count;
}

/**
 * The following function finds all elements with attribute 'data-gv-row' (or
 * 'data-gv-column') and create a table of the desired dimension as a child of
 * the element.
 *
 * @returns NONE
 */
function createTable() {
  /* complete this function */
  
  /* select div (table-home) */
  var myTableDiv = document.getElementsByClassName("table-home")[0];
  var numRows = myTableDiv.getAttribute("data-gv-row");
  var numCols = myTableDiv.getAttribute("data-gv-column");
  var myTableBody = document.createElement("tbody");
  /* create myTable */
  var myTable = document.createElement("table");
  myTable.appendChild(myTableBody);
  /* create table rows */
  for (var i = 0; i <= numRows; i++) {
    var tr = document.createElement('TR');
    myTableBody.appendChild(tr);
    /* create table cells */
    for (var j = 0; j <= numCols; j++) {   
        var td = document.createElement('TD');
        if (i == 0) {
        var th = document.createElement('TH');
        var headerTextColOne = document.createTextNode("Heading " + (j + 1));
        th.appendChild(headerTextColOne);
        tr.appendChild(th);
      }
      else {
        tr.appendChild(td);
      }
      /*add table to div */
    myTableDiv.appendChild(myTable);
    }
          /* ???create table headers??? */
      
        /*td.width = '75';*/
        /*td.appendChild(document.crexateTextNode("Cell " + i + "," + j));*/
  }

}
