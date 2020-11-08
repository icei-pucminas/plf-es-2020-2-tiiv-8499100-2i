class VideoDTO:
	def __init__(self, id, title, date, youtubeUrl, subcategory):
		self.id = id
		self.youtubeUrl = youtubeUrl
		self.youtube_url = youtubeUrl
		self.title = title
		self.date = date
		self.subcategory_id = subcategory
		self.isAd = False

	def get_id(self):
		return self.id

	def set_id(self, id):
		self.id = id

	def get_youtubeUrl(self):
		return self.youtubeUrl

	def set_youtubeUrl(self, youtubeUrl):
		self.youtubeUrl = youtubeUrl

	def get_title(self):
		return self.title

	def set_title(self, title):
		self.title = title

	def get_date(self):
		return self.date

	def set_date(self, date):
		self.date = date

	def get_subcategory(self):
		return self.subcategory

	def set_subcategory(self, subcategory):
		self.subcategory = subcategory