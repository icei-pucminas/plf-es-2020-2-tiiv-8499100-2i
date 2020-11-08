class SymbolSubcategoryDTO:
	def __init__(self, id, name, category):
		self.id = id
		self.name = name
		self.category_id = category

	def get_id(self):
		return self.id

	def set_id(self, id):
		self.id = id

	def get_name(self):
		return self.name

	def set_name(self, name):
		self.name = name

	def get_category(self):
		return self.category

	def set_category(self, category):
		self.category = category