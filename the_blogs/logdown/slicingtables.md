#Manipulating Tabular Data using Python's List Comprehension


Python is good with lists. As spreadsheet and relational databases are the two primary workhorses of many information systems, we have an abundance of data in tabular format. Since tables are just collection of lists, python works quite well with tabular data. 


Here's some tabular data about cats and dogs. 

| Name        | Type           | Weight  |   Age 
| -------------|-------------|:------:|:-------:
| Foo      | cat| 20| 8
| Bar      | cat      |   16 |8
| Boley | cat      |   12 | 10
| Watson | dog      |   70 | 7
| Micha | dog      |   6 | 3
| Tobey | dog      |   2 | .5

We can store the data in a two dimensional array. _I am skipping the header for this example._ 

```python
table = [
        ["Foo", "cat", 20, 8],
        ["Bar", "cat", 16, 8],
        ["Boley", "cat", 12,10 ],
        ["Watson", "dog", 70,7 ],
        ["Micha", "dog", 6,3 ],
        ["Tobie", "dog", 2, .5],
    ]
```


>####To extract the names (the first entry of every row) and store them in an array we can use python's list comprehension as follows:

```python
# build me a list of row [0] of every row in a table
names = [row[0] for row in table]
```

>####We can get fancy and choose _some_ columns and make a list of tuples.

```python 
# build me a list of name, age pair from the table
details = [(row[0], row[3]) for row in table]
``` 

>#### How about getting all the data of the heaviest animal?

```python
  # isolate the weight data. Its the third column 
  weights=  [row[2] for row in table]
  #find the max (we are assuming there is one singular max)
  max_weight = max (weights) # this is the value not the position
  # Find the row that contains max_weight
  row_num = [row[2] for row in table].index (max_weight)
  # finally get the data
  heavy = table [row_num]
  
  # you can of course write the code in a more "functional" way
  heavy = table[[row[2] for row in table].index(max([ row[2] for row in table]))]
```
    