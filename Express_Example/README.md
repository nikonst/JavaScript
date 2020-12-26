# A Simple Express Application

A simple Express application that implements an API with GET, ADD and DELETE HTTP methods.

The test data regards 'Books' and are stored in a json file.

Using Embedded JavaScript templating, for the UI.

## API

**Show Books**

----
Returns data about the title of the home page and the list of book in json format.

* **URL**

  /

* **Method:**

  `GET`
  
* **URL Params**

    None

**Add a Book**

----

Add book data.

* **URL**

    /books/add/{object}

* **Method:**

  `POST`

* **URL Params**

    [Object]

**Delete a Book**

----

Delete a book by author name.

* **URL**

    /books/del/{author}

* **Method:**

  `DELETE`

* **URL Params**

    `author:[string]`
