blog-python-app-liaoxuefeng
in www folder web.py
def view(path):
    """
    被装饰的函数 需要返回一个字典对象，用于渲染
    装饰器通过Template类将 path 和 dict 关联在一个 Template对象上"""

def get(path):
    """
    A @get decorator.
    @get('/:id')
    def index(id):
        pass
    >>> @get('/test/:id')
    ... def test():
    ...     return 'ok'
    ...
    >>> test.__web_route__
    '/test/:id'
    >>> test.__web_method__
    'GET'
    >>> test()
    'ok'
    """
    def _decorator(func):
        func.__web_route__ = path
        func.__web_method__ = 'GET'
        return func
    return _decorator



flask e note
 You can make certain parts of the URL dynamic and attach multiple rules to a function.
变量规则
为了给 URL 增加变量的部分，你需要把一些特定的字段标记成 <variable_name>。这些特定的字段将作为参数传入到你的函数中。当然也可以指定一个可选的转换器通过规则 <converter:variable_name>。 这里有一些不错的例子:

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % username

@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return 'Post %d' % post_id


//动态构建url
>>> from flask import Flask, url_for
>>> app = Flask(__name__)
>>> @app.route('/')
... def index(): pass
...
>>> @app.route('/login')
... def login(): pass
...
>>> @app.route('/user/<username>')
... def profile(username): pass
...
>>> with app.test_request_context():
...  print url_for('index')
...  print url_for('login')
...  print url_for('login', next='/')
...  print url_for('profile', username='John Doe')
...
/
/login
/login?next=/
/user/John%20Doe


路由中的函数被称为视图函数，其返回值将作为HTTP响应的正文内容。

@app.route('/test')
def test():
    return 'this is response'

    ||
    ||

def test():
    return 'this is response'
app.add_url_route('/test',view_func=test)


