from services.base import Base
from sqlalchemy import Column, DateTime, Integer, ForeignKey
from sqlalchemy.orm import relationship

class VideoView(Base):
    __tablename__ = 'video_view'

    id = Column(Integer, primary_key=True, unique=True, autoincrement=True)
    date = Column(DateTime, nullable=False)
    uid = Column(Integer, ForeignKey('user.uid'))
    video_id = Column(Integer, ForeignKey('video.id'))

    user = relationship('User')
    video = relationship('Video')

    def __init__(self, date, uid, video_id):
        self.date = date
        self.uid = uid
        self.video_id = video_id

