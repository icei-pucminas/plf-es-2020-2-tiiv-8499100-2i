from enum import Enum


class EnumClass(Enum):
    AUTHOR = "author"
    POST = "post"
    USER = "user"
    SYMBOL = "symbol"
    SYMBOL_CAT = "symbol_category"
    SYMBOL_SUB_CAT = "symbol_sub_category"
    VIDEO = "video"
    VIDEO_CAT = "video_category"
    VIDEO_SUB_CAT = "video_sub_category"
    AD = "ad"

    POST_VIEW = "post_view"
    SYMBOL_VIEW = "symbol_view"
    VIDEO_VIEW = "video_view"
    CALCULATOR_VIEW = "calculator_view"
    FORUM_VIEW = "forum_view"


    @staticmethod
    def values():
        return [classes.value for classes in EnumClass]

    @staticmethod
    def keys():
        return [classes.name for classes in EnumClass]


