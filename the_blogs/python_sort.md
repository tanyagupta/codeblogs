# Sentiment_RNN_Exercise from Udacity: Encoding words

This code extract below from a Udacity course and from Python Machine Learning by Sebastian Raschka

```Counter``` objects create frequency distributions
## Counter
```
>> words = ['red', 'blue', 'red', 'green', 'blue', 'blue']
>>> count = Counter(words)
Counter({'blue': 3, 'red': 2, 'green': 1})
```



## sorted
Return a new sorted list from the items in iterable. It has two optional arguments:
1.  ```key``` specifies a function of one argument that is used to extract a comparison key from each element in iterable (for example, ```key=str.lower```). The default value is ```None``` (compare the elements directly).
2. ```reverse``` is a boolean value. If set to ```True```, then the list elements are sorted as if each comparison were reversed.

```sorted()``` has a ```key`` parameter to specify a function to be called on each list element prior to making comparisons. In the code below, the frequencies of the words are being used to sort from low frequency to high frequency. Then the ```reverse=True``` parameter changes the sort from high frequency to low frequency.
```
>>from collections import Counter
>>counts = Counter(words)
>>vocab = sorted(counts, key=counts.get, reverse=True)
['blue', 'red', 'green']

```
## enumerate

```enumerate``` takes as a parameter some object that can be iterated over and returns a tuple containing a count (from *start* that defaults to 0) and the values obtained by iterating over the iterable.

```
>>> list(enumerate(vocab,1))
[(1, 'blue'), (2, 'red'), (3, 'green')]
>>>
```
## Putting it together
```enumerate``` results in the tuple we see above. ```vocab_to_int``` results in a dictionary where the key is the word and the value is the count
```
vocab_to_int = {word: ii for ii, word in enumerate(vocab, 1)}
>>> vocab_to_int
{'blue': 1, 'red': 2, 'green': 3}
```
review_split looks like ```['bromwell high is a cartoon comedy  it ran at the same time as some other programs about school life  such as  teachers   ....', 'story of a man who has unnatural feelings for a ...', 'homelessness  or houselessness as george carlin stated  h....]``` where each review is an element of the list.
The code below splits each ```review``` and looks up the integer that represents the word. This creates a list of integers that represents the reviews.
```
>>> reviews_ints = []
for review in reviews_split:
    reviews_ints.append([vocab_to_int[word] for word in review.split()])
```
```reviews_int``` looks like: ```[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],[17, 18, 19, 20, 13, 21, 22, 23, 24, 10, 25, 26, 27, 28, 29, 30, 31]]```

## The complete code
```
from collections import Counter
print(len(words))
## Build a dictionary that maps words to integers
vocab_to_int = {}
#words = words[:30]
count = 1
#print(len(words))
for word in words:
    if word not in vocab_to_int:
        vocab_to_int[word]=count
        count = count +1

#reviews_split = reviews_split[:30]
#print(reviews_split[:30])

#print(vocab_to_int)
## use the dict to tokenize each review in reviews_split
## store the tokenized reviews in reviews_ints

reviews_ints = []
for review in reviews_split:
    reviews_ints.append([vocab_to_int[word] for word in review.split()])
#print(len(reviews_ints))
print(reviews_ints[:30])
```

## More on sort
1. Python lists have a built-in ```list.sort()``` method that modifies the list in-place.
1. There is also a ```sorted()``` built-in function that builds a new sorted list from an iterable.
1. ```list.sort()``` method is only defined for lists. In contrast, the sorted() function accepts any iterable.
