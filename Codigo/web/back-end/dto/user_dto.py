class UserDTO:
	def __init__(self, uid, name, document, phone, businessName, isAdmin, email):
		self.uid = uid
		self.name = name
		self.document = document
		self.phone = phone
		self.businessName = businessName
		self.business_name = businessName
		self.isAdmin = isAdmin
		self.is_admin = isAdmin
		self.email = email

	def get_uid(self):
		return self.uid

	def set_uid(self, uid):
		self.uid = uid

	def get_name(self):
		return self.name

	def set_name(self, name):
		self.name = name

	def get_document(self):
		return self.document

	def set_document(self, document):
		self.document = document

	def get_phone(self):
		return self.phone

	def set_phone(self, phone):
		self.phone = phone

	def get_businessName(self):
		return self.businessName

	def set_businessName(self, businessName):
		self.businessName = businessName

	def get_isAdmin(self):
		return self.isAdmin

	def set_isAdmin(self, isAdmin):
		self.isAdmin = isAdmin

