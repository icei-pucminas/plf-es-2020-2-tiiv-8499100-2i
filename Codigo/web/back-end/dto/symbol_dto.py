class SymbolDTO:
	def __init__(self, id, title, body, img, subcategory):
		self.id = id
		self.title = title
		self.body = body
		self.img = img
		self.subcategory_id = subcategory

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

	def get_img(self):
		return self.img

	def set_img(self, img):
		self.img = img

	def get_subcategory(self):
		return self.subcategory

	def set_subcategory(self, subcategory):
		self.subcategory = subcategory