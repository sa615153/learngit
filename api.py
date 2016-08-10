Quick Start Full Example
Save this example in api.py

from flask import Flask
from flask_restful import reqparse, abort, Api, Resource

app = Flask(__name__)
api = Api(app)

TODOS = {
    'todo1': {'task': 'build an API'},
    'todo2': {'task': '?????'},
    'todo3': {'task': 'profit!'},
}


def abort_if_todo_doesnt_exist(todo_id):
    if todo_id not in TODOS:
        abort(404, message="Todo {} doesn't exist".format(todo_id))

parser = reqparse.RequestParser()
parser.add_argument('task')


# Todo
# shows a single todo item and lets you delete a todo item
class Todo(Resource):
    def get(self, todo_id):
        abort_if_todo_doesnt_exist(todo_id)
        return TODOS[todo_id]

    def delete(self, todo_id):
        abort_if_todo_doesnt_exist(todo_id)
        del TODOS[todo_id]
        return '', 204

    def put(self, todo_id):
        args = parser.parse_args()
        task = {'task': args['task']}
        TODOS[todo_id] = task
        return task, 201


# TodoList
# shows a list of all todos, and lets you POST to add new tasks
class TodoList(Resource):
    def get(self):
        return TODOS

    def post(self):
        args = parser.parse_args()
        todo_id = int(max(TODOS.keys()).lstrip('todo')) + 1
        todo_id = 'todo%i' % todo_id
        TODOS[todo_id] = {'task': args['task']}
        return TODOS[todo_id], 201

##
## Actually setup the Api resource routing here
##
api.add_resource(TodoList, '/todos')
api.add_resource(Todo, '/todos/<todo_id>')


if __name__ == '__main__':
    app.run(debug=True)
Example usage

$ python api.py
 * Running on http://127.0.0.1:5000/
 * Restarting with reloader
GET the list

$ curl http://localhost:5000/todos
{"todo1": {"task": "build an API"}, "todo3": {"task": "profit!"}, "todo2": {"task": "?????"}}
GET a single task

$ curl http://localhost:5000/todos/todo3
{"task": "profit!"}
DELETE a task

$ curl http://localhost:5000/todos/todo2 -X DELETE -v

> DELETE /todos/todo2 HTTP/1.1
> User-Agent: curl/7.19.7 (universal-apple-darwin10.0) libcurl/7.19.7 OpenSSL/0.9.8l zlib/1.2.3
> Host: localhost:5000
> Accept: */*
>
* HTTP 1.0, assume close after body
< HTTP/1.0 204 NO CONTENT
< Content-Type: application/json
< Content-Length: 0
< Server: Werkzeug/0.8.3 Python/2.7.2
< Date: Mon, 01 Oct 2012 22:10:32 GMT
Add a new task

$ curl http://localhost:5000/todos -d "task=something new" -X POST -v

> POST /todos HTTP/1.1
> User-Agent: curl/7.19.7 (universal-apple-darwin10.0) libcurl/7.19.7 OpenSSL/0.9.8l zlib/1.2.3
> Host: localhost:5000
> Accept: */*
> Content-Length: 18
> Content-Type: application/x-www-form-urlencoded
>
* HTTP 1.0, assume close after body
< HTTP/1.0 201 CREATED
< Content-Type: application/json
< Content-Length: 25
< Server: Werkzeug/0.8.3 Python/2.7.2
< Date: Mon, 01 Oct 2012 22:12:58 GMT
<
* Closing connection #0
{"task": "something new"}
Update a task

$ curl http://localhost:5000/todos/todo3 -d "task=something different" -X PUT -v

> PUT /todos/todo3 HTTP/1.1
> Host: localhost:5000
> Accept: */*
> Content-Length: 20
> Content-Type: application/x-www-form-urlencoded
>
* HTTP 1.0, assume close after body
< HTTP/1.0 201 CREATED
< Content-Type: application/json
< Content-Length: 27
< Server: Werkzeug/0.8.3 Python/2.7.3
< Date: Mon, 01 Oct 2012 22:13:00 GMT
<
* Closing connection #0
{"task": "something different"}



update	 $ curl http://localhost:5000/todos/todo3 -d "task=something different" -X PUT -v
add 	 $ curl http://localhost:5000/todos -d "task=something new" -X POST -v
delete	 $ curl http://localhost:5000/todos/todo2 -X DELETE -v
get 	 $ curl http://localhost:5000/todos






//return object
Data Formatting
By default, all fields in your return iterable will be rendered as-is. While this works great
 when you’re just dealing with Python data structures, it can become very frustrating when working
 with objects. To solve this problem, Flask-RESTful provides the fields module and 
 the marshal_with() decorator. Similar to the Django ORM and WTForm, you use the fields module
 to describe the structure of your response.

from collections import OrderedDict
from flask_restful import fields, marshal_with

resource_fields = {
    'task':   fields.String,
    'uri':    fields.Url('todo_ep')
}

class TodoDao(object):
    def __init__(self, todo_id, task):
        self.todo_id = todo_id
        self.task = task

        # This field will not be sent in the response
        self.status = 'active'

class Todo(Resource):
    @marshal_with(resource_fields)
    def get(self, **kwargs):
        return TodoDao(todo_id='my_todo', task='Remember the milk')
The above example takes a python object and prepares it to be serialized. The marshal_with() decorator will apply the transformation described by resource_fields. The only field extracted from the object is task. The fields.Url field is a special field that takes an endpoint name and generates a URL for that endpoint in the response. Many of the field types you need are already included. See the fields guide for a complete list.







//输出字段
Flask-RESTful 提供了一个简单的方式来控制在你的响应中实际呈现什么数据。使用 fields 模块，
你可以使用在你的资源里的任意对象（ORM 模型、定制的类等等）并且 fields 让你格式化和过滤响应，
因此您不必担心暴露内部数据结构。
>>>for extend









//field
from flask_restful import Resource, fields, marshal_with

resource_fields = {
    'name': fields.String,
    'address': fields.String,
    'date_updated': fields.DateTime(dt_format='rfc822'),
}

class Todo(Resource):
    @marshal_with(resource_fields, envelope='resource')
    def get(self, **kwargs):
        return db_get_todo()  # Some function that queries the db
The decorator marshal_with is what actually takes your data object and applies the field filtering.
 The marshalling can work on single objects, dicts, or lists of objects.

Note
marshal_with is a convenience decorator, that is functionally equivalent to

class Todo(Resource):
    def get(self, **kwargs):
        return marshal(db_get_todo(), resource_fields), 200
		
		
----------------------------------------------------------------		
class UrgentItem(fields.Raw):
    def format(self, value):
        return "Urgent" if value & 0x01 else "Normal"

class UnreadItem(fields.Raw):
    def format(self, value):
        return "Unread" if value & 0x02 else "Read"

fields = {
    'name': fields.String,
    'priority': UrgentItem(attribute='flags'),
    'status': UnreadItem(attribute='flags'),
}
-----------------------------------------------------------------