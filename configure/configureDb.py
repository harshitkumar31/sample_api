import MySQLdb as mysql
import sys

create = {'db': 'CREATE DATABASE `mrnd_library`',
          'Categories': 'CREATE TABLE Categories (title VARCHAR(30) PRIMARY KEY)',
          'Books': 'CREATE TABLE Books  (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, '
                                        'title VARCHAR(60),'
                                        'category VARCHAR(30),'
                                        'author VARCHAR(90),'
                                        'year INT(4),'
                                        'edition INT(2),'
                                        'color VARCHAR(10),'
                                        'num_pages INT(4),'
                                        'img_link VARCHAR(200),'
                                        'constraint FOREIGN KEY (category) REFERENCES Categories(title))'}

use_db = 'USE mrnd_library'

delete = {'db': 'DROP DATABASE mrnd_library',
          'Categories': 'DROP TABLE Categories',
          'Books': 'DROP TABLE Books'}

def run_sql(conn, sql):
    cursor = conn.cursor()
    cursor.execute(sql)


def create_db(conn):
    run_sql(conn, create['db'])


def create_categories(conn):
    run_sql(conn, use_db)
    run_sql(conn, create['Categories'])


def create_books(conn):
    run_sql(conn, use_db)
    run_sql(conn, create['Books'])


def delete_db(conn):
    run_sql(conn, delete['db'])


def delete_categories(conn):
    run_sql(conn, use_db)
    run_sql(conn, delete['Categories'])


def delete_books(conn):
    run_sql(conn, use_db)
    run_sql(conn, delete['Books'])

def create_all(conn):
    create_db(conn)
    create_categories(conn)
    create_books(conn)

def delete_all(conn):
    delete_db(conn)

def show_help():
    print 'Usage: python books.py -c/-d all/db/cats/books'
    print '-c : create'
    print '-d : delete'

def main():
    # change your config here
    host, user, passwd = 'localhost', 'root', 'admin'
    conn = mysql.connect(host=host, user=user, passwd=passwd)

    if len(sys.argv) != 3:
        show_help()
        return

    option, what = sys.argv[1:]

    if option == '-c':
        {'all': create_all,
         'cats': create_categories,
         'books': create_books,
         'db': create_db}[what](conn)

    if option == '-d':
        {'all': delete_all,
         'cats': delete_categories,
         'books': delete_books,
         'db': delete_db}[what](conn)


if __name__ == "__main__":
    main()