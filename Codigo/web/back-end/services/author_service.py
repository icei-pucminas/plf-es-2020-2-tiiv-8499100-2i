from dto.author_dto import AuthorDTO
from model.author import Author
from dao.dao_mysql import insert, get_all, get, start_session, close_session, delete
from utils.validate_params import validate_text_param


def add_author(name, biography):
    validate_params(name, biography)
    author = Author(name, biography)
    insert(author)


def get_all_authors():
    authors = get_all(Author)
    return format_json(authors)


def get_author(id):
    author = get(Author, id)
    author = author.__dict__
    return AuthorDTO(author['id'], author['name'], author['biography']).__dict__


def update_author(id, name, biography):
    s = start_session()

    s.query(Author).filter(Author.id == id).update({
        'name': name,
        'biography': biography
    })

    close_session(s)


def delete_author(id):
    delete(Author, id)


def format_json(authors):
    authors_json = []

    for author in authors:
        author = author.__dict__
        authors_json.append(AuthorDTO(author['id'], author['name'], author['biography']).__dict__)
    return authors_json


def validate_params(name, biography):
    validate_text_param(name)
    validate_text_param(biography)
