'use strict'

'use strict';

page('/',
  dataController.loadAll,
  dataController.index);

page('/about', aboutController.index);
page('/admin', adminController.index);

page('/data/:id',
  dataController.loadById,
  dataController.index);

// Redirect home if the default filter option is selected:
page('/category', '/');
page('/author', '/');

page('/author/:authorName',
  dataController.loadByAuthor,
  dataController.index);

page('/category/:categoryName',
  dataController.loadByCategory,
  dataController.index);

page('*', function(){
  $('body').text('Not found!');
});

page();