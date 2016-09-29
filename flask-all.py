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
为了给 URL 增加变量的部分，你需要把一些特定的字段标记成 <variable_name>。这些特定的字段将作为参数传入到你的函数中。
当然也可以指定一个可选的转换器通过规则 <converter:variable_name>。 这里有一些不错的例子:

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User %s' % username

@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return 'Post %d' % post_id



a number of keyword arguments, each corresponding to the variable part of the URL rule. 
Unknown variable parts are appended to the URL as query parameters. Here are some examples:
//url study

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


PUT
类似 POST 但是服务器可能触发了存储过程多次，多次覆盖掉旧值。你可 能会问这有什么用，
当然这是有原因的。考虑到传输中连接可能会丢失，在 这种 情况下浏览器和服务器之间的系
统可能安全地第二次接收请求，而 不破坏其它东西。因为 POST 它只触发一次，所以用 POST
是不可能的。



Case 1: a module:

/application.py
/templates
    /hello.html
Case 2: a package:

/application
    /__init__.py
    /templates
        /hello.html




//request
from flask import request
The current request method is available by using the method attribute. 
To access form data (data transmitted in a POST or PUT request) you can use the form attribute. 
Here is a full example of the two attributes mentioned above:

@app.route('/login', methods=['POST', 'GET'])
def login():
    error = None
    if request.method == 'POST':
        if valid_login(request.form['username'],
                       request.form['password']):
            return log_the_user_in(request.form['username'])
        else:
            error = 'Invalid username/password'
    # the code below is executed if the request method
    # was GET or the credentials were invalid
    return render_template('login.html', error=error)
What happens if the key does not exist in the form attribute? In that case a special KeyError is raised. 
You can catch it like a standard KeyError but if you don’t do that, a HTTP 400 Bad Request error page is shown instead.
 So for many situations you don’t have to deal with that problem.

To access parameters submitted in the URL (?key=value) you can use the args attribute:

searchword = request.args.get('key', '')



*//redirect abort//单层资源，拦截url*

from flask import abort, redirect, url_for

@app.route('/')
def index():
    return redirect(url_for('login'))

@app.route('/login')
def login():
    abort(401)
    this_is_never_executed()


-------------------------------------------------------------------------start-------------------------------------------------------------------
固定形式
----------run.py里写app.run
if __name__ == '__main__':
    app.run(debug=True)
----------app.py里写ａｐｐ，结尾导入ｖｉｅｗｓ
from flask import Flask
from flask import request
app = Flask(__name__)
import views
----------views.py里写app.route('/')
from app import app
@app.route('/', methods=['GET', 'POST'])
def home():
    return '<h1>Home</h1>'
所有视图函数（在顶端有 route() 的）必须在 __init__.py 文件中被导入。不是导入对象本身，而是导入视图模块。
请 在应用对象创建之后 导入视图对象。




render_template("index.html")会在templates里找文件



template 里的for语句可以动态加载表项



input 的value size 等属性在模板.html里指定
#forms.py
name = StringField('Name123', validators=[DataRequired])
#login.html
<p>
    Please enter your Name:<br>
    {{form.name(size=80,value="123")}}<br>#字段参数
</p>




问题validator(form, self) __init__() takes at most 2 arguments (3 given)
解决办法
class LoginForm(Form):
    name = StringField('Name123', validators=[DataRequired])
改为
class LoginForm(Form):
    name = StringField('Name123', [validators.DataRequired()])
或
class LoginForm(Form):
    name = StringField('Name123', validators=[DataRequired()])




validate_on_submit 在表单提交请求中被调用，它将会收集所有的数据，对字段进行验证，如果所有的事情都通过的话，它将会返回 True，表示数据都是合法的。



#form.validate_on_submit验证走了一遍服务器，错误信息也是由服务器生成
#模板。。在for语句块里写的html在不执行for的时候，不会被写在网页里
#模板里的<form>与内容里的form.name相互配合
#<form action="" method="post" name="login">的action=""在fiddler里监控到 POST /login HTTP/1.1
#<form action="/duang" method="post" name="login">                       POST /duang HTTP/1.1
#<form action="duang" method="post" name="login">                        POST /duang HTTP/1.1
<!-- extend from base layout -->
    {% extends "base.html" %}

    {% block content %}
    <h1>Sign In</h1>
    <form action="" method="post" name="login">
        {{form.hidden_tag()}}
        <p>
            Please enter your Name:<br>
            {{form.name(size=80,value="123")}}<br>
            <!--验证过程出错信息-->
            {% for error in form.errors.name %}
            <span style="color: red;">[{{ error }}]</span>
            {% endfor %}<br>
        </p>
        <p>
            Password:<br>
            {{ form.password }}<br>
            <!--验证过程出错信息-->
            {% for error in form.errors.password %}
            <span style="color: red;">[{{ error }}]</span>
            <p>in_for</p>
            {% endfor %}<br><p>out_of_for</p>
        </p>
        <p>{{form.remember_me}} Remember Me?</p>
        <p><input type="submit" value="Sign In"></p>
    </form>
    {% endblock %}






flask_login
问题：
if current_user.is_authenticated(): TypeError: 'bool' object is not callable
    is_active, is_anonymous, and is_authenticated are all properties as of Flask-Login 0.3. If you want to use them, treat them as attributes, 
    do not call them. If you want to override them, remember to decorate them with @property.

# change from
current_user.is_authenticated()
# to
current_user.is_authenticated


问题：
database error   ---session.add(user)
InvalidRequestError: Object '<User at 0x372a650>' is already attached to session '2' (this is '3')



-------------------------------
重定向带参数+接收
return redirect(url_for("index", user_id=current_user.id))
#http://127.0.0.1:5000/index?user_id=3
#index必须是index，不能写成index123，，可能是记住了app.route('/index')
@app.route('/user/<int:user_id>', methods=["POST", "GET"])
def users(user_id):
-------------------------------



so far 两种方法获取前端数据
1  from flask import request
    request.form.get('user_name')
2  form = LoginForm()
   if form.validate_on_submit():
   	flash('Login requested for Name: ' + form.name.data)


问题can not assign to function call
user = session.query(User).filter(User.id = user_id)
解决办法
user = session.query(User).filter(User.id == user_id)



