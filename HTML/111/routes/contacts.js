var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
  global.connection.query(
    'SELECT * FROM contacts',
    (err, results, fields) => {
      if (err) {
        return next(err);
      }

      //console.log(results);

      res.render('layout', {
        title: 'Contacts',
        contacts: results,
        noContacts: results.length === 0,
        partials: { content: 'contacts' }
      });
    }
  );

  /*try {
    const [results] = await global.connection.execute('SELECT * FROM contacts');
    res.render('layout', {
      title: 'Contacts',
      contacts: results,
      noContacts: results.length === 0,
      partials: { content: 'contacts' }
    });
  } catch (e) {
    console.error(e);
  }*/
});

router.get('/addContact', function (req, res, next) {
  res.render('layout', {
    title: 'Add Contact',
    css: ['contact.css'],
    partials: { content: 'contact' }
  });
});

router.post('/addContact', function (req, res, next) {
  global.connection.query(
    'INSERT INTO contacts(first, last, email, phone) VALUES (?,?,?,?)', [req.body.first, req.body.last, req.body.email, req.body.phone],
    (err, results, fields) => {
      console.log(results);

      if (err) {
        return next(err);
      }

      res.writeHead(301, { location: '/contacts' });
      res.end();
    });
});

router.get('/editContact/:id', function (req, res, next) {
  global.connection.query(
    'SELECT * FROM contacts WHERE id = ?', [req.params.id],
    (err, results, fields) => {
      if (err) {
        return next(err);
      }

      console.log(results);

      if (!results.length) {
        return next(new Error(`Unable to edit contact ${req.params.id}`));
      }

      res.render('layout', {
        title: 'Edit Contact',
        css: ['contact.css'],
        contact: results[0],
        partials: { content: 'contact' }
      });
    });
});


router.post('/editContact/:id', function (req, res, next) {
  global.connection.query(
    'UPDATE contacts SET first = ?, last = ?, email = ?, phone = ? WHERE id = ?', [req.body.first, req.body.last, req.body.email, req.body.phone, req.params.id],
    (err, results, fields) => {
      if (err) {
        return next(err);
      }

      console.log(results);
      if (!results.changedRows) {
        return next(new Error(`Unable to edit contact ${req.params.id}`));
      }

      res.writeHead(301, { location: '/contacts' });
      res.end();
    });
});

router.get('/deleteContact/:id', function (req, res, next) {
  global.connection.query(
    'DELETE FROM contacts WHERE id = ?', [req.params.id],
    (err, results, fields) => {
      if (err) {
        return next(err);
      }

      console.log(results);
      if (!results.affectedRows) {
        return next(new Error(`Unable to delete contact ${req.params.id}`));
      }

      res.writeHead(301, { location: '/contacts' });
      res.end();
    });
});

module.exports = router;

router.post('/editContact/:id', function (req, res, next) {
  global.connection.query(
    'UPDATE contacts SET first = ?, last = ?, email = ?, phone = ? WHERE id = ?', [req.body.first, req.body.last, req.body.email, req.body.phone, req.params.id],
    (err, results, fields) => {
      if (err) {
        return next(err);
      }

      console.log(results);
      if (! results.changedRows) {
        return next(new Error(`Unable to edit contact ${req.params.id}`));
      }

      res.writeHead(301, { location: '/contacts' });
      res.end();
    });
});

router.get('/deleteContact/:id', function (req, res, next) {
  global.connection.query(
    'DELETE FROM contacts WHERE id = ?', [req.params.id],
    (err, results, fields) => {
      if (err) {
        return next(err);
      }

      console.log(results);
      if (!results.affectedRows) {
        return next(new Error(`Unable to delete contact ${req.params.id}`));
      }

      res.writeHead(301, { location: '/contacts' });
      res.end();
    });
});

module.exports = router;
