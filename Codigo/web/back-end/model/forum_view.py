from services.base import Base
from sqlalchemy import Column, DateTime, Integer, ForeignKey
from sqlalchemy.orm import relationship

class ForumView(Base):
    __tablename__ = 'forum_view'

    id = Column(Integer, primary_key=True, unique=True, autoincrement=True)
    date = Column(DateTime, nullable=False)
    uid = Column(Integer, ForeignKey('user.uid'))
    forum_id = Column(Integer, ForeignKey('forum.id'))

    user = relationship('User')
    forum = relationship('Forum')

    def __init__(self, date, uid, forum_id):
        self.date = date
        self.uid = uid
        self.forum_id = forum_id

