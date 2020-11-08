class PostDTO:
	def __init__(self, id, title, body, date, img, requiresLogin, author):
		self.id = id
		self.title = title
		self.body = body
		self.date = date
		self.img = img
		self.requiresLogin = requiresLogin
		self.requires_login = requiresLogin
		self.author = author
		self.isAd = False

	def get_id(self):
		return self.id

	def set_id(self, id):
		self.id = id

	def get_title(self):
		return self.title

	def set_title(self, title):
		self.title = title

	def get_body(self):
		return self.body

	def set_body(self, body):
		self.body = body

	def get_date(self):
		return self.date

	def set_date(self, date):
		self.date = date

	def get_img(self):
		return self.img

	def set_img(self, img):
		self.img = img

	def get_requiresLogin(self):
		return self.requiresLogin

	def set_requiresLogin(self, requiresLogin):
		self.requiresLogin = requiresLogin

	def get_author(self):
		return self.author

	def set_author(self, author):
		self.author = author
