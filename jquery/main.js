/**@create the list (step 1)*/

$(function () {
  $('#list').dxList({
    // Configuration goes here
    /**bind the list to data (step 2)*/
    dataSource: new DevExpress.data.DataSource({
      store: products,
      /**create a group(step 4-a)*/
      group: 'Category',
    }),
    displayExpr: 'Name',
    /**select items (step 3)*/
    selectionMode: 'single',
    /**group items (step 4-b)*/
    grouped: true,
    /**search items (step 5)*/
    searchEnabled: true,
    searchMode: 'contains',
    searchExpr: ['Name'],
    /**reorder items (step 6)*/
    itemDragging: {
      //allowReordering: true, //unnecessary
      allowReordering: true,
      // group: 'products', //add this to display drag&drop buttons, creates a group within which drag and drop can happen
    },
    /**delete items (step 7)*/
    allowItemDeleting: true,
  });
});
