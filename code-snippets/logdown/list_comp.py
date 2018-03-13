from __future__ import print_function # https://docs.python.org/2/library/__future__.html


def main():
    # Pet's name, its type, weight and age
    matrix = [
        ["Foo", "cat", 20, 8],
        ["Bar", "cat", 16, 8],
        ["Boley", "cat", 12,10 ],
        ["Watson", "dog", 70,7 ],
        ["Micha", "dog", 6,3 ],
        ["Tobie", "dog", 2, .5],

    ]

    # extract a column

    # We make a list of all the items of the column [0]
    names = [ row[0] for row in matrix]
    print (names)

    # extract names and the weights in a tuple
    details = [(row[0], row[2]) for row in matrix]
    print (details)


    # get the heaviest animals data
    # we get a column of row 2
    # we apply max to it.
    # we locate the max using index
    # we use it to access data
    heavy = matrix[[row[2] for row in matrix].index(max([ row[2] for row in matrix]))]
    print (heavy)



if __name__ == '__main__':
    main()
