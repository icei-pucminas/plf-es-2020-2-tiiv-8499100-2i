class ForumPostDTO:

    def __init__(self, id, body, date, isOriginalPost, user, approved):
        self.id = id
        self.body = body
        self.date = date
        self.isOriginalPost = isOriginalPost
        self.user = user
        self.approved = approved

    def get_id(self):
        return self.id

    def set_id(self, id):
        self.id = id

    def get_body(self):
        return self.body

    def set_body(self, body):
        self.body = body

    def get_date(self):
        return self.date

    def set_date(self, date):
        self.date = date

    def get_isOriginalPost(self):
        return self.isOriginalPost

    def set_isOriginalPost(self, isOriginalPost):
        self.isOriginalPost = isOriginalPost
