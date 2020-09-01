from werkzeug.wrappers import Request, Response


class Security:
    def __init__(self, app):
        self.app = app
        self.username = 'NjdjcjY0aHJjN2g4Mm5kMjNqa3M0N2N1a2'
        self.password = 'pmZXJuN3doNGNyNDN4ZWt3bmNocmVy'

    def __call__(self, environ, start_response):
        request = Request(environ)
        auth = request.authorization

        if request.method == "OPTIONS":
            return self.app(environ, start_response)

        username = auth.get("username")
        password = auth.get("password")

        if username == self.username and password == self.password:
            return self.app(environ, start_response)

        res = Response('Authorization failed', mimetype='text/plain', status=401)
        return res(environ, start_response)
